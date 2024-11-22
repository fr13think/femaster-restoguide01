const About = {
    async render() {
        return `
            <div class="about">
                <div class="about__header">
                    <h2 class="about__title">About Us</h2>
                    <p class="about__tagline">Discover the best dining experiences around you</p>
                </div>
                
                <div class="about__content">
                    <div class="about__section">
                        <h3>Our Mission</h3>
                        <p>We're dedicated to helping you find the perfect dining spot. Whether you're looking for a casual bite or fine dining, we've got you covered with detailed information about restaurants in your area.</p>
                    </div>

                    <div class="about__section">
                        <h3>Features</h3>
                        <div class="about__features">
                            <div class="feature-card">
                                <span class="feature-card__icon">🔍</span>
                                <h4>Discover</h4>
                                <p>Find restaurants based on your preferences and location</p>
                            </div>
                            
                            <div class="feature-card">
                                <span class="feature-card__icon">⭐</span>
                                <h4>Review</h4>
                                <p>Read and write reviews to help others make informed decisions</p>
                            </div>
                            
                            <div class="feature-card">
                                <span class="feature-card__icon">❤️</span>
                                <h4>Save</h4>
                                <p>Keep track of your favorite restaurants for quick access</p>
                            </div>
                        </div>
                    </div>

                    <div class="about__section">
                        <h3>Contact</h3>
                        <div class="about__contact">
                            <a href="mailto:contact@restaurantapp.com" class="contact-button">
                                <span class="material-icons">email</span>
                                Email Us
                            </a>
                            <a href="https://twitter.com/restaurantapp" target="_blank" rel="noopener noreferrer" class="contact-button">
                                <span class="material-icons">public</span>
                                Follow Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    async afterRender() {
        // Additional functionality if needed
    },
};

export default About;