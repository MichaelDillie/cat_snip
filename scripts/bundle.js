(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
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

	$.get(url, {
		image: imageUrl,
		cap: caption
	}, function (response) {

		response.forEach(function (response, index) {
			$pictureArea.append('<img src="' + response.image + '"><div>' + response.cap + '</div>');
		});
	});

	// Open the add picture area
	$addPictureButton.click(function (e) {
		e.preventDefault();
		$addBox.css('display', 'block');
		console.log('clicked');
	});

	// Close the add picture area
	$cancelButton.click(function (e) {
		e.preventDefault();
		$addBox.css('display', 'none');
	});

	$snipItButton.click(function (e) {
		// e.preventDefault();

		var imageUrl = $imageUrl.val();
		var caption = $caption.val();

		console.log(imageUrl);
		console.log(caption);

		if (imageUrl.startsWith('http://') || imageUrl.startsWith('data') || imageUrl.startsWith('https://')) {

			$.post(url, {
				image: imageUrl,
				cap: caption
			}, function (response) {
				console.log(response);
				$invaledUrl.css('display', 'none');
				$addBox.css('display', 'none');
				$confermAdd.css('display', 'inline');
			}, 'json');
		} else {
			$invaledUrl.css('display', 'inline');
		}
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map