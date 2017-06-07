var UIkit = {
	init: function() {
		this.setMinHeightForPreviews(); 		// this functions lets you set min-height for .stack-preview by setting 'data-minheight' attribute. useful for elements that are positioned absolutely.
		this.visibleCodebase();					// it lets you select which patterns you gonna see by using <select> in sidebar.
		this.filesStructure();					// simple function for styling that checks if element has children

		var sections = $('.uikit-section > :header');
		if ( sections.length ) {
			$('#uikit-toc').tokko();
		}
		
		setTimeout(function() {
			if (location.hash) {
				var h = $(location.hash).offset().top;
			    window.scrollTo(0, h);
			}
		}, 500); // lol this is bad
	},


	setMinHeightForPreviews: function() {
		$('.uikit-preview[data-minheight]').each(function() {
			var minheight = $(this).data('minheight');
			$(this).css('min-height', minheight);
		});
	},

	visibleCodebase: function() {
		$('select#uikit-codebase').on('change', function() {
			var current = $(this).val(),
				el = $('#uikit-content > section');
			localStorage.setItem('whatCodebase', current);

			switch (current) {
			    case '0': // Both 
			        el.show();
			        break;
			    case '1': // Only Core
			        el.hide().filter('[data-core]').show();
			        break;
			    case '2': // Core and common
			        el.hide().filter(':not([data-careers])').show();
			        break;
			    case '3': // Careers
			        el.hide().filter('[data-careers]').show();
			        break;
			    case '4': // Careers and common
			        el.hide().filter(':not([data-core])').show();
			        break;
			}
		});

		if(localStorage.whatCodebase) {
			$('select#uikit-codebase').val(localStorage.getItem('whatCodebase')).trigger('change');
		}
	},

	filesStructure: function() {
		var li = $('.tree-structure').find('li:has(ul)');
		li.each(function() {
			$(this).addClass('has-children');
		});
	}
}

var Colors = {
	init: function() {
		this.setValues();
		this.displayHexOrRgb();
		this.triggerComposer();
		this.colorsComposer();
	},

	setValues: function() {
		$('.colors > li').each(function() {
			var rgbColor = $(this).css('backgroundColor');
			var hexColor = rgb2hex(rgbColor);
			$(this).append($('<span class="value rgb" />').text(rgbColor));
			$(this).append($('<span class="value hex" />').text(hexColor));
		});

		function rgb2hex(rgb) {
		    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

		    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		    function hex(x) {
		        return ("0" + parseInt(x).toString(16)).slice(-2);
		    }
		    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
		}
	},

	displayHexOrRgb: function() {
		var valueHex = $('.value.hex'),
			valueRgb = $('.value.rgb');

		$('#color-code').on('change', function() {
			var current = $(this).val();
			localStorage.setItem('whatColorValue', current);

			if(current == 'hex') {
				valueRgb.hide();
				valueHex.show();
			} else if(current == 'rgb') {
				valueHex.hide();
				valueRgb.show();
			}
		});

		if(localStorage.whatColorValue) {
			$('#color-code').val(localStorage.getItem('whatColorValue')).trigger('change');
		}
	},

	triggerComposer: function() {
		$('#trigger-colors-composer').on('click', function(event) {
			event.preventDefault();

			$('#colors-composer').toggle();
			$('body').toggleClass('composer-on');
		});
	},

	colorsComposer: function() {
		$('.colors > li').on('click', function() {
			if($('body').is('.composer-on')) {
				var less = $(this).find('.less').text(),
					color = $(this).find('.rgb').text(),
					tab = $('[name="tool"]:checked').next('span'),
					element = $('[name="tool"]:checked').val(),
					property = $('[name="tool"]:checked').data('property');

				$(element).css(property, color);
				tab.find('small').text(less);
			}
		});
	}
}

$(function() {
	UIkit.init();
	//Colors.init(); // moved it to colors.html page because it's not needed anywhere else.
});