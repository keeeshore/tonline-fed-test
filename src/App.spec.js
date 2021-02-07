import React from 'react';
import '@testing-library/jest-dom';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { act } from 'react-dom/test-utils';
import App from './App';

const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const response = {
	results: [
		{
			name: {
				title: 'Mr',
				first: 'Mathis',
				last: 'Warsame'
			},
			email: 'mathis.warsame@example.com'
		}
	]
};

let container = null;
let store = {};

describe('App', () => {
	beforeEach(() => {
		mock.onGet('https://randomuser.me/api/?results=1').reply(200, response);
		container = document.createElement('div');
		document.body.appendChild(container);
	});
	it('renders with no users', async () => {
		store = mockStore({
			users: { results: [] }
		});
		act(() => {
			render(
				<Provider store={store}>
					<App />
				</Provider>,
				container
			);
		});
		const header = screen.getByText(/Users/i);
		expect(header).toBeInTheDocument();
		// await waitFor(() => {
		//     const header = screen.getByText(/Users/i);
		//     const addButton = screen.getByLabelText(/Add User(s)/i);
		//     expect(header).toBeInTheDocument();
		//     expect(addButton).toBeInTheDocument();
		// });
	});
});
