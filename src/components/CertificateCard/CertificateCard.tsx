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
      <div className="text-cyan-400 text-5xl">
        <div className=" flex items-center gap-2 mb-2 ">
          <FaAward />
          <CustomTitle
            text={title}
            as="h5"
            className="flex flex-initial text-2xl font-bold text-cyan-400 mb-1"
          />
        </div>

        <p className="flex start-1 text-2xl text-neutral-300 mb-1">{issuer}</p>

        <div className="flex gap-2 text-lg text-neutral-400 mb-2">
          <FaCalendarAlt /> Emitido em {issueDate}
        </div>

        {credentialUrl && (
          <button
            className="flex gap-2 px-4 py-2 text-lg bg-blue-900 hover:bg-blue-800 text-white rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            aria-label={`Ver credencial de ${title}`}
          >
            <a className="flex gap-4" href={credentialUrl}>
              <FaExternalLinkAlt size={20} title="Certificado" /> Certificado
            </a>
          </button>
        )}

        {skills && (
          <div className="flex flex-col justify-center mt-3 text-lg text-neutral-300 gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <FaCodeBranch />
              <p className="font-bold text-1xl text-neutral-200">
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
