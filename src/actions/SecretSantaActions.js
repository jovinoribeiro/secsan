import axios from 'axios';

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

export function loadGroupUsers(groupId) {
    axios.get( gApiUrl + '/' + groupId + '/users')
        .then( (response) => {
            console.log(response.data);
        })
}

export function createGroup(title) {
    axios.post( gApiUrl, { title : title } )
        .then( (response) => {
            console.log(response.data);
        })
}

export function updateGroup(groupId, groupInfo) {
    axios.put( gApiUrl + '/' + groupId, groupInfo)
        .then( (response) => {
            console.log(response.data);
        })
}

//TODO: delete group

export function loadUsers() {
    axios.get ( uApiUrl )
        .then( (response) => {
            console.log(response.data);
        })
}

export function loadUserById(userId) {
    axios.get( uApiUrl + '/' + userId)
        .then( (response) => {
            console.log(response.data);
        })
}

//create user

//join group

window.loadGroups = loadGroups;
window.loadGroupById = loadGroupById;
window.loadGroupUsers = loadGroupUsers;
window.loadUsers = loadUsers;
window.loadUserById = loadUserById;
window.createGroup = createGroup;
window.updateGroup = updateGroup;
