// for skills start



const buttons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.skill-item');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        items.forEach(item => {
            if(filter === 'all' || item.classList.contains(filter)) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
});
// skills end



// experience start

const fadeItems = document.querySelectorAll('.fade-item');

function checkFade() {
    const triggerBottom = window.innerHeight * 0.85; // trigger when 85% of viewport
    fadeItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if(itemTop < triggerBottom){
            item.classList.add('visible');
        } else {
            item.classList.remove('visible'); // fade out if scrolling away
        }
    });
}

// Listen on scroll & load
window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);



// experience end