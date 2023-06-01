import { User } from './user';

export class CurrentUser {
    loggedIn: Boolean = false;
    user: User = new User();    
}