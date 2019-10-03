let wURL = document.getElementById('webhook');
let wUsername = document.getElementById('username');
let wMessage = document.getElementById('message');
let wButton = document.getElementById('btn');

wButton.addEvenetistener('click', () => {
  if (!wURL.value() || !wUsername.value() ||!wMessage.value()) return alert('Please fill in the fields!');
  
  $.post(wURL, { "content": wMessage, "username": wUsername });
});
