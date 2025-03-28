import React from 'react';
import { Rocket, Globe, ShoppingCart, Code, Video, Image } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, borderColor}) => {
  return (
    <div className="relative group w-full max-w-sm p-1 border border-[#2e2e2e] rounded-xl bg-transparent">
      {/* Card content */}
      <div className="relative rounded-xl overflow-hidden shadow-lg p-6 bg-opacity-10">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-[#2e2e2e] rounded-full mr-4">
            <Icon className="text-white w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};
const ServicesSection = ({id}) => {
  const services = [
    {
      icon: Rocket,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      borderColor: "#a78bfa" // purple-500
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications and responsive websites built with modern technologies.",
      borderColor: "#60a5fa" // blue-500
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions designed to address specific business challenges.",
      borderColor: "#34d399" // green-500
    },
    {
      icon: ShoppingCart,
      title: "Amazon Selling Services",
      description: "We help you optimize or start new listings, manage inventory, improve rankings, and maximize your e-commerce potential.",
      borderColor: "#34d399" // green-500
    },
    {
    icon: Video, // Use appropriate icon for video editing if available
    title: "Video Editing Services",
    description: "Video editing services to enhance your brand's visual appeal, ensuring high-quality content for your audience.",
    borderColor: "#34d399" // green-500
  },
  {
    icon: Image,
    title: "Image Editing",
    description: "Images for e-commerce platforms, ensuring they are optimized for conversions  to platform.",
    borderColor: "#34d399" // green-500
  },
   
  ];

  return (
    <div className="py-16 px-4" id={id}>
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              borderColor={service.borderColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;