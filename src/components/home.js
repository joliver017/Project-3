import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
			
		}
    }

    componentDidMount() {
        this.getPosts()
    }
    
    getPosts() {
        axios.get('/post').then(response => {
          console.log('Get response: ')
          console.log(response.data)
          if (response.data) {    
            this.setState({
              posts: response.data.post
            })
          } else {
            console.log('Get posts: no posts');
          }
        })
      }



    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                {this.state.posts.reverse().map(result => {
                    return (
                        <div key={result._id} className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-align-center">
                            <img style={imageStyle} src={result.imageURL} alt="post-img" />
                            <audio controls src={result.songURL}>
                                Your browser does not support the
                                <code>audio</code> element.
                            </audio>
                            <h4>{result.songTitle} by {result.songArtist}</h4>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Home
