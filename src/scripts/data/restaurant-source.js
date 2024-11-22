class RestaurantSource {
    static async getAllRestaurants() {
        try {
            const response = await fetch('/data/DATA.json');
            const responseJson = await response.json();
            return responseJson.restaurants;
        } catch (error) {
            console.error('Error:', error);
            throw new Error('Failed to fetch restaurants');
        }
    }

    static async getRestaurantDetail(id) {
        try {
            const response = await fetch('/data/DATA.json');
            const responseJson = await response.json();
            const restaurant = responseJson.restaurants.find(r => r.id === id);
            
            if (!restaurant) {
                throw new Error('Restaurant not found');
            }
            
            return restaurant;
        } catch (error) {
            console.error('Error:', error);
            throw new Error('Failed to fetch restaurant detail');
        }
    }

    static async getFavoriteRestaurants() {
        try {
            const response = await fetch('/data/DATA.json');
            const responseJson = await response.json();
            return responseJson.restaurants.filter(restaurant => restaurant.favorite);
        } catch (error) {
            console.error('Error:', error);
            throw new Error('Failed to fetch favorite restaurants');
        }
    }
}

export default RestaurantSource;