import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
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
                        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                            <div class="uk-navbar-left">
                                <ul class="uk-navbar-nav">
                                    <li class="uk-active"><Link to="#" onClick={this.logout}>Logout</Link></li>
                                </ul>
                            </div>
                        </nav>
                    ) : (
                        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                        <div class="uk-navbar-left">
                            <ul class="uk-navbar-nav">
                                <li class="uk-active"><Link to="/">Home</Link></li>
                                <li class="uk-active"><Link to="/login">Login</Link></li>
                                <li class="uk-active"><Link to="/signup">Signup</Link></li>
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