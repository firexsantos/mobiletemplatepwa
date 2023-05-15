$(document).ready(function() {
	global_settings(defaultval);
	//console.log(defaultval.theme);

	// loop and active mark default values
	for (var key in defaultval) {
		if (defaultval.hasOwnProperty(key)) {
			//console.log(key + " : " + defaultval[key]);
			//$(".appsettings[data-type='"+key+"'][data-value='"+defaultval[key]+"']").addClass("active");
		}
	}

	// on click any link apply settings
	$(document).on('click', '.appsettings', function(e) {
		e.preventDefault();

		var type = $(this).attr('data-type');
		var value = $(this).attr('data-value');

		//console.log(type+value);

		$(".appsettings[data-type='" + type + "']").removeClass('active');
		$(".appsettings[data-type='" + type + "'][data-value='" + value + "']").addClass('active');

		// if (type == 'theme') {
		// 	if (value != '' && value != defaultval[type]) {
		// 		$('link#main-style').attr('href', 'assets/css/style-' + value + '.css');
		// 	} else {
		// 		$('link#main-style').attr('href', 'assets/css/style.css');
		// 	}
		// }
		//else {
		if (type == 'site_mode') {
			// site mode related settings here.
			if (value == 'dark') {
				var set_sitemode = { header: 'dark', menu: 'dark', footer: 'dark', footer_menu_style: 'dark' };
				site_mode_settings(set_sitemode);
			} else if (value == 'light') {
				var set_sitemode = { header: 'light', menu: 'light', footer: defaultval['footer'], footer_menu_style: 'light' };
				site_mode_settings(set_sitemode);
			}
		}

		// if (value == defaultval[type]) {
		// 	value = '';
		// }
		var attr = 'data-' + type + '';
		$('body').attr(attr, value);
		//}

		//settings_session();
		localStorage[type] = value;
	});

	// on click any link apply settings
	$(document).on('click', '.nav-site-mode', function(e) {
		e.preventDefault();
		var active = $(".appsettings[data-type='site_mode'].active");
		var mode = active.attr('data-value');
		switch_site_mode(mode);
		//settings_session();
	});

	// on click any link apply settings
	$(document).on('click', '.switch-site-mode', function(e) {
		e.preventDefault();
		var mode = ''; 
		if($(this).hasClass('light')){
			mode = "dark";
		} else if($(this).hasClass('dark')){
			mode = "light";
		} 
		switch_site_mode(mode);
		//settings_session();
	});

	function switch_site_mode(mode){
		console.log(mode);
		if (mode == 'light') {
			var set_sitemode = { header: 'dark', menu: 'dark', footer: 'dark', footer_menu_style: 'dark', site_mode: 'dark' };
			site_mode_settings(set_sitemode);
		} else {
			var set_sitemode = { header: 'light', menu: 'light', footer: defaultval['footer'], footer_menu_style: 'light', site_mode: 'light' };
			site_mode_settings(set_sitemode);
		}
	}


	function site_mode_settings(obj) {
		$.each(obj, function(type, value) {
			//console.log( type + ": " + value );
			$(".appsettings[data-type='" + type + "']").removeClass('active');
			$(".appsettings[data-type='" + type + "'][data-value='" + value + "']").addClass('active');
			$('body').attr('data-' + type, value);
			localStorage[type] = value;
		});
	}

	function global_settings(defaultval) {
		// Set default values in localstorage if no value is set yet
		for (var key in defaultval) {
			if (defaultval.hasOwnProperty(key)) {
				//console.log(key + ' : ' + defaultval[key]);
				if (localStorage.getItem(key) == '' || localStorage.getItem(key) == null) {
					//console.log('set now: ');
					localStorage[key] = defaultval[key];
				}
			}
			//console_log(key+": "+localStorage[key]);

			// Set body tag attributes based on localstorage
			// Also Set Settings checked values based on localstorage
			if (localStorage.getItem(key) != '') {
				$('body').attr('data-' + key, localStorage[key]);
				$(".appsettings[data-type='" + key + "']").removeClass('active');
				$(".appsettings[data-type='" + key + "'][data-value='" + localStorage[key] + "']").addClass('active');
			}
		}

		/*console_log(localStorage.site_mode);
        type = "site_mode";
        value = localStorage.site_mode;
        $("body").attr('data-'+type,value);*/

		/*// loop and active mark default values
        for (var key in defaultval) {
          if(defaultval.hasOwnProperty(key)){
            //console_log(key + " : " + defaultval[key]);
            //$(".appsettings[data-type='"+key+"'][data-value='"+defaultval[key]+"']").addClass("active");
          }
        }*/
	}

	// function settings_session() {
	// 	var type = 'aa';
	// 	sess = '';
	// 	$('.sidesettings .appsettings.active').each(function(index) {
	// 		sess += $(this).attr('data-type') + ':';
	// 		sess += $(this).attr('data-value') + '|';
	// 	});

	// 	$.post(
	// 		'includes/settings_session.php',
	// 		{
	// 			sess: sess
	// 		},
	// 		function(response, status) {
	// 			//console.log("*----Received Data----*nnResponse : " + response+"nnStatus : " + status);
	// 		}
	// 	);
	// }
});
//console.log(localStorage);
// resetSettings();

function resetSettings(){
	console.log(localStorage);

	for (var key in defaultval) {
		if (defaultval.hasOwnProperty(key)) {
			//console.log(key + ' : ' + defaultval[key]);
	//		if (localStorage.getItem(key) == '' || localStorage.getItem(key) == null) {
				console.log('reset: '+key);
				localStorage[key] = '';
	//		}
		}
	}

}