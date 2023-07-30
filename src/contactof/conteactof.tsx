// components/ContactCard.tsx
import React from "react";

interface ContactInfo {
  email: string;
  address: string;
  phone: string;
}

interface ContactCardProps {
  contactInfo: ContactInfo;
}

const ContactCard: React.FC<ContactCardProps> = ({ contactInfo }) => {
  return (
    <div className="w-96 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      <div>
        <p className="text-lg mb-2">
          Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </p>
        <p className="text-lg mb-2">Dirección: {contactInfo.address}</p>
        <p className="text-lg">Teléfono: {contactInfo.phone}</p>
      </div>
    </div>
  );
};

export default ContactCard;
