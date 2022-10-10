interface DataShape {
  id: string;
  name: string;
  username: string;
  location: string;
  caption: string;
  mainimg: string;
  profileimg: string;
  likes: string;
  time: string;
  comments: string;
  status: string;
}

const data: DataShape[] = [
  {
    id: '1',
    name: 'Alejandro Solarte',
    username: 'a.solarte1',
    location: 'Club del departamento',
    caption: 'Sky is not longer the limit',
    mainimg: './assets/solarte-post.jpg',
    profileimg: './assets/profile-img.png',
    likes: '215',
    time: '28 minutes',
    comments: '14',
    status: ''
   },
   {
    id: '2',
    name: 'Lionel Messi',
    username: 'leomessi',
    location: 'Argentina',
    caption: 'Vamo a gana el mundial',
    mainimg: './assets/messi-post.jpg',
    profileimg: './assets/messi-profile.jpg',
    likes: '1.547.298',
    time: '2 hours',
    comments: '459.563',
    status: 'Followed by dualipa +12 more'
   },
   {
    id: '3',
    name: 'Dua Lipa',
    username: 'dualipa',
    location: 'Bogotá, Colombia',
    caption: 'Show 80 - Bogotá, Colombia',
    mainimg: './assets/dua-post.jpg',
    profileimg: './assets/dua-profile.jpg',
    likes: '578,875',
    time: '11 hours',
    comments: '3.026',
    status: 'Followed by brunomars +8 more'
   },
   {
    id: '4',
    name: 'Chris Martin',
    username: 'notchrismartin',
    location: 'Bogotá, Colombia',
    caption: 'Sky full of stars',
    mainimg: './assets/chris-post.jpg',
    profileimg: './assets/chris-profile.jpg',
    likes: '628.357',
    time: '2 days',
    comments: '3.877',
    status: 'New to Instagram'
   },

   {
    id: '5',
    name: 'Marshall Mathers',
    username: 'eminem',
    location: 'Super Bowl',
    caption: 'I\'m slim shady',
    mainimg: './assets/eminem-post.jpg',
    profileimg: './assets/eminem-profile.jpg',
    likes: '350.076',
    time: '3 days',
    comments: '8.784',
    status: 'Followed by dualipa +3 more'
   },

   {
    id: '6',
    name: 'Bruno Mars',
    username: 'brunomars',
    location: 'Baha Mar',
    caption: 'Slide for the vibe',
    mainimg: './assets/bruno-post.jpg',
    profileimg: './assets/bruno-profile.jpg',
    likes: '458.297',
    time: '5 days',
    comments: '1.605',
    status: 'Followed by notchrismartin +2 more'
   },
   
];

export default data;
