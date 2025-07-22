import profileImageFile from "../../assets/lukas-burda-logo-profile.jpg";
import { ContactLinksView } from "../../components/ContactLinksView/ContactLinksView";
import { CustomSection } from "../../components/CustomSection/CustomSection";
import { ProfileImageView } from "../../components/ProfileImageView/ProfileImageView";
export const HomePage: React.FC = () => {
  return (
    <CustomSection id="home" className="flex justify-center">
      <div className="flex flex-col items-center">
        {/* Imagem + Título */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <ProfileImageView src={profileImageFile} alt="Perfil" />
          <h1 className="text-1xl sm:text-4xl md:text-5xl font-bold leading-snug">
            👋 Olá, eu sou o <span className="text-cyan-400">Lukas Burda</span>!
          </h1>
        </div>

        {/* Subtítulo */}
        <p className="font-family-sans text-base sm:text-lg md:text-xl mb-8 max-w-8xl">
          Atuo como Coordenador Técnico de Produto e Integrações, com atividades
          que envolvem gestão de backlog, definição de requisitos, coordenação
          de sprints, qualidade de entregas e suporte técnico a integrações com
          parceiros externos. Desenvolvedor com experiência em diversas
          tecnologias e linguagens de programação.
        </p>

        {/* Contatos */}
        <ContactLinksView
          showTitle={true}
          emailHref="mailto:lukasburdaferreira@gmail.com"
          linkedinHref="https://linkedin.com/in/lukasburdalongo"
          githubHref="https://github.com/lukas-burda"
        />

        {/* Botão CTA */}

        <div >
          <a href="#about" className="inline-block mt-2 px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-neutral-800 text-center rounded-lg transition-colors font-medium">
            Saiba mais sobre mim
          </a>
        </div>
      </div>
    </CustomSection>
  );
};
