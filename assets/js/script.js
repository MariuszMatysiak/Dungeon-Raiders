// Hamburger Menu
//  Code credit: https://www.youtube.com/watch?v=ydZc17rlR5E 
const hamburger = document.getElementById('hamburger');
const menuList = document.getElementById('menu-list');
hamburger.addEventListener('click', () => {
    menuList.classList.toggle('show');
})
// End of code credit 

// Dungeons 
// Code credit : https://stackhowto.com/how-to-get-hash-value-from-url-using-javascript/
if(window.location.hash) {
    let hash = window.location.hash.substring(1);
    console.log(hash);
    const dungeonContent = document.getElementById(`${hash}`);
    dungeonContent.classList.toggle('show');
}

// }

// const dungeonContent = document.getElementById("dungeon-content")
// function mist() {
//     const mistSection = document.getElementById("mist");
//     if 
//     mistSection.classList.toggle('show');
// }
// function dos() {
//     const dosSection = document.getElementById("dos");
//     dosSection.classList.toggle('show');
// }