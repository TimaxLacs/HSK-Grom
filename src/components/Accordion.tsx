import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  variant?: 'default' | 'danger';
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ 
  title, 
  children, 
  isOpen, 
  onToggle,
  variant = 'default' 
}) => {
  return (
    <div className={`border-b ${variant === 'danger' ? 'border-red-900/30' : 'border-stone-800'} overflow-hidden`}>
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between py-5 text-left transition-colors ${
          isOpen 
            ? variant === 'danger' ? 'text-red-500' : 'text-grom-olive-light'
            : 'text-stone-300 hover:text-white'
        }`}
      >
        <span className="font-bold font-stencil tracking-wider text-lg uppercase flex items-center">
          {variant === 'danger' && <span className="mr-2 text-red-600">⚠</span>}
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`pb-6 text-stone-400 leading-relaxed ${variant === 'danger' ? 'bg-red-900/10 p-4 rounded' : ''}`}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
