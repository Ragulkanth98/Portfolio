const toggle = document.getElementById('theme-toggle');


toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});
function toggleRead() {
  const moreContent = document.getElementById('more-content');
  const readBtn = document.getElementById('read-btn');

  if (moreContent.style.display === 'none' || moreContent.style.display === '') {
    moreContent.style.display = 'block';
    readBtn.textContent = 'Read less';
  } else {
    moreContent.style.display = 'none';
    readBtn.textContent = 'Read more';
  }
}
