class SiteHeader extends HTMLElement {
    connectedCallback() {
        const isInPagesFolder = window.location.pathname.includes('/pages/');
        const basePath = isInPagesFolder ?'../' : './';

        this.innerHTML = `
            <header>
                <p>Esty</p>

                <div class="links">
                    <a href="../pages/about.html">About Us</a>
                    <a href="../pages/gallery.html">Gallery</a>
                    <a href="../pages/contact.html">Contact Us</a>
                </div>

                <button>Contact Us Now</button>
            </header>
        `
    }
}
class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>©Esty Interior Designs @ 2026</p>
        </footer>
        `
    }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);