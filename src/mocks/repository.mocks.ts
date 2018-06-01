import { Repository } from '../models/repositories.interface';
import { USER_LIST } from '../mocks/user.mocks';

const repositoryList : Repository[] = [
    {
        name : 'Ionic3 Camera',
        description : 'Ionic3 Camera',
        owner: USER_LIST[0]
    },
    {
        name : 'Ionic3 SMS',
        description : 'Ionic3 SMS',
        owner: USER_LIST[0]
    },
    {
        name : 'Ionic3 Geolocation',
        description : 'Ionic3 Geolocation',
        owner: USER_LIST[0]
    }
];

export const REPOSITORY_LIST = repositoryList;