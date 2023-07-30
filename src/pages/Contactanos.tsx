// pages/index.tsx
import React from "react";
import ContactCard from "../contactof/conteactof";

const ContactPage: React.FC = () => {
  const contactInfo = {
    email: "ejemplo@correo.com",
    address: "Calle Falsa 123, Ciudad Imaginaria",
    phone: "555-123-4567",
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <ContactCard contactInfo={contactInfo} />
    </div>
  );
};

export default ContactPage;
