import React, { Fragment } from 'react';
import MainNavigation from './MainNavigation';

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps): JSX.Element => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
