import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor({ button, drawer, content }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
        });
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        
        if (!page) {
            this._content.innerHTML = `
                <div class="error-state">
                    <h2>404</h2>
                    <p>Page not found</p>
                    <a href="#/" class="back-button">Back to Home</a>
                </div>
            `;
            return;
        }

        this._content.innerHTML = await page.render();
        await page.afterRender();

        const skipLinkElement = document.querySelector('.skip-link');
        skipLinkElement.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('#mainContent').focus();
        });
    }
}

export default App;