import { addUser } from '../../Services/db.js';
export class AppRegister extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('app-form');
        form.addEventListener('form-fullfiled', (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            const username = evt.detail.username;
            const fullName = evt.detail.fullName;
            addUser({ email, password, fullName, username });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <section>
            <ig-register></ig-register>
        </section>
        `;
    }
}
customElements.define('app-register', AppRegister);
