function heartClick() {
    const cards = document.querySelectorAll('.card');
    
    if(cards) {
        function activeHeart(index) {
            cards.forEach((card, i) => {
                const heartIcon = card.querySelector('.heart-icon');
                if(i === index){
                    card.classList.toggle('ativo');
                    heartIcon.src = card.classList.contains('ativo') ? heartIcon.dataset.activeIcon : heartIcon.dataset.inactiveIcon;
                }
                else {
                    card.classList.remove('ativo');
                    heartIcon.src = heartIcon.dataset.inactiveIcon;
                }
            });
        };

        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                activeHeart(index);
            });
        });
    }
}
heartClick();