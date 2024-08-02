// app/components/Section.tsx
import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    description?: string;
    children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, description, children }) => {
    return (
        <section id={id}>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
            {children}
        </section>
    );
};

export default Section;
