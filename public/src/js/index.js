function showAboutMe() {
  $('#contact_me').hide();
  $('#abilities').hide();
  $('#home').hide();
  $('#work').hide();
  $('#about_me').show();
}
function showHome() {
  $('#contact_me').hide();
  $('#abilities').hide();
  $('#home').show();
  $('#work').hide();
  $('#about_me').hide();
}
function showWork() {
  $('#contact_me').hide();
  $('#abilities').hide();
  $('#home').hide();
  $('#work').show();
  $('#about_me').hide();
}
function showContact() {
  $('#contact_me').show();
  $('#abilities').hide();
  $('#home').hide();
  $('#work').hide();
  $('#about_me').hide();
}
function showAbs() {
  $('#contact_me').hide();
  $('#abilities').show();
  $('#home').hide();
  $('#work').hide();
  $('#about_me').hide();
}

// nav like ubuntu
let d = new Date();
let time = d.getHours() + ":" + d.getMinutes();
console.log(time);
let timeNav = document.getElementById('timeDiv');
timeDiv.innerHTML = '';
timeDiv.innerHTML += `  <p>${time}</p>`