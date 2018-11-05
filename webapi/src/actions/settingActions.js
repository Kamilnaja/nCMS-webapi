import axios from 'axios';
import store from './../store';
import { GET_SETTINGS_ERROR, GET_SETTINGS_START, GET_SETTINGS_SUCCESS, SET_CURRENT_PAGINATION_PAGE, SET_PAGINATION_SIZE, SET_SETTINGS, SET_SETTINGS_ERROR, SET_SETTINGS_START, SET_SETTINGS_SUCCESS } from './../utils/ActionTypes';
import appConfig from './../utils/AppConfig';

export function setSettings(payloadData) {
    store.dispatch((dispatch) => {
        dispatch({
            type: SET_SETTINGS_START
        })

        axios.put(`${appConfig.serverUrl}/api/pagesettings`, {
            title: payloadData.title,
            subtitle: payloadData.subtitle,
            footer: payloadData.footer
        })
            .then(() => {
                dispatch({
                    type: SET_SETTINGS_SUCCESS,
                    payload: payloadData
                })
            })
            .catch((err) => {
                dispatch({
                    type: SET_SETTINGS_ERROR,
                    payload: err
                })
            })
    })

    return {
        type: SET_SETTINGS,
        payload: payloadData
    }
}

export function getSettings() {
    store.dispatch((dispatch) => {
        dispatch({
            type: GET_SETTINGS_START
        })
        axios.get(`${appConfig.serverUrl}/api/pagesettings`)
            .then((response) => {
                dispatch({
                    type: GET_SETTINGS_SUCCESS,
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: GET_SETTINGS_ERROR,
                    payload: err
                })
            })
    })
}

export function setCurrentPaginationPage(payloadData) {
    store.dispatch((dispatch) => {
        dispatch({
            type: SET_CURRENT_PAGINATION_PAGE,
            payload: payloadData
        })
    })
}

export function setPaginationSize(payloadData) {
    store.dispatch((dispatch) => {
        dispatch({
            type: SET_PAGINATION_SIZE,
            payload: payloadData
        })
    })
}