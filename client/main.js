let authSection = document.getElementById('auth-section')
let loginForm = document.getElementById('login-form')
let emailLogin = document.getElementById('email-login')
let passwordLogin = document.getElementById('password-login')
let signupForm = document.getElementById('signup-form')
let emailSignup = document.getElementById('email-signup')
let passwordSignup = document.getElementById('password-signup')
let firstNameSignup = document.getElementById('first-name-signup')
let lastNameSignup = document.getElementById('last-name-signup')

const baseUrl = 'http://localhost:4000'

function logIn(event) {
    event.preventDefault()

    let postBody = {
        email: emailLogin.value,
        password: passwordLogin.value,
    }

    axios.post(baseUrl + '/login', postBody)
    .then(response => {
        if (response.data.success) {
            alert('Your fortune for this moment is: ' + response.data.fortune)
            alert('Please log in again if you want to see another fortune.')
        } else {
            alert(response.data.message)
        }
    })
    .catch(error => {
        console.log(error)
    })
}

function signUp(event) {
    event.preventDefault()

    let postBody = {
        email: emailSignup.value,
        password: passwordSignup.value,
        firstName: firstNameSignup.value,
        lastName: lastNameSignup.value,
    }

    axios.post(baseUrl + '/signup', postBody)
    .then(response => {
        if (response.data.success) {
            alert('You made an account! Now log in.')
        } else {
            alert('Something went wrong.')
        }
    })
    .catch(error => {
        console.log(error)
    })
}

loginForm.addEventListener('submit', logIn)
signupForm.addEventListener('submit', signUp)
