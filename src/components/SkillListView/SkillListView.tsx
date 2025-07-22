import React from "react";
import { MdGroups } from "react-icons/md";

// Definindo as props para o componente SkillsList
interface SkillsProps {
  title?: string; // Título é opcional, por isso o '?'
  skillList: string[]; // Skills é um array de strings e é obrigatório
}

const SkillListCard: React.FC<SkillsProps> = ({
  title = "Soft Skills", // Adicionado um valor padrão para o título
  skillList,
}) => {
  return (
    <div className="mx-4 my-4 text-inherit px-4 py-8 bg-neutral-800 rounded-lg shadow-md">
      {/* Padding e fundo com sombra para um visual melhor */}
      <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-4 flex justify-center items-center gap-4">
        {/* Ajustado tamanho do texto e gap para responsividade */}
        <div className="text-cyan-400 text-3xl sm:text-4xl">
          <MdGroups />
        </div>
        {/* Ícone maior e com cor ligeiramente diferente */}
        {title}
      </h3>
      <ul className="list-inside space-y-3 text-neutral-100 sm:text-lg">
        {skillList.map((skill, i) => (
          <li key={i} className="leading-relaxed">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillListCard;