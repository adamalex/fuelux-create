define(function (require) {
	var $ = require('jquery');
	require('fuelux');

	$(function () {
		$('#MySearch').on('searched', function (e, text) {
			alert('Searched: ' + text);
		});
	});
});