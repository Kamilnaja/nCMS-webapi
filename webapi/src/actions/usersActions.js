import axios from 'axios';
import { localUrl } from './../utils/AppConfig';
import store from './../store';

export function getUsers() {
    store.dispatch((dispatch) => {
        dispatch({
            type: 'GET_USERS_START'
        })

        axios.get(`${localUrl}/api/users`)
            .then((response) => {
                dispatch({
                    type: 'GET_USERS_SUCCESS',
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'GET_USERS_ERROR',
                    payload: err
                })
            })
    })
}
