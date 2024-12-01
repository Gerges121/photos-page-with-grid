const box = document.querySelector('.item');
const btn = document.getElementById('toggle');
const gridBoxes = document.querySelectorAll('.gridBoxes');
btn.addEventListener('click', function () {
  gridBoxes.style.width= '100%';
  box.style.padding = '10px';
  console.log('Button clicked!'); // Debug message
});
