import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
            <div class="content">
                <h2 class="content__heading">Your Favorite Restaurants</h2>
                <div id="restaurants" class="restaurants"></div>
            </div>
        `;
    },

    async afterRender() {
        try {
            const response = await fetch('/data/DATA.json');
            const responseJson = await response.json();
            const favoriteRestaurants = responseJson.restaurants.filter(
                (restaurant) => restaurant.favorite
            );
            
            const restaurantsContainer = document.querySelector('#restaurants');
            
            if (favoriteRestaurants.length) {
                favoriteRestaurants.forEach((restaurant) => {
                    restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
                });
            } else {
                restaurantsContainer.innerHTML = `
                    <div class="restaurant-item__not__found">
                        <p>No favorite restaurants found</p>
                    </div>
                `;
            }
        } catch (error) {
            console.error('Error:', error);
        }
    },
};

export default Favorite;