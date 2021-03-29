import axios from 'axios';

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token');
	return axios.create({
		headers: {
			Authorization: token,
		},
		// *****************************
		// NEED BASE URL vvvvvvvvvv
		baseURL: `https://BASE_URL/api`,
		// *****************************
	});
};
