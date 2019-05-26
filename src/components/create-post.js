import React, { Component } from 'react'
import axios from 'axios'


class CreatePost extends Component {
	constructor() {
		super()
		this.state = {
            songSearch: '',
            imageURL: '',
            results: []
			
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

    
	render() {
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
                    value={this.state.imageURL}
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
                
                <button className="uk-button uk-button-default uk-align-center" onClick={this.handleSubmit}>Share</button>

                {/* <div className="searchResults">
                    <audio controls src='https://p.scdn.co/mp3-preview/535e787823a5ba08391ec264157e162bfaac8395?cid=774b29d4f13844c495f206cafdad9c86'></audio>
                </div> */}
                <table className="uk-table">
                <thead>
                    <tr>
                        <th className="uk-text-center">Song Title</th>
                        <th className="uk-text-center">Song Artist</th>
                        <th className="uk-text-center">30 Sec Preview URL</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <td>Song Title</td>
                        <td>Song Artist</td>
                        <td>Preview URL</td>
                    </tr>
                </tfoot>
                <tbody>                
                    {this.state.results.map(result => {
                        return (
                            <tr key={result.id}>
                                <td>{result.title}</td>
                                <td>{result.artist.name}</td>
                                <td>{result.preview}</td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
            </div>
            
        )
    }
}

export default CreatePost;