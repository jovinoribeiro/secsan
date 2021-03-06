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

export function updateGroup(groupId, updatedGroupInfo) {
    axios.put( gApiUrl + '/' + groupId, updatedGroupInfo)
        .then( (response) => {
            console.log(response.data);
        })
}

//TODO: delete group
export function deleteGroup(groupId) {
    axios.delete( gApiUrl + '/' + groupId )
        .then( (response) => {
            console.log(response.data);
        })
}

export function loadUsers() {
    axios.get ( uApiUrl )
        .then( (response) => {
            console.log(response.data);
        })
}

//This one is not really needed
export function loadUserById(userId) {
    axios.get( uApiUrl + '/' + userId)
        .then( (response) => {
            console.log(response.data);
        })
}

export function validateUserLogin(email, password) {
    axios.get( uApiUrl )
        .then( (response) => {
            const userInfo = response.data.find( (user) => {
                return user.email === email &&
                        user.password === password;
            } );
            if ( userInfo !== undefined) {
                console.log('User found');
                console.log(JSON.stringify(userInfo));
                dispatcher.dispatch( {
                    type : "USER_VALIDATED",
                    user : userInfo
                })
            } else {
                console.log('User NOT found');
                dispatcher.dispatch( {
                    type : "USER_FAILED_VALIDATION"
                })
            }
        } )
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
window.deleteGroup = deleteGroup;
window.validateUserLogin = validateUserLogin;