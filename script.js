// Native buttons support mouse, touch, Enter, and Space.
document.querySelectorAll('button[aria-controls]').forEach((button) => {
  button.addEventListener('click', () => {
    const answer = document.getElementById(button.getAttribute('aria-controls'));
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    answer.hidden = expanded;
    button.textContent = expanded ? 'Show explanation' : 'Hide explanation';
  });
});
