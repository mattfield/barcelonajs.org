fs = require('fs');
bcnjs2013 = require('./contents/2013');
bcnjs2014 = require('./contents/2014');
bcnjs2015 = require('./contents/2015');

desc('Monthly talks');
task('copy', [], function () {
	console.info('Copying for next month');
	var
		found = false,
		next_event = {};

	bcnjs2015.forEach(function (event) {
		var event_date = new Date(event.date);
		if (event_date >= new Date() && !found) {
			next_event = event;
			found = true;
		}
	});

	if (next_event.special) {
		fs.writeFile('./contents/_index/events.json', JSON.stringify(next_event.special), function (err) {
			console.info('Done. Next event: ' + new Date(next_event.date).toDateString());
			complete();
		});
	} else {
		fs.writeFile('./contents/_index/events.json', JSON.stringify(next_event.talks), function (err) {
			console.info('Done. Next event: ' + new Date(next_event.date).toDateString());
			complete();
		});
	}
}, true);

task('archive', [], function () {
	console.info('Archiving history');
	var
		history = [];

	bcnjs2013.forEach(function (event) {
		var event_date = new Date(event.date);
		if (event.talks && event.talks.length >= 0) {
			if (event_date <= new Date()) {
				event.talks.reverse();
				history.push(event);
			}
		}
	});

	bcnjs2014.forEach(function (event) {
		var event_date = new Date(event.date);
		if (event.talks && event.talks.length >= 0) {
			if (event_date <= new Date()) {
				event.talks.reverse();
				history.push(event);
			}
		}
	});

	bcnjs2015.forEach(function (event) {
		var event_date = new Date(event.date);
		if (event.talks && event.talks.length >= 0) {
			if (event_date <= new Date()) {
				event.talks.reverse();
				history.push(event);
			}
		}
	});

	history.sort(function(a, b) {
		return new Date(b.date) - new Date(a.date);
	});

	fs.writeFile('./contents/_history/events.json', JSON.stringify(history), function (err) {
		console.info('Done');
		complete();
	});

}, true);


task('clear', [], function () {
	console.info('Cleaning for next month');
	fs.writeFile('./contents/_index/events.json', '[{},{}]', function (err) {
		complete();
	});
}, true);
