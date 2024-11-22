class Loader extends HTMLElement {
    constructor() {
        super();
        this.size = this.getAttribute('size') || 'medium';
        this.color = this.getAttribute('color') || 'blue';
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const sizes = {
            small: 24,
            medium: 32,
            large: 48
        };

        const colors = {
            blue: 'var(--ios-blue)',
            white: '#FFFFFF',
            gray: 'var(--ios-gray)'
        };

        const size = sizes[this.size];
        const color = colors[this.color];

        this.innerHTML = `
            <div class="loader" style="
                width: ${size}px;
                height: ${size}px;
                border: ${size/8}px solid ${color}20;
                border-top-color: ${color};
                border-radius: 50%;
                animation: spin 1s linear infinite;
            "></div>
        `;

        this.style.cssText = `
            display: inline-flex;
            align-items: center;
            justify-content: center;
        `;
    }
}

customElements.define('app-loader', Loader);