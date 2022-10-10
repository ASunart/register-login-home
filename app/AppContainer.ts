import './Components/Export.js';
import data from './data.js';

import MyProfile, {Attribute} from './Components/Profile/Profile.js';
import ProfSwitch from './Components/ProfSwitch/ProfSwitch.js';
import IgStories from './Components/Story/Story.js';
import TopMenu from './Components/TopMenu/TopMenu.js';
import SuggetsProfiles from './Components/Suggests/Suggests.js';

enum Screens {
    login,
    register,
    home
}

class AppContainer extends HTMLElement{
    
    screen: Screens = Screens.register;
    menu: TopMenu[] = [];
    profiles: MyProfile[] = [];
    suggestions: SuggetsProfiles[] = [];
    stories: IgStories[] = [];
    profswitch: ProfSwitch[] = [];

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        const instaMenu = this.ownerDocument.createElement('top-menu') as TopMenu;
        this.menu.push(instaMenu);

        const ProfSwitch = this.ownerDocument.createElement('prof-switch') as ProfSwitch;
        this.profswitch.push(ProfSwitch);

        data.forEach((user)=>{
            const suggested = this.ownerDocument.createElement('suggets-profiles') as SuggetsProfiles;
            suggested.setAttribute(Attribute.username, user.username);
            suggested.setAttribute(Attribute.profileimg, user.profileimg);
            suggested.setAttribute(Attribute.status, user.status);
            if (user.id === '1') {
                return;
            } else if(user.id > '6'){
                return;
            }
            this.suggestions.push(suggested);
        });
        
        data.forEach((user)=>{
            const story = this.ownerDocument.createElement('ig-stories') as IgStories;
            story.setAttribute(Attribute.username, user.username);
            story.setAttribute(Attribute.profileimg, user.profileimg);
            if (user.id === '1') {
                return;
            } else if(user.id > '6'){
                return;
            }
            this.stories.push(story);
        });

        data.forEach((user)=>{
            const profileCard = this.ownerDocument.createElement('my-profile') as MyProfile;
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

    connectedCallback(){
        this.render();

        const register = this.shadowRoot?.querySelector('app-register');
        register?.addEventListener('user-registered', ()=>{
            this.screen = Screens.login;
            this.render();

        const login = this.shadowRoot?.querySelector('ig-login');
        login?.addEventListener('go-home', ()=>{
            this.screen = Screens.home;
            this.render();
        });
        });

        

    }

    render(){
        if(!this.shadowRoot) return;
        switch (this.screen) {

            case Screens.register:
                this.shadowRoot.innerHTML = '<app-register></app-register>';
            break;

            case Screens.login:
                this.shadowRoot.innerHTML = '<ig-login></ig-login>';
            break;

            case Screens.home:
                this.shadowRoot.innerHTML = '';
                this.menu.forEach((menu)=>{
                    this.shadowRoot?.appendChild(menu);
                });
                this.stories.forEach((story)=>{
                    this.shadowRoot?.appendChild(story);
                });
                this.profswitch.forEach((prof)=>{
                    this.shadowRoot?.appendChild(prof);
                });
                this.suggestions.forEach((suggest)=>{
                    this.shadowRoot?.appendChild(suggest);
                });
                this.profiles.forEach((profile)=>{
                    this.shadowRoot?.appendChild(profile);
                });
                break;

            default:
                break;
        }
    }
}

customElements.define('app-container', AppContainer);