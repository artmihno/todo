import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState = {
	todos: [{
		id: 0,
		completed: false,
		text: 'Demo'
	}],
	user: {
		login: 'artur',
		id: 30
	}
}

let store = configureStore(initialState)

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
)
