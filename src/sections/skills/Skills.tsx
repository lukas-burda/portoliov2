import { FaBrain } from "react-icons/fa";
import CustomTitle from "../../components/CustomTitle/CustomTittle";
import SkillListCard from "../../components/SkillListView/SkillListView";

export const Skills: React.FC = () => {
  const mySoftSkills: string[] = [
    "Liderança técnica e gestão de times multifuncionais",
    "Comunicação clara com áreas técnicas e de negócios",
    "Tomada de decisão estratégica em projetos complexos",
    "Organização e autonomia em ambientes ágeis",
    "Colaboração em times cross-funcionais",
    "Documentação e padronização de processos",
  ];

  const myHardSkills: string[] = [
    "Desenvolvimento: C# .NET Core, Python, React, Next.js, React Native, SQL, NoSQL",
    "Infraestrutura: Azure, Kubernetes, VMware ESXi, Windows Server, Debian Server, NAS, Mikrotik, Ubiquiti",
    "Varejo & E-commerce: ERPs, TMS, integrações via APIs REST/SOAP",
    "Plataformas: VTEX, Shopify, Tray, Nuvemshop, Bling, Linx, Totvs, entre outros",
    "Gestão de projetos: Scrum, Agile, Atlassian Suite",
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
