'use strict';

/*
|------------------------------------------------------------------------------
| Framework7 Plugins
|------------------------------------------------------------------------------
*/

Framework7.use(Framework7Keypad);

/*
|------------------------------------------------------------------------------
| Initialize App
|------------------------------------------------------------------------------
*/

var app = new Framework7({
	root: '#app',
	id: window.config.app.id,
	name: window.config.app.title,
	version: window.config.app.version,
	theme: (function() {
		if (document.location.search.indexOf('theme=') >= 0) {
			return document.location.search.split('theme=')[1].split('&')[0];
		}
		else {
			return 'auto';
		}
	})(),
	rtl: false,
	routes: window.routes,
	lazyModulesPath: 'assets/vendor/framework7/lazy-components',
	init: false,
	data: function() {
		return {
			a2hs: null,
			config: window.config
		}
	},
	actions: {
		closeByOutsideClick: true,
		convertToPopover: false
	},
	autocomplete: {
		autoFocus: true,
		closeOnSelect: true,
		limit: 10,
		notFoundText: 'No Search Results',
		preloader: true,
		requestSourceOnOpen: true,
		searchbarPlaceholder: 'Search'
	},
	calendar: {
		headerPlaceholder: 'Select'
	},
	dialog: {
		title: window.config.app.title
	},
	lazy: {
		placeholder: 'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 256"><path fill="#F5F5F5" d="M384 0H0v256h384z" /><path fill="#ECF0F1" d="M164.5 107h55v42h-55z" /><path fill="#545E73" d="M220.5 150h-57v-44h57zm-55-2h53v-40h-53z" /><path fill="#545E73" d="M168.5 111h47v34h-47z" /><path fill="#ECF0F1" d="M216.5 146h-49v-36h49zm-47-2h45v-32h-45z" /><circle fill="#F3D55A" cx="178.50002" cy="119.569" r="4.5689998" /><path fill="#11A085" d="M213.5 134l-12-11-10.5 11.5 5.483 5.483L200.5 144h14v-8.889z" /><path fill="#26B999" d="M185.517 129.017L169.5 143v1h31l-4.017-4.017z" /></svg>',
		sequential: false
	},
	listIndex: {
		label: true
	},
	notification: {
		closeButton: true,
		icon: '<img src="' + window.config.app.logo + '" alt="" />',
		title: window.config.app.title
	},
	panel: {
		swipe: false
	},
	searchbar: {
		removeDiacritics: true
	},
	sheet: {
		backdrop: true,
		closeByOutsideClick: true
	},
	smartSelect: {
		closeOnSelect: true
	},
	toast: {
		closeTimeout: 3000
	},
	touch: {
		fastClicksExclude: '.ap-dropdown-menu, .pac-container .pac-item'
	},
	view: {
		pushState: (function() {
			if (window.config.theme.navigation == 'hamburger') {
				return !Framework7.device.cordova;
			}
			else {
				return false;
			}
		})(),
		pushStateRoot: (function() {
			return location.pathname;
		})(),
		pushStateSeparator: '#!'
	}
});

/*
|------------------------------------------------------------------------------
| App Events
|------------------------------------------------------------------------------
*/

app.on('init', function() {
	initializeServiceWorker();
	initializeViews();
	initializeTheme();
	initializeI18n();
	initializeA2HS();
	initializeBackButton();
	getInternetConnectionStatus();
	setAJAXDefaults();
	setFormValidatorDefaults();
	initializeFacebookJsSdk();
});

app.on('pageInit', function() {
	localizeApp();
});

app.on('panelOpen', function() {
	app.$('.navbar .hamburger').addClass('is-active');
});

app.on('panelClose', function() {
	app.$('.navbar .hamburger').removeClass('is-active');
});

app.on('routerAjaxError', function() {
	app.toast.show({
		text: 'No Internet Connection',
		position: 'bottom',
		cssClass: 'bg-color-red'
	});
});

/*
|------------------------------------------------------------------------------
| Initialize Service Worker
|------------------------------------------------------------------------------
*/

function initializeServiceWorker() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./service-worker.js');
	}
}

/*
|------------------------------------------------------------------------------
| Initialize Views
|------------------------------------------------------------------------------
*/

function initializeViews() {
	var mainView = app.views.create('.view-main', {
		url: '/'
	});

	if (window.config.theme.navigation == 'tabbar') {
		var componentsView = app.views.create('.view-components', {
			url: '/components'
		});
		var screensView = app.views.create('.view-screens', {
			url: '/screens'
		});
		var moreView = app.views.create('.view-more', {
			url: '/more'
		});
	}
}

/*
|------------------------------------------------------------------------------
| Initialize Theme
|------------------------------------------------------------------------------
*/

function initializeTheme() {
	var color = app.utils.theme.getColor();
	var layout = app.utils.theme.getLayout();
	app.utils.theme.setColor(color);
	app.utils.theme.setLayout(layout);
}

/*
|------------------------------------------------------------------------------
| Initialize i18n
|------------------------------------------------------------------------------
*/

function initializeI18n() {
	var language = app.utils.i18n.getLanguage();
	i18next
		.use(i18nextXHRBackend)
		.init({
		lng: language.lang,
		fallbackLng: 'en',
		whitelist: ['en', 'hi', 'ar'],
		nonExplicitWhitelist: true,
		preload: ['en', 'hi', 'ar'],
		backend: {
			loadPath: 'assets/custom/i18n/{{lng}}.json'
		}
	},
					function() {
		app.utils.i18n.setLanguage(language);
	});
}

