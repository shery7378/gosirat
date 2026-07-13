import { ElementType, ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    as?: ElementType;
}

export const Container = ({ children, className = "", as: Component = "div" }: ContainerProps) => {
    return (
        <Component className={`w-full max-w-[1320px] mx-auto ${className}`} data-aos="fade-in">
            {children}
        </Component>
    );
};
