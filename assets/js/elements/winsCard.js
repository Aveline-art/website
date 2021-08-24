function seeMore(id) {
    screenWidth = window.innerWidth;
    if (screenWidth > 960) {
        updateOverlay(id);
    } else {
        mobileSeeMore(id);
    }
}

function mobileSeeMore(id) {
    let span = document.getElementById(id);
    let parent = span.parentElement.parentElement
    parent.classList.toggle('expanded')
    if (parent.classList.contains('expanded')) {
        span.innerHTML = "see less"
    }
    else {
        span.innerHTML = "...see more"
    }
}

function updateOverlay(i) {

    window.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') {
            hideOverlay(e.key)
        }
    });

    document.querySelector(".main-header").inert = true;
    document.querySelector(".content-section.projects").inert = true;
    document.querySelector(".main-footer").inert = true;
    document.querySelector(".home-getting-started-container.content-section.section-hack-nights.wins-hero").inert = true;
    document.querySelector(".sr-only-focusable").inert = true;

    window.addEventListener('resize', (e) => {
        widthOutput = window.innerWidth;
        if (widthOutput < 960) {
            document.querySelector(".main-header").inert = false;
            document.querySelector(".content-section.projects").inert = false;
            document.querySelector(".main-footer").inert = false;
            document.querySelector(".home-getting-started-container.content-section.section-hack-nights.wins-hero").inert = false;
            document.querySelector(".sr-only-focusable").inert = false;
        }
        else {
            document.querySelector(".main-header").inert = true;
            document.querySelector(".content-section.projects").inert = true;
            document.querySelector(".main-footer").inert = true;
            document.querySelector(".home-getting-started-container.content-section.section-hack-nights.wins-hero").inert = true;
            document.querySelector(".sr-only-focusable").inert = true;
        }
    });

    let stringData = window.localStorage.getItem("data");
    let data = JSON.parse(stringData).reverse();

    const overlayProfileImg = document.querySelector('#overlay-profile-img');
    overlayProfileImg.src = document.querySelector(`#ghImg-${i}`).src;

    const overlayIcons = document.querySelector('#overlay-icons');
    overlayIcons.innerHTML = "";

    if (data[i][linkedin_url].length > 0) {
        makeIcon(data[i][linkedin_url], overlayIcons, 'linkedin-icon', '/assets/images/wins-page/icon-linkedin-small.svg');
    } if (data[i][github_url].length > 0) {
        makeIcon(data[i][github_url], overlayIcons, 'github-icon', '/assets/images/wins-page/icon-github-small.svg');
    }

    const overlayName = document.querySelector('#overlay-name');
    overlayName.innerHTML = data[i][name];

    const overlayTeams = document.querySelector('#overlay-teams');
    overlayTeams.innerHTML = `Team(s): ${data[i][team]}`;

    const overlayRoles = document.querySelector('#overlay-roles');
    overlayRoles.innerHTML = `Role(s): ${data[i][role]}`;

    const overlayOverview = document.querySelector('#overlay-overview');
    overlayOverview.innerHTML = data[i][overview];

    const overlayInfo = document.querySelector('#overlay-info');
    overlayInfo.innerHTML = formatMessage(data[i][win]);

    const overlayProjectCard = document.querySelector('#overlay-project-card');
    overlayProjectCard.parentNode.classList.add("display-initial");
}

function addSeeMore() {
    let innerHeight = Array.from(winText.childNodes).reduce((acc, el) => (el.offsetHeight || 0) + acc, 0) - 22

    //makes the see more span on the bottom of the card
    if (innerHeight <= winText.offsetHeight) { //checks if see more is needed.
        winText.querySelector('.wins-see-more-div').setAttribute('hidden', 'true')
    } else {
        winText.querySelector('.wins-see-more-div').removeAttribute('hidden')
    }
}