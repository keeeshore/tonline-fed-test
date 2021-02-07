import React from 'react';
import { useSelector } from 'react-redux';
import './user.scss';

export default function User(props) {
	const user = useSelector(store => {
		return store.users.results[props.id];
	});

	return (
		<div className="user-container">
			<img className="avatar" src={user.picture.thumbnail} alt="user" />
			<div className="details">
				<h3>
					{user.name.title}. {user.name.first} {user.name.last}
				</h3>
				<div>Email: {user.email}</div>
			</div>
		</div>
	);
}
