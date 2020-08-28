
function uno(){
    marcado=-1
    if(document.test.gender.length){
    for(i=0;i<document.test.gender.length;i++){
    if(document.test.gender[i].checked) {
    marcado=i;
    }
    }
    if(marcado!=-1)
      console.log("El valor seleccionado es: "+document.test.gender[marcado].value);
    }
    result = document.test.gender.value;

    if ( result == 'si') {
      console.log('true');
      result = 1;
    }else {
      console.log('false');
      result = 0;
    }
// 2 pregunta

    if(document.testDos.gender.length){
    for(i=0;i<document.testDos.gender.length;i++){
    if(document.testDos.gender[i].checked) {
    marcado=i;
    }
    }
    if(marcado!=-1)
      console.log("El valor seleccionado es: "+document.testDos.gender[marcado].value);
    }
    result2 = document.testDos.gender.value;

    if ( result2 == 'si') {
      console.log('true');
      result2 = 1;
    }else {
      console.log('false');
      result2 = 0;
    }
// 3 pregunta
    if(document.testTres.gender.length){
    for(i=0;i<document.testTres.gender.length;i++){
    if(document.testTres.gender[i].checked) {
    marcado=i;
    }
    }
    if(marcado!=-1)
      console.log("El valor seleccionado es: "+document.testTres.gender[marcado].value);
    }
    result3 = document.testTres.gender.value;

    if ( result3 == 'si') {
      console.log('true');
      result3 = 1;
    }else {
      console.log('false');
      result3 = 0;
    }
// 4 pregunta

    if(document.testCuatro.gender.length){
    for(i=0;i<document.testCuatro.gender.length;i++){
    if(document.testCuatro.gender[i].checked) {
    marcado=i;
    }
    }
    if(marcado!=-1)
      console.log("El valor seleccionado es: "+document.testCuatro.gender[marcado].value);
    }
    result4 = document.testCuatro.gender.value;

    if ( result4 == 'si') {
      console.log('true');
      result4 = 1;
    }else {
      console.log('false');
      result4 = 0;
    }
// 5 pregunta

        if(document.testCinco.gender.length){
        for(i=0;i<document.testCinco.gender.length;i++){
        if(document.testCinco.gender[i].checked) {
        marcado=i;
        }
        }
        if(marcado!=-1)
          console.log("El valor seleccionado es: "+document.testCinco.gender[marcado].value);
        }
        result5 = document.testCinco.gender.value;

        if ( result5 == 'si') {
          console.log('true');
          result5 = 1;
        }else {
          console.log('false');
          result5 = 0;
        }
// 6 pregunta

        if(document.testSeis.gender.length){
        for(i=0;i<document.testSeis.gender.length;i++){
        if(document.testSeis.gender[i].checked) {
        marcado=i;
        }
        }
        if(marcado!=-1)
          console.log("El valor seleccionado es: "+document.testSeis.gender[marcado].value);
        }
        result6 = document.testSeis.gender.value;

        if ( result6 == 'si') {
          console.log('true');
          result6 = 1;
        }else {
          console.log('false');
          result6 = 0;
        }
// 7 pregunta

        if(document.testSiete.gender.length){
        for(i=0;i<document.testSiete.gender.length;i++){
        if(document.testSiete.gender[i].checked) {
        marcado=i;
        }
        }
        if(marcado!=-1)
          console.log("El valor seleccionado es: "+document.testSiete.gender[marcado].value);
        }
        result7 = document.testSiete.gender.value;

        if ( result7 == 'si') {
          console.log('true');
          result7 = 1;
        }else {
          console.log('false');
          result7 = 0;
        }

      if (result == 1 && result2 == 1 && result3 == 1 && result4 == 1 && result5 == 1 && result6 == 1 && result7 == 1) {
          window.open("./8913");
      }else {
        function suma(){
          sumaRes = result + result2 + result3 + result4 + result5 + result6 + result7;
          console.log(sumaRes);
          sumafin = 'Tu puntaje es: ' + sumaRes + '/7';
        }
        suma();
        document.getElementById('testResult').innerHTML = `<br><p>Una o más de las respuesta son incorrectas. Por favor revisa de nuevo y sigue intentándolo.</p><br>`;
        document.getElementById('puntaje').innerHTML = sumafin;
      }
}
