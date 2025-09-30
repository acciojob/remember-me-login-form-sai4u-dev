const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('checkbox');
const submitButton = document.getElementById('submit');
const existingButton = document.getElementById('existing');
const form = document.getElementById('loginForm');

// Load saved credentials on page load
window.onload = () => {
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');
  
  if (savedUsername && savedPassword) {
	existingButton.style.display = 'inline-block';
  }
};

// Handle form submission
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form reload
  
  const username = usernameInput.value;
  const password = passwordInput.value;
  const remember = rememberCheckbox.checked;

  alert(`Logged in as ${username}`);

  if (remember) {
	localStorage.setItem('username', username);
	localStorage.setItem('password', password);
	existingButton.style.display = 'inline-block';
  } else {
	localStorage.removeItem('username');
	localStorage.removeItem('password');
	existingButton.style.display = 'none';
  }
});

// Handle existing user login
existingButton.addEventListener('click', function () {
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
	alert(`Logged in as ${savedUsername}`);
  }
});