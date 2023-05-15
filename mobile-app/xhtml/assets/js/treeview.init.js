var dzTreeView = function(){
	
	//Tab Slide ============ 
	var handleTreeDemo1 = function() {
		if(jQuery('#treeDemo1').length > 0)
		{
			jQuery("#treeDemo1").jstree({
                "core": {
                    "themes": {
                        "responsive": false
                    }
                },
                "types": {
                    "file": {
                        "icon": "fa fa-file-text"
                    }
                },
                "plugins": ["dnd", "types"]
            });
		}
	}

    //Tab Slide ============ 
	var handleTreeDemo2 = function() {
		if(jQuery('#treeDemo2').length > 0)
		{
			jQuery("#treeDemo2").jstree({
                "core": {
                    "themes": {
                        "responsive": false
                    }
                },
                "types": {
                    "file": {
                        "icon": "fa fa-file-text"
                    }
                },
                "plugins": ["dnd", "wholerow", "checkbox", "types"],
            });
		}
	}
	/* Function ============ */
	return {
		init:function(){
			handleTreeDemo1();
			handleTreeDemo2();
		},

		load:function(){
		},
		
		resize:function(){
		},
	}
	
}();

/* Document.ready Start */	
jQuery(document).ready(function() {
	dzTreeView.init();
	
});
/* Document.ready END */

/* Window Load START */
jQuery(window).on('load',function () {
	'use strict'; 
	dzTreeView.load();
	
});
/*  Window Load END */

/* Window Resize START */
jQuery(window).on('resize',function () {
	'use strict'; 
	dzTreeView.resize();
	
});
/*  Window Resize END */