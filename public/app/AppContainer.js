import './Components/Export.js';
import data from './data.js';
import { Attribute } from './Components/Profile/Profile.js';
var Screens;
(function (Screens) {
    Screens[Screens["login"] = 0] = "login";
    Screens[Screens["register"] = 1] = "register";
    Screens[Screens["home"] = 2] = "home";
})(Screens || (Screens = {}));
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.screen = Screens.register;
        this.menu = [];
        this.profiles = [];
        this.suggestions = [];
        this.stories = [];
        this.profswitch = [];
        this.attachShadow({ mode: 'open' });
        const instaMenu = this.ownerDocument.createElement('top-menu');
        this.menu.push(instaMenu);
        const ProfSwitch = this.ownerDocument.createElement('prof-switch');
        this.profswitch.push(ProfSwitch);
        data.forEach((user) => {
            const suggested = this.ownerDocument.createElement('suggets-profiles');
            suggested.setAttribute(Attribute.username, user.username);
            suggested.setAttribute(Attribute.profileimg, user.profileimg);
            suggested.setAttribute(Attribute.status, user.status);
            if (user.id === '1') {
                return;
            }
            else if (user.id > '6') {
                return;
            }
            this.suggestions.push(suggested);
        });
        data.forEach((user) => {
            const story = this.ownerDocument.createElement('ig-stories');
            story.setAttribute(Attribute.username, user.username);
            story.setAttribute(Attribute.profileimg, user.profileimg);
            if (user.id === '1') {
                return;
            }
            else if (user.id > '6') {
                return;
            }
            this.stories.push(story);
        });
        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement('my-profile');
            profileCard.setAttribute(Attribute.username, user.username);
            profileCard.setAttribute(Attribute.caption, user.caption);
            profileCard.setAttribute(Attribute.likes, user.likes);
            profileCard.setAttribute(Attribute.location, user.location);
            profileCard.setAttribute(Attribute.mainimg, user.mainimg);
            profileCard.setAttribute(Attribute.comments, user.comments);
            profileCard.setAttribute(Attribute.time, user.time);
            profileCard.setAttribute(Attribute.profileimg, user.profileimg);
            this.profiles.push(profileCard);
        });
    }
    connectedCallback() {
        var _a;
        this.render();
        const register = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('app-register');
        register === null || register === void 0 ? void 0 : register.addEventListener('user-registered', () => {
            var _a;
            this.screen = Screens.login;
            this.render();
            const login = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('ig-login');
            login === null || login === void 0 ? void 0 : login.addEventListener('go-home', () => {
                this.screen = Screens.home;
                this.render();
            });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        switch (this.screen) {
            case Screens.register:
                this.shadowRoot.innerHTML = '<app-register></app-register>';
                break;
            case Screens.login:
                this.shadowRoot.innerHTML = '<ig-login></ig-login>';
                break;
            case Screens.home:
                this.shadowRoot.innerHTML = '';
                this.menu.forEach((menu) => {
                    var _a;
                    (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(menu);
                });
                this.stories.forEach((story) => {
                    var _a;
                    (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(story);
                });
                this.profswitch.forEach((prof) => {
                    var _a;
                    (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(prof);
                });
                this.suggestions.forEach((suggest) => {
                    var _a;
                    (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(suggest);
                });
                this.profiles.forEach((profile) => {
                    var _a;
                    (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
                });
                break;
            default:
                break;
        }
    }
}
customElements.define('app-container', AppContainer);
