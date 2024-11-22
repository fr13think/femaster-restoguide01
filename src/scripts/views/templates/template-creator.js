const createRestaurantItemTemplate = (restaurant) => `
    <article class="restaurant-item">
        <div class="restaurant-item__header">
            <img class="restaurant-item__header__poster lazyload"
                 data-src="${restaurant.pictureId}"
                 alt="${restaurant.name} restaurant"
                 tabindex="0"
            >
            <div class="restaurant-item__header__rating" aria-label="rating ${restaurant.rating}">
                <span aria-hidden="true">⭐️</span>
                <span>${restaurant.rating}</span>
            </div>
        </div>
        <div class="restaurant-item__content">
            <h3><a href="#/detail/${restaurant.id}" tabindex="0">${restaurant.name}</a></h3>
            <p class="restaurant-item__city" tabindex="0" aria-label="Location: ${restaurant.city}">
                <span aria-hidden="true">📍</span> ${restaurant.city}
            </p>
            <p class="restaurant-item__description" tabindex="0">${restaurant.description}</p>
            
            ${restaurant.favorite ? `
                <button class="favorite-button active" 
                        aria-label="Remove from favorites"
                        data-id="${restaurant.id}">
                    <span aria-hidden="true">❤️</span>
                </button>
            ` : `
                <button class="favorite-button" 
                        aria-label="Add to favorites"
                        data-id="${restaurant.id}">
                    <span aria-hidden="true">🤍</span>
                </button>
            `}
        </div>
    </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant-detail">
        <div class="restaurant-detail__header">
            <img class="restaurant-detail__poster lazyload"
                 data-src="${restaurant.pictureId}"
                 alt="${restaurant.name} restaurant ambiance"
                 tabindex="0"
            >
            <div class="restaurant-detail__info">
                <h2 class="restaurant-detail__name" tabindex="0">${restaurant.name}</h2>
                <p class="restaurant-detail__rating" tabindex="0" aria-label="Rating ${restaurant.rating} out of 5">
                    <span aria-hidden="true">⭐️</span> ${restaurant.rating}
                </p>
                <p class="restaurant-detail__city" tabindex="0" aria-label="Located in ${restaurant.city}">
                    <span aria-hidden="true">📍</span> ${restaurant.city}
                </p>
            </div>
        </div>
        <div class="restaurant-detail__content">
            <div class="restaurant-detail__description">
                <h3 tabindex="0">About</h3>
                <p tabindex="0">${restaurant.description}</p>
            </div>
            
            <div class="restaurant-detail__reviews">
                <h3 tabindex="0">Customer Reviews</h3>
                ${restaurant.comments.length ? `
                    <div class="comments-list">
                        ${restaurant.comments.map((comment) => `
                            <div class="comment-item" tabindex="0">
                                <div class="comment-item__header">
                                    <p class="comment-item__user">${comment.user}</p>
                                    <p class="comment-item__date">${comment.date}</p>
                                </div>
                                <p class="comment-item__content">${comment.content}</p>
                            </div>
                        `).join('')}
                    </div>
                ` : '<p tabindex="0">No reviews yet</p>'}
            </div>
        </div>
    </div>
`;

export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
};