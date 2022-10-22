

const DivInput = document.querySelectorAll('.DivInput')
const InputFirstName = document.querySelector('#FirstNameInput')
const InputLastName = document.querySelector('#LastNameInput')
const InputEmail = document.querySelector('#EmailInput')
const InputPassword = document.querySelector('#PasswordInput')
const ButtonConfirm = document.querySelector('#ConfirmButton')
const SpanError = document.querySelectorAll('#SpanLastNameInput')


let RegexName = /^[a-z]/gi
let RegexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/

ButtonConfirm.addEventListener('click', (e) => {
    e.preventDefault()
    VerificateInputs()
})


function VerificateInputs(){

    if(InputFirstName.value.match(RegexName) == null || InputFirstName.value == ''){
        ShowErrorMessageFirstName()
        HideErrorMessage(0)
    }

    if(InputLastName.value.match(RegexName) == null || InputLastName.value == ''){
        ShowErrorMessageLastName()
        HideErrorMessage(1)
    }

    if(InputEmail.value.match(RegexEmail) == null || InputEmail.value == ''){
        ShowErrorMessageEmail()
        HideErrorMessage(2)
    }

    if(InputPassword.value == '' || InputPassword.value.length < 8){
        ShowErrorMessagePassword()
        HideErrorMessage(3)
    }

    function ShowErrorMessageFirstName(){
        if(document.querySelector('.DivErrorFirstName')){
            return
        }
        SpanError[0].classList.remove('Hide')
        DivInput[0].insertAdjacentHTML('afterend', '<div id="DivError" class="DivErrorFirstName"><p class="ErrorMessage">First Name cannot be empty</p></div>')
        DivInput[0].style.border = 'solid 2px #FF7A7A'
        InputFirstName.placeholder = ''
    }

    function ShowErrorMessageLastName(){
        if(document.querySelector('.DivErrorLastName')){
            return
        }
        SpanError[1].classList.remove('Hide')
        DivInput[1].insertAdjacentHTML('afterend', '<div id="DivError" class="DivErrorLastName"><p class="ErrorMessage">Last Name cannot be empty</p></div>')
        DivInput[1].style.border = 'solid 2px #FF7A7A'
        InputLastName.placeholder = ''
    }

    function ShowErrorMessageEmail(){
        if(document.querySelector('.DivErrorEmail')){
            return
        }
        SpanError[2].classList.remove('Hide')
        DivInput[2].insertAdjacentHTML('afterend', '<div id="DivError" class="DivErrorEmail"><p class="ErrorMessage">Looks like this is not an email</p></div>')
        DivInput[2].style.border = 'solid 2px #FF7A7A'
        InputEmail.placeholder = 'email@example/com'
    }

    function ShowErrorMessagePassword(){
        if(document.querySelector('.DivErrorPassword')){
            return
        }
        SpanError[3].classList.remove('Hide')
        DivInput[3].insertAdjacentHTML('afterend', '<div id="DivError" class="DivErrorPassword"><p class="ErrorMessage">Password cannot be empty</p></div>')
        DivInput[3].style.border = 'solid 2px #FF7A7A'
        InputPassword.placeholder = ''
    }
}

const HideErrorMessage = (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const DivError = document.querySelector('#DivError')
        if(DivError){
            DivError.remove()
        }
        SpanError[id].classList.add('Hide')
        DivInput[id].style.border = 'solid 1px rgb(0, 0, 0, 10%)'
        ResetPlaceholders()
        resolve();
    }, 3000);

    if(id === undefined){
        reject()
    }

    return resolve;
});

function ResetPlaceholders(){
    InputFirstName.placeholder = 'First Name'
    InputLastName.placeholder = 'Last Name'
    InputEmail.placeholder = 'Email Address'
    InputPassword.placeholder = 'Password'
}