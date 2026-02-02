import imgImage2 from "figma:asset/1edb18499b8e74c88335baa1a288340a355e3552.png";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a9973] flex items-center justify-center px-6 py-16 md:py-24 relative overflow-hidden">
      {/* Floating decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large circles */}
        <div className="absolute top-[15%] left-[10%] w-24 h-24 rounded-full bg-white opacity-20 blur-sm"></div>
        <div className="absolute top-[60%] left-[5%] w-16 h-16 rounded-full bg-white opacity-25"></div>
        <div className="absolute top-[25%] right-[15%] w-20 h-20 rounded-full bg-white opacity-15 blur-md"></div>
        <div className="absolute bottom-[20%] right-[8%] w-32 h-32 rounded-full bg-white opacity-10 blur-lg"></div>
        
        {/* Medium circles */}
        <div className="absolute top-[45%] left-[15%] w-12 h-12 rounded-full bg-white opacity-30"></div>
        <div className="absolute top-[70%] left-[25%] w-8 h-8 rounded-full bg-white opacity-20 blur-sm"></div>
        <div className="absolute top-[35%] right-[25%] w-10 h-10 rounded-full bg-white opacity-25"></div>
        <div className="absolute bottom-[30%] right-[20%] w-14 h-14 rounded-full bg-white opacity-15"></div>
        
        {/* Small circles */}
        <div className="absolute top-[20%] left-[30%] w-6 h-6 rounded-full bg-white opacity-35"></div>
        <div className="absolute top-[80%] left-[18%] w-5 h-5 rounded-full bg-white opacity-30"></div>
        <div className="absolute top-[50%] right-[12%] w-7 h-7 rounded-full bg-white opacity-20"></div>
        <div className="absolute bottom-[15%] right-[30%] w-6 h-6 rounded-full bg-white opacity-25 blur-sm"></div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left column - Mascot */}
          <div className="flex justify-center md:justify-end relative">
            {/* Organic white blob behind mascot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[480px] md:h-[480px] lg:w-[550px] lg:h-[550px]">
              <svg viewBox="0 0 200 200" className="w-full h-full opacity-90">
                <path
                  d="M45.5,-66.3C58.1,-56.8,67.3,-42.5,72.8,-26.8C78.3,-11.1,80.1,5.9,76.2,21.8C72.3,37.7,62.7,52.5,49.8,62.8C36.9,73.1,20.7,78.9,3.8,73.5C-13.1,68.1,-30.7,51.5,-44.8,36.3C-58.9,21.1,-69.5,7.3,-72.4,-8.5C-75.3,-24.3,-70.5,-42.1,-59.8,-53.8C-49.1,-65.5,-32.5,-71.1,-16.7,-72.1C-0.9,-73.1,14.1,-69.5,28.9,-63.8C43.7,-58.1,32.9,-75.8,45.5,-66.3Z"
                  fill="white"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            
            {/* Mascot image */}
            <div className="w-72 md:w-96 lg:w-[440px] relative z-10">
              <img 
                src={imgImage2} 
                alt="FUDAMBIENT mascot - friendly tree engineer" 
                className="w-full h-auto relative"
              />
            </div>
          </div>

          {/* Right column - Text content */}
          <div className="flex flex-col justify-center space-y-6 text-white relative">
            {/* Subtle translucent overlay behind text */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl -mx-6 -my-8 backdrop-blur-[2px]"></div>
            
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-wider opacity-90 mb-6">
                Nuestro enfoque
              </p>
              
              <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed">
                Creemos en una ingeniería cercana,<br />
                que escucha el territorio y trabaja<br />
                junto a las comunidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}