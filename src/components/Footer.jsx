import React from "react";
// import "./styles/styles.css";

const Footer = () => {
  return (
    <footer class="bg-brand-blue py-16 text-white">
    <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* <!-- About Section --> */}
            <div>
                <h3 class="text-2xl font-bold mb-4">About Swastha Nepal</h3>
                <p class="text-gray-300">
                    Swastha Nepal is committed to providing healthcare solutions and services to enhance the well-being of our community. 
                    We believe in making healthcare accessible to everyone.
                </p>
            </div>
            {/* <!-- Quick Links --> */}
            <div>
                <h3 class="text-2xl font-bold mb-4">Quick Links</h3>
                <ul class="space-y-2">
                    <li><a href="#home" class="text-gray-300 hover:text-brand-green">Home</a></li>
                    <li><a href="#about" class="text-gray-300 hover:text-brand-green">About Us</a></li>
                    <li><a href="#services" class="text-gray-300 hover:text-brand-green">Services</a></li>
                    <li><a href="#contact" class="text-gray-300 hover:text-brand-green">Contact</a></li>
                </ul>
            </div>
            {/* <!-- Contact Info --> */}
            <div>
                <h3 class="text-2xl font-bold mb-4">Contact Info</h3>
                <ul class="space-y-2">
                    <li class="flex items-center">
                        <svg class="w-6 h-6 text-brand-green mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 13.5L2 6.5V5h20v1.5l-10 7.5zM2 8.5v10c0 .825.675 1.5 1.5 1.5h17c.825 0 1.5-.675 1.5-1.5v-10l-10 7.5L2 8.5z"/>
                        </svg>
                        <a href="mailto:info@swasthanepal.com" class="text-gray-300 hover:text-brand-green">info@swasthanepal.com</a>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-6 h-6 text-brand-green mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.62 10.79a15.66 15.66 0 006.59 6.59l2.2-2.2a1 1 0 011.14-.23c1.26.5 2.63.77 4.05.77a1 1 0 011 1v3.56a1 1 0 01-1.1 1A19.88 19.88 0 012 4.1 1 1 0 013 3h3.56a1 1 0 011 1c0 1.42.26 2.79.77 4.05a1 1 0 01-.23 1.14l-2.2 2.2z"/>
                        </svg>
                        <a href="tel:+977123456789" class="text-gray-300 hover:text-brand-green">+977-123-456-789</a>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-6 h-6 text-brand-green mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                        </svg>
                        <span>123 Main Street, Kathmandu, Nepal</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="border-t border-gray-600 mt-12 pt-8">
            {/* <!-- Social Media Icons --> */}
            <div class="flex justify-center space-x-6 mb-6">
                <a href="#" class="text-gray-300 hover:text-brand-green">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.745v-3.623h3.075V8.41c0-3.051 1.866-4.709 4.59-4.709 1.305 0 2.425.097 2.751.141v3.192h-1.888c-1.48 0-1.766.703-1.766 1.733v2.272h3.532l-.461 3.623h-3.071V24h6.027c.73 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                    </svg>
                </a>
                <a href="#" class="text-gray-300 hover:text-brand-green">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.932 4.932 0 002.163-2.724c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.379 4.482C7.688 8.094 4.064 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.216 2.188 4.099a4.936 4.936 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084c.63 1.953 2.445 3.377 4.6 3.418A9.864 9.864 0 010 19.54a13.905 13.905 0 007.548 2.212c9.056 0 14.004-7.496 14.004-13.986 0-.213-.005-.426-.014-.637a10.025 10.025 0 002.46-2.548l-.047-.02z"/>
                    </svg>
                </a>
                <a href="#" class="text-gray-300 hover:text-brand-green">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.372 0 12c0 5.3 3.438 9.8 8.206 11.387.6.111.793-.26.793-.577v-2.165c-3.337.726-4.037-1.416-4.037-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.084-.73.084-.73 1.204.084 1.837 1.237 1.837 1.237 1.068 1.834 2.8 1.303 3.483.996.111-.771.417-1.304.763-1.604-2.665-.304-5.467-1.334-5.467-5.93 0-1.31.469-2.381 1.237-3.222-.123-.305-.535-1.528.117-3.182 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013-.404c1.02.004 2.048.137 3 .404 2.292-1.552 3.3-1.23 3.3-1.23.653 1.654.241 2.877.118 3.182.769.841 1.237 1.912 1.237 3.222 0 4.607-2.805 5.622-5.475 5.921.429.37.813 1.1.813 2.217v3.285c0 .319.192.692.8.577C20.566 21.795 24 17.3 24 12c0-6.628-5.373-12-12-12z"/>
                    </svg>
                </a>
            </div>
         
            <p class="text-center text-gray-400">&copy; 2025 Swastha Nepal. All rights reserved.</p>
        </div>
    </div>
</footer>
  );
};

export default Footer;
