import {EventEmitter} from 'events';
import dispatcher from '../dispatcher/dispatcher';

class UserStore extends EventEmitter {
    constructor() {
        super();
        this.user = {};
        this.userGroups = [];
    }

    saveUserAfterLogin(user) {
        this.user = user;
        this.emit("user_logged_in", user);
    }
    getCurrentUser() {
        return this.user;
    }

    setUserGroups(userGroups) {
        this.userGroups = userGroups;
        this.emit("user_groups_loaded");
    }
    getUserGroups() {
        return this.userGroups;
    }

    

    handleActions( action ) {
        console.log("User Store has received an action");
        console.log(JSON.stringify(action));
        switch( action.type ) {
            case "USER_VALIDATED" : {
                this.saveUserAfterLogin( action.user );
                break;
            }
            case "USER_FAILED_VALIDATION" : {
                this.emit("user_failed_validation");
                break;
            }
            case "USER_GROUPS_LOADED" : {
                this.setUserGroups(action.data);
            }
            default: break;
        }
    }
}

const userStore = new UserStore();
dispatcher.register( userStore.handleActions.bind(userStore) );

export default userStore;