import axios from 'axios';
import { localUrl } from './../utils/AppConfig';

const articlesReducer = (state = [],
    action) => {
    function findElementAndReturnArrayWithoutHim() {
        const indexOfDeletedElement = state.data.findIndex(x => x._id === action.payload);
        state.data.splice(indexOfDeletedElement, 1);
    }
    switch (action.type) {

        case "GET_ARTICLES_FULFILLED":
            state = {
                ...state,
                data: action.payload,
            }
            break;

        case "DELETE_ARTICLE": {
            axios({
                method: 'delete',
                url: `${localUrl}/api/posts/${action.payload}`
            })
                .then(
                    findElementAndReturnArrayWithoutHim(),
                    state = {
                        ...state,
                        statusInfo: 'Skasowano item o id ' + action.payload,
                        data: state.data
                    },
            )
                .catch((err) => {
                    if (err.response) {
                        state = {
                            ...state,
                            statusInfo: 'Nie udało się skasować'
                        }
                    }
                })
            break;
        }
        default: return state;
    }
    return state;
}

export default articlesReducer;