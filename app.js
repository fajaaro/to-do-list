const express = require('express'),
	  bodyParser = require('body-parser'),
	  date = require(`${__dirname}/my_modules/date.js`),
	  activity = require(`${__dirname}/my_modules/activity.js`)
	  
const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
	extended: true
}))

app.use(express.static('public'))

app.get('/', function(req, res) {
	res.render('list', {
		day: date.getDate(),
		activities: activity.getAll(),
	})
})

app.post('/', function(req, res) {
	activity.add(req.body.newItem)

	res.redirect('/')
})

app.post('/finishActivity', function(req, res) {
	activity.finish(req.body.itemIndex)

	res.redirect('/')
})

app.post('/deleteActivity', function(req, res) {
	activity.delete(req.body.itemIndex)

	res.redirect('/')
})

app.listen(process.env.PORT || 3000, function() {
	console.log('Server started on port 3000!\nThis app is created by Fajar Hamdani (instagram: fajaaro).')
})