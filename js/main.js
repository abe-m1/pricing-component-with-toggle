const toggleButton = document.querySelector('#toggle-switch');
const box1 = document.querySelector('#box-1');
const box2 = document.querySelector('#box-2');
const box3 = document.querySelector('#box-3');

toggleButton.addEventListener('click', (e) => {
  // e.preventDefault();
  console.log(toggleButton.checked);
  if (toggleButton.checked) {
    box1.textContent = `$19.99`;
    box2.textContent = `$29.99`;
    box3.textContent = `$39.99`;
  } else {
    box1.textContent = `$199.99`;
    box2.textContent = `$299.99`;
    box3.textContent = `$399.99`;
  }
});
