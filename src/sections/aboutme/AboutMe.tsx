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
        Sou <span className="text-cyan-400">entusiasta de tecnologia</span> no geral, tenho mais de 10 anos de experiência na área de tecnologia, estudante de soluções escaláveis, integrações inteligentes e projetos que conectam negócio e performance.
      </p>
      <p className="text-lg md:text-xl leading-relaxed mb-6">
        Iniciei minha jornada em 2014 com infraestrutura e redes. Atendendo empresas de grande porte como a Província Marcas & Patentes Brasil (50+ filiais, 1.000+ colaboradores), fui promovido à liderança do setor de Helpdesk, coordenando operações críticas e implementando servidores físicos/virtuais, redes GPON, WMAN e ambientes VMware e Linux.
      </p>
      <p className="text-lg md:text-xl leading-relaxed mb-6">
        Na Neomode, cresci como <span className="text-cyan-400">Líder Técnico de Implantação</span>, coordenando backlog técnico, refinamento de tasks, dailies, testes de releases e suporte técnico à operação. Hoje atuo como Coordenador Técnico de Produto e Integrações, com atividades que envolvem gestão de backlog, definição de requisitos, coordenação de sprints, qualidade de entregas e suporte técnico a integrações com parceiros externos.
        
        Desenvolvedor com experiência em diversas tecnologias e linguagens de programação.
      </p>
      
      <p className="text-lg md:text-xl leading-relaxed mb-6">
        Participo ativamente do time que estuda otimizações de infraestrutura cloud, propondo melhorias de código e arquitetura para reduzir custos e aumentar desempenho.  
      </p>      
      <p className="text-lg md:text-xl leading-relaxed mb-6">
        Já liderei projetos de implantação de Omnicanalidade no varejo para grandes marcas como Crocs, CNS, Jogê, Livelo, Rappi e Ifood, com integrações entre marketplaces, ERPs e plataformas como VTEX, Shopify, Bling, Linx, Sankhya, Totvs e diversas outras.
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
        Hoje lidero a equipe técnica com foco em{" "}
        <span className="text-cyan-400">documentação clara</span>,{" "}
        <span className="text-cyan-400">automação de processos no Jira</span> e
        uso de <span className="text-cyan-400">Kanban</span> para gestão de
        tarefas e backlog. Minha missão é garantir que os projetos estejam
        sempre alinhados com os objetivos estratégicos da empresa.
      </p>
      
      <p className="text-lg md:text-xl leading-relaxed mb-6">
        Utilizo a suíte Atlassian (Jira e Confluence) para organizar tarefas, versionar entregas e manter uma documentação técnica clara e acessível.
      </p>  

      <p className="text-lg md:text-xl leading-relaxed mb-6">
        Sou apaixonado por inovação, eficiência e pessoas.
      </p>
      <div className="flex justify-center">
        <a
          href="https://www.linkedin.com/in/lukasburdalongo"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-10 px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#242424] rounded-lg transition-colors font-medium"
        >
          Saiba mais sobre mim
        </a>
      </div>
    </section>
  );
};