
export function createNavbar(navbar_items, item){
    const fragment = new DocumentFragment();
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
};


// Function to create cards for Scores and Next Matches
export function createCard (score_details, game_card_classes, score_container){

    const fragment_score = new DocumentFragment();

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
};


// Function to create cards for Players
export function createPlayerCard(players_details, player_card_classes, team_container){

    const fragment_players = new DocumentFragment();

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

}

// Active Section and Smooth Scrolling

//Gets element heights after DOM is loades
export function getInitialHeights(sections) {
    
    //Getting element heights after DOM is loades  --->> ASK
    const sections_position_list = new Array();
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
    //document.getElementById('navbar-item-1').classList.add('underlined-navbar-item');

    return sections_position_list;
};

//Gets element heights if viewport is resized
export function getResizeHeights(sections_position_list, sections) {
    
    //Getting element heights after resize
    console.log('hello');
    let counter_2 = 0;
    console.log(sections);
    console.log(sections_position_list);

    sections.forEach(section => {
        sections_position_list[counter_2].section_y = section
        .getBoundingClientRect().bottom;
        counter_2 ++;
    });

    return sections_position_list;
};

//Gets active/current section depending if section is in viewport
export function getCurrentSection(vp_height, navbar_height, sections){

        let counter = 1;
        sections.forEach(section => {
            const section_y_current = section.getBoundingClientRect().bottom;
            if (section_y_current >= navbar_height && section_y_current <= (vp_height/2)){
                
                //Removing styles from other sections
                document.querySelectorAll('.underlined-navbar-item')
                .forEach(other_item => other_item.classList.remove('underlined-navbar-item'));

                //Setting current section style
                const navbar_item = document.getElementById(`navbar-item-${counter}`);
                navbar_item.classList.add('underlined-navbar-item');
                counter = 1;
            }
            counter ++;
    });
};


//Scroll window when user click a menu item
export function scrollToSection(sections_position_list, navbar_height, target_text){
   
    console.log(sections_position_list);

    let offset_y = 0;
    sections_position_list.forEach(section_pos => {
        console.log(target_text);
        console.log(section_pos.section_text);
        if (target_text === section_pos.section_text){
            offset_y = section_pos.section_y - navbar_height * 2 ;
            console.log(offset_y + navbar_height);
        }
    });

    console.log(offset_y);
    window.scrollBy({top: offset_y, behavior: 'smooth'});
    console.log(navbar_height); 

};
