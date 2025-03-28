import React from 'react';

const FluidDarkBackground = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fluid gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br animate-gradient"
        style={{
          backgroundImage: `linear-gradient(
            -45deg, 
            #000000, 
            #121212, 
            #1f1f1f, 
            #000000, 
            #1c1c1c
          )`,
          backgroundSize: '400% 400%',
          animation: 'gradient 10s ease infinite'
        }}
      />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-10 
        bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] 
        [background-size:16px_16px]">
      </div>

      {/* Blurred color accents */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#1f1f1f] opacity-10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#1a1a1a] opacity-10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

      {/* Content container */}
      <div className="relative z-20 min-h-screen w-full h-full flex flex-col items-center justify-center">
                {children}
      </div>
    </div>
  );
};

// Custom animations
const styles = `
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes blob {
    0%, 100% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
  }

  .animate-gradient {
    animation: gradient 15s ease infinite;
  }

  .animate-blob {
    animation: blob 15s infinite;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }
`;

// Inject custom styles
const styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

export default FluidDarkBackground;
