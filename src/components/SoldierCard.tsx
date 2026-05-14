import React from 'react';

interface SoldierProps {
  name: string;
  callsign?: string;
  role?: string;
  rank?: string;
  image: string;
  specialty?: string;
  duty?: string;
}

const SoldierCard: React.FC<SoldierProps> = ({ name, callsign, image, duty, specialty }) => {
  return (
    <div className="group relative bg-stone-900 rounded-lg overflow-hidden border border-stone-800 hover:border-grom-olive/50 transition-colors duration-300">
      <div className="aspect-[3/4] overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-stone-800 flex items-center justify-center">
            <span className="text-stone-600 text-5xl">?</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-grom-bg via-transparent to-transparent opacity-90" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-4">
        <h3 className="text-xl font-bold font-stencil tracking-wide text-white group-hover:text-grom-olive-light transition-colors mb-1">
          {callsign || name}
        </h3>
        {duty && (
          <p className="text-xs uppercase tracking-wider text-grom-olive-light mb-0.5">{duty}</p>
        )}
        {specialty && (
          <p className="text-[11px] leading-snug text-stone-400 mb-1">{specialty}</p>
        )}
        <p className="text-sm text-stone-300 font-medium">{name}</p>
      </div>
    </div>
  );
};

export default SoldierCard;
