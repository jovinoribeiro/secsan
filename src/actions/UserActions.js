import axios from 'axios';
import dispatcher from '../dispatcher/dispatcher';

var uApiUrl = 'http://5a0cf238e4200e00125524d3.mockapi.io/v2/users';
var gApiUrl = 'http://5a0cf238e4200e00125524d3.mockapi.io/v2/groups';

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

export function loadGroupsByUserId(userId) {
    axios.get( gApiUrl )
        .then( (response) => {
            let allGroups = response.data;
            let userGroups = allGroups
                .filter( (group) =>
                    group.members.some( (member) =>
                        member === userId
                    )
                )
            console.log('user groups:' + JSON.stringify(userGroups));
            dispatcher.dispatch( {
                type : "USER_GROUPS_LOADED",
                data : userGroups
            })
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


window.loadUsers = loadUsers;
window.loadUserById = loadUserById;
window.validateUserLogin = validateUserLogin;