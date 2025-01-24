import React from "react";
// import "./styles.css";

const Hero = () => {
  return (
    <section id="home" class="min-h-screen pt-20 bg-white flex items-center">
        <div class="container mx-auto px-6 grid grid-cols-2 items-center">
            <div>
                <h2 class="text-5xl font-bold text-brand-blue mb-4">
                    Transforming Healthcare <br/>with Smart Solutions
                </h2>
                <p class="text-xl text-gray-600 mb-8">
                    Innovative software that simplifies hospital management and improves patient care.
                </p>
                <div class="space-x-4">
                    <button class="bg-brand-blue text-white px-6 py-3 rounded-full hover:bg-blue-900 transition">
                        Learn More
                    </button>
                    <button class="border-2 border-brand-blue text-brand-blue px-6 py-3 rounded-full hover:bg-blue-50 transition">
                        Watch Video
                    </button>
                </div>
            </div>
            <div class="flex justify-center">
            <img src="/home.png" alt="Healthcare Software" className="rounded-lg" />
            </div>
        </div>
    </section>
  );
};

export default Hero;
