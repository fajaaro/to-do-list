let activities = [
	{
		name: 'Eating',
		finished: true
	},
	{
		name: 'Playing Game',
		finished: false
	}
]

exports.getAll = function() {
	return activities
}

exports.add = function(newActivityName) {
	let activity = {
		name: newActivityName,
		finished: false, 
	}

	activities.push(activity)
}

exports.finish = function(finishedActivityIndex) {
	activities[finishedActivityIndex].finished = !activities[finishedActivityIndex].finished;
}

exports.delete = function(deletedActivityIndex) {
	activities.splice(deletedActivityIndex, 1)
}
