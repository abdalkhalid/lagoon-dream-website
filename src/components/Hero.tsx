
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&h=1080&fit=crop",
      title: "Mediterranean Paradise",
      subtitle: "Where luxury meets tranquility"
    },
    {
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1920&h=1080&fit=crop",
      title: "Crystal Clear Waters",
      subtitle: "Your private oasis awaits"
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop",
      title: "Sunset Views",
      subtitle: "Every day ends perfectly here"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
            {slides[currentSlide].subtitle}
          </p>
          <div className="animate-fade-in">
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300 text-white font-semibold">
              Explore Our Community
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-white" : "bg-white/50"
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
