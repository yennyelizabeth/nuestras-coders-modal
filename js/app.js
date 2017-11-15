var  selectPromo = document.getElementById('select-promo');
var  imagesContainer = document.getElementById('images-container');
var  subImagesContainer= null;

/* evento click */
imagesContainer.addEventListener('click', showModal);

/* evento change en la lista desplegable*/
selectPromo.addEventListener('change',showPromo) ;

/* Por defecto mostrar todas las imagenes*/

/* para guardar las imágenes de coders*/

// arrays de las promociones: alumnas
var arr4Chile = ['anais-araya', 'andrea-miranda', 'berenisse-rios', 'caterina-da-silva', 'daniela-sanchez', 'francisca-ojeda', 'katerine-sandoval'];
var arr5Lima = ['andrea-cabrera', 'ariadna-izaguirre', 'carito-juarez', 'cristy-castro', 'karol-orrillo', 'paola-ortiz', 'teresa-lara'];
var arr6Lima = ['arantza-burga', 'daguiana-revoredo', 'elizabeth-condori', 'grecia-rayme', 'janine-vega', 'michelle-more', 'mishel-velasquez', 'rosario-felix'];

// arrays de las promociones: alumnas
var CHILE4 = '4-chile';
var LIMA5  = '5-lima';
var LIMA6  = '6-lima';


/* 1er método
var img = document.createElement('img');
img.setAttribute('src', 'assets/images/4-chile/anais-araya.jpg');
imagesContainer.appendChild(img); */


/* 2do método
for ( var i = 0; i < arr4Chile.length ; i++) {
  var img= document.createElement('img');
  img.setAttribute('src', 'assets/images/4-chile/anais-araya.jpg') ;
  imagesContainer.appendChild(img);
} */


function showModal () {
  /*console.log(event) ; */
  var modal = document.createElement('div');
  modal.style.position= 'fixed';
  modal.style.background= 'rgba(0, 0, 0,0.7)';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';

 console.log(event.target); /* la información de img esta en evento*/


  event.target.style.margin = window.innerHeight / 4 + 'px auto' ;
  event.target.style.display = 'block' ;

  document.body.appendChild(modal);

  modal.addEventListener('click', function(event){
    event.target.parentElement.removeChild(event.target);
  });
}



function showCoders (arr, promo) {

 if(subImagesContainer) /* si no exista me da error*/
  imagesContainer.removeChild(subImagesContainer);

  subImagesContainer = document.createElement('div'); /*crea */
  imagesContainer.appendChild(subImagesContainer) ; /* mmodificar lineas abajo*/

  for ( var i = 0 ;  i < arr.length ; i++ )
    createImage(promo, arr[i]);
}

/* 3er método */
function createImage(promo , nombre ) {
  var img = document.createElement('img');
  img.setAttribute('src' , 'assets/images/' + promo + '/' + nombre + '.jpg') ;
  /*imagesContainer.appendChild(img); - cambiando de padre*/
  subImagesContainer.appendChild(img);
}


function showPromo (event){
  /*console.log(event.target.value);*/
  switch (true) {
    case event.target.value === '4chile':
    /*imagesContainer.textContent = '' ; /* limpia contenedor*/
    showCoders(arr4Chile, CHILE4);
    break;

    case event.target.value === '5lima':
    /*imagesContainer.textContent = '' ;*/
    showCoders(arr5Lima, LIMA5);
    break;

    case event.target.value === '6lima':
    /*imagesContainer.textContent = '' ;*/
    showCoders(arr6Lima, LIMA6);
    break;
    default:
    /*imagesContainer.textContent = '' ;*/
    showCoders(arr4Chile, CHILE4);
    showCoders(arr5Lima, LIMA5);
    showCoders(arr6Lima, LIMA6);
  }
}

showCoders( arr4Chile, CHILE4 );
showCoders( arr5Lima, LIMA5 );
showCoders( arr6Lima, LIMA6 );
