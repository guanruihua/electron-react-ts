import React from 'react';
import './index.scss';

function Header(props: any) {
  const { children, ...rest } = props;
  return (
    <header className="rh-header" {...rest}>
      {children}
    </header>
  );
}

function Content(props: any) {
  const { children, ...rest } = props;
  return (
    <main className="rh-content" {...rest}>
      {children}
    </main>
  );
}

function Footer(props: any) {
  const { children, ...rest } = props;
  return (
    <footer className="rh-footer" {...rest}>
      {props.children}
    </footer>
  );
}

function Sider(props: any) {
  const { children, ...rest } = props;
  return (
    <div className="rh-sider" {...rest}>
      {children}
    </div>
  );
}

function Layout(props: any): any {
  const { children, ...rest } = props;
  return (
    <div className="rh-layout" {...rest}>
      {children}
    </div>
  );
}

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Sider = Sider;

export default Layout;
