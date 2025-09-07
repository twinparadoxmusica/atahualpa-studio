'use client';
import PropTypes from 'prop-types';
import NavBar from '../NavBar'; // Adjust the path if needed
import Footer from '../Footer'; // Adjust the path as necessary

const Layout = ({ children }) => (
  <>
    <NavBar />
    <main className="layout-container">{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
