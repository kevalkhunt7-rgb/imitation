import React from 'react';
import { Sparkles, TrendingUp, Award } from 'lucide-react';

export function PremiumBanner() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated gradient background using CSS keyframes */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#B76E79] via-[#D4AF37] to-[#B76E79]"
        style={{
          backgroundSize: '200% 100%',
          animation: 'gradientShift 10s linear infinite'
        }}
      />

      {/* Overlay elegant dot pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} 
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          
          {/* Feature 1 - Handcrafted Excellence */}
          <div className="space-y-3 transform transition-all duration-700 ease-out translate-y-0 opacity-100">
            <div 
              className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              style={{ animation: 'gentleRotate 3s ease-in-out infinite' }}
            >
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-serif text-white" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              Handcrafted Excellence
            </h3>
            <p className="text-white/90" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Every piece is carefully crafted by skilled artisans with attention to detail
            </p>
          </div>

          {/* Feature 2 - Trending Designs */}
          <div className="space-y-3 transform transition-all duration-700 ease-out translate-y-0 opacity-100">
            <div 
              className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              style={{ animation: 'gentlePulse 2s ease-in-out infinite' }}
            >
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-serif text-white" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              Trending Designs
            </h3>
            <p className="text-white/90" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Stay ahead with our latest collections inspired by global fashion trends
            </p>
          </div>

          {/* Feature 3 - Premium Quality */}
          <div className="space-y-3 transform transition-all duration-700 ease-out translate-y-0 opacity-100">
            <div 
              className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              style={{ animation: 'gentleFloat 2.5s ease-in-out infinite' }}
            >
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-serif text-white" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              Premium Quality
            </h3>
            <p className="text-white/90" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Certified materials and quality assurance on every purchase
            </p>
          </div>

        </div>
      </div>

      {/* Floating Sparkle Particles CSS Generator */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => {
          const randomLeft = Math.random() * 100;
          const randomDuration = 3 + Math.random() * 2;
          const randomDelay = Math.random() * 3;
          
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${randomLeft}%`,
                bottom: '-10px',
                animation: `floatUpward ${randomDuration}s linear infinite`,
                animationDelay: `${randomDelay}s`
              }}
            />
          );
        })}
      </div>

      {/* Scoped CSS Animation Injection */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes gentleRotate {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(10deg); }
          75% { transform: rotate(-10deg); }
        }
        @keyframes gentlePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatUpward {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-250px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}