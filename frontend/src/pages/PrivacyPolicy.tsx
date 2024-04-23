const PrivacyPolicy = () => {
    return(
        <div className=" min-h-screen flex flex-col justify-between">
            <header className="bg-blue-500 py-4 text-center">
                <div className="container mx-auto">
                    <h1 className="text-white text-3xl font-bold">Privacy Policy</h1>
                </div>
            </header>

            <main className="container mx-auto my-8">
                <section className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-xl font-semibold mb-4">1. Data Collection</h2>
                    <p className="mb-4">1.1. We collect personal information when you sign up for our services.</p>
                    <p className="mb-4">1.2. We may also collect usage data to improve our services.</p>
                </section>

                <section className="bg-white rounded-lg shadow-md p-8 mt-8">
                    <h2 className="text-xl font-semibold mb-4">2. Data Usage</h2>
                    <p className="mb-4">2.1. We use your personal information to provide and improve our services.</p>
                    <p className="mb-4">2.2. We do not sell or share your personal information with third parties.</p>
                </section>

                {/* Add more sections for other parts of the Privacy Policy */}

                <section className="bg-white rounded-lg shadow-md p-8 mt-8">
                    <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
                    <p>If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:contact@example.com" className="text-blue-500">contact@example.com</a>.</p>
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

export default PrivacyPolicy;
