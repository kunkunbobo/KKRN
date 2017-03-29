/**
 * Created by yzw on 2017/3/28.
 */

import {LOGIN_SUCCESS,RIGISTER_SUCCESS}  from '../action/login.action'

const initialState = {
    token: null
}

export default function login(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                token: action.token
            });
        case RIGISTER_SUCCESS:
            return Object.assign({}, state, {
                token: action.token
            });
        default:
            return state;
    }
}