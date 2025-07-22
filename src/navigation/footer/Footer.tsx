import React from "react";
import { ContactLinksView } from "../../components/ContactLinksView/ContactLinksView";

export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-around font-mono text-lg items-center">
      <p>
        Feito com <span className="text-cyan-400">❤</span> por Lukas Burda
      </p>

      <p className="">
        <ContactLinksView
          showTitle={false}
          emailHref="mailto:lukasburdaferreira@gmail.com"
          linkedinHref="https://linkedin.com/in/lukasburdalongo"
          githubHref="https://github.com/lukas-burda"
        />
      </p>
    </footer>
  );
};
