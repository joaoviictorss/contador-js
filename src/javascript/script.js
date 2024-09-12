const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

let count = Number(localStorage.getItem('counter')) || 0;
value.textContent = count;

const updateValue = () => {
  localStorage.setItem('counter', count);
  value.textContent = count;
};

minusButton.addEventListener('click', () => {
  if (count > 0) {
    count -= 1;
    updateValue();
  }
});

plusButton.addEventListener('click', () => {
  count += 1;
  updateValue();
});

resetButton.addEventListener('click', () => {
  count = 0;
  updateValue();
});
