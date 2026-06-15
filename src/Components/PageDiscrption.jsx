const PageDescription = ({ pageTitle, pageDetails }) => {
    return (
        <>
            <section className="ContactPage py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Page Heading */}
                    <header className="mb-6 text-center">
                        <h1 className="text-3xl font-bold">{pageTitle || "Contact Us"}</h1>
                        <p className="text-gray-600 mt-2">
                            {pageDetails || "We would love to hear from you. Get in touch with us for any queries, support, or product information."}
                        </p>
                    </header>

                    {/* Contact Info Section */}
                    <section className="grid md:grid-cols-2 gap-8">

                        {/* Left - Contact Details */}
                        <article>
                            <h2 className="text-xl font-semibold mb-3">Get in Touch</h2>
                            <p className="text-gray-600 mb-4">
                                Have questions about our products or need assistance? Feel free to reach out via phone, email, or visit our store.
                            </p>

                            <ul className="space-y-2 text-gray-700">
                                <li><strong>Phone:</strong> +91 98765 43210</li>
                                <li><strong>Email:</strong> support@yourstore.com</li>
                                <li><strong>Address:</strong> Your City, India</li>
                            </ul>
                        </article>

                        {/* Right - Contact Form */}
                        <article>
                            <h2 className="text-xl font-semibold mb-3">Send Message</h2>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium">Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter your name"
                                        className="w-full border px-3 py-2 rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium">Email</label>
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email"
                                        className="w-full border px-3 py-2 rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium">Message</label>
                                    <textarea 
                                        rows="4"
                                        placeholder="Write your message"
                                        className="w-full border px-3 py-2 rounded"
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit"
                                    className="bg-black text-white px-5 py-2 rounded"
                                >
                                    Send Message
                                </button>
                            </form>
                        </article>

                    </section>
                </div>
            </section>
        </>
    )
}

export default PageDescription;