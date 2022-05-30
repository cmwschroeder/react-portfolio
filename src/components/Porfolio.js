import React, { useState } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import About from './pages/About';

function Portfolio() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    // if (currentPage === 'Projects') {
    //   return <Blog />;
    // }
    // return <Contact />;
    return;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar handlePageChange={handlePageChange} />
      <Hero />
      {renderPage()}
    </div>
  );
}

export default Portfolio;