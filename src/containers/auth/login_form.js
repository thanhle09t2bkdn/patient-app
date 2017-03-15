import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../actions/auth/login';
import {browserHistory} from 'react-router';
import Auth from '../../utils/Auth';


class LoginForm extends Component {

    constructor(props) {
        super(props);
        const storedMessage = localStorage.getItem('successMessage');
        let successMessage = '';

        if (storedMessage) {
            successMessage = storedMessage;
            localStorage.removeItem('successMessage');
        }

        this.state = {
            errors: {},
            successMessage,
            user: {
                username: '',
                password: ''
            }
        };

        this.submitForm = this.submitForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    submitForm(event) {
        event.preventDefault();
        this.props.login(this.state.user).payload.then(response => {
            Auth.authenticateUser(response.data.data.token);
            browserHistory.push('/home');
        }).catch((data) => {console.log(data);});
    }

    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
            user
        });
    }
    render() {
        return(
            <div className="form">
                <form action="/" onSubmit={this.submitForm}>
                    <h2>Login</h2>

                    {this.state.successMessage && <p className="success-message">{this.state.successMessage}</p>}
                    {this.state.errors.summary && <p className="error-message">{this.state.errors.summary}</p>}

                    <div className="field-line">
                        <input
                            name="username"
                            type="text"
                            onChange={this.changeUser}
                            value={this.state.user.username}
                        />
                    </div>

                    <div className="field-line">
                        <input
                            type="password"
                            name="password"
                            onChange={this.changeUser}
                            value={this.state.user.password}
                        />
                    </div>

                    <div className="button-line">
                        <input type="submit" value="Login"/>
                    </div>

                </form>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);