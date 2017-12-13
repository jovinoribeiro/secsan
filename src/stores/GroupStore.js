import {EventEmitter} from 'events';
import dispatcher from '../dispatcher/dispatcher';

class GroupStore extends EventEmitter {
    constructor() {
        super();
        this.availGroups = [];
        this.groupDetail = '';
    }

    setAvailableGroups(groups) {
        this.availGroups = groups;
        this.emit("available_groups_loaded");
    }
    getAvailableGroups() {
        return this.availGroups;
    }

    setGroupDetail(detail) {
        this.groupDetail = detail;
        this.emit("group_loaded");
    }

    getGroupDetail() {
        return this.groupDetail;
    }

    handleActions( action ) {
        console.log("Group Store has received an action");
        console.log(JSON.stringify(action));
        switch( action.type ) {
            case "AVAILABLE_GROUPS_LOADED" : {
                this.setAvailableGroups( action.data );
                break;
            }
            case "GROUPS_SEARCH_LOADED" : {
                this.setAvailableGroups( action.data );
                break;
            }
            case "GROUP_JOINED" : {
                this.emit("group_joined");
                break;
            }
            case "GROUP_LOADED" : {
                this.setGroupDetail( action.data );
                break;
            }
        }
    }
}

const groupStore = new GroupStore();
dispatcher.register( groupStore.handleActions.bind(groupStore));

export default groupStore;