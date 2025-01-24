import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <div className="flex items-center mb-4">
              <img src="/2.png" alt="User 1" className="w-20 h-20 rounded-full mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Priya Shrestha</h3>
                <p className="text-sm text-gray-500">Health Advocate</p>
              </div>
            </div>
            <p className="text-gray-600">
              "Swastha Nepal is a game-changer in the healthcare industry. Their dedication to community well-being and accessibility is truly inspiring. I highly recommend their services!"
            </p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <div className="flex items-center mb-4">
              <img src="/1.png" alt="User 2" className="w-20 h-20 rounded-full mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Rajesh Gautam</h3>
                <p className="text-sm text-gray-500">Social Worker</p>
              </div>
            </div>
            <p className="text-gray-600">
              "The team at Swastha Nepal goes above and beyond to make healthcare accessible. Their dedication and innovative approach have left a lasting impression on me."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
