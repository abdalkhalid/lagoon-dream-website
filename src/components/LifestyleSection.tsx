
const LifestyleSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A Lifestyle Beyond Compare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in a world where Mediterranean charm meets modern luxury. 
              Our waterfront community offers an unparalleled living experience with pristine lagoons, 
              world-class amenities, and architectural excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Waterfront Living</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wake up to stunning lagoon views every morning. Our homes are designed to maximize 
                  the connection between indoor and outdoor living, with expansive windows and 
                  private terraces overlooking crystal-clear waters.
                </p>
              </div>

              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Amenities</h3>
                <p className="text-gray-600 leading-relaxed">
                  Enjoy exclusive access to world-class facilities including infinity pools, 
                  private beaches, marina access, fitness centers, and gourmet dining options. 
                  Every detail has been crafted for your ultimate comfort and enjoyment.
                </p>
              </div>

              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainable Luxury</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment to environmental excellence ensures that luxury and sustainability 
                  go hand in hand. From energy-efficient homes to protected natural habitats, 
                  we're creating a legacy for future generations.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop"
                alt="Luxury waterfront community"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-amber-500 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
