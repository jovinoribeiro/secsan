import {EventEmitter} from 'events';
import dispatcher from '../dispatcher/dispatcher';

class GroupStore extends EventEmitter {
    constructor() {
        super();
        this.availGroups = [];
    }

    setAvailableGroups(groups) {
        this.availGroups = groups;
        this.emit("available_groups_loaded");
    }
    getAvailableGroups() {
        return this.availGroups;
    }

    handleActions( action ) {
        console.log("Group Store has received an action");
        console.log(JSON.stringify(action));
        switch( action.type ) {
            case "AVAILABLE_GROUPS_LOADED" : {
                this.setAvailableGroups( action.data );
                break;
            }
        }
    }
}

const groupStore = new GroupStore();
dispatcher.register( groupStore.handleActions.bind(groupStore));

export default groupStore;