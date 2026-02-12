import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import Modal from './Modal';
import { contacts } from '../data/contacts';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Контакты для связи"
    >
      <div className="space-y-4">
        <p className="text-sm text-stone-400 mb-4 text-center">
          Выберите удобный способ связи. Мы ответим в течение 24 часов.
        </p>
        
        <div className="grid gap-4">
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className="flex items-center space-x-4 p-3 bg-stone-900 rounded-lg hover:bg-stone-800/80 transition-colors border border-stone-800 cursor-pointer group"
            >
              <img 
                src={contact.image} 
                alt={contact.name} 
                className="w-12 h-12 rounded-full object-cover border border-grom-olive/30"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-bold text-white text-sm">{contact.name}</h4>
                  <span className="text-xs px-2 py-0.5 bg-grom-olive/20 text-grom-olive-light rounded uppercase font-bold tracking-wider">
                    {contact.callsign}
                  </span>
                </div>
                <p className="text-xs text-stone-400">{contact.role}</p>
                <a href={`https://${contact.social}`} target="_blank" rel="noopener noreferrer" className="text-xs text-grom-olive-light hover:underline">
                  {contact.social}
                </a>
              </div>
              <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-blue-600/20 text-blue-500 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                  <MessageCircle size={18} />
                </button>
                <button className="p-2 bg-green-600/20 text-green-500 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                  <Phone size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t border-stone-800 text-center">
            <p className="text-xs text-stone-500">
              Или пишите на почту: <span className="text-grom-olive-light">recruit@hsk-grom.ru</span>
            </p>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
