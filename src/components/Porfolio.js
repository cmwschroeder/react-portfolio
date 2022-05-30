import React, { useState } from 'react';
import NavBar from './NavBar';
import About from './pages/About';

const styles = {
  heroStyle: {
    backgroundImage: "url('/images/black-and-gold-background.jpg')",
  }
}

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
      <section className="hero min-1/2" style={styles.heroStyle}>
        <div className="hero-content flex-col lg:flex-row">
          <img src="/images/my_picture.jpeg" className="sm:max-w-md rounded-lg shadow-2xl" alt="Me"/>
          <div>
            <h1 className="text-5xl font-bold">Christian Schroeder</h1>
          </div>
        </div>
      </section>

      {renderPage()}
    </div>
  );
}

export default Portfolio;