const createRestaurantItemTemplate = (restaurant) => `
    <article class="restaurant-item">
        <div class="restaurant-item__header">
            <img class="restaurant-item__header__poster lazyload"
                 data-src="${restaurant.pictureId}"
                 alt="${restaurant.name}"
            >
            <div class="restaurant-item__header__rating">
                ⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span>
            </div>
        </div>
        <div class="restaurant-item__content">
            <h3>
                <a href="#/detail/${restaurant.id}">${restaurant.name}</a>
            </h3>
            <p class="restaurant-item__city">📍 ${restaurant.city}</p>
            <p class="restaurant-item__description">${restaurant.description}</p>
            <button class="restaurant-item__favorite ${restaurant.favorite ? 'favorite' : ''}" aria-label="favorite restaurant">
                ${restaurant.favorite ? '❤️' : '🤍'}
            </button>
        </div>
    </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant-detail">
        <div class="restaurant-detail__header">
            <img class="restaurant-detail__poster lazyload"
                 data-src="${restaurant.pictureId}"
                 alt="${restaurant.name}"
            >
            <div class="restaurant-detail__info">
                <h2 class="restaurant-detail__name">${restaurant.name}</h2>
                <p class="restaurant-detail__rating">⭐️ ${restaurant.rating}</p>
                <p class="restaurant-detail__city">📍 ${restaurant.city}</p>
                <button class="restaurant-detail__favorite ${restaurant.favorite ? 'favorite' : ''}" 
                        aria-label="favorite restaurant">
                    ${restaurant.favorite ? '❤️' : '🤍'}
                </button>
            </div>
        </div>
        <div class="restaurant-detail__content">
            <div class="restaurant-detail__description">
                <h3>Description</h3>
                <p>${restaurant.description}</p>
            </div>
            <div class="restaurant-detail__comments">
                <h3>Comments</h3>
                ${restaurant.comments.length ? `
                    <div class="comments-list">
                        ${restaurant.comments.map((comment) => `
                            <div class="comment-item">
                                <div class="comment-item__header">
                                    <p class="comment-item__user">${comment.user}</p>
                                    <p class="comment-item__date">${comment.date}</p>
                                </div>
                                <p class="comment-item__content">${comment.content}</p>
                            </div>
                        `).join('')}
                    </div>
                ` : '<p>No comments yet</p>'}
            </div>
        </div>
    </div>
`;

export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
};