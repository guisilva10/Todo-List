import React from 'react';
import './styles.css';

interface Props{
  onClick: () => void;
  children:string;
}

const Button: React.FC <Props>  = ({children,onClick})  => {
      return(
        <button className="btn-component" onClick={onClick}>
          {children}
        </button>
      )
}

export default Button