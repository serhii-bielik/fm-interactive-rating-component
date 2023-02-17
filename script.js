document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.querySelector('#rating-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const resultValue = document.querySelector('.rating__result > span');
    resultValue.innerText = e.target.rating.value;

    const rating = document.querySelector('.rating__state-vote');
    rating.classList.add('hidden');

    const result = document.querySelector('.rating__state-result');
    result.classList.remove('hidden');
  });
});
