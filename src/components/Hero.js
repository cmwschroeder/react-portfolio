import React from 'react';

const styles = {
    heroStyle: {
        backgroundImage: "url('/images/black-and-gold-background.jpg')",
    }
}

function Hero() {
    return (
        <section className="hero min-1/2" style={styles.heroStyle}>
            <div className="hero-content flex-col lg:flex-row">
                <img src="/images/my_picture.jpeg" className="sm:max-w-md rounded-lg shadow-2xl" alt="Me" />
                <div>
                    <h1 className="text-5xl font-bold">Christian Schroeder</h1>
                </div>
            </div>
        </section>
    )
}

export default Hero;