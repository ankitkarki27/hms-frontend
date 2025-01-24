import React from "react";
// import "./styles.css";

const Contact = () => {
  return (
    <section id="contact" class="bg-brand-gray py-20">
    <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-brand-blue mb-12">Contact Us</h2>
        <p class="text-xl text-gray-600 mb-12">
            We’d love to hear from you! Reach out to us through the following channels.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <!-- Email --> */}
            <div class="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                <svg class="w-16 h-16 text-brand-green mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 13.5L2 6.5V5h20v1.5l-10 7.5zM2 8.5v10c0 .825.675 1.5 1.5 1.5h17c.825 0 1.5-.675 1.5-1.5v-10l-10 7.5L2 8.5z"/>
                </svg>
                <h3 class="text-2xl font-bold text-brand-blue mb-2">Email Us</h3>
                <p class="text-gray-600 mb-4">info@swasthanepal.com</p>
                <a href="mailto:info@swasthanepal.com" class="text-brand-blue font-semibold hover:underline">Send Email</a>
            </div>
            {/* <!-- Phone --> */}
            <div class="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                <svg class="w-16 h-16 text-brand-green mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.66 15.66 0 006.59 6.59l2.2-2.2a1 1 0 011.14-.23c1.26.5 2.63.77 4.05.77a1 1 0 011 1v3.56a1 1 0 01-1.1 1A19.88 19.88 0 012 4.1 1 1 0 013 3h3.56a1 1 0 011 1c0 1.42.26 2.79.77 4.05a1 1 0 01-.23 1.14l-2.2 2.2z"/>
                </svg>
                <h3 class="text-2xl font-bold text-brand-blue mb-2">Call Us</h3>
                <p class="text-gray-600 mb-4">+977-123-456-789</p>
                <a href="tel:+977123456789" class="text-brand-blue font-semibold hover:underline">Make a Call</a>
            </div>
            {/* <!-- Location --> */}
            <div class="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                <svg class="w-16 h-16 text-brand-green mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                </svg>
                <h3 class="text-2xl font-bold text-brand-blue mb-2">Visit Us</h3>
                <p class="text-gray-600 mb-4">123 Main Street, Kathmandu, Nepal</p>
                <a href="https://goo.gl/maps/example" target="_blank" class="text-brand-blue font-semibold hover:underline">Get Directions</a>
            </div>
        </div>
    </div>
</section>
  );
};

export default Contact;
