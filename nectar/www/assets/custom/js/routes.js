 'use strict';

window.routes = [
	{
		path: '/',
		componentUrl: './partials/screens/splash.html'
	},
	{
		path: '/walkthrough',
		componentUrl: './partials/screens/walkthrough.html'
	},
	{
		path: '/home',
		componentUrl: './partials/screens/home.html'
	},
	{
		path: '/components',
		componentUrl: './partials/components.html',
		routes: [
			{
				path: '/accordion',
				componentUrl: './partials/components/accordion.html'
			},
			{
				path: '/action-sheet',
				componentUrl: './partials/components/action-sheet.html'
			},
			{
				path: '/autocomplete',
				componentUrl: './partials/components/autocomplete.html'
			},
			{
				path: '/badge',
				componentUrl: './partials/components/badge.html'
			},
			{
				path: '/button',
				componentUrl: './partials/components/button.html'
			},
			{
				path: '/cards',
				componentUrl: './partials/components/cards.html'
			},
			{
				path: '/checkbox',
				componentUrl: './partials/components/checkbox.html'
			},
			{
				path: '/chips',
				componentUrl: './partials/components/chips.html'
			},
			{
				path: '/content-block',
				componentUrl: './partials/components/content-block.html'
			},
			{
				path: '/data-table',
				componentUrl: './partials/components/data-table.html'
			},
			{
				path: '/datepicker',
				componentUrl: './partials/components/datepicker.html'
			},
			{
				path: '/dialog',
				componentUrl: './partials/components/dialog.html'
			},
			{
				path: '/floating-action-button',
				componentUrl: './partials/components/floating-action-button.html',
				routes: [
					{
						path: '/default',
						componentUrl: './partials/components/fab-default.html'
					},
					{
						path: '/extended',
						componentUrl: './partials/components/fab-extended.html'
					},
					{
						path: '/speed-dial',
						componentUrl: './partials/components/fab-speed-dial.html'
					},
					{
						path: '/morph-searchbar',
						componentUrl: './partials/components/fab-morph-searchbar.html'
					},
					{
						path: '/morph-toolbar',
						componentUrl: './partials/components/fab-morph-toolbar.html'
					}
				]
			},
      {
				path: '/form-elements',
				componentUrl: './partials/components/form-elements.html'
			},
      {
				path: '/form-validator',
				componentUrl: './partials/components/form-validator.html'
			},
			{
				path: '/gauge',
				componentUrl: './partials/components/gauge.html'
			},
			{
				path: '/grid',
				componentUrl: './partials/components/grid.html'
			},
			{
				path: '/hamburger',
				componentUrl: './partials/components/hamburger.html'
			},
			{
				path: '/infinite-scroll',
				componentUrl: './partials/components/infinite-scroll.html'
			},
			{
				path: '/keypad',
				componentUrl: './partials/components/keypad.html'
			},
			{
				path: '/lazy-load',
				componentUrl: './partials/components/lazy-load.html'
			},
			{
				path: '/list-index',
				componentUrl: './partials/components/list-index.html'
			},
			{
				path: '/list-view',
				componentUrl: './partials/components/list-view.html'
			},
			{
				path: '/navbar',
				componentUrl: './partials/components/navbar.html',
				routes: [
					{
						path: '/fixed',
						componentUrl: './partials/components/navbar-fixed.html'
					},
					{
						path: '/hide-on-scroll',
						componentUrl: './partials/components/navbar-hide-on-scroll.html'
					}
				]
			},
			{
				path: '/note',
				componentUrl: './partials/components/note.html'
			},
			{
				path: '/notification',
				componentUrl: './partials/components/notification.html'
			},
			{
				path: '/photo-browser',
				componentUrl: './partials/components/photo-browser.html'
			},
			{
				path: '/picker',
				componentUrl: './partials/components/picker.html'
			},
			{
				path: '/popover',
				componentUrl: './partials/components/popover.html'
			},
			{
				path: '/popup',
				componentUrl: './partials/components/popup.html'
			},
			{
				path: '/preloader',
				componentUrl: './partials/components/preloader.html'
			},
			{
				path: '/progress-bar',
				componentUrl: './partials/components/progress-bar.html'
			},
			{
				path: '/pull-to-refresh',
				componentUrl: './partials/components/pull-to-refresh.html'
			},
			{
				path: '/radio',
				componentUrl: './partials/components/radio.html'
			},
			{
				path: '/range-slider',
				componentUrl: './partials/components/range-slider.html'
			},
			{
				path: '/rating',
				componentUrl: './partials/components/rating.html'
			},
			{
				path: '/searchbar',
				componentUrl: './partials/components/searchbar.html',
				routes: [
					{
						path: '/fixed',
						componentUrl: './partials/components/searchbar-fixed.html'
					},
					{
						path: '/static',
						componentUrl: './partials/components/searchbar-static.html'
					},
					{
						path: '/expandable',
						componentUrl: './partials/components/searchbar-expandable.html'
					}
				]
			},
			{
				path: '/sheet-modal',
				componentUrl: './partials/components/sheet-modal.html'
			},
			{
				path: '/side-panel',
				componentUrl: './partials/components/side-panel.html'
			},
			{
				path: '/signature-pad',
				componentUrl: './partials/components/signature-pad.html',
				beforeEnter: function(routeTo, routeFrom, resolve, reject) {
					app.preloader.show();
					if (window.SignaturePad) {
						app.preloader.hide();
						resolve();
					}
					else {
						LazyLoad.js(['assets/vendor/signature-pad/signature-pad.min.js'], function() {
							app.preloader.hide();
							resolve();
						});
					}
				}
			},
			{
				path: '/smart-select',
				componentUrl: './partials/components/smart-select.html'
			},
			{
				path: '/sortable-list',
				componentUrl: './partials/components/sortable-list.html'
			},
			{
				path: '/stepper',
				componentUrl: './partials/components/stepper.html'
			},
			{
				path: '/stories',
				componentUrl: './partials/components/stories.html',
				beforeEnter: function(routeTo, routeFrom, resolve, reject) {
					app.preloader.show();
					if (window.Zuck) {
						app.preloader.hide();
						resolve();
					}
					else {
						LazyLoad.js(['assets/vendor/zuck/zuck.min.js'], function() {
							LazyLoad.css([
								'assets/vendor/zuck/zuck.min.css',
								'assets/vendor/zuck/skins/facesnap.min.css',
								'assets/vendor/zuck/skins/snapgram.min.css',
								'assets/vendor/zuck/skins/snapssenger.min.css',
								'assets/vendor/zuck/skins/vemdezap.min.css'
							],
							function() {
								app.preloader.hide();
								resolve();
							});
						});
					}
				}
			},
			{
				path: '/subnavbar',
				componentUrl: './partials/components/subnavbar.html'
			},
			{
				path: '/swipeout',
				componentUrl: './partials/components/swipeout.html'
			},
			{
				path: '/swiper-slider',
				componentUrl: './partials/components/swiper-slider.html',
				routes: [
					{
						path: '/horizontal',
						componentUrl: './partials/components/swiper-slider-horizontal.html'
					},
					{
						path: '/vertical',
						componentUrl: './partials/components/swiper-slider-vertical.html'
					}
				]
			},
			{
				path: '/tabs',
				componentUrl: './partials/components/tabs.html',
				routes: [
					{
						path: '/static',
						componentUrl: './partials/components/tabs-static.html'
					},
					{
						path: '/animated',
						componentUrl: './partials/components/tabs-animated.html'
					},
					{
						path: '/swipeable',
						componentUrl: './partials/components/tabs-swipeable.html'
					},
					{
						path: '/tabbar',
						componentUrl: './partials/components/tabbar.html'
					}
				]
			},
			{
				path: '/timeline',
				componentUrl: './partials/components/timeline.html',
				routes: [
					{
						path: '/vertical',
						componentUrl: './partials/components/timeline-vertical.html'
					},
					{
						path: '/horizontal',
						componentUrl: './partials/components/timeline-horizontal.html'
					},
					{
						path: '/calendar',
						componentUrl: './partials/components/timeline-calendar.html'
					}
				]
			},
			{
				path: '/timepicker',
				componentUrl: './partials/components/timepicker.html'
			},
			{
				path: '/toast',
				componentUrl: './partials/components/toast.html'
			},
			{
				path: '/toggle',
				componentUrl: './partials/components/toggle.html'
			},
			{
				path: '/toolbar',
				componentUrl: './partials/components/toolbar.html',
				routes: [
					{
						path: '/static',
						componentUrl: './partials/components/toolbar-static.html'
					},
					{
						path: '/fixed',
						componentUrl: './partials/components/toolbar-fixed.html'
					},
					{
						path: '/hide-on-scroll',
						componentUrl: './partials/components/toolbar-hide-on-scroll.html'
					}
				]
			},
			{
				path: '/tooltip',
				componentUrl: './partials/components/tooltip.html'
			},
			{
				path: '/virtual-list',
				componentUrl: './partials/components/virtual-list.html'
			},
		]
	},
	{
		path: '/screens',
		componentUrl: './partials/screens.html',
		routes: [
			{
				path: '/404',
				componentUrl: './partials/screens/404.html'
			},
			{
				path: '/about',
				componentUrl: './partials/screens/about.html'
			},
			{
				path: '/activity-feed',
				componentUrl: './partials/screens/activity-feed.html'
			},
			{
				path: '/articles-list',
				componentUrl: './partials/screens/articles-list.html'
			},
			{
				path: '/articles-single',
				componentUrl: './partials/screens/articles-single.html'
			},
			{
				path: '/business-profile',
				componentUrl: './partials/screens/business-profile.html'
			},
			{
				path: '/careers',
				componentUrl: './partials/screens/careers.html'
			},
			{
				path: '/cart',
				componentUrl: './partials/screens/cart.html'
			},
			{
				path: '/chat',
				componentUrl: './partials/screens/chat.html'
			},
			{
				path: '/checkout',
				componentUrl: './partials/screens/checkout.html'
			},
			{
				path: '/coming-soon',
				componentUrl: './partials/screens/coming-soon.html'
			},
			{
				path: '/contact-us',
				componentUrl: './partials/screens/contact-us.html',
				beforeEnter: function(routeTo, routeFrom, resolve, reject) {
					app.preloader.show();
					if (window.google && window.google.maps) {
						app.preloader.hide();
						resolve();
					}
					else {
						var language = app.utils.i18n.getLanguage();
						LazyLoad.js(['https://maps.googleapis.com/maps/api/js?key=' + app.data.config.googleMaps.apiKey + '&language=' + language.lang + '&libraries=places'], function() {
							app.preloader.hide();
							resolve();
						});
					}
				}
			},
			{
				path: '/contacts-list',
				componentUrl: './partials/screens/contacts-list.html'
			},
			{
				path: '/cookies',
				componentUrl: './partials/screens/cookies.html'
			},
			{
				path: '/dashboard',
				componentUrl: './partials/screens/dashboard.html'
			},
			{
				path: '/email-confirmation',
				componentUrl: './partials/screens/email-confirmation.html'
			},
			{
				path: '/event',
				componentUrl: './partials/screens/event.html'
			},
			{
				path: '/events-calendar',
				componentUrl: './partials/screens/events-calendar.html'
			},
			{
				path: '/faq',
				componentUrl: './partials/screens/faq.html'
			},
			{
				path: '/feedback',
				componentUrl: './partials/screens/feedback.html'
			},
			{
				path: '/forgot-password',
				componentUrl: './partials/screens/forgot-password.html'
			},
			{
				path: '/home',
				componentUrl: './partials/screens/home.html'
			},
			{
				path: '/invite-friends',
				componentUrl: './partials/screens/invite-friends.html'
			},
			{
				path: '/leaderboard',
				componentUrl: './partials/screens/leaderboard.html'
			},
			{
				path: '/login',
				componentUrl: './partials/screens/login.html'
			},
			{
				path: '/notifications',
				componentUrl: './partials/screens/notifications.html'
			},
			{
				path: '/otp-verification',
				componentUrl: './partials/screens/otp-verification.html'
			},
			{
				path: '/pattern-lock',
				componentUrl: './partials/screens/pattern-lock.html',
				beforeEnter: function(routeTo, routeFrom, resolve, reject) {
					app.preloader.show();
					if (window.PatternLock) {
						app.preloader.hide();
						resolve();
					}
					else {
						LazyLoad.js(['assets/vendor/patternlock/patternlock.min.js'], function() {
							LazyLoad.css(['assets/vendor/patternlock/patternlock.min.css'], function() {
								app.preloader.hide();
								resolve();
							});
						});
					}
				}
			},
			{
				path: '/poll',
				componentUrl: './partials/screens/poll.html'
			},
			{
				path: '/pricing-plans',
				componentUrl: './partials/screens/pricing-plans.html'
			},
			{
				path: '/privacy',
				componentUrl: './partials/screens/privacy.html'
			},
			{
				path: '/products-list',
				componentUrl: './partials/screens/products-list.html'
			},
			{
				path: '/products-single',
				componentUrl: './partials/screens/products-single.html'
			},
			{
				path: '/profile-setup',
				componentUrl: './partials/screens/profile-setup.html'
			},
			{
				path: '/recipe',
				componentUrl: './partials/screens/recipe.html'
			},
			{
				path: '/settings',
				componentUrl: './partials/screens/settings.html'
			},
			{
				path: '/signup',
				componentUrl: './partials/screens/signup.html'
			},
			{
				path: '/signup/email',
				componentUrl: './partials/screens/signup-email.html'
			},
			{
				path: '/splash',
				componentUrl: './partials/screens/splash.html'
			},
			{
				path: '/team',
				componentUrl: './partials/screens/team.html'
			},
			{
				path: '/terms',
				componentUrl: './partials/screens/terms.html'
			},
			{
				path: '/testimonials',
				componentUrl: './partials/screens/testimonials.html'
			},
			{
				path: '/under-maintenance',
				componentUrl: './partials/screens/under-maintenance.html'
			},
			{
				path: '/user-profile',
				componentUrl: './partials/screens/user-profile.html'
			},
			{
				path: '/walkthrough',
				componentUrl: './partials/screens/walkthrough.html'
			},
			{
				path: '/wallet',
				componentUrl: './partials/screens/wallet.html'
			}
		]
	},
	{
		path: '/themes',
		componentUrl: './partials/themes.html'
	},
	{
		path: '/web-apis',
		componentUrl: './partials/web-apis.html',
		routes: [
			{
				path: '/battery-status',
				componentUrl: './partials/web-apis/battery-status.html'
			},
			{
				path: '/clipboard',
				componentUrl: './partials/web-apis/clipboard.html'
			},
			{
				path: '/device-memory',
				componentUrl: './partials/web-apis/device-memory.html'
			},
			{
				path: '/device-orientation',
				componentUrl: './partials/web-apis/device-orientation.html'
			},
			{
				path: '/file',
				componentUrl: './partials/web-apis/file.html'
			},
			{
				path: '/fullscreen',
				componentUrl: './partials/web-apis/fullscreen.html'
			},
			{
				path: '/geolocation',
				componentUrl: './partials/web-apis/geolocation.html'
			},
			{
				path: '/network-information',
				componentUrl: './partials/web-apis/network-information.html'
			},
			{
				path: '/online-offline-status',
				componentUrl: './partials/web-apis/online-offline-status.html'
			},
			{
				path: '/page-visibility',
				componentUrl: './partials/web-apis/page-visibility.html'
			},
			{
				path: '/permissions',
				componentUrl: './partials/web-apis/permissions.html'
			},
			{
				path: '/quota-estimation',
				componentUrl: './partials/web-apis/quota-estimation.html'
			},
			{
				path: '/screen-orientation',
				componentUrl: './partials/web-apis/screen-orientation.html'
			},
			{
				path: '/server-sent-events',
				componentUrl: './partials/web-apis/server-sent-events.html'
			},
			{
				path: '/vibration',
				componentUrl: './partials/web-apis/vibration.html'
			},
			{
				path: '/web-share',
				componentUrl: './partials/web-apis/web-share.html'
			}
		]
	},
	{
		path: '/cordova-plugins',
		componentUrl: './partials/cordova-plugins.html',
		routes: [
			{
				path: '/battery-status',
				componentUrl: './partials/cordova-plugins/battery-status.html'
			},
			{
				path: '/build-info',
				componentUrl: './partials/cordova-plugins/build-info.html'
			},
			{
				path: '/device',
				componentUrl: './partials/cordova-plugins/device.html'
			},
			{
				path: '/dialogs',
				componentUrl: './partials/cordova-plugins/dialogs.html'
			},
			{
				path: '/fingerprint-authentication',
				componentUrl: './partials/cordova-plugins/fingerprint-authentication.html'
			},
			{
				path: '/geolocation',
				componentUrl: './partials/cordova-plugins/geolocation.html'
			},
			{
				path: '/inappbrowser',
				componentUrl: './partials/cordova-plugins/inappbrowser.html'
			},
			{
				path: '/local-notification',
				componentUrl: './partials/cordova-plugins/local-notification.html'
			},
			{
				path: '/network-information',
				componentUrl: './partials/cordova-plugins/network-information.html'
			},
			{
				path: '/social-sharing',
				componentUrl: './partials/cordova-plugins/social-sharing.html'
			},
			{
				path: '/splash-screen',
				componentUrl: './partials/cordova-plugins/splash-screen.html'
			},
			{
				path: '/status-bar',
				componentUrl: './partials/cordova-plugins/status-bar.html'
			},
			{
				path: '/vibration',
				componentUrl: './partials/cordova-plugins/vibration.html'
			}
		]
	},
	{
		path: '/integrations',
		componentUrl: './partials/integrations.html',
		routes: [
			{
				path: '/alasql',
				componentUrl: './partials/integrations/alasql.html',
				beforeEnter: function(routeTo, routeFrom, resolve, reject) {
					app.preloader.show();
					if (window.alasql) {
						app.preloader.hide();
						resolve();
					}
					else {
						LazyLoad.js(['assets/vendor/alasql/alasql.min.js'], function() {
							app.preloader.hide();
							resolve();
						});
					}
				}
			},
			{
				path: '/algolia-places',
				componentUrl: './partials/integrations/algolia-places.html',
				beforeEnter: function(routeTo, routeFrom, resolve, reject) {
					app.preloader.show();
					if (window.places && window.L) {
						app.preloader.hide();
						resolve();
					}
					else {
						LazyLoad.css(['https://cdn.jsdelivr.net/leaflet/1/leaflet.css'], function() {
							LazyLoad.js(['https://cdn.jsdelivr.net/leaflet/1/leaflet.js'], function() {
								LazyLoad.js(['https://cdn.jsdelivr.net/npm/places.js'], function() {
									app.preloader.hide();
									resolve();
								});
							});
						});
					}
				}
			},
			{
				path: '/disqus',
				componentUrl: './partials/integrations/disqus.html'
			},
			{
				path: '/embedly',
				componentUrl: './partials/integrations/embedly.html',
				beforeEnter: function(routeTo, routeFrom, resolve, reject) {
					app.preloader.show();
					if (window.embedly) {
						app.preloader.hide();
						resolve();
					}
					else {
						LazyLoad.js(['https://cdn.embedly.com/widgets/platform.js'], function() {
							app.preloader.hide();
							resolve();
						});
					}
				}
			},
			{
				path: '/facebook-account-kit',
				componentUrl: './partials/integrations/facebook-account-kit.html'
			},
			{
				path: '/facebook-comments',
				componentUrl: './partials/integrations/facebook-comments.html'
			},
			{
				path: '/google-admob',
				componentUrl: './partials/integrations/google-admob.html'
			},
			{
				path: '/google-amp',
				componentUrl: './partials/integrations/google-amp.html',
				beforeEnter: function(routeTo, routeFrom, resolve, reject) {
					app.preloader.show();
					if (window.AMP) {
						app.preloader.hide();
						resolve();
					}
					else {
						LazyLoad.js(['https://cdn.ampproject.org/shadow-v0.js'], function() {
							app.preloader.hide();
							resolve();
						});
					}
				}
			},
			{
				path: '/google-maps',
				componentUrl: './partials/integrations/google-maps.html',
				beforeEnter: function(routeTo, routeFrom, resolve, reject) {
					app.preloader.show();
					if (window.google && window.google.maps) {
						app.preloader.hide();
						resolve();
					}
					else {
						var language = app.utils.i18n.getLanguage();
						LazyLoad.js(['https://maps.googleapis.com/maps/api/js?key=' + app.data.config.googleMaps.apiKey + '&language=' + language.lang + '&libraries=places'], function() {
							app.preloader.hide();
							resolve();
						});
					}
				}
			},
			{
				path: '/google-sheets',
				componentUrl: './partials/integrations/google-sheets.html'
			},
			{
				path: '/gravatar',
				componentUrl: './partials/integrations/gravatar.html'
			},
			{
				path: '/mailchimp',
				componentUrl: './partials/integrations/mailchimp.html'
			},
			{
				path: '/qrcode',
				componentUrl: './partials/integrations/qrcode.html',
				beforeEnter: function(routeTo, routeFrom, resolve, reject) {
					app.preloader.show();
					if (window.qrcode) {
						app.preloader.hide();
						resolve();
					}
					else {
						LazyLoad.js(['assets/vendor/qrcode/qrcode-generator.js'], function() {
							app.preloader.hide();
							resolve();
						});
					}
				}
			},
			{
				path: '/rss-feed',
				componentUrl: './partials/integrations/rss-feed.html',
				beforeEnter: function(routeTo, routeFrom, resolve, reject) {
					app.preloader.show();
					if (window.RSSParser) {
						app.preloader.hide();
						resolve();
					}
					else {
						LazyLoad.js(['assets/vendor/rss-parser/rss-parser.min.js'], function() {
							app.preloader.hide();
							resolve();
						});
					}
				}
			}
		]
	},
	{
		path: '/utilities',
		componentUrl: './partials/utilities.html',
		routes: [
			{
				path: '/brand-icons',
				componentUrl: './partials/utilities/brand-icons.html'
			},
			{
				path: '/colors',
				componentUrl: './partials/utilities/colors.html'
			},
			{
				path: '/country-selector',
				componentUrl: './partials/utilities/country-selector.html'
			},
			{
				path: '/dropcaps',
				componentUrl: './partials/utilities/dropcaps.html'
			},
			{
				path: '/elevation',
				componentUrl: './partials/utilities/elevation.html'
			},
			{
				path: '/embeds',
				componentUrl: './partials/utilities/embeds.html'
			},
			{
				path: '/kenburn-effect',
				componentUrl: './partials/utilities/kenburn-effect.html'
			},
			{
				path: '/line-dividers',
				componentUrl: './partials/utilities/line-dividers.html'
			}
		]
	},
	{
		path: '/more',
		componentUrl: './partials/more.html'
	},
	{
		path: '(.*)',
		componentUrl: './partials/screens/404.html'
	}
];