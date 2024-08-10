// app/components/Section.tsx
import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    description?: string; // Hacer que description sea opcional
    titleClassName?: string;
    descriptionClassName?: string;
    children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, description, titleClassName, descriptionClassName, children }) => {
    return (
        <section id={id} className="section">
            <h2 className={titleClassName}>{title}</h2>
            {description && <p className={descriptionClassName}>{description}</p>}
            {children}
        </section>
    );
};

export default Section;
