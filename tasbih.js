   //<<<<<<<<<Selet All Id>>>>>>>>>>>>
const displaySubhanallah = document.getElementById('zero-one')
const oneIncrement = document.getElementById('one-increment')
const onedecrement = document.getElementById('one-decrement')

const displayAlhamdulillah = document.getElementById('zero-two')
const twoIncrement = document.getElementById('two-increment')
const twodecrement = document.getElementById('two-decrement')


const displayAllhuAkbar = document.getElementById('zero-tre')
const treIncrement = document.getElementById('tre-increment')
const tredecrement = document.getElementById('tre-decrement')

const resetButton = document.getElementById('reset')

//seelecting initial value
let subhanallahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahuAkbarInitialValue = 0;


  //add event listener one side 
oneIncrement.addEventListener('click', function() {
    if(subhanallahInitialValue == 33){
        return alert("Subhnallah Completed")
    }
    subhanallahInitialValue += 1;
    displaySubhanallah.innerText = subhanallahInitialValue;
});
onedecrement.addEventListener('click', function() {
    if(subhanallahInitialValue == 0) {
       return alert( "You can't added nagetive value")
    }
    subhanallahInitialValue -= 1;
    displaySubhanallah.innerText = subhanallahInitialValue;
})

  //add event listener one side 

  twoIncrement.addEventListener('click', function() {
    if(alhamdulillahInitialValue == 33) {
      return alert ("Subhanallah completed")
    }
    alhamdulillahInitialValue += 1;
    displayAlhamdulillah.innerText = alhamdulillahInitialValue;
  })

  twodecrement.addEventListener('click', function() {
    if(alhamdulillahInitialValue === 0) {
      return alert ("You can't apply any nagative value")
    }
    alhamdulillahInitialValue -= 1;
    displayAlhamdulillah.innerText = alhamdulillahInitialValue;
  })

  //add event listener one side 

  treIncrement.addEventListener('click', function() {
    if(allahuAkbarInitialValue === 34) {
      return alert ("Allahu Akbar completed")
    }
    allahuAkbarInitialValue += 1;
    displayAllhuAkbar.innerText = allahuAkbarInitialValue;
  });

  tredecrement.addEventListener('click', function() {
    if(allahuAkbarInitialValue === 0) {
      return alert ("You can't use nagative value")
    }
    allahuAkbarInitialValue -= 1;
    displayAllhuAkbar.innerText = allahuAkbarInitialValue;
  })

  resetButton.addEventListener('click', function() {
    displaySubhanallah.innerText = 0;
    displayAlhamdulillah.innerText = 0;
    displayAllhuAkbar.innerText = 0;
    subhanallahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahuAkbarInitialValue = 0;
  })