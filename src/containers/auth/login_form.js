import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../../actions/auth/login';
import {browserHistory} from 'react-router';
import Auth from '../../utils/Auth';


class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            errors: '',
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
        }).catch((data) => {
            console.log(data.data.message);
            this.setState({
                errors: data.data.message
            });
        });
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
        return (
            <div className="container">
                <div className="col-md-offset-4 col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-heading"><h3 className="panel-title"><strong>Sign In </strong></h3></div>
                        <div className="panel-body">
                            <form action="/" onSubmit={this.submitForm}>
                                {this.state.errors && <div className="alert alert-danger">{this.state.errors}</div>}
                                <div className="form-group">
                                    <label>Username</label>
                                    <input
                                        className="form-control"
                                        name="username"
                                        type="text"
                                        onChange={this.changeUser}
                                        value={this.state.user.username}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        onChange={this.changeUser}
                                        value={this.state.user.password}
                                    />
                                </div>
                                <input className="btn btn-sm btn-success" type="submit" value="Login"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({login}, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);