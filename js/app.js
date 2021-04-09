
/*Navbar items declarions: menu items texts + links */
navbar_items = [
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


//sticky header
const header = document.getElementById('sticky-header-menu');
const sticky = header.offsetTop;

window.onscroll = () => {


    if (window.pageYOffset > sticky){
        console.log(window.pageYOffset);
        console.log(sticky);
        
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

}









