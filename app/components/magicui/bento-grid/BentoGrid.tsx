// BentoGrid.tsx
import React from 'react';

const BentoGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-4 gap-4"> {/* Puedes ajustar grid-cols para tener más o menos columnas */}
      {children}
    </div>
  );
};

export default BentoGrid;
