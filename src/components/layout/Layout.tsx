import React from 'react';
import MainNavigation from './MainNavigation';

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
