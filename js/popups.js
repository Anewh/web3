var popup = document.getElementById('popup'), 
    formReg = document.getElementById('form-reg'),
    formIn = document.getElementById('form-in');

document.getElementById('sign-in').addEventListener('click', function() {
  popup.classList.add('open');
  formReg.classList.add('open');
});

document.getElementById('popup-close').addEventListener('click', function() {
  document.getElementById('popup').classList.remove('open');
  if(formReg.classList.contains('open')){
    formReg.classList.remove('open');
  }
  if(formIn.classList.contains('open')){
    formIn.classList.remove('open');
  }
});

document.getElementById('sign-in-form-btn').addEventListener('click', function(){
  if(formReg.classList.contains('open')){
    formReg.classList.remove('open');
  }
  formIn.classList.add('open');
});

document.getElementById('sign-up-form-btn').addEventListener('click', function(){
  if(formIn.classList.contains('open')){
    formIn.classList.remove('open');
  }
  formReg.classList.add('open');
});

function formRegValidation(){
    if(formReg.classList.contains('open')){    //лишняя проверка, но не знаю как лучше
        var name = formReg.name.value;
        var password = formReg.password.value;
        var password_repeat = formReg.repeat.value;
        var email =formReg.email.value;
        var phone = formReg.phone.value;
        if(password===password_repeat){
            console.log('Name: ' + name + 
              '\nPassword: ' + password + 
              '\nRepeat password: '+ password_repeat +
              '\nEmail: '+email +
              '\nPhone number: '+ phone);
        }else console.log("password must be equals")
    }    
    return false;
}

function formInValidation(){
    if(formIn.classList.contains('open')){      //лишняя проверка, но не знаю как лучше
        var password = formIn.password.value;
        var email = formIn.email.value;
        console.log('Email: '+ email + '\nPassword: ' + password);
    }    
    return false;
}
