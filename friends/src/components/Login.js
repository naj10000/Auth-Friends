import React, { Component } from 'react'


export class Login extends Component {
    state ={
        credentials:{
            username: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    }

    login = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.changeHandler}
                    
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange= {this.changeHandler}
                    
                    />
                    <button>Login</button>
                </form>
                
            </div>
        )
    }
}

export default Login
