import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';

const LikeButtonPresenter = {
    async init({ likeButtonContainer, restaurant }) {
        this._likeButtonContainer = likeButtonContainer;
        this._restaurant = restaurant;

        await this._renderButton();
    },

    async _renderButton() {
        try {
            const { id } = this._restaurant;
            const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);

            if (restaurant) {
                this._renderLiked();
            } else {
                this._renderLike();
            }
        } catch (err) {
            console.error('Failed to render like button:', err);
            this._renderLike();
        }
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async (event) => {
            event.stopPropagation();
            await this._addToFavorite();
        });
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async (event) => {
            event.stopPropagation();
            await this._removeFromFavorite();
        });
    },

    async _addToFavorite() {
        try {
            await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
            this._renderButton();
            
            // Haptic feedback
            if ('vibrate' in navigator) {
                navigator.vibrate(50);
            }
        } catch (err) {
            console.error('Failed to add to favorite:', err);
        }
    },

    async _removeFromFavorite() {
        try {
            await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
            this._renderButton();
            
            // Haptic feedback
            if ('vibrate' in navigator) {
                navigator.vibrate(50);
            }
        } catch (err) {
            console.error('Failed to remove from favorite:', err);
        }
    },
};

export default LikeButtonPresenter;