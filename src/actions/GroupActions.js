import axios from 'axios';
import dispatcher from '../dispatcher/dispatcher';

var gApiUrl = 'http://5a0cf238e4200e00125524d3.mockapi.io/v2/groups';
var uApiUrl = 'http://5a0cf238e4200e00125524d3.mockapi.io/v2/users';

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
            //console.log('Available groups' + JSON.stringify(availGroups));
            dispatcher.dispatch( {
                type : "AVAILABLE_GROUPS_LOADED",
                data : availGroups
            })
        })
}

export function searchGroup(searchValue) {
    axios.get( gApiUrl )
        .then( (response) => {
            let allGroups = response.data;
            let resultGroups = allGroups
                .filter( (group) => {
                    return group.title.includes(searchValue);
                })
            console.log('Search groups result: ');
            console.log(resultGroups);
            dispatcher.dispatch( {
                type : "GROUPS_SEARCH_LOADED",
                data : resultGroups
            })
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

export function joinGroup(groupId, userId) {
    axios.get( gApiUrl + '/' + groupId )
        .then( (response) => {
            let group = response.data;
            group.members.push(userId);
            axios.put( gApiUrl + '/' + groupId, group)
                .then( (res) => {
                    dispatcher.dispatch( {
                        type : "GROUP_JOINED"
                    })
                })
        })
}

export function fetchGroupById(groupId) {
    axios.get( gApiUrl + '/' + groupId )
        .then( (response) => {
            let group = response.data;
            group.memberDetails = [];
            axios.get( uApiUrl )
                .then( (response) => {
                    let users = response.data;
                    group.members.forEach(function(element) {
                        let user = users.find( (user) => {
                            //console.log(element + '|' + user.id);
                            return user.id === element
                        });
                        group.memberDetails.push(user);
                        console.log(user);
                    }, this);
                    console.log(group);
                    dispatcher.dispatch( {
                        type : "GROUP_LOADED",
                        data : group
                    })
                })
        })
}


window.loadGroups = loadGroups;
window.loadGroupById = loadGroupById;
window.loadGroupUsers = loadGroupUsers;
window.createGroup = createGroup;
window.updateGroup = updateGroup;
window.deleteGroup = deleteGroup;
window.searchGroup = searchGroup;
window.joinGroup = joinGroup;
window.fetchGroupById = fetchGroupById;