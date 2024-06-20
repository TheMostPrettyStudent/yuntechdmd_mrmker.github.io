document.addEventListener('DOMContentLoaded', function () {
	var flip = document.querySelector('.book-content');
	var uno = document.querySelectorAll('.book');
	var contZindex = 2;
	var customZindex = 1;

	for (var i = 0; i < uno.length; i++) {
		uno[i].style.zIndex = customZindex;
		customZindex--;

		uno[i].addEventListener('click', function (e) {
			var tgt = e.target;
			var unoThis = this;

			unoThis.style.zIndex = contZindex;
			contZindex++;

			if (tgt.closest('.face-front')) {
				unoThis.style.zIndex = contZindex;
				contZindex += 20;
				setTimeout(function () {
					unoThis.style.transform = 'rotateY(-180deg)';
				}, 500);
			}
			if (tgt.closest('.face-back')) {
				unoThis.style.zIndex = contZindex;
				contZindex += 20;
				setTimeout(function () {
					unoThis.style.transform = 'rotateY(0deg)';
				}, 500);
			}

			if (tgt.id == 'portada') {
				flip.classList.remove("trnsf-reset");
				flip.classList.add("trnsf");
			}
			if (tgt.id == 'trsf') {
				flip.classList.remove("trnsf");
				flip.classList.add("trnsf-reset");
			}
		});
	}
	
});
