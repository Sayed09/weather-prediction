import React, { Component } from 'react'
import LoginUser from './Accounts/LoginUser';
import RegisterUser from './Accounts/RegisterUser';
import SearchBar from './SearchBar';

class NavComponent extends Component {
    render(){

        let form;

        switch(this.props.displayed_form){
            case 'login' : 
                form = <LoginUser
                        handleLoginChange={this.props.handleLoginChange}
                        handleLogin={this.props.handleLogin}
                        username={this.props.username}/>;
                break;
            case 'signup' : 
                form = <RegisterUser />
                break;
            case 'searchbar' : 
                form = <SearchBar />
                break;
            default:
                form = null;
        }

        const logged_in_nav = (
            <div>
                <button type="button" className="btn btn-light" onClick = {() => this.props.display_form('login')}>Login</button>
                <button type="button" className="btn btn-light" onClick = {() => this.props.display_form('signup')}>Signup</button>
            </div>
        );

        const logged_out_nav = (
            <div>
                <button type="button" className="btn btn-light" onClick = {() => this.props.display_form('searchbar')}>Searchbar</button>
                <button className="btn btn-light" onClick={this.props.handleLogout}>Logout</button>
            </div>
        );

        return (
            <div>
                {this.props.logged_in? logged_out_nav : logged_in_nav}
                {form}            
            </div>
        );
        
    }
}
export default NavComponent