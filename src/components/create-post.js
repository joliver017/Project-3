import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'


class CreatePost extends Component {
	constructor() {
		super()
		this.state = {
            songSearch: '',
            results: [],
            imageURL: '',
            songURL: '',
			
		}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleShare = this.handleShare.bind(this)
		this.handleChange = this.handleChange.bind(this)
    }

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
        console.log(this.state.songSearch);
        axios.get("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + this.state.songSearch, {
            headers: {"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "VwBkkUjee8mshUczPJAWhqmghmfOp1wkDcAjsnzUBZLMu5MyqJ"}
        })
        .then(response => {
            this.setState({ results: response.data.data })
            console.log(this.state.results);
        })
        .catch(error => {
            console.log(error);
        });
    }

    handleShare(event) {
		event.preventDefault()
        console.log(this.state.imageURL);
        console.log(this.state.songURL);
        axios.post('/post', {
			imageURL: this.state.imageURL,
			songURL: this.state.songURL
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful post')
					this.setState({
						redirectTo: '/'
					})
				} else {
					console.log('unsuccesful')
				}
			})
    }

    
	render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="CreatePost">
                    <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-align-center uk-box-shadow-large">
                        {/* <h1 className="uk-card-title uk-text-center">SWYSH</h1> */}
                        <h4 className="uk-text-center">Create a Post</h4>
                    </div>

                    <h1 className="uk-text-center">Paste Image URL</h1>
                    <label htmlFor="imageURL">Image URL: </label>
                    <input
                        className="uk-input uk-margin uk-width-1-2"
                        type="text"
                        name="imageURL"
                        value={this.state.imageURL.trim()}
                        onChange={this.handleChange}
                    />

                    <h1 className="uk-text-center">Paste Song URL</h1>
                    <label htmlFor="songURL">Song URL: </label>
                    <input
                        className="uk-input uk-margin uk-width-1-2"
                        type="text"
                        name="songURL"
                        value={this.state.songURL.trim()}
                        onChange={this.handleChange}
                    />

                    <h1 className="uk-text-center">Search for a Song</h1>
                    <label htmlFor="song">Song Title: </label>
                    <input
                        className="uk-input uk-margin uk-width-1-2"
                        type="text"
                        name="songSearch"
                        value={this.state.songSearch}
                        onChange={this.handleChange}
                    />
                    <button className="uk-button uk-button-default uk-align-center" onClick={this.handleSubmit}>Find Song</button>

                    <br></br>
                    
                    <button className="uk-button uk-button-default uk-align-center" onClick={this.handleShare}>Share</button>

                    <table className="uk-table">
                    <thead>
                        <tr>
                            <th className="uk-text-center">Select</th>
                            <th className="uk-text-center">Song Title</th>
                            <th className="uk-text-center">Song Artist</th>
                            <th className="uk-text-center">30 Sec Preview URL</th>
                            <th className="uk-text-center">Listen</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td>Select</td>
                            <td>Song Title</td>
                            <td>Song Artist</td>
                            <td>Preview URL</td>
                            <td>Listen</td>
                        </tr>
                    </tfoot>
                    <tbody>                
                        {this.state.results.map(result => {
                            return (
                                <tr key={result.id}>
                                    <td className="uk-table-shrink"><input className="uk-radio" type="radio" name="song-selection"/></td>
                                    <td className="uk-table-shrink">{result.title}</td>
                                    <td className="uk-table-shrink">{result.artist.name}</td>
                                    <td className="uk-table-shrink">{result.preview}</td>
                                    <td className="uk-table-shrink"><audio controls src={result.preview}>
                                        Your browser does not support the
                                        <code>audio</code> element.
                                    </audio></td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table>
                </div>
                
            )
        } 
    }
}

export default CreatePost;