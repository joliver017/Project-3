import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

var SpotifyWebApi = require('spotify-web-api-node')
var spotifyApi = new SpotifyWebApi({
  });
spotifyApi.setAccessToken('BQBwLxWW_lUS9g4-KJUPPPxfVy3WVd5iK8hAXPIy2vgTnMlqswIJRylRp2G5HTwG-I-SHhL2qV58tCCo0VSPp9FgolIqlKLwc1B6lwVlBHoQMUHYOZCe3YOkBLmMJR2Nypn29vLbWJDTc0TRSA');

class CreatePost extends Component {
	constructor() {
		super()
		this.state = {
            songSearch: '',
            imageURL: '',
			
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
        console.log('making api call: ');
        console.log(this.state.songSearch);
        //request to server here
        spotifyApi.searchTracks(this.state.songSearch).then(
            function(data) {
            //   console.log('songs', data.body);
            console.log(data.body.tracks.items[0].preview_url)
            },
            function(err) {
              console.error(err);
            }
          );
    }
    
	render() {
        return (
            <div className="CreatePost">
                <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-align-center uk-box-shadow-large">
                    {/* <h1 className="uk-card-title uk-text-center">SWYSH</h1> */}
                    <h4 className="uk-text-center">Create a Post</h4>
                </div>

                <h1 className="uk-text-center">Search for a Song</h1>
                <label htmlFor="song">Song: </label>
                <input
                    className="uk-input uk-margin uk-width-1-2"
                    type="text"
                    name="songSearch"
                    value={this.state.song}
                    onChange={this.handleChange}
                />
                <br></br>
                <label htmlFor="imageURL">Image URL: </label>
                <input
                    className="uk-input uk-margin uk-width-1-2"
                    type="text"
                    name="imageURL"
                    value={this.state.imageURL}
                    onChange={this.handleChange}
                />
                
                <button className="uk-button uk-button-default uk-align-center" onClick={this.handleSubmit}>Share</button>
            </div>
        )
    }
}

export default CreatePost;