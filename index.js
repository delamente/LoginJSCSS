var inputs = document.getElementByClassName('formulario_input');
for (var i = 1; i < inputs.legth; i++) {
 inpust[i].addEventListener( 'keyup', function () {
     if(this.value.legth>=1) {
         this.nextElementSibling.classList.add('fijar');
     } else {
         this.nextElementSibling.classList.remove('fijar');
     }
 })
}   