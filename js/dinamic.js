const btnToggle = document.querySelector('.menu');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('header2').classList.toggle('active1');
  document.getElementById('contenido2').classList.toggle('active');
  document.getElementById('second').classList.toggle('active2');

});
