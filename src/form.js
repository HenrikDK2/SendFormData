const allElements = document.querySelectorAll('.contact__input');
const allArray = Array.from(allElements);

document.getElementsByClassName('contact')[0].addEventListener('submit', validate);
allElements.forEach(element => {
   element.addEventListener("keyup", validate);
   element.addEventListener("blur", validate);
});

function formData() {
   let formData = new FormData();
   allElements.forEach(element => formData.append(element.name, element.value));
   send();

   function send() {
      let request = new XMLHttpRequest();
      request.open('POST', 'email.php');
      request.send(formData);

      clear();
   }
}

function clear() {
   allElements.forEach(element => element.value = "");
}

function validate(e) {
   e.preventDefault();

   if (e.type === "submit") {
      if (allArray.every(element => { return element.validity.valid })) {
         allElements.forEach(element => {
            element.classList.remove('contact__input_valid');
            element.classList.remove('contact__input_invalid');
         });

         formData();
      } else {
         allElements.forEach(element => {
            if (element.validity.valid) {
               element.classList.add('contact__input_valid');
               element.classList.remove('contact__input_invalid');
            } else {
               element.classList.add('contact__input_invalid');
               element.classList.remove('contact__input_valid');
            }
         });
      }
   } else {
      if (e.target.validity.valid) {
         e.target.classList.add('contact__input_valid');
         e.target.classList.remove('contact__input_invalid');
      } else {
         e.target.classList.add('contact__input_invalid');
         e.target.classList.remove('contact__input_valid');
      }
   }
}
