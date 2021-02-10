(function ($) {
	if ($('.optin-form .hidden-fields').length) {
		$('.optin-form .hidden-fields').each(function () {
			var hidden = $(this);
			var form = hidden.parents('form').first();
			hidden.hide();
			form.find('.input-email .form-control')
				.one('keyup', function () {
					hidden.slideDown();				
				});
		});
	}
})(jQuery);