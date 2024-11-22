class SkeletonLoader extends HTMLElement {
    constructor() {
        super();
        this.type = this.getAttribute('type') || 'card';
        this.count = parseInt(this.getAttribute('count')) || 1;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        let skeletonHTML = '';
        
        for (let i = 0; i < this.count; i++) {
            switch (this.type) {
                case 'card':
                    skeletonHTML += this._createCardSkeleton();
                    break;
                case 'detail':
                    skeletonHTML += this._createDetailSkeleton();
                    break;
                case 'review':
                    skeletonHTML += this._createReviewSkeleton();
                    break;
                default:
                    skeletonHTML += this._createCardSkeleton();
            }
        }

        this.innerHTML = `
            <div class="restaurants-skeleton">
                ${skeletonHTML}
            </div>
        `;
    }

    _createCardSkeleton() {
        return `
            <div class="restaurant-skeleton">
                <div class="restaurant-skeleton__image skeleton"></div>
                <div class="restaurant-skeleton__content">
                    <div class="restaurant-skeleton__title skeleton"></div>
                    <div class="restaurant-skeleton__info skeleton"></div>
                    <div class="restaurant-skeleton__description skeleton"></div>
                </div>
            </div>
        `;
    }

    _createDetailSkeleton() {
        return `
            <div class="restaurant-detail-skeleton">
                <div class="restaurant-detail-skeleton__header skeleton"></div>
                <div class="restaurant-detail-skeleton__title skeleton"></div>
                <div class="restaurant-detail-skeleton__info skeleton"></div>
                <div class="restaurant-detail-skeleton__description skeleton"></div>
            </div>
        `;
    }

    _createReviewSkeleton() {
        return `
            <div class="review-skeleton">
                <div class="review-skeleton__header">
                    <div class="review-skeleton__user skeleton"></div>
                    <div class="review-skeleton__date skeleton"></div>
                </div>
                <div class="review-skeleton__content skeleton"></div>
            </div>
        `;
    }
}

customElements.define('skeleton-loader', SkeletonLoader);