var htmlLinks = [
    { text: 'Insert and Delete Tags', path: 'subpages/html/insAnddel.html' },
    { text: '', path: '' },
];

var cssLinks = [

];

var jsLinks = [

];

var otherLinks = [
    { text: 'Font awesome tricks', path: 'subpages/other/fontAwsTricks.html' },
    { text: 'Font awesome alternative', path: 'subpages/other/fontAwsAlt.html' },
]

function generateLinks() {
    populateLinks('html-links', htmlLinks);
    populateLinks('css-links', cssLinks);
    populateLinks('js-links', jsLinks);
    populateLinks('other-links', otherLinks);
}


function populateLinks(elemId, linkArr) {
    let innerHTML = '';
    let element = document.getElementById(elemId);
    linkArr.forEach(x => innerHTML += makeListItemWithLink(x));
    element.innerHTML = innerHTML;
}


function makeListItemWithLink(link) {
    let liLink =
    `
        <li>
            <a onclick="loadToFrame('${link.path}')" href="#">${link.text}</a>
        </li>
    `;

    return liLink;
}

function loadToFrame(path) {
    let iframe = document.getElementById('page-display');
    iframe.src = path;
    showModal(true);
}

function showModal(show) {
    let modal = document.getElementById('modal');
    let className = 'confirm-modal-active';
    show ?
        modal.classList.add(className) :
        modal.classList.remove(className);
}