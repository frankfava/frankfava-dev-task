(function ($) {
	if ($('.optin-form .hidden-fields').length) {
		$('.optin-form .hidden-fields').each(function () {
			var hidden = $(this);
			var form = hidden.parents('form').first();
			hidden.removeClass('show');
			form.find('.input-email input')
				.one('keyup', function () {
					hidden.addClass('show');			
				});
		});
	}
})(jQuery);