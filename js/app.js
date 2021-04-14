
//sticky header
const header = document.getElementById('sticky-header-menu');
const sticky = header.offsetTop;

window.onscroll = () => {
    if (window.pageYOffset > sticky){
        // console.log(window.pageYOffset);
        // console.log(sticky);
        
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

}

/*Navbar*/
/*Navbar items declarions: menu items texts + links */
navbar_items = [
    {'item_name': 'Scores', 'link': './teams', 'class':'navbar-item'},
    {'item_name': 'Team', 'link': './teams', 'class':'navbar-item'},
    {'item_name': 'Schedule', 'link': './teams', 'class':'navbar-item'},
    {'item_name': 'Community', 'link': './teams', 'class':'navbar-item'}
];

const fragment = new DocumentFragment();
const item = document.getElementById('navbar-list-items');

navbar_items.forEach(navbar_item => {
    //creates <li> 
    const new_item = document.createElement('li');
    new_item.innerHTML = `<a href="${navbar_item.link}">${navbar_item.item_name}</a>`;
    new_item.classList.add(navbar_item.class);
    fragment.appendChild(new_item);
});

item.appendChild(fragment);

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