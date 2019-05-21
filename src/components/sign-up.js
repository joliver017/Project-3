import React, { Component } from 'react'
import axios from 'axios'

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
        console.log('sign-up-form, username: ');
        console.log(this.state.username);
        //request to server here
        axios.post('/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (response.data) {
					console.log('successful signup')
					this.setState({
						redirectTo: '/login'
					})
				} else {
						console.log('Sign-up error');
						
					}
			}).catch(error => {
				console.log('Sign up server error: ')
				console.log(error);
			})
	}
	render() {

		return (
			<div className="SignupForm">
				<h1 className="uk-text-center">Sign-up</h1>
				<label htmlFor="username">Username: </label>
				<input
                    className="uk-input uk-margin uk-width-1-2"
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
                <br></br>
				<label htmlFor="password">Password: </label>
				<input
                    className="uk-input uk-margin uk-width-1-2"
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				
				<button className="uk-button uk-button-default uk-align-center" onClick={this.handleSubmit}>Sign up</button>
			</div>
		)
	}
}

export default SignupForm
