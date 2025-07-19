import { FaBrain } from "react-icons/fa";
import CustomTitle from "../../components/CustomTitle/CustomTittle";
import SkillListCard from "../../components/SkillListView/SkillListView";

export const Skills: React.FC = () => {
  const mySoftSkills: string[] = [
  "Liderança técnica",
  "Comunicação clara",
  "Resolução de problemas",
  "Visão estratégica",
  "Proatividade",
  "Organização",
  "Gestão de tempo",
  "Foco em resultados",
  "Pensamento crítico",
  "Curiosidade técnica",
  "Capacidade analítica",
  "Tomada de decisão",
  "Escuta ativa",
];

  const myHardSkills: string[] = [
  "Desenvolvimento: C# (.NET Core), Python, Java, TypeScript, React, Next.js, React Native, SQL, NoSQL (Cosmos DB, PostgreSQL)",
  "Infraestrutura: Azure, AWS, Docker, Kubernetes, VMware ESXi, Windows Server, Debian Server, NAS (OMV), Mikrotik, Ubiquiti, GPON, WMAN",
  "Integrações: APIs REST/SOAP, Swagger/OpenAPI, Postman, Webhooks, Microservices, TMS, APIs de logística e pagamento",
  "Varejo & E-commerce: Omnicanalidade, ERPs, TMS, Marketplaces, Integrações com sistemas legados",
  "Plataformas: VTEX, Shopify, Tray, Nuvemshop, Loja Integrada, Bling, Linx ERP/OMS, Totvs Moda, Sankhya, eMillennium, Microvix, DataSystem, Cigam, Presence",
  "Cloud & DevOps: GitHub Actions, CI/CD, Monitoramento, Otimização de custos e performance, Arquitetura escalável",
  "Gestão & Metodologias: Scrum, Kanban, Agile, Gestão de backlog e releases, Atlassian Suite (Jira, Confluence), Product Ownership técnico",
  "Documentação & Suporte: Documentação técnica (interna e pública), Suporte a times e parceiros (APIs/integradores), Experiência do desenvolvedor (DX)"
];
  return (
    <section id="skills" className="my-10 py-10">
      <div className="flex justify-center gap-4 text-5xl font-bold text-gray-300 mb-8">
        <FaBrain />
        <CustomTitle
          text="Soft & Hard Skills"
          as="h3"
          className=" font-bold mb-8 "
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-2">
        <SkillListCard skillList={mySoftSkills} title="SoftSkills" />
        <SkillListCard skillList={myHardSkills} title="HardSkills" />
      </div>
    </section>
  );
};
