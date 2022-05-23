const ratings = document.getElementsByClassName('rating');

const maxRating = ratings.length;
const submitButton = document.getElementById('submit-button');
const thankYouPopUp = document.getElementsByClassName('thank-you-pop-up')[0];
const showSelectedRating =
  document.getElementsByClassName('selected-rating')[0];

function unselectAllRatings() {
  Array.from(ratings).forEach(rating => {
    rating.classList.remove('selected');
  });
}

function getSelectRating() {
  let selected = 0;
  Array.from(ratings).forEach((rating, index) => {
    if (rating.classList.contains('selected')) selected = index + 1;
  });
  return selected;
}

Array.from(ratings).forEach(rating => {
  rating.addEventListener('click', () => {
    if (rating.classList.contains('selected'))
      rating.classList.remove('selected');
    else {
      unselectAllRatings();
      rating.classList.add('selected');
    }
  });
});

submitButton.addEventListener('click', () => {
  const selectedRating = getSelectRating();
  if (selectedRating) {
    showSelectedRating.textContent = `You selected ${selectedRating} out of ${maxRating}`;
    thankYouPopUp.style.display = 'flex';
  }
});
