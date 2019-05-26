import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <div>
                <div>
                    {loggedIn ? (
                        <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar>
                            <div className="uk-navbar-left">
                                <ul className="uk-navbar-nav">
                                    <li className="uk-active"><Link to="/">Home</Link></li>
                                    <li className="uk-active"><Link to="/create-post">Create a Post</Link></li>
                                    <li className="uk-active"><Link to="#" onClick={this.logout}>Logout</Link></li>
                                </ul>
                            </div>
                        </nav>
                    ) : (
                        <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar>
                        <div className="uk-navbar-left">
                            <ul className="uk-navbar-nav">
                                <li className="uk-active"><Link to="/login">Login</Link></li>
                                <li className="uk-active"><Link to="/signup">Signup</Link></li>
                            </ul>
                        </div>
                    </nav>
                    )}
                </div>
                
                <div className="col-4 col-mr-auto">
                <div id="top-filler"></div>
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h1 className="App-title">SWYSH</h1>
                </div>
            </div>

        );

    }
}

export default Navbar