// Get all accordion items
const accordionItems = document.querySelectorAll('.accordion-item');

// Add event listener to each accordion item
accordionItems.forEach((item) => {
  const button = item.querySelector('.accordion-button');
  const collapse = item.querySelector('.accordion-collapse');

  button.addEventListener('click', () => {
    // Toggle the collapse state
    collapse.classList.toggle('show');
    button.classList.toggle('collapsed');
  });
});