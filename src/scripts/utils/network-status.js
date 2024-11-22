import Toast from '../views/components/toast';

const NetworkStatus = {
    init() {
        this._initializeNetworkStatus();
    },

    _initializeNetworkStatus() {
        window.addEventListener('online', () => {
            Toast.success('Back online! You\'re connected to the internet.');
            this._updateNetworkStatus(true);
        });

        window.addEventListener('offline', () => {
            Toast.warning('You\'re offline. Some features may be limited.');
            this._updateNetworkStatus(false);
        });

        // Initial check
        if (!navigator.onLine) {
            this._updateNetworkStatus(false);
        }
    },

    _updateNetworkStatus(isOnline) {
        const networkStatusElement = document.createElement('div');
        networkStatusElement.id = 'networkStatus';
        networkStatusElement.className = isOnline ? 'network-status online' : 'network-status offline';
        networkStatusElement.setAttribute('aria-live', 'polite');
        
        const existingStatus = document.getElementById('networkStatus');
        if (existingStatus) {
            existingStatus.remove();
        }
        
        document.body.appendChild(networkStatusElement);

        if (!isOnline) {
            this._initializeOfflineMode();
        }
    },

    _initializeOfflineMode() {
        const offlineFallback = `
            <div class="offline-fallback">
                <div class="offline-content">
                    <div class="offline-icon">📡</div>
                    <h2>You're Offline</h2>
                    <p>But don't worry! You can still:</p>
                    <ul>
                        <li>View previously loaded restaurants</li>
                        <li>Access your favorite restaurants</li>
                        <li>Read cached reviews</li>
                    </ul>
                    <button class="retry-button" onclick="window.location.reload()">
                        Try Again
                    </button>
                </div>
            </div>
        `;

        const mainContent = document.querySelector('#mainContent');
        if (!navigator.onLine && mainContent) {
            mainContent.innerHTML = offlineFallback;
        }
    },

    async checkConnectivity() {
        try {
            const response = await fetch('/ping');
            return response.status === 200;
        } catch (error) {
            return false;
        }
    },
};

export default NetworkStatus;