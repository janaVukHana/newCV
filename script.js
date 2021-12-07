// TRY FLIP CARD LATTER
// buttons for changing language
const english = document.querySelector('.english');
const srpski = document.querySelector('.srpski');

const flipCardInner = document.querySelector('.flip-card-inner');

console.log(english, srpski, flipCardInner);

srpski.addEventListener('click', function(e) {

    flipCardInner.style.transform = 'rotateY(180deg)';

    e.preventDefault();
})

english.addEventListener('click', function(e) {

    flipCardInner.style.transform = 'rotateY(0)';

    e.preventDefault();
})