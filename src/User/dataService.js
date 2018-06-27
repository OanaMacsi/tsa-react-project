import axios from 'axios'

export function getUserDetails() {
	const userId = '5b336247075ab414fdd879a5'
	return axios.get('http://1cf97441.ngrok.io/users/' + userId)
		.then(result => result)
		.catch(err => err)
}

export function updateUserDetails(userDetails) {
	return axios.put('http://1cf97441.ngrok.io/users/5b336247075ab414fdd879a5', userDetails)
		.then(result => result)
		.catch(err => err)
}