import React, { Component } from 'react'
import {Row} from 'reactstrap';


class LoginUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            password : ''
        }
    }

    handlePasswordChange = (e) => {
        this.setState({
            password : e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.props.handleLogin(e, {
                    username : this.props.username, 
                    password : this.state.password
                })} className="form-signin">
                    <div>
                        <label htmlFor="username" className="sr-only">Username</label>
                        <input type="text"
                        onChange={this.props.handleLoginChange} 
                        value={this.props.username} 
                        name="username"
                        id="username"
                        placeholder="Username" 
                        className="form-control"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only" >Password</label>
                        <input type="password"
                        onChange={this.handlePasswordChange} 
                        value={this.state.password} 
                        name="password"
                        id="password"
                        placeholder="Password" 
                        className="form-control"/>
                    </div>
                    <button type='submit' className="btn btn-lg btn-primary btn-block">Login</button>
                </form>
            </div>
        )
    }
    
}

export default LoginUser