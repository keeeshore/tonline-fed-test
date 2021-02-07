import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './redux/store';
import User from './components/user';

export default function App() {
	const dispatch = useDispatch();

	const users = useSelector(store => {
		return store.users;
	});

	useEffect(() => {
		dispatch(getUsers(1));
	}, []);

	const addUsers = () => {
		dispatch(getUsers(5));
	};

	return (
		<div className="container">
			<h3> Users </h3>
			<small>Total: {users.results.length} </small>
			<div className="users-list">
				{users.results.map((user, indexId) => {
					return <User key={user.email} id={indexId} />;
				})}
			</div>
			{users.loading ? <div className="loader" /> : <input type="button" onClick={addUsers} value="Add User(s)" />}
		</div>
	);
}
