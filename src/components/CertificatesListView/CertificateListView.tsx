import React from "react";

import type { Certificate } from "../../interfaces/competences/Certificate";
import CertificateCard from "../CertificateCard/CertificateCard";

interface CertificatesListProps {
  certificates: Certificate[]; // A lista de certificados agora é uma prop
}

const CertificatesListView: React.FC<CertificatesListProps> = ({
  certificates,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10 rounded-lg text-neutral-100">

      <ul className="space-y-6 sm:space-y-8">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </ul>
    </div>
  );
};

export default CertificatesListView;