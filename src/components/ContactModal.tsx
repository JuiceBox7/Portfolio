import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import { X } from "lucide-react";
import { Button } from "./ui/button";

const ContactModal = ({ close }: { close: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [close]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div ref={ref}>
        <Button
          onClick={close}
          className="absolute top-3 right-3 text-white cursor-pointer"
        >
          <X className="w-10 h-10" />
        </Button>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactModal;
