import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialUsersState = {
	loading: false,
	results: []
};

const users = (state = initialUsersState, action) => {
	switch (action.type) {
		case 'USERS_LOADING': {
			return {
				...state,
				loading: true
			};
		}
		case 'USERS_COMPLETE': {
			return {
				...state,
				loading: false
			};
		}
		case 'ADD_USERS': {
			return {
				...state,
				loading: action.loading,
				results: [...state.results, ...action.results]
			};
		}
		case 'REMOVE_USER': {
			return {
				...state,
				results: [...state.results.filter(user => user.email !== action.user.email)]
			};
		}
		default: {
			return state;
		}
	}
};

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		  })
		: compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const fetchUsers = async params => {
	return axios.get(`https://randomuser.me/api/?results=${params.number}`);
};

export const getUsers = number => {
	return async dispatch => {
		let results = [];
		try {
			dispatch({ type: 'USERS_LOADING' });
			const response = await fetchUsers({ number });
			results = response.data.results;
			dispatch({ type: 'ADD_USERS', ...{ results } });
		} catch (err) {
			dispatch({ type: 'ADD_USERS', ...{ error: JSON.stringify(err) } });
		} finally {
			dispatch({ type: 'USERS_COMPLETE' });
		}
	};
};

export default createStore(combineReducers({ users }), enhancer);
