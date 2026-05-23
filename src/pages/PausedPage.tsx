"use client";

import React from 'react';
import { Timer, MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PausedPage = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0e2a47] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="h-2 bg-orange" />
        <div className="p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Timer size={40} className="text-orange animate-pulse" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-4 uppercase italic">
            {t('paused.title')}
          </h1>
          
          <p className="text-gray-600 text-lg mb-10 italic leading-relaxed">
            {t('paused.message')}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <a 
              href="https://wa.me/34624132171" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a 
              href="mailto:globestarvisa@gmail.com"
              className="flex items-center justify-center gap-3 bg-[#0e2a47] text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg"
            >
              <Mail size={20} />
              Email Us
            </a>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <p className="text-orange font-bold uppercase tracking-widest text-sm italic">
              {t('paused.backSoon')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PausedPage;