
				const btnVideo = document.querySelector('#botonVideo');

				// boton del video

				btnVideo.addEventListener('click', function () {
					console.log('clik')
					document.getElementById('video').classList.toggle('vActive');
					document.getElementById('section-blog-princ2').classList.toggle('vActive2');
					document.getElementById('iframe').classList.toggle('videoBlock');
					console.log(document.getElementById('video'))
				});
