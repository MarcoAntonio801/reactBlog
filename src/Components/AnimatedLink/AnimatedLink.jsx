import React from 'react';
import { flushSync } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import './AnimatedLink.css'

const AnimatedLink = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = (ev) => {
    ev.preventDefault();
    document.startViewTransition(() => {
      flushSync(() => {
        navigate(to);
      });
    });
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default AnimatedLink;