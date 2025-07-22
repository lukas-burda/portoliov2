import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import CustomTitle from "../CustomTitle/CustomTittle";

interface ContactLinksViewProps {
  linkedinHref: string;
  githubHref: string;
  emailHref: string;
  showTitle?: boolean;
}

export const ContactLinksView: React.FC<ContactLinksViewProps> = (props) => {
  return (
    <div>
      {props.showTitle && (
        <CustomTitle
          text="Contatos"
          as="h2"
          className="text-md text-center font-bold"
        />
      )}
      <div className="flex justify-center m-5  space-x-6 text-3xl">
        <a
          href={props.githubHref}
          className="hover:text-cyan-400 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href={props.linkedinHref}
          className="hover:text-cyan-400 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href={"mailto:" + props.emailHref}
          className="hover:text-cyan-400 transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};