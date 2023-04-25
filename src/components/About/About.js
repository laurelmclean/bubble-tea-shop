import React from 'react';

function About() {
    return (
        <article className='About'>
            <figure className="About-image">
                <img src={`${process.env.PUBLIC_URL}/images/jasmine.jpg`}
                    height="auto"
                    alt="Jasmine Bubble Tea"
                />
                <figcaption>Jasmine Bubble Tea</figcaption>
            </figure>
            <section className="About-info">
                <header>
                    <h1 className='About-title'>About Us</h1>
                </header>
                <p className='About-desc'>Laurel's Bubble Tea Garden is a unique and exciting business that provides customers with a delicious and refreshing experience in the heart of the city. As one of the leading bubble tea shops in the area, Laurel's Bubble Tea Garden offers an extensive menu of handcrafted teas, smoothies, and snacks that are made from high-quality ingredients and fresh fruit. Whether you're looking for a classic milk tea or a new and innovative flavor combination, the team at Laurel's Bubble Tea Garden is dedicated to creating drinks that are as delicious as they are visually stunning. With a warm and inviting atmosphere, exceptional customer service, and an unwavering commitment to quality, Laurel's Bubble Tea Garden is the perfect place to relax, socialize, and enjoy a delicious and refreshing beverage.</p>
            </section>
        </article>
    )
};

export default About;