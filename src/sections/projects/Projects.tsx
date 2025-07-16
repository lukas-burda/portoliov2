
import { FaCode } from "react-icons/fa";
import CustomTitle from "../../components/CustomTitle/CustomTittle";
import { SiteEmbedCard } from "../../components/SiteEmbedCard/SiteEmbedCard";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="px-10 my-10 py-10">
      <div className="flex justify-center gap-4 text-5xl">
        <FaCode />
        <CustomTitle
          text="Projetos mais recentes"
          as="h3"
          className="text-3xl md:text-5xl font-bold text-white-400"
        />
      </div>

      <SiteEmbedCard
        title="Museu Virtual Romano Cigano"
        description="Projeto histórico e cultural sobre a imigração cigana no Brasil. Desenvolvido e publicado em WordPress com Elementor."
        siteUrl="https://museuromanocuritiba.com/"
      />
      <div className="flex justify-center">
        
      </div>
    </section>
  );
};