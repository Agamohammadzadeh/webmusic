// Linking Left Navbar Items
let leftNavbar_home = document.querySelector('.left-navbar__icon-container.home .left-navbar__icon-link');
let leftNavbar_add = document.querySelector('.left-navbar__icon-container.add .left-navbar__icon-link');
let leftNavbar_wishlist = document.querySelector('.left-navbar__icon-container.wishlist .left-navbar__icon-link');
let leftNavbar_musics = document.querySelector('.left-navbar__icon-container.musics .left-navbar__icon-link');
let leftNavbar_albums = document.querySelector('.left-navbar__icon-container.albums .left-navbar__icon-link');
let leftNavbar_artists = document.querySelector('.left-navbar__icon-container.artists .left-navbar__icon-link');
let leftNavbar_setting = document.querySelector('.left-navbar__icon-container.setting .left-navbar__icon-link');
let rightHeaderProfilePanelToggle = document.querySelector('.header__right-username-link')
let rightHeaderProfilePanel = document.querySelector('.header__right-profile-dropdown')
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

// Linking Profile Dropdown Items

let rightHeader_profile = document.querySelector('.header__right-profile .header__right-profile-username .header__right-profile-dropdown .profile');
let rightHeader_favorites = document.querySelector('.header__right-profile .header__right-profile-username .header__right-profile-dropdown .favorites');
let rightHeader_playlists = document.querySelector('.header__right-profile .header__right-profile-username .header__right-profile-dropdown .playlists');
let rightHeader_followings = document.querySelector('.header__right-profile .header__right-profile-username .header__right-profile-dropdown .followings');
let rightHeader_upgradePlan = document.querySelector('.header__right-profile .header__right-profile-username .header__right-profile-dropdown .upgradePlan');
let rightHeader_dropdownToggleIcon = document.querySelector('#profileDropdownToggle .dropdown-toggle')
rightHeader_profile.href = location.origin + '/Profile/';
rightHeader_favorites.href = location.origin + '/Profile/#favorites';
rightHeader_playlists.href = location.origin + '/Profile/#playlists';
rightHeader_followings.href = location.origin + '/Profile/#followings';
rightHeader_upgradePlan.href = location.origin + '/Profile/#plans';

// Open And Close Profile Dropdown Panel

rightHeaderProfilePanelToggle.addEventListener("click" , (e) => {
    e.preventDefault();
    rightHeaderProfilePanelToggle.classList.toggle('active')
    rightHeaderProfilePanel.classList.toggle('active');
})

document.body.addEventListener('click' , (e) => {

    if(!(e.target.id == 'profileDropdownToggle')) {
        rightHeaderProfilePanel.classList.remove('active')
    }

})

// Open And Close Search REsult Box 

let rightHeader_searchBoxForm = document.querySelector('.header__left-search-box-form')
let rightHeader_searchBoxInput = document.querySelector('.header__left-search-box-form #searchInput');
let rightHeader_searchBoxResultContainer = document.querySelector('.header__left-search-box-form .header__left-search-result-container');
let rightHeader_searchBoxResult = document.querySelector('.header__left-search-box-form .header__left-search-result-container .header__left-search-results');

rightHeader_searchBoxInput.addEventListener('keyup' , (e) => {
    search(rightHeader_searchBoxInput.value.trim())
    if(rightHeader_searchBoxInput.value.trim() == '') {
        rightHeader_searchBoxForm.classList.remove('active')
    }
})


function search(query) {
    let req = new XMLHttpRequest()
    req.onload = function() {
        insertDatas(this.responseText);
    }
    req.open('GET' , '/search/ajax-search.php?q=' + query);
    req.send()
}
let test;
function insertDatas(data) {

    rightHeader_searchBoxResultContainer.classList.remove('result')
    rightHeader_searchBoxResultContainer.classList.add('loader')
    rightHeader_searchBoxResultContainer.style.height = '10rem;'

    let resultFragment = document.createDocumentFragment();
    rightHeader_searchBoxResult.innerHTML = ''

    let dbdata = JSON.parse(data);

    console.log(dbdata);

    for (let i = 0; i < dbdata.length; i++) {
        
        let mainLinkElement = document.createElement('a')
        mainLinkElement.setAttribute('href' , location.origin + '/Musics/Music/?musicid=wmm-' + dbdata[i].music_id);
        mainLinkElement.setAttribute('class' , 'header__left-search-result-item');
        let imageDivElement = document.createElement('div');
        imageDivElement.setAttribute('class' , 'header__left-search-result-item-image');
        let mainInfoElement = document.createElement('div');
        mainInfoElement.setAttribute('class' , 'header__left-search-result-item-info')
        let musicNameSpan = document.createElement('span');
        musicNameSpan.setAttribute('class' , 'header__left-search-result-item-name')
        musicNameSpan.textContent = dbdata[i].music_name;
        let musicArtistSpan = document.createElement('span');
        musicArtistSpan.setAttribute('class' , 'header__left-search-result-item-artist')
        musicArtistSpan.textContent = dbdata[i].artist_name;

        let mainImgElement = document.createElement('img');
        
        ID3.loadTags(dbdata[i].path , () => {
            let tags = ID3.getAllTags(dbdata[i].path);
            console.log(tags);
            let image = tags.picture;
            if(image) {
                let base64String = "";
                for (let i = 0; i < image.data.length; i++) {

                    base64String += String.fromCharCode(image.data[i]); 
                    
                }

                let base64 = "data:" + image.format + ";base64," + window.btoa(base64String);
                mainImgElement.setAttribute('src' , base64);
            } else {
                mainImgElement.setAttribute('src' , location.origin + '/uploads/images/2023/10/07/default-music-image.png')
            }
        } , {
            tags: ['picture']
        })

        imageDivElement.append(mainImgElement);
        mainInfoElement.append(musicNameSpan , musicArtistSpan);
        mainLinkElement.append(imageDivElement , mainInfoElement);
        resultFragment.append(mainLinkElement);

    }
    rightHeader_searchBoxForm.classList.add('active')

    rightHeader_searchBoxResultContainer.style.height = `10rem`;
    rightHeader_searchBoxResult.append(resultFragment);

    if(dbdata.length >= 1) {
        setTimeout(() => {
            rightHeader_searchBoxResultContainer.classList.replace('loader' , 'result')
            rightHeader_searchBoxResultContainer.style.height = `${dbdata.length * 4}rem`
        } , 1000)
    } else {
        rightHeader_searchBoxForm.classList.remove('active')
    }
    
}