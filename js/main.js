const elsAboutFeatureItemLink = document.querySelectorAll('.about-feature__item--link');
const elsAboutFeatureItem = document.querySelectorAll('.about-feature__item');

elsAboutFeatureItemLink.forEach(function (elButton, index) {
  elButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    elsAboutFeatureItem[index].classList.toggle('js-about-feature__item--active');
    elButton.classList.toggle('js-about-item-link--active');
  })
})