export default function () {
	var app = this,
		basedir = app.root + '/main/views',
		views = [basedir];

	// enable "extend /layout"
	app.locals.basedir = basedir;

	app.parts
		.forEach(function (extension) {
			views.push(app.root + '/parts/' + extension + '/views');
		});

	app.set('views', views);
	app.set('view engine', app.conf.get('express.engine'));
	app.set('view cache', app.conf.get('express.cache'));
	app.enable('case sensitive routing');
	app.disable('x-powered-by');

	app.logger.info('configured express variables');
}