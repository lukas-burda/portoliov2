import React from "react";
import {
  FaExternalLinkAlt,
  FaAward,
  FaCalendarAlt,
  FaCodeBranch,
} from "react-icons/fa"; // Ícones para melhor visualização
import type { Certificate } from "../../interfaces/competences/Certificate";
import CustomTitle from "../CustomTitle/CustomTittle";

interface CertificateCardViewProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardViewProps> = ({
  certificate,
}) => {
  const { title, issuer, issueDate, credentialUrl, skills } = certificate;

  return (
    <li className="flex flex-col sm:flex-row gap-4 items-start pb-8 mb-6 last:border-b-0 last:pb-0 last:mb-0">
      {/* Ícone ou algum indicador visual para o certificado */}
      <div className=" text-5xl">
        <div className="flex justify-center text-center items-center space-x-4 text-5xl mb-6">
          <FaAward />
          <CustomTitle
            text={title}
            as="h5"
            className="flex flex-initial text-2xl font-bold mb-1"
          />
        </div>

        <p className="flex start-1 font-bold text-lg mb-1">{issuer}</p>

        <div className="flex gap-2 text-lg mb-2">
          <FaCalendarAlt /> Emitido em {issueDate}
        </div>

        {credentialUrl && (
          <button
            className="flex gap-2 px-4 py-2 text-lg bg-cyan-900 hover:bg-cyan-400 text-white rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-800" 
            aria-label={`Ver credencial de ${title}`}
          >
            <a className="flex gap-4" href={credentialUrl}>
              <FaExternalLinkAlt size={20} title="Certificado" /> Certificado
            </a>
          </button>
        )}

        {skills && (
          <div className="flex flex-col justify-center mt-3 text-lg  gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <FaCodeBranch />
              <p className="font-bold text-1xl ">
                Competências:
              </p>
              {skills}
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default CertificateCard;
