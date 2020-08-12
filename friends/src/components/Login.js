import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'



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
        axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then(res => {
            console.log("axios error", res.data.payload,)
          localStorage.setItem('token', JSON.stringify(res.data.payload))
          this.props.history.push('/protected');  
        } )
        .catch(err => console.log("this is the error",{ err }))
    }

    render() {
        return (
            <div >
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
