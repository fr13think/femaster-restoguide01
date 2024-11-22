import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
            <div class="hero">
                <div class="hero__inner">
                    <h2 class="hero__title">Find Your Perfect Dining Experience</h2>
                    <p class="hero__tagline">Discover the best restaurants in your area</p>
                </div>
            </div>
            <div class="content">
                <h2 class="content__heading">Explore Restaurants</h2>
                <div id="restaurants" class="restaurants"></div>
            </div>
        `;
    },

    async afterRender() {
        try {
            const response = await fetch('/data/DATA.json');
            const responseJson = await response.json();
            const restaurantsContainer = document.querySelector('#restaurants');
            
            responseJson.restaurants.forEach((restaurant) => {
                restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    },
};

export default Home;