interface CustomSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const CustomSection: React.FC<CustomSectionProps> = ({ ...props }) => {
  return (
    <section className={`min-h-screen my-10 py-10 ${props.className}`} id={props.id}>
      {props.children}
    </section>
  );
};
