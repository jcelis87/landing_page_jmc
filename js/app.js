/*Navbar*/
/*Navbar items declarions: menu items texts + links */
navbar_items = [
    {'item_name': 'Scores', 'link': '#', 'class':'navbar-item'},
    {'item_name': 'Team', 'link': '#', 'class':'navbar-item'},
    {'item_name': 'Schedule', 'link': '#', 'class':'navbar-item'},
    {'item_name': 'Live', 'link': '#', 'class':'navbar-item'},
    {'item_name': 'Store', 'link': '#', 'class':'navbar-item'},
];

const fragment = new DocumentFragment();
const item = document.getElementById('navbar-list-items');
let counter = 1;

navbar_items.forEach(navbar_item => {
    //creates <li> 
    const new_item = document.createElement('li');
    new_item.innerHTML = `<a href="${navbar_item.link}">${navbar_item.item_name}</a>`;
    new_item.classList.add(navbar_item.class);
    new_item.setAttribute("id", `navbar-item-${counter}`);
    counter ++; 
    fragment.appendChild(new_item);
});

item.appendChild(fragment);


/*Navbar Locator*/
const vp_height = window.innerHeight;
const sections_position_list = new Array();

//Gettiing navbar height
const navbar = document.querySelector('header');
const navbar_height = navbar.getBoundingClientRect().bottom;
const sections = document.querySelectorAll('h2');

//Getting element heights after DOM is loades
document.addEventListener('DOMContentLoaded', e =>{
    
    sections.forEach(section => {

        const section_position = {
            'section_text': '',
            'section_y': '',
        };

        const section_text = section.textContent;
        const section_y = section.getBoundingClientRect().bottom;
        section_position.section_text = section_text;
        section_position.section_y = section_y;
        sections_position_list.push(section_position); 
    });

    //Setting inicial section
    document.getElementById('navbar-item-1').classList.add('underlined-navbar-item');
     console.log(sections_position_list);
    // console.log(sections_position_list.length);
});

//Getting element heights after resize
window.addEventListener('resize', e =>{
    console.log('hello');
    let counter_2 = 0;
    sections.forEach(section => {
        sections_position_list[counter_2].section_y = section
        .getBoundingClientRect().bottom;
        counter_2 ++;
    });
    console.log(sections_position_list);
});

//Getting current section
document.addEventListener('scroll', e =>{
    
    counter = 1;
    sections.forEach(section => {
        const section_y_current = (section.getBoundingClientRect().bottom);
        if (section_y_current >= navbar_height && section_y_current <= (vp_height/3)){
            
            // //Removing styles from other sections
            document.querySelectorAll('.underlined-navbar-item')
            .forEach(other_item => other_item.classList.remove('underlined-navbar-item'));

            //Setting current section style
            const navbar_item = document.getElementById(`navbar-item-${counter}`);
            navbar_item.classList.add('underlined-navbar-item');
            counter = 1;
        }
        counter ++;
    });
});

//Smooth Scrooling
document.addEventListener('DOMContentLoaded', () =>{

    const items = document.querySelectorAll('.navbar-item');
    console.log(items);

    
    items.forEach( item => {
        item.addEventListener('click', e => {

            e.preventDefault;
            console.log(e.target.textContent);

            let offset_y = 0;

            sections_position_list.forEach(section => {
                if (e.target.textContent === section.section_text){
                    offset_y = section.section_y;
                    console.log(offset_y);
                }
            });

            setTimeout(() =>{
                console.log(sections_position_list);
                console.log(offset_y);
                offset_y = offset_y - navbar_height*2;
                item.classList.add('underlined-navbar-item');
                window.scrollBy({
                    top: offset_y,
                    left: 0,
                    behavior: 'smooth',
                });
            }, 0.001);

            let counter_1 = 0;

            setTimeout(() =>{
                sections.forEach(section => {
                    // console.log(section
                    //     .getBoundingClientRect().bottom);
                    // console.log(counter_1);
                    sections_position_list[counter_1].section_y = section
                    .getBoundingClientRect().bottom;
                    counter_1 ++;
                    // console.log(counter_1);
                });
                console.log(sections_position_list);

            }, 1000);

            
        });  
        



    });

});








/*Scores*/
/*Scores from previous matches*/
score_details = [
    {'date': 'Final', 
    'score_local':'108',
    'score_visit':'111',
    'logo_local': './media/MIA-viceversa.png',
    'logo_visit': './media/LAL.png',
    'location': 'Miami'
    },
    {'date': 'Tuesday - April 27th, 2021', 
    'score_local':'-',
    'score_visit':'-',
    'logo_local': './media/LAL.png',
    'logo_visit': './media/MIA-viceversa.png',
    'location': 'Denver'
    },
    {'date': 'Friday - April 30th, 2021', 
    'score_local':'-',
    'score_visit':'-',
    'logo_local': './media/LAL.png',
    'logo_visit': './media/MIA-viceversa.png',
    'location': 'Chicago'
    },
];

