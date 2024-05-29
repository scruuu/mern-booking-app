import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import * as apiClient from '../api-clients';
import { useAppContext } from '../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

export type RegisterFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    otp?: string;
};

const Register = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { showToast } = useAppContext();
    const { register, watch, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();
    const [otpSent, setOtpSent] = useState(false);
    const [generatedOtp, setGeneratedOtp] = useState('');

    const mutation = useMutation(apiClient.register, {
        onSuccess: async () => {
            showToast({ message: "Registration Success!", type: "SUCCESS" });
            await queryClient.invalidateQueries("validateToken");
            navigate("/");
        },
        onError: (error: Error) => {
            showToast({ message: error.message, type: "ERROR" });
        }
    });

    const sendOtpEmail = async (email: string, otp: string) => {
        const templateParams = {
            user_email: email,
            otp
        };

        await emailjs.send('service_1llm4en', 'template_be884f1', templateParams, 'Pv-BOIk_i2wGUntea')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
            })
            .catch((err) => {
                console.error('Failed to send email:', err);
            });
    };

    const handleRegister = handleSubmit(async (data) => {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        setGeneratedOtp(otp);
        await sendOtpEmail(data.email, otp);
        setOtpSent(true);
        showToast({ message: "OTP sent to your email!", type: "SUCCESS" });
    });

    const handleVerifyOtp = handleSubmit((data) => {
        if (data.otp === generatedOtp) {
            mutation.mutate({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
                confirmPassword: data.confirmPassword
            });
        } else {
            showToast({ message: "Invalid OTP", type: "ERROR" });
        }
    });

    return (
        <form className="flex flex-col gap-5" onSubmit={otpSent ? handleVerifyOtp : handleRegister}>
            <h2 className="text-3xl font-bold">Create an Account</h2>
            <div className="flex flex-col md:flex-row gap-5">
                <label className="text-gray-700 text-sm font-bold flex-1">First Name
                    <input className="border rounded w-full py-1 px-2 font-normal" {...register("firstName", { required: "This field is required" })} />
                    {errors.firstName && (
                        <span className="text-red-500">{errors.firstName.message}</span>
                    )}
                </label>

                <label className="text-gray-700 text-sm font-bold flex-1">Last Name
                    <input className="border rounded w-full py-1 px-2 font-normal" {...register("lastName", { required: "This field is required" })} />
                    {errors.lastName && (
                        <span className="text-red-500">{errors.lastName.message}</span>
                    )}
                </label>
            </div>
            <label className="text-gray-700 text-sm font-bold flex-1">Email
                <input type="email" className="border rounded w-full py-1 px-2 font-normal" {...register("email", { required: "This field is required" })} />
                {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                )}
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">Password
                <input type="password" className="border rounded w-full py-1 px-2 font-normal" {...register("password", {
                    required: "This field is required",
                    minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters"
                    }
                })} />
                {errors.password && (
                    <span className="text-red-500">{errors.password.message}</span>
                )}
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">Confirm Password
                <input type="password" className="border rounded w-full py-1 px-2 font-normal" {...register("confirmPassword", {
                    validate: (val) => {
                        if (!val) {
                            return "This field is required";
                        } else if (watch("password") !== val) {
                            return "Your passwords do not match";
                        }
                    }
                })} />
                {errors.confirmPassword && (
                    <span className="text-red-500">{errors.confirmPassword.message}</span>
                )}
            </label>
            {otpSent && (
                <label className="text-gray-700 text-sm font-bold flex-1">OTP
                    <input type="text" className="border rounded w-full py-1 px-2 font-normal" {...register("otp", { required: "This field is required" })} />
                    {errors.otp && (
                        <span className="text-red-500">{errors.otp.message}</span>
                    )}
                </label>
            )}
            <span>
                <button type="submit" className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl">
                    {otpSent ? "Verify OTP" : "Send OTP"}
                </button>
            </span>
        </form>
    );
};

export default Register;
