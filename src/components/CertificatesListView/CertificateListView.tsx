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
    <ul className="">
      {certificates.map((certificate) => (
        <CertificateCard key={certificate.id} certificate={certificate} />
      ))}
    </ul>
  );
};

export default CertificatesListView;
