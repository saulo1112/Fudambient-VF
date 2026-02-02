import { ImageWithFallback } from './components/figma/ImageWithFallback';

// Water droplet component with realistic white appearance
const WaterDroplet = ({ size, x, y, blur }: { size: number; x: number; y: number; blur?: boolean }) => {
  return (
    <div
      className="absolute rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}%`,
        top: `${y}%`,
        background: `radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.5))`,
        boxShadow: `
          inset -1px -1px 3px rgba(255, 255, 255, 0.6),
          inset 1px 1px 2px rgba(0, 0, 0, 0.1),
          0 2px 6px rgba(0, 0, 0, 0.15),
          0 0 0 0.5px rgba(255, 255, 255, 0.3)
        `,
        filter: blur ? 'blur(1.5px)' : 'none',
        backdropFilter: 'blur(0.5px)',
      }}
    />
  );
};

export default function App() {
  // Random droplet configurations
  const droplets = [
    // Large droplets
    { size: 80, x: 15, y: 20 },
    { size: 95, x: 72, y: 15 },
    { size: 70, x: 45, y: 60 },
    { size: 85, x: 88, y: 55 },
    
    // Medium droplets
    { size: 50, x: 25, y: 45 },
    { size: 55, x: 60, y: 35 },
    { size: 48, x: 35, y: 75 },
    { size: 52, x: 80, y: 80 },
    { size: 45, x: 10, y: 65 },
    { size: 58, x: 92, y: 25 },
    
    // Small droplets
    { size: 25, x: 8, y: 30 },
    { size: 30, x: 40, y: 25, blur: true },
    { size: 28, x: 65, y: 70 },
    { size: 22, x: 52, y: 15 },
    { size: 26, x: 78, y: 45 },
    { size: 24, x: 18, y: 85 },
    { size: 32, x: 95, y: 70 },
    
    // Tiny droplets
    { size: 15, x: 12, y: 50, blur: true },
    { size: 18, x: 42, y: 42 },
    { size: 14, x: 68, y: 22 },
    { size: 16, x: 55, y: 82 },
    { size: 12, x: 30, y: 12 },
    { size: 13, x: 85, y: 35 },
    { size: 17, x: 20, y: 72 },
    { size: 14, x: 75, y: 65, blur: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      {/* Deep green card with water droplets */}
      <div className="relative w-full max-w-6xl h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0d4d3d] via-[#0f5c4a] to-[#0a3d30] shadow-2xl">
        {/* Water droplets scattered across the card */}
        {droplets.map((droplet, index) => (
          <WaterDroplet
            key={index}
            size={droplet.size}
            x={droplet.x}
            y={droplet.y}
            blur={droplet.blur}
          />
        ))}
        
        {/* Environmental message */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-8 text-center">
          <h1 className="text-white text-5xl mb-4 drop-shadow-lg">
            Every Drop Counts
          </h1>
          <p className="text-white/90 text-xl max-w-2xl drop-shadow">
            Conserving water today ensures a sustainable tomorrow. 
            Together, we can protect our planet's most precious resource.
          </p>
        </div>
        
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />
      </div>
    </div>
  );
}