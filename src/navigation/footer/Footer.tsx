import React from "react";
import { ContactLinksView } from "../../components/ContactLinksView/ContactLinksView";

export const Footer: React.FC = () => {
  return (
    <footer className="text-white m-4 p-2 gap-4 grid grid-cols-1 md:grid-cols-3 md:text-left font-mono text-lg items-center text-center "> 
      {/* Left */}
      <div className="left-align">
        <p>
          Feito com <span className="text-cyan-600">❤</span> por Lukas Burda
        </p>
      </div>

      {/* Center */}
      <div className="center-align">Revisada em jul 2025</div>

      <div className="right-align flex justify-center md:justify-end gap-5 text-lg">
        <ContactLinksView
          showTitle={false}
          emailHref="mailto:lukasburdaferreira@gmail.com"
          linkedinHref="https://linkedin.com/in/lukasburdalongo"
          githubHref="https://github.com/lukas-burda"
        />
      </div>
    </footer>
  );
};