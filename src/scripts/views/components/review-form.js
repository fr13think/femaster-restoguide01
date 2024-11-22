class ReviewForm extends HTMLElement {
    constructor() {
        super();
        this.restaurantId = this.getAttribute('restaurant-id');
    }

    connectedCallback() {
        this.render();
        this.initializeForm();
    }

    render() {
        this.innerHTML = `
            <form id="reviewForm" class="review-form">
                <div class="form-group">
                    <label for="name" class="form-label">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        class="form-input" 
                        required 
                        placeholder="Enter your name"
                        minlength="3"
                    >
                </div>
                
                <div class="form-group">
                    <label for="review" class="form-label">Review</label>
                    <textarea 
                        id="review" 
                        name="review" 
                        class="form-input form-textarea" 
                        required 
                        placeholder="Share your experience"
                        minlength="10"
                    ></textarea>
                </div>
                
                <div class="form-group">
                    <label class="form-label">Rating</label>
                    <div class="rating-input">
                        ${this._createRatingInputs()}
                    </div>
                </div>
                
                <button type="submit" class="form-button">
                    Submit Review
                </button>
            </form>
        `;
    }

    _createRatingInputs() {
        let ratingInputs = '';
        for (let i = 5; i >= 1; i--) {
            ratingInputs += `
                <label class="form-radio">
                    <input type="radio" name="rating" value="${i}" ${i === 5 ? 'checked' : ''}>
                    <span class="form-radio__mark"></span>
                    ${i} Star${i !== 1 ? 's' : ''}
                </label>
            `;
        }
        return ratingInputs;
    }

    initializeForm() {
        const form = this.querySelector('#reviewForm');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const review = {
                id: `r-${Date.now()}`,
                restaurantId: this.restaurantId,
                name: formData.get('name'),
                review: formData.get('review'),
                rating: parseInt(formData.get('rating')),
                date: new Date().toISOString().split('T')[0],
            };

            try {
                // In a real app, this would be an API call
                console.log('Submitting review:', review);
                
                // Simulate success
                this.dispatchEvent(new CustomEvent('review-submitted', {
                    detail: { review },
                    bubbles: true,
                }));
                
                // Reset form
                form.reset();
                
                // Show success message
                this._showMessage('Review submitted successfully!', 'success');
            } catch (error) {
                console.error('Error submitting review:', error);
                this._showMessage('Failed to submit review. Please try again.', 'error');
            }
        });
    }

    _showMessage(message, type = 'success') {
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = message;
        
        this.insertBefore(messageElement, this.querySelector('form'));
        
        setTimeout(() => {
            messageElement.remove();
        }, 3000);
    }
}

customElements.define('review-form', ReviewForm);