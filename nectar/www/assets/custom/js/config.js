'use strict';

window.config = {};

/*
|------------------------------------------------------------------------------
| App
|------------------------------------------------------------------------------
*/

window.config.app = {
	id: 'website.nectar.classic',
	version: '2.8.0',
	title: 'Nectar',
	tagline: 'Mobile Web App Kit',
	logo: 'assets/custom/img/logo.svg'
};

/*
|------------------------------------------------------------------------------
| Algolia Places
|------------------------------------------------------------------------------
*/

window.config.algoliaPlaces = {
	appId: null,
	apiKey: null
};

/*
|------------------------------------------------------------------------------
| Envato
|------------------------------------------------------------------------------
*/

window.config.envato = {
	itemUrl: 'https://themeforest.net/item/nectar-mobile-web-app-kit/20466093?ref=pmsgz'
};

/*
|------------------------------------------------------------------------------
| Facebook
|------------------------------------------------------------------------------
*/

window.config.facebook = {
	appId: '649779638781363'
};

/*
|------------------------------------------------------------------------------
| Google AdMob
|------------------------------------------------------------------------------
*/

window.config.admob = {
	bannerId: 'ca-app-pub-3940256099942544/6300978111',
	interstitialId: 'ca-app-pub-3940256099942544/1033173712',
	rewardedVideoId: 'ca-app-pub-3940256099942544/5224354917'
};

/*
|------------------------------------------------------------------------------
| Google Maps
|------------------------------------------------------------------------------
*/

window.config.googleMaps = {
	apiKey: 'AIzaSyCtiPGi_U05PWnEaFdu6SY62pxz57kBNvw'
};

/*
|------------------------------------------------------------------------------
| i18n
|------------------------------------------------------------------------------
*/

window.config.i18n = {
	lang: 'en',
	dir: 'ltr'
};

/*
|------------------------------------------------------------------------------
| MailChimp
|------------------------------------------------------------------------------
*/

window.config.mailchimp = {
	subscribeUrl: 'https://gmail.us20.list-manage.com/subscribe/post-json',
	userId: '61e096fdff69bc5a03377380c',
	audienceId: 'edf9a19615'
};

/*
|------------------------------------------------------------------------------
| Colors
|------------------------------------------------------------------------------
*/

