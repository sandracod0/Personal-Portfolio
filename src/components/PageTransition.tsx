
import React from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

type PageTransitionProps = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  
  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.pathname}
        timeout={400}
        classNames="page"
        unmountOnExit
      >
        <div className="page-transition w-full min-h-screen">
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}
