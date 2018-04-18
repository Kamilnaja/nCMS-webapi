import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import { logOut } from './../actions/authActions';
import { connect } from 'react-redux';

class Header extends Component {

    render() {
        return (
            <div>
                <header className="header">
                    <div>
                        <Link to="/">
                            <h1 className="header-site-title">
                                {this.props.settings.title}
                            </h1>
                            <h2>{this.props.settings.subtitle}</h2>
                        </Link>

                    </div>

                    <ul className="header-site-main-menu">
                        <li>
                            <Link to="/" >
                                Home
                        </Link>
                        </li>
                        {
                            !this.props.isAuthenticated &&
                            [<li key="logIn">
                                <Link to="/login">
                                    Log In
                                </Link>
                            </li>
                                ,
                            <li key="createAccount">
                                <Link to="/createAccount">
                                    Create account
                                </Link>
                            </li>]
                        }

                        {this.props.isAuthenticated &&
                            [
                                <li key="logOut">
                                    <a onClick={logOut}>
                                        Log out
                                    </a>
                                </li>,
                                <li key="adminPanel">
                                    <Link to="/admin">
                                        Admin Panel
                                    </Link>
                                </li>
                            ]
                        }

                    </ul>
                </header>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.userName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOutUser: () => {
            dispatch(logOut());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
