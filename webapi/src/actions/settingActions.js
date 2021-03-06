import axios from 'axios';
import store from '../reducers/store';
import ActionTypes from './../utils/ActionTypes';
import appConfig from './../utils/AppConfig';

export function setSettings(payloadData) {
    store.dispatch((dispatch) => {

        dispatch({
            type: ActionTypes.SET_SETTINGS_START
        });

        var requestConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        }
        var payload = {
            title: payloadData.title,
            subtitle: payloadData.subtitle,
            footer: payloadData.footer
        }

        axios.post(`${appConfig.serverUrl}/api/pagesettings`, payload, requestConfig)
            .then(() => {
                dispatch({
                    type: ActionTypes.SET_SETTINGS_SUCCESS,
                    payload: payloadData
                })
            })
            .catch((err) => {
                dispatch({
                    type: ActionTypes.SET_SETTINGS_ERROR,
                    payload: err
                })
            })
    })

    return {
        type: ActionTypes.SET_SETTINGS,
        payload: payloadData
    }
}

export function getSettings() {
    return store.dispatch(dispatch => {
        axios.get(`${appConfig.serverUrl}/api/pagesettings`)
            .then(response => {
                dispatch({
                    type: ActionTypes.GET_SETTINGS_SUCCESS,
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: ActionTypes.GET_SETTINGS_ERROR,
                    payload: err
                })
            })
    })
}