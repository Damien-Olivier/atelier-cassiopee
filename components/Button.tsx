import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'outline', children, className = '', ...props }) => {
  const baseStyles = "uppercase tracking-[0.2em] font-sans font-light text-sm py-4 px-10 transition-all duration-500 ease-out";
  
  const variants = {
    outline: "border border-luxury-white text-luxury-white bg-transparent hover:bg-luxury-white hover:text-luxury-black hover:border-transparent",
    ghost: "text-luxury-white border-b border-transparent hover:border-luxury-white pb-1 px-0"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;