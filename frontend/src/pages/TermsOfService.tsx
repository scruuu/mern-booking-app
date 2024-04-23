const TermsOfService = () => {
    return(
        <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
            <header className="bg-blue-500 py-4 text-center">
                <div className="container mx-auto">
                    <h1 className="text-white text-3xl font-bold">Terms of Service</h1>
                </div>
            </header>

            <main className="container mx-auto my-8">
                <section className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-xl font-semibold mb-4">1. Use of Service</h2>
                    <p className="mb-4">1.1. You must be at least 18 years old to use our services.</p>
                    <p className="mb-4">1.2. You agree to provide accurate and complete information when using our services.</p>
                    <p>1.3. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or devices.</p>
                </section>

                <section className="bg-white rounded-lg shadow-md p-8 mt-8">
                    <h2 className="text-xl font-semibold mb-4">2. Privacy</h2>
                    <p className="mb-4">2.1. We respect your privacy. Please review our Privacy Policy to understand how we collect, use, and safeguard your personal information.</p>
                </section>

                {/* Add more sections for other parts of the Terms of Service */}

                <section className="bg-white rounded-lg shadow-md p-8 mt-8">
                    <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
                    <p>If you have any questions or concerns about these Terms of Service, please contact us at <a href="mailto:ujjawal.vats@gmail.com" className="text-blue-500">contact@example.com</a>.</p>
                </section>
            </main>

            <footer className="bg-blue-500 py-4">
                <div className="container mx-auto">
                    <p className="text-white text-center">&copy; 2024 TravelCareFree.com. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default TermsOfService;