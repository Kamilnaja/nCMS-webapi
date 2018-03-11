const settingsReducer = (state = [],
    action) => {
    switch (action.type) {

        case "GET_SETTINGS_SUCCESS":
            state = {
                ...state,
                title: action.payload[0].title,
                subtitle: action.payload[0].subtitle,
                footer: action.payload[0].footer
            }
            break;

        case "GET_SETTINGS_ERROR":
            state = {
                ...state,
                settings_error: true
            }

        case "SET_SETTINGS":
            state = {
                ...state,
                title: action.payload.title,
                subtitle: action.payload.subtitle,
                footer: action.payload.footer
            }
            break;
        default: return state;
    }
    return state;
}

export default settingsReducer;