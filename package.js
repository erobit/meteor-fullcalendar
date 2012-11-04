Package.describe({
  summary: "FullCalendar package for Meteor"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('css/fullcalendar.css', 'client');
  api.add_files('lib/fullcalendar.min.js', 'client');
});
