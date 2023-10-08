<?php 

include __DIR__ . '/config/db-config.php';


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
    />
    <link rel="stylesheet" href="/vendor/Font-Awsome/css/all.min.css">
    <link rel="stylesheet" href="/css/fonts.css">
    <link rel="stylesheet" href="/css/style.css">
    <script src="/vendor/ID3/dist/id3-minimized.js"></script>
    <title> Web Music </title>
</head>
<body>
    <div class="container">

        <div class="left-navbar">

            <div class="left-navbar__icons-main-container">

                <div class="left-navbar__logo-container">

                    <div class="left-navbar__logo-background">

                        <div class="left-navbar__logo-icon">

                            <i class="fi fi-rr-music-alt"></i>

                        </div>

                    </div>

                </div>

                <div class="left-navbar__icons">

                    <div class="left-navbar__icons-container">
 
                        <div class="left-navbar__icon-container home">

                            
                            <a href="" class="left-navbar__icon-link" title="Home">
                                
                                <i class="fi fi-rr-home"></i>
                            
                            </a>

                        </div>

                        <div class="left-navbar__icon-container add">

                            <a href="#" class="left-navbar__icon-link" title="Add ...">
                                
                                <i class="fi fi-rr-square-plus"></i>
                            
                            </a>

                        </div>

                        <div class="left-navbar__icon-container wishlist">

                            <a href="#" class="left-navbar__icon-link" title="Favorites">
                                
                                <i class="fi fi-rr-heart"></i>
                            
                            </a>

                        </div>

                        <div class="left-navbar__icon-container musics">

                            <a href="#" class="left-navbar__icon-link" title="Musics">
                                
                                <i class="fi fi-rr-music-note"></i>
                            
                            </a>

                        </div>

                        <div class="left-navbar__icon-container albums">

                            <a href="#" class="left-navbar__icon-link" title="Albums">
                                
                                <i class="fi fi-rr-album-collection" ></i>
                            
                            </a>

                        </div>

                        <div class="left-navbar__icon-container artists">

                            <a href="#" class="left-navbar__icon-link" title="Artists">
                                
                                <i class="fi fi-rr-microphone-alt" ></i>
                            
                            </a>

                        </div>

                        <div class="left-navbar__icon-container setting">

                            <a href="#" class="left-navbar__icon-link"  title="Setting">
                                
                                <i class="fi fi-rr-user-gear"></i>
                            
                            </a>

                        </div>

                    </div>


                </div>

            </div>

        </div>


        <div class="right-container">

            <nav class="header">

                <div class="header__left">

                    <div class="header__left-inner-section">

                        <div class="header__left-arrows-container">

                            <div class="header__left-arrow left-arrow">

                                <i class="fi fi-rr-angle-small-left"></i>

                            </div>
                            <div class="header__left-arrow right-arrow">

                                <i class="fi fi-rr-angle-small-right"></i>

                            </div>

                        </div>

                        <div class="header__left-search-box-container">

                            <form class="header__left-search-box-form">

                                <i class="fi fi-br-search"></i>

                                <input type="text" name="search" id="searchInput" class="header__left-search-input" placeholder="What do you want to listen to ?">

                                <div class="header__left-search-result-container loader">
                                    <div class="header__left-search-loader">
                                        <svg class="pl" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
                                                    <stop offset="0%" stop-color="hsl(313,90%,55%)" />
                                                    <stop offset="100%" stop-color="hsl(223,90%,55%)" />
                                                </linearGradient>
                                                <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stop-color="hsl(313,90%,55%)" />
                                                    <stop offset="100%" stop-color="hsl(223,90%,55%)" />
                                                </linearGradient>
                                            </defs>
                                            <circle class="pl__ring" cx="100" cy="100" r="82" fill="none" stroke="url(#pl-grad1)" stroke-width="36" stroke-dasharray="0 257 1 257" stroke-dashoffset="0.01" stroke-linecap="round" transform="rotate(-90,100,100)" />
                                            <line class="pl__ball" stroke="url(#pl-grad2)" x1="100" y1="18" x2="100.01" y2="182" stroke-width="36" stroke-dasharray="1 165" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                    <div class="header__left-search-results">

                                    </div>
                                </div>

                            </form>

                        </div>

                    </div>

                </div>

                <div class="header__right">

                    <div class="header__right-inner-section">

                        <div class="header__right-notifications">

                            <i class="fi fi-rr-bell"></i>

                        </div>

                        <div class="header__right-profile">

                            <div class="header__right-profile-image-container">

                                <img class="header__right-profile-image" src="/uploads/images/2023/10/07/default-profile-image.png" alt="Profile image">

                            </div>

                            <div class="header__right-profile-username">

                                <a href="#" class="header__right-username-link" id="profileDropdownToggle">User name &nbsp;&nbsp;<i class="fa-solid fa-chevron-down dropdown-toggle"></i></a>
                                
                                <ul class="header__right-profile-dropdown">
                                    
                                    <a href="#" class="header__right-profile-dropdown-item profile">
                                        
                                        <i class="fi fi-rr-circle-user">&nbsp;&nbsp;</i><li>Profile</li>

                                    </a>
                                    
                                    <a href="#" class="header__right-profile-dropdown-item favorites">
                                        
                                        <i class="fi fi-rr-heart"></i>&nbsp;&nbsp;<li>Favorites</li>

                                    </a>
                                    
                                    <a href="#" class="header__right-profile-dropdown-item playlists">
                                        
                                        <i class="fi fi-rr-album-collection"></i>&nbsp;&nbsp;<li>Playlists</li>

                                    </a>
                                    
                                    <a href="#" class="header__right-profile-dropdown-item followings">
                                        
                                        <i class="fi fi-rr-following"></i>&nbsp;&nbsp;<li>Followings</li>

                                    </a>
                                    
                                    <a href="#" class="header__right-profile-dropdown-item upgradePlan">
                                        
                                       <i class="fi fi-rr-crown"></i>&nbsp;&nbsp;<li>Upgrade Your Plan</li>

                                    </a>
                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </nav>


            <main class="main-content">
                
            </main>
            
        </div>

    </div>
    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    <script src="/js/main.js"></script>
</body>
</html>