/*
|------------------------------------------------------------------------------
| Localize App
|------------------------------------------------------------------------------
*/

function localizeApp() {
	if (window.localize) {
		window.localize('body');
	}
}

/*
|------------------------------------------------------------------------------
| Initialize Add to Home Screen
|------------------------------------------------------------------------------
*/

function initializeA2HS() {
	window.addEventListener('beforeinstallprompt', function(event) {
		event.preventDefault();
		app.a2hs = event;
		var dialog = app.dialog.create({
			title: '',
			content: '<div class="block no-margin no-padding text-align-center" style="font-size: 14px;"><img src="'+ window.config.app.logo +'" width="84" alt="" /><p><b>Add Nectar to your Home Screen?</b></p><p>Install Nectar on your home screen for quick and easy access when you\'re on the go.</p></div>',
			verticalButtons: true,
			buttons: [
				{
					text: 'Add to Home Screen',
					bold: true,
					color: 'green',
					onClick: function() {
						app.a2hs.prompt();
						app.a2hs.userChoice
							.then(function(choice) {
							if (choice.outcome == 'accepted') {
								app.toast.show({
									text: 'Yaay! Added to Home Screen',
									position:'bottom',
									cssClass: 'toast-round bg-color-green'
								});
							}
							else {
								app.toast.show({
									text: 'Oops! Could not add to Home Screen',
									position:'bottom',
									cssClass: 'toast-round bg-color-red'
								});
							}
							app.a2hs = null;
						});
						app.dialog.close();
					}
				},
				{
					text: 'No, Thanks',
					color: 'gray'
				}
			]
		});
		setTimeout(function() {
			dialog.open();
		}, 60000);
	});
}

/*
|------------------------------------------------------------------------------
| Initialize Back Button
|------------------------------------------------------------------------------
*/

function initializeBackButton() {
	document.addEventListener('backbutton', function(event) {
		event.preventDefault();
		var dismissibleModals = app.$('.actions-modal.modal-in').length + app.$('.login-screen.modal-in').length + app.$('.notification.modal-in').length + app.$('.panel-active').length + app.$('.popover.modal-in').length + app.$('.popup.modal-in').length + app.$('.sheet-modal.modal-in').length + app.$('.swipeout-opened').length + app.$('.td-wrap').length + app.$('.toast.modal-in').length + app.$('.tooltip.tooltip-in').length;
		var nonDismissibleModals = app.$('.dialog.modal-in').length;
		if (nonDismissibleModals) {
			return false;
		}
		else if (dismissibleModals) {
			app.actions.close();
			app.loginScreen.close();
			app.notification.close();
			app.panel.close();
			app.popover.close();
			app.popup.close();
			app.sheet.close();
			app.swipeout.close(app.swipeout.el);
			app.$('.td-wrap').removeClass('td-show');
			app.toast.close();
			app.$('.tooltip').remove();
		}
		else {
			var currentRoute = app.views.current.router.currentRoute.url;
			if (currentRoute == '/home' || currentRoute == '/screens/home') {
				app.dialog.confirm(
					'<div class="text-align-center"><img src="assets/custom/img/exit.svg" width="80" alt="" /><div>Do you want to exit the app?</div></div>',
					'',
					function() {
						navigator.app.exitApp();
					}
				);
			}
			else if (app.data.config.theme.navigation == 'tabbar' && (currentRoute == '/components' || currentRoute == '/screens' || currentRoute == '/more')) {
				app.tab.show('#tab-home');
			}
			else {
				if (app.$('.page.page-current .navbar .back').length) {
					app.views.current.router.back();
				}
				else {
					return false;
				}
			}
		}
	});
}

/*
|------------------------------------------------------------------------------
| Get Internet Connection Status
|------------------------------------------------------------------------------
*/

function getInternetConnectionStatus() {
	window.addEventListener('online', function() {
		app.toast.show({
			text: 'Connected to Internet',
			position: 'bottom',
			cssClass: 'bg-color-green'
		});
	});
	window.addEventListener('offline', function() {
		app.toast.show({
			text: 'No Internet Connection',
			position: 'bottom',
			cssClass: 'bg-color-red'
		});
	});
}

/*
|------------------------------------------------------------------------------
| Set AJAX Defaults
|------------------------------------------------------------------------------
*/

function setAJAXDefaults() {
	app.request.setup({
		beforeSend: function() {
			app.preloader.show();
		},
		complete: function() {
			app.preloader.hide();
		}
	});
}

/*
|------------------------------------------------------------------------------
| Set Form Validator Defaults
|------------------------------------------------------------------------------
*/

function setFormValidatorDefaults() {
	jQuery.validator.setDefaults({
		errorElement : 'div',
		errorPlacement: function(error, element) {
			error.appendTo(element.siblings('.input-error-message'));
		}
	});
}

/*
|------------------------------------------------------------------------------
| Initialize Facebook JavaScript SDK
|------------------------------------------------------------------------------
*/

function initializeFacebookJsSdk() {
	LazyLoad.js(['https://connect.facebook.net/en_US/sdk.js'], function() {
		window.fbAsyncInit = function() {
			FB.init({
				appId: window.config.facebook.appId,
				autoLogAppEvents: true,
				xfbml: true,
				version: 'v3.3'
			});
		};
		app.on('pageInit', function() {
			FB.XFBML.parse();
		});
		app.on('pageReInit', function() {
			FB.XFBML.parse();
		});
	});
}