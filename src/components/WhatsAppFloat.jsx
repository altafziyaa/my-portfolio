import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918271612838"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        flex items-center justify-center
        rounded-full
        bg-green-500
        text-white text-3xl
        shadow-lg
        hover:scale-110
        hover:shadow-xl
        transition
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
