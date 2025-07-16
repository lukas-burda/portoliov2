import React from "react";

interface ProfileImageProps {
  src: string;
  alt?: string;
}

export const ProfileImageView: React.FC<ProfileImageProps> = ({ src, alt }) => {
  return (
    <div className="cursor-pointer relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 my-5 rounded-full overflow-hidden border-2 border-cyan-400 shadow-lg transition-transform hover:scale-105 mx-auto">
      <img
        
        src={src}
        alt={alt || "Foto de perfil"}
        className="w-full h-full object-cover"
      />
    </div>
  );
};