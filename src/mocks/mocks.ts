import { IUser, IRepository } from '../models/interfaces';

const userList: IUser[] = [
    {
        name: 'PaulHalliday',
        company: 'PWH',
        location: 'Durham, UK',
        bio: 'I make videos on my favourite technologies. Go Angular!',
        avatar_url: 'http://i.imgur.com/jav62p6.jpg',
        email: ''
    },
    {
        name: 'JohnDoe',
        company: 'Doe and Co.',
        location: 'London, UK',
        bio: 'I love open source!',
        avatar_url: 'http://i.imgur.com/TzWcihb.png',
        email: ''
    }
]

const repositoryList: IRepository[] = [
    {
        name: 'Ionic 3 Camera',
        description: 'This repository shows the usage of the Camera within Ionic 3.',
        owner: userList[0]
    },
    {
        name: 'Ionic 3 SMS',
        description: 'This repository shows the usage of SMS within Ionic 3.',
        owner: userList[0]
    },
    {
        name: 'Ionic 3 Location',
        description: 'This repository shows the usage of Geolocation within Ionic 3.',
        owner: userList[1]
    }
];

export const REPOSITORY_LIST = repositoryList;

export const USER_LIST = userList;