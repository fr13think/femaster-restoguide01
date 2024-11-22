class Toast {
    constructor() {
        this.container = document.getElementById('toast-container');
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.id = 'toast-container';
            document.body.appendChild(this.container);
        }
    }

    show(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        
        const icon = this._getIcon(type);
        
        toast.innerHTML = `
            <div class="toast__content">
                <span class="toast__icon">${icon}</span>
                <p class="toast__message">${message}</p>
            </div>
            <button class="toast__close" aria-label="Close notification">
                ×
            </button>
        `;

        const closeButton = toast.querySelector('.toast__close');
        closeButton.addEventListener('click', () => {
            this._dismiss(toast);
        });

        this.container.appendChild(toast);

        // Trigger entrance animation
        requestAnimationFrame(() => {
            toast.classList.add('toast--visible');
        });

        // Auto dismiss
        setTimeout(() => {
            this._dismiss(toast);
        }, duration);
    }

    _dismiss(toast) {
        toast.classList.remove('toast--visible');
        toast.addEventListener('transitionend', () => {
            toast.remove();
            if (this.container.children.length === 0) {
                this.container.remove();
            }
        });
    }

    _getIcon(type) {
        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };
        return icons[type] || icons.info;
    }

    success(message, duration) {
        this.show(message, 'success', duration);
    }

    error(message, duration) {
        this.show(message, 'error', duration);
    }

    warning(message, duration) {
        this.show(message, 'warning', duration);
    }

    info(message, duration) {
        this.show(message, 'info', duration);
    }
}

export default new Toast();