import axios from 'axios';
import dispatcher from '../dispatcher/dispatcher';

var gApiUrl = 'http://5a0cf238e4200e00125524d3.mockapi.io/v2/groups';

export function loadGroups() {
    axios.get( gApiUrl )
    .then( (response) => {
        console.log(response.data);
    })
}

export function loadGroupById(groupId) {
    axios.get( gApiUrl + '/' + groupId )
        .then( (response) => {
            console.log(response.data);
        })
}

export function loadAVailGroupsToEnroll(userId) {
    axios.get( gApiUrl )
        .then( (response) => {
            let finalGroups = [];
            let allGroups = response.data;
            let availGroups = allGroups
                .filter ( (group) => {
                     return !group.members.some( (member) => {
                        return member === userId;
                    })
                } )
            console.log('Available groups' + JSON.stringify(availGroups));
            dispatcher.dispatch( {
                type : "AVAILABLE_GROUPS_LOADED",
                data : availGroups
            })
        })
}

//does not work anymore
export function loadGroupUsers(groupId) {
    axios.get( gApiUrl + '/' + groupId + '/users')
        .then( (response) => {
            console.log(response.data);
        })
}

export function createGroup( event ) {
    axios.post( gApiUrl, event )
        .then( (response) => {
            console.log(response.data);
        })
        .catch( (error) => {
            console.log(error.response);
        })
        .catch( (response) => {
            console.log(response.error);
        })
}

export function updateGroup(groupId, updatedGroupInfo) {
    axios.put( gApiUrl + '/' + groupId, updatedGroupInfo)
        .then( (response) => {
            console.log(response.data);
        })
}

export function deleteGroup(groupId) {
    axios.delete( gApiUrl + '/' + groupId )
        .then( (response) => {
            console.log(response.data);
        })
}


//join group


window.loadGroups = loadGroups;
window.loadGroupById = loadGroupById;
window.loadGroupUsers = loadGroupUsers;
window.createGroup = createGroup;
window.updateGroup = updateGroup;
window.deleteGroup = deleteGroup;