game_card_classes = {
    'game_card_conteiner': [`match-score`, `game-card`, `flex`],
    'game_date': [`match-date`],
    'game_score_detail': [`score-detail`, `flex`],
    'game_location': [`match-location`, `flex`],
}

const fragment_score = new DocumentFragment();
const score_container = document.getElementById('score-container');


score_details.forEach(score_detail => {

    //Game Card creation
    const game_card = document.createElement('div');
    game_card.classList.add(...game_card_classes.game_card_conteiner);

    //Appenidng date
    const game_date = document.createElement('div');
    game_date.classList.add(...game_card_classes.game_date);
    game_date.textContent = score_detail.date;
    game_card.appendChild(game_date);

    //Appending Score and team logos
    const game_score_container = document.createElement('div');
    game_score_container.classList.add(...game_card_classes.game_score_detail);

    //---> Scores
    const game_score_local = document.createElement('span');
    game_score_local.textContent = score_detail.score_local;
    const game_score_visit = document.createElement('span');
    game_score_visit.textContent = score_detail.score_visit;
    const game_score_divider = document.createElement('span');
    game_score_divider.textContent = '-';

    //---> Logos
    const game_logo_local = document.createElement('img');
    game_logo_local.setAttribute('src', score_detail.logo_local);
    const game_logo_visit = document.createElement('img');
    game_logo_visit.setAttribute('src', score_detail.logo_visit);

    game_score_container.appendChild(game_logo_local)
    game_score_container.appendChild(game_score_local)
    game_score_container.appendChild(game_score_divider)
    game_score_container.appendChild(game_score_visit)
    game_score_container.appendChild(game_logo_visit);

    game_card.appendChild(game_score_container);

    // Appending Location
    const game_location = document.createElement('div');
    game_location.classList.add(...game_card_classes.game_location);
    game_location.textContent = score_detail.location;

    game_card.appendChild(game_location);

    //Appending all components
    fragment_score.appendChild(game_card)
});

score_container.appendChild(fragment_score);


/*Team*/
/*Team Players Info*/
players_details = [
    {'name': 'Nemanja Bjelica', 
    'position':'Center-Forward',
    'number':'70',
    'player_pic': './media/players/roster-vv-1628389.png',
    },
    {'name': 'Nemanja Bjelica', 
    'position':'Center-Forward',
    'number':'70',
    'player_pic': './media/players/roster-vv-1628389.png',
    },
    {'name': 'Nemanja Bjelica', 
    'position':'Center-Forward',
    'number':'70',
    'player_pic': './media/players/roster-vv-1628389.png',
    },
    {'name': 'Nemanja Bjelica', 
    'position':'Center-Forward',
    'number':'70',
    'player_pic': './media/players/roster-vv-1628389.png',
    },
    {'name': 'Nemanja Bjelica', 
    'position':'Center-Forward',
    'number':'70',
    'player_pic': './media/players/roster-vv-1628389.png',
    },
    {'name': 'Nemanja Bjelica', 
    'position':'Center-Forward',
    'number':'70',
    'player_pic': './media/players/roster-vv-1628389.png',
    },
    {'name': 'Nemanja Bjelica', 
    'position':'Center-Forward',
    'number':'70',
    'player_pic': './media/players/roster-vv-1628389.png',
    },
    {'name': 'Nemanja Bjelica', 
    'position':'Center-Forward',
    'number':'70',
    'player_pic': './media/players/roster-vv-1628389.png',
    },
    {'name': 'Nemanja Bjelica', 
    'position':'Center-Forward',
    'number':'70',
    'player_pic': './media/players/roster-vv-1628389.png',
    },
];

player_card_classes = {
    'player_card_container': [`player-card`,  `flex`],
    'player_info_container': [`player-info`],
    'player_name_container': [`player-name`],   
    'player_position_container': [`player-position`],
}

const team_container = document.getElementById('team-container');

fragment_players = new DocumentFragment();

players_details.forEach( player => {

    //Creates Player Card
    const player_card = document.createElement('div');
    player_card.classList.add(...player_card_classes.player_card_container);

    //Creates Player image
    const player_image = document.createElement('img');
    player_image.setAttribute('src', player.player_pic);

    player_card.appendChild(player_image);

    //Creates player info
    const player_info = document.createElement('div');
    player_info.classList.add(...player_card_classes.player_info_container);

    const player_name = document.createElement('div');
    player_name.classList.add(...player_card_classes.player_name_container);
    player_name.textContent = player.name;

    const player_position = document.createElement('div');
    player_position.classList.add(...player_card_classes.player_position_container);
    player_position.textContent = `#${player.number} ${player.position}`;

    player_info.appendChild(player_name);
    player_info.appendChild( player_position);

    player_card.appendChild(player_info);

    //Append all components
    fragment_players.appendChild(player_card);
});

team_container.appendChild(fragment_players);