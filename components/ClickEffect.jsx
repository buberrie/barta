
'use client'; // This directive tells Next.js this component is client-side

import { useEffect } from 'react';

export const ClickEffect = ({ children }) => {
  useEffect(() => {
    const handleClick = (e) => {
      const x = e.pageX;
      const y = e.pageY;

      const span = document.createElement('span');
      span.classList.add('click_effect');
      span.style.top = y + 'px';
      span.style.left = x + 'px';
      document.body.appendChild(span);

      // Remove the span after the animation completes (assumes animation duration is 500ms)
      setTimeout(() => {
        span.remove();
      }, 500);
    };

    document.addEventListener('click', handleClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return <main>{children}</main>;
}
