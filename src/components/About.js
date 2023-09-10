import React from 'react';

const About = () => {
  return (
    <div className='about'>
    <main>
        <section class="about">
            <h2>Our Mission</h2>
            <p>Welcome to Shammy Pet Adoption Website, where we believe every pet deserves a loving home. Our mission is to connect pets in need with caring individuals and families.</p>
        </section>
        <section class="team">
            <h2>Meet Our Team</h2>
            <div class="team-member">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlJTEQEfIwrFybepObPX1DMOsX6uNMxYnOmbMla73W3OTxWXn4KHzkr_E4dOwpS7JQgw&usqp=CAU" alt="Team Member 1"/>
                <h3>Alvin Gikunji</h3>
                <p>Founder & CEO</p>
            </div>
            <div class="team-member">
                <img src="https://images.unsplash.com/photo-1563132337-f159f484226c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBsYWR5fGVufDB8fDB8fHww&w=1000&q=80" alt="Team Member 2"/>
                <h3>Cynthia Onzere</h3>
                <p>Marketing Manager</p>
            </div>  
        </section>
    </main>
    <footer>
        <p>&copy; 2023 Shammy Pet Adoption Website</p>
    </footer>
        </div>
  );
};

export default About;