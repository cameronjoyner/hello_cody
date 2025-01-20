import React from 'react';

interface SlideContainerProps {
    children: React.ReactNode[];
}

const SlideContainer: React.FC<SlideContainerProps> = ({ children }) => {
    return (
      <div className={`grid ${children.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-6 text-center`}>
        {children}
      </div>
    );
};

export default SlideContainer;