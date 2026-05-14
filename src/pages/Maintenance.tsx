"use client";

import React from 'react';
import { Settings, Wrench, Clock, MessageSquare, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Maintenance = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0e2a47] flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-orange/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-orange/5 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="max-w-2xl w-full bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16 text-center relative z-10 border border-white/10">
        {/* Icon Animation */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 bg-orange/20 rounded-full animate-ping" />
          <div className="relative bg-orange rounded-full w-24 h-24 flex items-center justify-center shadow-lg shadow-orange-500/30">
            <Wrench size={40} className="text-white animate-bounce" />
          </div>
          <Settings 
            size={32} 
            className="absolute -top-2 -right-2 text-[#0e2a47] animate-spin" 
            style={{ animationDuration: '4s' }}
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-4 uppercase italic">
          {t('paused.title') || 'Under Maintenance'}
        </h1>
        
        <div className="w-16 h-1 bg-orange mx-auto mb-8 rounded-full" />
        
        <p className="text-gray-600 text-lg mb-10 leading-relaxed italic">
          {t('paused.message') || 'We are currently performing scheduled maintenance to improve our services. We will be back online shortly.'}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-section-gray p-6 rounded-2xl border border-gray-100 flex flex-col items-center gap-3 group hover:border-orange/30 transition-colors">
            <Clock className="text-orange" size={24} />
            <span className="text-xs font-bold text-[#0e2a47] uppercase tracking-widest">
              {t('paused.backSoon') || 'Back Soon'}
            </span>
          </div>
          <a 
            href="https://wa.me/34624132171" 
            target="_blank" 
            rel="noreferrer"
            className="bg-section-gray p-6 rounded-2xl border border-gray-100 flex flex-col items-center gap-3 group hover:border-orange/30 transition-colors"
          >
            <MessageSquare className="text-orange" size={24} />
            <span className="text-xs font-bold text-[#0e2a47] uppercase tracking-widest">
              WhatsApp Support
            </span>
          </a>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-bold">
            Need Urgent Assistance?
          </p>
          <div className="flex gap-4">
            <a 
              href="mailto:globestarvisa@gmail.com" 
              className="flex items-center gap-2 text-[#0e2a47] hover:text-orange transition-colors font-bold text-sm italic"
            >
              <Mail size={16} /> globestarvisa@gmail.com
            </a>
          </div>
        </div>

        {/* Footer Logo Style */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-[#0e2a47]">GLOBE</span>
              <span className="text-orange">STAR</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;