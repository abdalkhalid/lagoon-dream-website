
const FeaturesSection = () => {
  const features = [
    {
      icon: "🏖️",
      title: "Private Beach Access",
      description: "Exclusive sandy beaches with crystal-clear waters just steps from your door"
    },
    {
      icon: "🏊‍♀️",
      title: "Infinity Pools",
      description: "Multiple resort-style pools with breathtaking lagoon views"
    },
    {
      icon: "⛵",
      title: "Marina & Water Sports",
      description: "Full-service marina with yacht parking and water sports facilities"
    },
    {
      icon: "🏋️‍♂️",
      title: "Wellness Center",
      description: "State-of-the-art fitness facilities and spa services"
    },
    {
      icon: "🍽️",
      title: "Fine Dining",
      description: "Gourmet restaurants and cafes with waterfront dining experiences"
    },
    {
      icon: "🌳",
      title: "Landscaped Gardens",
      description: "Meticulously maintained gardens and green spaces throughout"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            World-Class Amenities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every amenity has been thoughtfully designed to enhance your lifestyle and create unforgettable experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
