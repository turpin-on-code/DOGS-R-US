const dogsRUsForm = document.getElementById('dogs-r-us-form');
const overlay = document.getElementById('overlay');
const icon = document.querySelector('.icon');

const activePage = window.location.pathname;
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('nav li a[href]');
let formData;

const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const street = document.getElementById('street')
const city = document.getElementById('city')
const county = document.getElementById('county')
const postal = document.getElementById('postal')
const dogWalking = document.getElementById('dog-walking')
const dogBoarding = document.getElementById('boarding')
const dayCare = document.getElementById('day-care')
const breed = document.getElementById('breed')
const button = document.querySelector('.button')
const checkboxes = document.querySelectorAll('.checkbox-field input[type="checkbox"]')
const checkboxField = document.querySelector('.checkbox-field')


let hasFirstName = false;
let hasLastName = false;
let hasStreet = false;
let hasCity = false;
let hasCounty = false;
let hasPostal = false;
let hasEmail = false;
let hasDogBreed = false;
let isCheckboxChecked = false;

function formFilled(...args) {
  for(const arg of args) {
    if (arg === false) {
      return button.disabled = true
    }
  }
  return button.disabled = false
}

function checkFormFilled()  {
  formFilled(hasFirstName, hasLastName, hasEmail, hasStreet, hasCity, hasCounty, hasPostal, hasDogBreed, isCheckboxChecked)
}

firstName?.addEventListener('keyup', () => {
  if (firstName.value.length < 3 || firstName.value.length > 28) {
    document.querySelector('.first-name-hint')
      .style.display = 'block'
      firstName.classList.add('invalid')
      hasFirstName = false
  } else {
    document.querySelector('.first-name-hint').style.display = 'none'
    firstName.classList.remove('invalid')
    hasFirstName = true
  }
})

lastName?.addEventListener('keyup', () => {
  if (lastName.value.length < 3 || lastName.value.length > 28) {
    document.querySelector('.last-name-hint')
      .style.display = 'block'
      lastName.classList.add('invalid')
      hasLastName = false
  } else {
    document.querySelector('.last-name-hint').style.display = 'none'
    lastName.classList.remove('invalid')
    hasLastName = true
  }
})

street?.addEventListener('keyup', () => {
  if (street.value.length < 3 || street.value.length > 28) {
    document.querySelector('.street-hint')
      .style.display = 'block'
      street.classList.add('invalid')
      hasStreet = false
  } else {
    document.querySelector('.street-hint').style.display = 'none'
    street.classList.remove('invalid')
    hasStreet = true
  }
})

city?.addEventListener('keyup', () => {
  if (city.value.length < 3 || city.value.length > 28) {
    document.querySelector('.city-hint')
      .style.display = 'block'
      city.classList.add('invalid')
      hasCity = false
  } else {
    document.querySelector('.city-hint').style.display = 'none'
    city.classList.remove('invalid')
    hasCity = true
  }
})

county?.addEventListener('keyup', () => {
  if (county.value.length < 3 || county.value.length > 28) {
    document.querySelector('.county-hint')
      .style.display = 'block'
      county.classList.add('invalid')
      hasCounty = false
  } else {
    document.querySelector('.county-hint').style.display = 'none'
    county.classList.remove('invalid')
    hasCounty = true
  }
})

postal?.addEventListener('keyup', () => {
  if (postal.value.length < 3 || postal.value.length > 28) {
    document.querySelector('.postal-hint')
      .style.display = 'block'
      postal.classList.add('invalid')
      hasPostal = false
  } else {
    document.querySelector('.postal-hint').style.display = 'none'
    postal.classList.remove('invalid')
    hasPostal = true
  }
})



email?.addEventListener('keyup', () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    document.querySelector('.email-hint').style.display = 'none'
    email.classList.remove('invalid')
    hasEmail = true
} else {
    document.querySelector('.email-hint').style.display = 'block'
    email.classList.add('invalid')
    hasEmail = false
}
})

breed?.addEventListener('keyup', () => {
  if (breed.value.length < 3 || breed.value.length > 28) {
    document.querySelector('.breed-hint')
      .style.display = 'block'
      breed.classList.add('invalid')
      hasDogBreed = false
  } else {
    document.querySelector('.breed-hint').style.display = 'none'
    breed.classList.remove('invalid')
    hasDogBreed = true
  }
})

checkboxField?.addEventListener('click',  () => {
  if (checkboxes[0].checked || checkboxes[1].checked || checkboxes[2].checked) {
    document.querySelector('.checkbox-hint').style.display = 'none'
    isCheckboxChecked = true
  } else {
    document.querySelector('.checkbox-hint').style.displa = 'block'
    isCheckboxChecked = false
  }
})

dogsRUsForm && dogsRUsForm.addEventListener('submit', function(e) {
  e.preventDefault()

  formData = new FormData(this) 
  const nameAndValues = [...formData.entries()]
  console.log('nameAndValues', nameAndValues)

  overlay.style.display = 'block';
  overlay.classList.remove('fade-out');
  overlay.classList.add('fade-in');
  const results = document.querySelector('.results');
  nameAndValues.forEach(function(value) {
    let [name, val] = value;
    results.innerHTML += '<div class="result"><div class="cell">'
      + name + '</div><div class="cell">' + val + '</div></div>'
  })
})

dogsRUsForm?.addEventListener('click', checkFormFilled)
dogsRUsForm?.addEventListener('keyup', checkFormFilled)

icon && icon.addEventListener('click', () => {
  setTimeout(function() {
    location.reload()
  }, 500)

  overlay.classList.add('fade-out')
  overlay.classList.remove('fade-in')
})

for(let i = 0; i < navItems.length; i++) {
  navItems[i].classList.remove('active')
  if (navItems[i].getAttribute('href') == activePage) {
      navItems[i].classList.add('active')
  }
}





