import React from "react";
import CustomTitle from "../CustomTitle/CustomTittle";

interface SiteEmbedCardProps {
  title: string;
  description: string;
  siteUrl: string;
}

export const SiteEmbedCard: React.FC<SiteEmbedCardProps> = ({
  title,
  description,
  siteUrl,
}) => {
  return (
    <div className="text-neutral-100 rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto my-6 p-6">
      <CustomTitle
        text={title}
        as="h3"
        className="text-2xl font-bold text-cyan-400 mb-2"
      />
      <p className="text-neutral-300 mb-4">{description}</p>
      <div className="w-full aspect-video rounded-lg overflow-hidden border-2 border-white">
        <iframe
          src={siteUrl}
          title={title}
          loading="lazy"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};