import React from 'react';

// Definindo as props para o componente CustomTitle
interface CustomTitleProps {
  text: string; // O texto do título é obrigatório
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; // Opcional, define a tag HTML do heading, com 'h2' como padrão
  className?: string; // Opcional, para adicionar classes extras do Tailwind, se necessário
}

const CustomTitle: React.FC<CustomTitleProps> = ({
  text,
  as: Component = 'h2', // Padrão para h2 se não for especificado
  className = '', // Classes extras
}) => {
  return (
    <Component
      className={`${className}`}
    >
      {text}
    </Component>
  );
};

export default CustomTitle;