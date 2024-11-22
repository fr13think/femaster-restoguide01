import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
        return `
            <div id="restaurant" class="restaurant"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        
        try {
            const response = await fetch('/data/DATA.json');
            const responseJson = await response.json();
            const restaurant = responseJson.restaurants.find(r => r.id === url.id);
            
            const restaurantContainer = document.querySelector('#restaurant');
            restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
        } catch (error) {
            console.error('Error:', error);
        }
    },
};

export default Detail;