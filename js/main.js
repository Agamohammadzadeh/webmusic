let leftNavbar_home = document.querySelector('.left-navbar__icon-container.home .left-navbar__icon-link');
let leftNavbar_add = document.querySelector('.left-navbar__icon-container.add .left-navbar__icon-link');
let leftNavbar_wishlist = document.querySelector('.left-navbar__icon-container.wishlist .left-navbar__icon-link');
let leftNavbar_musics = document.querySelector('.left-navbar__icon-container.musics .left-navbar__icon-link');
let leftNavbar_albums = document.querySelector('.left-navbar__icon-container.albums .left-navbar__icon-link');
let leftNavbar_artists = document.querySelector('.left-navbar__icon-container.artists .left-navbar__icon-link');
let leftNavbar_setting = document.querySelector('.left-navbar__icon-container.setting .left-navbar__icon-link');


leftNavbar_home.href = location.origin;
leftNavbar_add.href = location.origin + '/Profile/Add/'
leftNavbar_wishlist.href = location.origin + '/Profile/Wishlist/'
leftNavbar_musics.href = location.origin + '/Musics/'
leftNavbar_albums.href = location.origin + '/Albums/'
leftNavbar_artists.href = location.origin + '/Artists/'
leftNavbar_setting.href = location.origin + '/Profile/Settings/'
let leftNavbar_linksObj = {
    '/' : leftNavbar_home ,
    '/Profile/Add/' : leftNavbar_add ,
    '/Profile/Wishlist/' : leftNavbar_wishlist ,
    '/Musics/' : leftNavbar_musics ,
    '/Albums/' : leftNavbar_albums ,
    '/Artists/' : leftNavbar_artists ,
    '/Profile/Settings/' : leftNavbar_setting
}

Object.keys(leftNavbar_linksObj).forEach(key => {
    if(location.pathname == key) {
        leftNavbar_linksObj[key].parentElement.classList.add('active')
    }
})