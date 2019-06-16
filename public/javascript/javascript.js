/*Jquery*/
$('.menu .item')
  .tab()
;

$('.ui.accordion')
  .accordion()
;

function copyToClipboard(element) {
	element.innerHTML = "COPIED TO CLIPBOARD!";
	element.style.color = "white";
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
}

// Animations

// blurb expansion
function showBlurb(e) {
	// get blurb element
	var element = e.nextSibling;
	setTimeout(() => {
		element.style.display = "block";
		element.style.minheight = "100px";
	}, 500);
}

function hideBlurb(e) {
	// get blurb element
	var element = e.nextSibling;
	element.style.display = "none";
}


function openPhotoswipe(element) {
	// get gallery imageindex
	var parent = element.parentNode.parentNode;
	var child = element.parentNode;
	var i = Array.prototype.indexOf.call(parent.children, child);

	// get id of project to pick gallery
	var w = window.location.pathname.split('/')[1];

	// console.log(w);
	// console.log(i);

	var pswpElement = document.querySelectorAll('.pswp')[0];
	var items;

	switch(w) {
		case 'sfa':
			// build items array for Street Fighter Alpha
			items = [
			    {
			        src: '/images/defaultimg.jpg',
			        w: 800,
			        h: 600
			    },
			    {
			        src: '/images/defaultimg.jpg',
			        w: 800,
			        h: 600
			    },
			    {
			        src: '/images/defaultimg.jpg',
			        w: 800,
			        h: 600
			    },
			    {
			        src: '/images/defaultimg.jpg',
			        w: 800,
			        h: 600
			    }
			];
			break;
		case 'mp':
			// build items array for Street Fighter Alpha
			items = [
			    {
			        src: '/images/defaultimg.jpg',
			        w: 800,
			        h: 600
			    },
			    {
			        src: '/images/defaultimg.jpg',
			        w: 800,
			        h: 600
			    }
			];
			break;
		case 'gallery':
			// build items array for Street Fighter Alpha
			items = [
			    {
			        src: '/images/defaultimg.jpg',
			        w: 800,
			        h: 600
			    },
			    {
			        src: '/images/defaultimg.jpg',
			        w: 800,
			        h: 600
			    }
			];
	}


	// define options (if needed)
	var options = {
	    // optionName: 'option value'
	    // for example:
	    index: i // start at first slide
	};

	// Initializes and opens PhotoSwipe
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
}