// Hamburger Menu
//  Code credit: https://www.youtube.com/watch?v=ydZc17rlR5E 
const hamburger = document.getElementById('hamburger');
const menuList = document.getElementById('menu-list');
hamburger.addEventListener('click', () => {
    menuList.classList.toggle('show');
})
// End of code credit 

// Code credit: https://stackhowto.com/how-to-get-hash-value-from-url-using-javascript/ for idea of using hash value, excution - Klaudia Matysiak
/**
 * Searches for previous active elements and removes its active class priviliges.
 * Adds active class to the current link
 */
 const selectActiveLink = () => {
    const previousActiveLinks = document.querySelectorAll('.dungeon-image.active');
    previousActiveLinks.forEach((item) => {
        item.classList.remove('active');
    });
    const activeLink = document.querySelector(`[href="${window.location.hash}"]`);
    activeLink.classList.add('active');
}

if (window.location.hash) {
    selectActiveLink();
}

// Listen for hash change 
window.addEventListener('hashchange', selectActiveLink);