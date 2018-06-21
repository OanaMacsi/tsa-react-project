export function updateUserDetails(userDetails) {
	return new Promise(function(resolve) {
		setTimeout(() => {
			resolve({
				status: 200
			})
		}, 2000);
	})
}