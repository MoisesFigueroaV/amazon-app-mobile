interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children}
    </section>
  );
}
