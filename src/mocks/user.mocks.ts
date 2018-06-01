import { User } from '../models/user.interface'

const userList : User[] = [
    {
        name : 'Guna',
        company : 'Cisco',
        location : 'Banglore',
        bio : 'I Make vedios on favourite technologies',
        avatar_url: 'https://avatars1.githubusercontent.com/u/22883945?s=460&v=4',
        email: 'guna@gmail.com'

    },
    {
        name : 'Guna',
        company : 'Techm',
        location : 'chennai',
        bio : 'Vetti',
        avatar_url: 'https://avatars1.githubusercontent.com/u/22883945?s=460&v=4',
        email: 'gunatm@gmail.com'

    },
    {
        name : 'Dave',
        company : 'Cisco',
        location : 'Alpha',
        bio : 'Coding',
        avatar_url: 'https://avatars0.githubusercontent.com/u/112699?s=460&v=4',
        email: 'dave@gmail.com'
        
    }
];

export const USER_LIST = userList;