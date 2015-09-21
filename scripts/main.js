'use strict';

$(document).ready(function() {
	console.log('Ready');


	var url = 'http://tiyfe.herokuapp.com/collections/chattycats-catsnip';
	var $addPictureButton = $('#pic-add-button');
	var $addBox = $('#picture-add');
	var $imageUrl = $('#image-url');
	var $caption = $('#caption');
	var $cancelButton = $('#cancel');
	var $snipItButton = $('#snip-it');
	var $confermAdd = $('#confermation-of-add');
	var $invaledUrl = $('#invaled-url');
	var $pictureArea = $('#picture-area');

	var imageUrl = $imageUrl.val();
	var caption = $caption.val();

	$.get (
		url,
		{
			image: imageUrl,
			cap: caption
		},
		function(response) {

			response.forEach(function(response, index) {
				$pictureArea.append('<img src="' + response.image + '"><div>' + response.cap + '</div>')
			})
		}
	);

	// Open the add picture area
	$addPictureButton.click(function(e) {
		e.preventDefault();
		$addBox.css('display', 'block');
		console.log('clicked');
	});

	// Close the add picture area
	$cancelButton.click(function(e) {
		e.preventDefault();
		$addBox.css('display', 'none');
	});

	$snipItButton.click(function(e) {
		// e.preventDefault();

		var imageUrl = $imageUrl.val();
		var caption = $caption.val();

		console.log(imageUrl);
		console.log(caption);

		if(imageUrl.startsWith('http://') || imageUrl.startsWith('data') || imageUrl.startsWith('https://')) {

			$.post (
				url,
				{
					image: imageUrl,
					cap: caption
				},
				function(response) {
					console.log(response);
					$invaledUrl.css('display', 'none');
					$addBox.css('display', 'none');
					$confermAdd.css('display', 'inline');
				},
				'json'
			);
		}
		else {
			$invaledUrl.css('display', 'inline');
		}
	});



});
