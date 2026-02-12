import React from 'react';
import { Shield } from 'lucide-react';

interface SoldierProps {
  name: string;
  callsign?: string;
  role: string;
  rank?: string;
  image: string;
  specialty?: string;
}

const SoldierCard: React.FC<SoldierProps> = ({ name, callsign, role, rank, image, specialty }) => {
  return (
    <div className="group relative bg-stone-900 rounded-lg overflow-hidden border border-stone-800 hover:border-grom-olive/50 transition-colors duration-300">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-grom-bg via-transparent to-transparent opacity-90" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-xl font-bold font-stencil tracking-wide text-white group-hover:text-grom-olive-light transition-colors">
            {callsign || name}
          </h3>
          {rank && (
            <span className="text-xs font-mono text-stone-400 border border-stone-600 px-1 rounded">
              {rank}
            </span>
          )}
        </div>
        <p className="text-sm text-stone-300 font-medium mb-1">{name}</p>
        <p className="text-xs text-stone-400">{role}</p>
        {specialty && (
          <div className="flex items-center space-x-1 text-xs text-grom-olive-lighter mt-1">
            <Shield size={12} />
            <span>{specialty}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SoldierCard;
