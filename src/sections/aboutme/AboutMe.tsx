import React from "react";
import { FaUser } from "react-icons/fa";
import CustomTittle from "../../components/CustomTitle/CustomTittle";

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="px-10 py-10">
      <div className="flex justify-center gap-4 text-5xl">
        <FaUser />
        <CustomTittle
          text="Sobre mim"
          as="h3"
          className="font-bold text-gray-300 mb-8"
        />
      </div>

      <p className="text-lg md:text-xl leading-relaxed mb-6">
        Atualmente sou{" "}
        <span className="text-cyan-400 font-medium">
          Coordenador de Desenvolvimento
        </span>{" "}
        na <span className="text-cyan-400 font-medium">Neomode</span>, atuando
        como <span className="text-cyan-400 font-medium">Product Owner</span>{" "}
        nas frentes de implantação e integração para o varejo omnichannel.
      </p>

      <p className="text-lg md:text-xl leading-relaxed mb-6">
        Tenho sólida experiência em homologação e desenvolvimento de integrações
        com plataformas como <span className="text-cyan-400">VTEX</span>,{" "}
        <span className="text-cyan-400">Shopify</span>,{" "}
        <span className="text-cyan-400">Linx Digital</span>,{" "}
        <span className="text-cyan-400">TOTVS Moda</span>,{" "}
        <span className="text-cyan-400">Salesforce</span>, entre outras, além de
        gateways de pagamento e antifraude como{" "}
        <span className="text-cyan-400">PagarMe</span>,{" "}
        <span className="text-cyan-400">Braspag</span> e{" "}
        <span className="text-cyan-400">ClearSale</span>.
      </p>

      <p className="text-lg md:text-xl leading-relaxed mb-6">
        Lidero a equipe técnica com foco em{" "}
        <span className="text-cyan-400">documentação clara</span>,{" "}
        <span className="text-cyan-400">automação de processos no Jira</span> e
        uso de <span className="text-cyan-400">Kanban</span> para gestão de
        tarefas e backlog. Minha missão é garantir que os projetos estejam
        sempre alinhados com os objetivos estratégicos da empresa.
      </p>

      <p className="text-lg md:text-xl leading-relaxed">
        Já participei da publicação de e-commerces de grandes marcas como{" "}
        <span className="text-cyan-400">Electrolux</span>,{" "}
        <span className="text-cyan-400">Crocs</span>,{" "}
        <span className="text-cyan-400">PatBo</span>,{" "}
        <span className="text-cyan-400">Hope</span>,{" "}
        <span className="text-cyan-400">Samsonite</span>,{" "}
        <span className="text-cyan-400">Le Postiche</span> entre outras. Sou
        apaixonado por inovação, eficiência e pessoas.
      </p>
      <div className="display flex justify-center">
        {/* <LottieCustomView
          src={developerGears}
          className="w-2/3 h-auto object-cover hover:blur-sm transition-all duration-300"
        /> */}
      </div>
    </section>
  );
};