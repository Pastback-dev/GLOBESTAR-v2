import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/1234567890"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} className="text-orange-foreground" />
  </a>
);

export default WhatsAppButton;