window.config.colors = {
	ios: {
		red: '#FF3B30',
		green: '#4CD964',
		blue: '#007AFF',
		pink: '#FF2D55',
		yellow: '#FFCC00',
		orange: '#FF9500',
		gray: '#8E8E93',
		black: '#000000',
    statusbar_light: '#F7F7F8',
    statusbar_dark: '#1B1B1B'
	},
	md: {
		red: '#F44336',
		green: '#4CAF50',
		blue: '#2196F3',
		pink: '#E91E63',
		yellow: '#FFEB3B',
		orange: '#FF9800',
		gray: '#9E9E9E',
		black: '#000000',
    statusbar_red: '#D2190B',
    statusbar_green: '#357A38',
    statusbar_blue: '#0A6EBD',
    statusbar_pink: '#AA1145',
    statusbar_yellow: '#EED500',
    statusbar_orange: '#B36A00',
    statusbar_gray: '#787878',
    statusbar_black: '#000000',
	},
  oc: {
    gray0: '#F8F9FA',
    gray1: '#F1F3F5',
    gray2: '#E9ECEF',
    gray3: '#DEE2E6',
    gray4: '#CED4DA',
    gray5: '#ADB5BD',
    gray6: '#868E96',
    gray7: '#495057',
    gray8: '#343A40',
    gray9: '#212529',
    red0: '#FFF5F5',
    red1: '#FFE3E3',
    red2: '#FFC9C9',
    red3: '#FFA8A8',
    red4: '#FF8787',
    red5: '#FF6B6B',
    red6: '#FA5252',
    red7: '#F03E3E',
    red8: '#E03131',
    red9: '#C92A2A',
    pink0: '#FFF0F6',
    pink1: '#FFDEEB',
    pink2: '#FCC2D7',
    pink3: '#FAA2C1',
    pink4: '#F783AC',
    pink5: '#F06595',
    pink6: '#E64980',
    pink7: '#D6336C',
    pink8: '#C2255C',
    pink9: '#A61E4D',
    purple0: '#F8F0FC',
    purple1: '#F3D9FA',
    purple2: '#EEBEFA',
    purple3: '#E599F7',
    purple4: '#DA77F2',
    purple5: '#CC5DE8',
    purple6: '#BE4BDB',
    purple7: '#AE3EC9',
    purple8: '#9C36B5',
    purple9: '#862E9C',
    violet0: '#F3F0FF',
    violet1: '#E5DBFF',
    violet2: '#D0BFFF',
    violet3: '#B197FC',
    violet4: '#9775FA',
    violet5: '#845EF7',
    violet6: '#7950F2',
    violet7: '#7048E8',
    violet8: '#6741D9',
    violet9: '#5F3DC4',
    indigo0: '#EDF2FF',
    indigo1: '#DBE4FF',
    indigo2: '#BAC8FF',
    indigo3: '#91A7FF',
    indigo4: '#748FFC',
    indigo5: '#5C7CFA',
    indigo6: '#4C6EF5',
    indigo7: '#4263EB',
    indigo8: '#3B5BDB',
    indigo9: '#364FC7',
    blue0: '#E7F5FF',
    blue1: '#D0EBFF',
    blue2: '#A5D8FF',
    blue3: '#74C0FC',
    blue4: '#4DABF7',
    blue5: '#339AF0',
    blue6: '#228BE6',
    blue7: '#1C7ED6',
    blue8: '#1971C2',
    blue9: '#1864AB',
    cyan0: '#E3FAFC',
    cyan1: '#C5F6FA',
    cyan2: '#99E9F2',
    cyan3: '#66D9E8',
    cyan4: '#3BC9DB',
    cyan5: '#22B8CF',
    cyan6: '#15AABF',
    cyan7: '#1098AD',
    cyan8: '#0C8599',
    cyan9: '#0B7285',
    teal0: '#E6FCF5',
    teal1: '#C3FAE8',
    teal2: '#96F2D7',
    teal3: '#63E6BE',
    teal4: '#38D9A9',
    teal5: '#20C997',
    teal6: '#12B886',
    teal7: '#0CA678',
    teal8: '#099268',
    teal9: '#087F5B',
    green0: '#EBFBEE',
    green1: '#D3F9D8',
    green2: '#B2F2BB',
    green3: '#8CE99A',
    green4: '#69DB7C',
    green5: '#51CF66',
    green6: '#40C057',
    green7: '#37B24D',
    green8: '#2F9E44',
    green9: '#2B8A3E',
    lime0: '#F4FCE3',
    lime1: '#E9FAC8',
    lime2: '#D8F5A2',
    lime3: '#C0EB75',
    lime4: '#A9E34B',
    lime5: '#94D82D',
    lime6: '#82C91E',
    lime7: '#74B816',
    lime8: '#66A80F',
    lime9: '#5C940D',
    yellow0: '#FFF9DB',
    yellow1: '#FFF3BF',
    yellow2: '#FFEC99',
    yellow3: '#FFE066',
    yellow4: '#FFD43B',
    yellow5: '#FCC419',
    yellow6: '#FAB005',
    yellow7: '#F59F00',
    yellow8: '#F08C00',
    yellow9: '#E67700',
    orange0: '#FFF4E6',
    orange1: '#FFE8CC',
    orange2: '#FFD8A8',
    orange3: '#FFC078',
    orange4: '#FFA94D',
    orange5: '#FF922B',
    orange6: '#FD7E14',
    orange7: '#F76707',
    orange8: '#E8590C',
    orange9: '#D9480F'
  }
};

/*
|------------------------------------------------------------------------------
| Theme
|------------------------------------------------------------------------------
*/

window.config.theme = {
	color: 'blue',
	layout: 'light',
  navigation: 'hamburger'
};