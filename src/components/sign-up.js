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
        axios.post('/user', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			})
	}
	render() {

		return (
			<div className="SignupForm">
				<div className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-align-center uk-box-shadow-large">
        			{/* <h1 className="uk-card-title uk-text-center">SWYSH</h1> */}
					<h4 className="uk-text-center">share what you see, hear</h4>
					<p>Welcome to SWYSH, an app whose sole purpose is for users to share pictures
					of what they think or see when they hear a song.</p>

					<p>What do you see in your head when you listen to a song? Do you see a 
					sunset at a lake? The neon lights of a traffic light at night?</p>
					<p className="uk-text-center"><strong>Share what you see, here.</strong></p>
				</div>

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
