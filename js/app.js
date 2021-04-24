import {createNavbar, createCard, createPlayerCard, getInitialHeights, 
    getResizeHeights, getCurrentSection, scrollToSection} from './functions.js';
import {navbar_items, score_details, score_card_classes,
    schedule_details, schedule_card_classes, players_details,
    player_card_classes} from './data.js';


/*Navbar*/
const item = document.getElementById('navbar-list-items');
createNavbar(navbar_items, item);

//Creates Score section
const score_container = document.getElementById('score-container');
createCard (score_details, score_card_classes, score_container);

//Creates Schedule section
const schedule_container = document.getElementById('schedule-container');
createCard (schedule_details, schedule_card_classes, schedule_container);

//Creates Team section
const team_container = document.getElementById('team-container');
createPlayerCard(players_details, player_card_classes, team_container);


/*Navbar Locator*/
const vp_height = window.innerHeight;

//Gettiing navbar height
const navbar = document.querySelector('header');
const navbar_height = navbar.getBoundingClientRect().bottom;

//Getting active section and hides scroll bar
let is_scrolling;
window.addEventListener('scroll', e =>{

    //get current section
    getCurrentSection(vp_height, navbar_height, sections);
    
    //IF navbar is hiden, then it appears
    navbar.classList.remove('hide-element');

    //Removes styles when navbar is at the top
    if (window.pageYOffset === 0){
        //Removing styles from other sections
        document.querySelectorAll('.underlined-navbar-item')
        .forEach(other_item => other_item.classList.remove('underlined-navbar-item'));
    }

    //Detects if user stopped scrolling
    window.clearTimeout(is_scrolling);
    is_scrolling = setTimeout(() =>{
            setTimeout(() =>{
                if (window.pageYOffset != 0){
                    navbar.classList.add('hide-element');
                }
            }, 2000);
    }, 1000);
});

//Selects all sections
const sections = document.querySelectorAll('h2');

let sections_position_list = 0;
let sections_position_list_initial = 0;

//Gets element heights after Window is loaded
window.addEventListener('load', () =>{
    sections_position_list = getInitialHeights(sections);
    sections_position_list_initial = sections_position_list 
});

//Gets element heights if viewport is resized
window.addEventListener('resize', e =>{
    sections_position_list = getResizeHeights(sections_position_list, sections);
    console.log(sections_position_list);    
});

//Smooth Scrooling to sections
const navbar_list = document.getElementById('navbar-list-items');
navbar_list.addEventListener('click', e =>{
    e.preventDefault();
    sections_position_list = getInitialHeights(sections);
    scrollToSection(sections_position_list, navbar_height, e.target.textContent);
});

//Smooth Scrooling to top
const logo = document.getElementById('main-logo');
logo.addEventListener('click', e =>{
    window.scrollTo(0, 0);
});


