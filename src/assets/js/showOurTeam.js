
const showOurTeam = () => {
    const secionList = document.querySelector('.team__list-wrapper');
    const btn = secionList.querySelector('.team__btn');
    const cards = secionList.querySelectorAll('.team__list-item');

    secionList.addEventListener('click', (e) => {
        
        if (e.target.closest('.team__btn')) {

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
        }
        
    })
}
showOurTeam()