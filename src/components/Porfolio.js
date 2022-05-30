import React, { useState } from 'react';
import NavBar from './NavBar';

function Portfolio() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    // if (currentPage === 'About') {
    //   return <About />;
    // }
    // if (currentPage === 'Projects') {
    //   return <Blog />;
    // }
    // return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* {renderPage()} */}
    </div>
  );
}

export default Portfolio;