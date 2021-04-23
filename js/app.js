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

//Getting active section
let is_scrolling;
window.addEventListener('scroll', e =>{

    console.log('ejecuntado scroll');
    getCurrentSection(vp_height, navbar_height, sections);

    navbar.classList.remove('hide-element');

    if (window.pageYOffset === 0){
        console.log('top');
        //Removing styles from other sections
        document.querySelectorAll('.underlined-navbar-item')
        .forEach(other_item => other_item.classList.remove('underlined-navbar-item'));

    }

    //Detects if user stopped scrolling
    window.clearTimeout(is_scrolling);

    is_scrolling = setTimeout(() =>{
            console.log('Scroll stopped');

            setTimeout(() =>{
                if (window.pageYOffset != 0){
                    console.log('hiding bar');
                    navbar.classList.add('hide-element');
                }
            }, 2000);
    }, 1000);

    
});


//Selects all sections
const sections = document.querySelectorAll('h2');

let sections_position_list = 0;
let sections_position_list_initial = 0;

//Getting element heights after Window is loaded
window.addEventListener('load', e =>{
    sections_position_list = getInitialHeights(sections);
    sections_position_list_initial = sections_position_list 
    console.log(sections_position_list);
});

// window.addEventListener('scroll', e =>{
//     sections_position_list = getInitialHeights(sections);
//     console.log(sections_position_list);

//     // if (e.target.id === "top-log"){
//     //     document.querySelectorAll('.underlined-navbar-item')
//     //     .forEach(other_item => other_item.classList.remove('underlined-navbar-item'));
//     //     console.log('jjj');
//     // }
// });

//Getting element heights if viewport is resized
window.addEventListener('resize', e =>{
    sections_position_list = getResizeHeights(sections_position_list, sections);
    console.log(sections_position_list);    
});

console.log(sections_position_list);

//Smooth Scrooling to sections
const navbar_list = document.getElementById('navbar-list-items');
navbar_list.addEventListener('click', e =>{
    e.preventDefault();
    sections_position_list = getInitialHeights(sections);
    scrollToSection(sections_position_list, navbar_height, e.target.textContent);
    //sections_position_list = getInitialHeights(sections);
});

//Smooth Scrooling to top
const logo = document.getElementById('main-logo');
logo.addEventListener('click', e =>{

    window.scrollTo(0, 0);
    console.log(e);
//.forEach(other_item => other_item.classList.remove('underlined-navbar-item'));
});


// //Smooth Scrooling
// document.addEventListener('DOMContentLoaded', () =>{

//     const items = document.querySelectorAll('.navbar-item');
//     console.log(items);

    
//     items.forEach( item => {
//         item.addEventListener('click', e => {

//             e.preventDefault;
//             console.log(e.target.textContent);

//             let offset_y = 0;

//             sections_position_list.forEach(section => {
//                 if (e.target.textContent === section.section_text){
//                     offset_y = section.section_y;
//                     console.log(offset_y);
//                 }
//             });

//             setTimeout(() =>{
//                 console.log(sections_position_list);
//                 console.log(offset_y);
//                 offset_y = offset_y - navbar_height*2;
//                 item.classList.add('underlined-navbar-item');
//                 window.scrollBy({
//                     top: offset_y,
//                     left: 0,
//                     behavior: 'smooth',
//                 });
//             }, 0.0001);

//             let counter_1 = 0;

//             setTimeout(() =>{
//                 sections.forEach(section => {
//                     // console.log(section
//                     //     .getBoundingClientRect().bottom);
//                     // console.log(counter_1);
//                     sections_position_list[counter_1].section_y = section
//                     .getBoundingClientRect().bottom;
//                     counter_1 ++;
//                     // console.log(counter_1);
//                 });
//                 console.log(sections_position_list);

//             }, 1000);

            
//         });  
        



//     });

// });






