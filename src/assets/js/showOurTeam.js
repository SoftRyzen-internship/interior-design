
const showOurTeam = () => {
    const btn = document.querySelector('.team__btn');
          cards = document.querySelectorAll('.team__list-item');

    btn.addEventListener('click', () => {
        cards.forEach(card => {
            if (card.classList.contains('team__is-hidden')) {
                card.classList.remove('team__is-hidden')

                window.scrollBy({
                    top: 300,
                    behavior: "smooth",
                    });

                    btn.classList.add('team__is-hidden')
            }
        })
    })
}
showOurTeam()