Package.describe({
  summary: "Simple package to use FullCalendar"
});

Package.on_use(function (api) {
	api.add_files([
		'css/fullcalendar.css',
		'lib/fullcalendar.min.js'], 'client');
});