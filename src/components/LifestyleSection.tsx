
const LifestyleSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              DAMAC Lagoons
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Inspired by the Mediterranean lifestyle, DAMAC Lagoons is a waterfront community 
              featuring crystal lagoons, white sandy beaches, and luxury island living. 
              Experience the charm of coastal Mediterranean towns right in the heart of Dubai.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Crystal Clear Lagoons</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dive into crystal clear turquoise lagoons that stretch over 45 kilometers. 
                  Enjoy water sports, swimming, and waterfront dining in this tropical paradise 
                  that brings the Mediterranean experience to Dubai.
                </p>
              </div>

              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Island Living</h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose from themed communities inspired by Mediterranean destinations including 
                  Malta, Cyprus, Santorini, Costa Brava, Tangier, Andalusia, and more. 
                  Each cluster offers unique architectural styles and cultural experiences.
                </p>
              </div>

              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Amenities</h3>
                <p className="text-gray-600 leading-relaxed">
                  Enjoy exclusive access to water cinemas, floating flower markets, 
                  aqua opera, lazy rivers, wave pools, beach clubs, and marina facilities. 
                  Every day feels like a vacation in this waterfront paradise.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://www.damacproperties.com/uploads/images/communities/damac-lagoons/lifestyle/lifestyle-1.jpg"
                alt="DAMAC Lagoons waterfront living"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-amber-500 rounded-2xl opacity-20"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <img 
                src="https://www.damacproperties.com/uploads/images/communities/damac-lagoons/features/water-sports.jpg"
                alt="Water sports activities"
                className="rounded-xl w-full h-48 object-cover mb-4"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Water Sports</h4>
              <p className="text-gray-600">
                Kayaking, paddleboarding, and various water activities in crystal clear lagoons.
              </p>
            </div>

            <div className="text-center animate-fade-in">
              <img 
                src="https://www.damacproperties.com/uploads/images/communities/damac-lagoons/features/beach-clubs.jpg"
                alt="Beach clubs and dining"
                className="rounded-xl w-full h-48 object-cover mb-4"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Beach Clubs</h4>
              <p className="text-gray-600">
                Exclusive beach clubs with fine dining, lounging areas, and premium services.
              </p>
            </div>

            <div className="text-center animate-fade-in">
              <img 
                src="https://www.damacproperties.com/uploads/images/communities/damac-lagoons/features/family-fun.jpg"
                alt="Family entertainment"
                className="rounded-xl w-full h-48 object-cover mb-4"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Family Entertainment</h4>
              <p className="text-gray-600">
                Water cinemas, floating markets, and adventure zones for the whole family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
