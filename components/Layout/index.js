'use client';
import PropTypes from 'prop-types';
import { LanguageProvider } from '../../contexts/LanguageContext';
import NavBar from '../NavBar';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <LanguageProvider>
    <NavBar />
    <main className="layout-container">{children}</main>
    <Footer />
  </LanguageProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
