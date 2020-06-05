// let obj = {}

// function myClickEnter() {

//   if (obj.log === nameU.value && obj.pas === passwordUq.value) {
//     window.open('https://javascript.info/');
//   } else {
//     alert('inncorect');
//     nameU.value = '';
//     passwordUq.value = '';
//   }

// }

// function myClick() {
//   if (emailU.value.length === 0) {
//     emailU.style.border = 'solid red';
//     return false;
//   }

//   if (loginU.value.length === 0) {
//     loginU.style.border = 'solid red';
//     return false;
//   }

//   if (passwordU.value.length === 0) {
//     passwordU.style.border = 'solid red';
//     return false;
//   }

//   if (passwordURepeat.value.length === 0) {
//     passwordURepeat.style.border = 'solid red';
//     return false;
//   }

//   if (passwordU.value === passwordURepeat.value) {
//     alert(`А letter with a message was sent to ${emailU.value}`);
//   } else {
//     alert('Passwords do not match');
//     return false;
//   }

//   obj.log = loginU.value;
//   obj.pas = passwordU.value;

//   enter.style.display = 'block';
//   loginFormId.style.display = 'none';
//   reg.style.display = 'block';
// }

// function myRegistration() {
//   enter.style.display = 'none';
//   loginFormId.style.display = 'block';
//   reg.style.display = 'none';
// }

function myClick() {

  let str = ``;

  if (firstname.value.length === 0) {
    firstname.style.border = 'solid red';
        return false;
      }

if (lastname.value.length === 0) {
  lastname.style.border = 'solid red';
      return false;
    }  

    if (birthday.value.length === 0) {
      birthday.style.border = 'solid red';
          return false;
        } 
          
          
  str += `Firstname: ${firstname.value}`

  let tmp;

  for (let i = 0; i < document.getElementsByName('buttonR').length; i++) {
     if(document.getElementsByName('buttonR')[i].checked) {
      tmp = document.getElementsByName('buttonR')[i].value
     }
  }

 

str += `
Lastname: ${lastname.value}
Birthday: ${birthday.value}
Sex: ${tmp}
Country: ${selectCountryID.value}
City: ${selectCityID.value}
`

if (html.checked === true) {
  str += `HTML`
}

if (css.checked === true) {
  str += `, CSS`
}

if (js.checked === true) {
  str += `, JS`
}
 
  alert(str)
}
