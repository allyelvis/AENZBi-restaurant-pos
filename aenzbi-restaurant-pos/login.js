document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const username = event.target.username.value;
    const password = event.target.password.value;

    if (username === 'admin' && password === 'admin') {
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid login credentials');
    }
  });
});
