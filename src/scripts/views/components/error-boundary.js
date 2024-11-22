class ErrorBoundary extends HTMLElement {
    constructor() {
        super();
        this.message = this.getAttribute('message') || 'Something went wrong';
        this.retry = this.hasAttribute('retry');
    }

    connectedCallback() {
        this.render();
        if (this.retry) {
            this.initializeRetryButton();
        }
    }

    render() {
        this.innerHTML = `
            <div class="error-boundary">
                <div class="error-boundary__content">
                    <div class="error-boundary__icon">❌</div>
                    <h2 class="error-boundary__title">Oops!</h2>
                    <p class="error-boundary__message">${this.message}</p>
                    ${this.retry ? `
                        <button class="form-button retry-button">
                            Try Again
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
    }

    initializeRetryButton() {
        const retryButton = this.querySelector('.retry-button');
        retryButton.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('retry', {
                bubbles: true
            }));
        });
    }
}

customElements.define('error-boundary', ErrorBoundary);