var LOADED = false;

$(document).ready(function() {
    $.ajax({
        url: 'assets/data/people.json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            populateDiv('founder', data.founder);
            populateDiv('board', data.board);
            populateDiv('chair', data.chair);
            LOADED = true;
            fitContent();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Failed to fetch data:", textStatus, errorThrown);
        }
    });
});

function populateDiv(divId, dataArray) {
    let htmlContent = "";

    $.each(dataArray, function(index, person) {
        htmlContent += `
            <div class="team-card">
                <div class="team-info">
                    <img src="${person.imageUrl}" alt="${person.name}">
                    <h2>${person.name}</h2>
                    <p>${person.title}</p>
                </div>
                <div class="team-description">
                    <p id="personnelDisc">${person.description}</p>
                </div>
            </div>
        `;
    });

    $('#' + divId).html(htmlContent);
}

function fitContent(){
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if(LOADED){
        var card = document.getElementsByClassName("team-card");

        if(viewportWidth < 1150){
            for (i = 0; i < card.length; i++) {
                card[i].style.minWidth = "390px";
                card[i].style.width = "120%";
            }
        } else{
            for (i = 0; i < card.length; i++) {
                card[i].style.minWidth = "1100px";
                card[i].style.width = "70%";
            }
        }

        if(viewportWidth < 750){} else{}
    }
}

window.addEventListener("resize", fitContent);