export default class ActionTypes {
    static SET_SETTINGS_START = 'SET_SETTINGS_START';
    static SET_SETTINGS_SUCCESS = 'SET_SETTINGS_SUCCESS';
    static SET_SETTINGS_ERROR = 'SET_SETTINGS_ERROR';
    static SET_SETTINGS = 'SET_SETTINGS';
    static GET_SETTINGS_START = 'GET_SETTINGS_START';
    static GET_SETTINGS_SUCCESS = 'GET_SETTINGS_SUCCESS';
    static GET_SETTINGS_ERROR = 'GET_SETTINGS_ERROR';
    static SET_CURRENT_PAGINATION_PAGE = 'SET_CURRENT_PAGINATION_PAGE';
    static SET_PAGINATION_SIZE = 'SET_PAGINATION_SIZE';
    //articles
    static EDIT_ARTICLE_SUCCESS = 'EDIT_ARTICLE_SUCCESS';
    static GET_ARTICLES_START = 'GET_ARTICLES_START';
    static GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
    static GET_ARTICLES_ERROR = 'GET_ARTICLES_ERROR';
    static EDIT_ARTICLE_START = 'EDIT_ARTICLE_START';
    static EDIT_ARTICLE_CANCEL = 'EDIT_ARTICLE_CANCEL';
    static SHOW_EDITION_FORM = 'SHOW_EDITION_FORM';
    static DELETE_ARTICLE_FAILED = 'DELETE_ARTICLE_FAILED';
    static ADD_ARTICLE_PENDING = 'ADD_ARTICLE_PENDING';
    static ADD_NEW_ARTICLE_SUCCESS = 'ADD_NEW_ARTICLE_SUCCESS';
    static DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS';
    //auth
    static SET_CURRENT_USER = 'SET_CURRENT_USER';
    static LOGIN_FAILED = 'LOGIN_FAILED';
    static CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
    static CREATE_ACCOUNT_FAILED_USER_ALREADY_EXISTS = 'CREATE_ACCOUNT_FAILED_USER_ALREADY_EXISTS';
    static RELOAD_REGISTER_INFO = 'RELOAD_REGISTER_INFO';
    static CREATE_ACCOUNT_FAILED = 'CREATE_ACCOUNT_FAILED';
    static CREATE_ACCOUNT_FAILED_SHORT_PASSWORD = 'CREATE_ACCOUNT_FAILED_SHORT_PASSWORD';
    static CREATE_ACCOUNT_FAILED_EMAIL_EXISTS = 'CREATE_ACCOUNT_FAILED_EMAIL_EXISTS';
    //user
    static GET_USERS_START = 'GET_USERS_START';
    static GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
    static GET_USERS_ERROR = 'GET_USERS_ERROR';
}
