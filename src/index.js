import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom' //don't need to specify localhost url in axios http address
import { SpotifyApiContext } from 'react-spotify-api'

ReactDOM.render(
	<SpotifyApiContext.Provider value={'BQBUf3cidXB1R88BZOTyc8-NEmjE_GLYj0q6WYqIM31APbDczVjw0mAYGYhtt-IuwkM2giJimRBEkWacqvfL82_QlX_XeEkkds-Mamn27GB870lxUM0WMHnzNJcWw_S0a2QaiMpRYnImO1NTLg'}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
	</SpotifyApiContext.Provider>,
	document.getElementById('root')

	
)