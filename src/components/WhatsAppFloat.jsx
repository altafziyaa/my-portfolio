import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center">
      {/* Slide Text */}
      <a
        href="https://wa.me/918271612838"
        target="_blank"
        className="
          mr-3 px-4 py-2 rounded-lg text-sm font-medium
          bg-card border border-white/10 text-text
          opacity-0 translate-x-4
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300
          whitespace-nowrap
        "
      >
        Contact Us
      </a>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/918271612838"
        target="_blank"
        className="
          text-green-500 text-4xl
          hover:scale-110 transition-transform duration-300
        "
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
