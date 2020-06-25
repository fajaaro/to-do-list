exports.getDate = function() {
	let today = new Date(),
		options = {
			weekday: 'long',
			day: 'numeric',
			month: 'long'
		}

	return today.toLocaleDateString('en-US', options)
}