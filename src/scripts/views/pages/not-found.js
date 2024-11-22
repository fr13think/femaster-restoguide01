const NotFound = {
    async render() {
        return `
            <div class="not-found">
                <div class="not-found__content">
                    <div class="not-found__icon">404</div>
                    <h2 class="not-found__title">Page Not Found</h2>
                    <p class="not-found__message">Sorry, we couldn't find the page you're looking for.</p>
                    <div class="not-found__actions">
                        <a href="#/home" class="not-found__button">Back to Home</a>
                        <button 
                            onclick="window.history.back()" 
                            class="not-found__button not-found__button--secondary"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    async afterRender() {
        // Additional functionality if needed
    },
};

export default NotFound;