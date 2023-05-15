'use strict';

/*
|------------------------------------------------------------------------------
| FastClick
|------------------------------------------------------------------------------
*/

Framework7.utils.fastClick = {

	enable: function(el) {
		app.$(el).removeClass('no-fastclick');
	},

	disable: function(el) {
		app.$(el).removeClass('no-fastclick');
		app.$(el).addClass('no-fastclick');
	}

}

/*
|------------------------------------------------------------------------------
| i18n
|------------------------------------------------------------------------------
*/

Framework7.utils.i18n = {

	getLanguage: function() {
		var language = localStorage.getItem('Nectar_Language') ? JSON.parse(localStorage.getItem('Nectar_Language')) : window.config.i18n;
		return language;
	},

	setLanguage: function(language) {
		var language = language ? language : window.config.i18n;
		var isCurrentRtl = app.params.rtl;

		i18next.changeLanguage(language.lang, function() {
			localStorage.setItem('Nectar_Language', JSON.stringify(language));

			app.$('html').attr('lang', language.lang);
			app.$('html').attr('dir', language.dir);

			if (language.dir == 'rtl') {
				app.$('.f7[rel=stylesheet]').attr('href', 'assets/vendor/framework7/css/framework7.rtl.min.css');
				app.params.rtl = true;
			}
			else {
				app.$('.f7[rel=stylesheet]').attr('href', 'assets/vendor/framework7/css/framework7.min.css');
				app.params.rtl = false;
			}

			window.localize = locI18next.init(i18next);
			window.localize('body');

			if (isCurrentRtl != app.params.rtl) {
				app.view.main.router.navigate('/');
			}
		});
	}

};

/*
|------------------------------------------------------------------------------
| Theme
|------------------------------------------------------------------------------
*/

Framework7.utils.theme = {

	getColor: function() {
		var color = localStorage.getItem('Nectar_Theme_Color') ? localStorage.getItem('Nectar_Theme_Color') : window.config.theme.color;
		return color;
	},

	getLayout: function() {
		var layout = localStorage.getItem('Nectar_Theme_Layout') ? localStorage.getItem('Nectar_Theme_Layout') : window.config.theme.layout;
		return layout;
	},

	setColor: function(color) {
		var color = color ? color : window.config.theme.color;

		localStorage.setItem('Nectar_Theme_Color', color);

		app.$('body').removeClass('color-theme-red color-theme-green color-theme-blue color-theme-pink color-theme-yellow color-theme-orange color-theme-gray color-theme-black');
		app.$('body').addClass('color-theme-' + color);

    this.setStatusBarColor();
	},

	setLayout: function(layout) {
		var layout = layout ? layout : window.config.theme.layout;

		localStorage.setItem('Nectar_Theme_Layout', layout);

		app.$('body').removeClass('theme-light theme-dark');
		app.$('body').addClass('theme-' + layout);

    this.setStatusBarColor();
	},

  setStatusBarColor: function() {
    var color = this.getColor();
    var layout = this.getLayout();
    var statusBarColor = null;

    if (app.theme == 'ios') {
      if (layout == 'dark') {
        statusBarColor = window.config.colors[app.theme]['statusbar_dark'];
      }
      else {
        statusBarColor = window.config.colors[app.theme]['statusbar_light'];
      }
    }
    else {
      statusBarColor = window.config.colors[app.theme]['statusbar_' + color];
    }

		app.$('meta[name=theme-color]').attr('content', statusBarColor);

		if (app.device.cordova) {
			document.addEventListener('deviceready', function() {
				StatusBar.backgroundColorByHexString(statusBarColor);
			});
		}
  }

};

/*
|------------------------------------------------------------------------------
| Web API Support
|------------------------------------------------------------------------------
*/

Framework7.support.webApi = {

	batteryStatus: (function() { if ('getBattery' in navigator || 'battery' in navigator) { return true; } else { return false; } }) (),

	clipboard: (function() { if ('clipboard' in navigator) { return true; } else { if (document.queryCommandSupported('cut') || document.queryCommandSupported('copy') || document.queryCommandSupported('paste')) { return true; } else { return false; } } }) (),

	deviceMemory: (function() { if ('deviceMemory' in navigator) { return true; } else { return false; } }) (),

	deviceOrientation: (function() { if ('DeviceOrientationEvent' in window && 'DeviceMotionEvent' in window) { return true; } else { return false; } }) (),

	file: (function() { if ('FileReader' in window || 'File' in window) { return true; } else { return false; } }) (),

	fullscreen: (function() { if ('requestFullscreen' in document.documentElement || 'webkitRequestFullscreen' in document.documentElement || 'mozRequestFullScreen' in document.documentElement || 'msRequestFullscreen') { return true; } else { return false; } }) (),

	geolocation: (function() { if ('geolocation' in navigator) { return true; } else { return false; } }) (),

	networkInformation: (function() { if ('connection' in navigator || 'webkitConnection' in navigator || 'mozConnection' in navigator) { return true; } else { return false; } }) (),

	onlineOfflineStatus: (function() { if ('onLine' in navigator) { return true; } else { return false; } }) (),

	pageVisibility: (function() { if (typeof document.hidden !== 'undefined' || typeof document.webkitHidden !== 'undefined' || typeof document.mozHidden !== 'undefined' || typeof document.msHidden !== 'undefined') { return true; } else { return false; } }) (),

	permissions: (function() { if ('permissions' in navigator) { return true; } else { return false; } }) (),

	quotaEstimation: (function() { if ('storage' in navigator && 'estimate' in navigator.storage) { return true; } else { return false; } }) (),

	screenOrientation: (function() { if ('orientation' in screen || 'mozOrientation' in screen || 'msOrientation' in screen) { return true; } else { return false; } }) (),

	serverSentEvents: (function() { if ('EventSource' in window) { return true; } else { return false; } }) (),

	vibration: (function() { if ('vibrate' in navigator) { return true; } else { return false; } }) (),

	webShare: (function() { if ('share' in navigator) { return true; } else { return false; } }) ()

};