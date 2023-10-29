var LOADED = false;

var founder = "";
var board = "";
var chair = "";

let mobile = false;
let cachedMobile = false;

$(document).ready(function() {
    $.ajax({
        url: 'assets/data/people.json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {

            founder = data.founder;
            board = data.board;
            chair = data.chair;

            
            populateDiv('founder', founder);
            populateDiv('board', board);
            populateDiv('chair', chair);
            

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

    mobile = (window.innerWidth || document.documentElement.clientWidth) < 750;

   if(mobile){
        $.each(dataArray, function(index, person) {
            htmlContent += `
                <div class="team-card-one">
                    <div class="team-info-one">
                        <div id="nameStacks">
                            <img src="${person.imageUrl}" alt="${person.name}">
                            <div class="text-content">
                                <h2>${person.name}</h2>
                                <p>${person.title}</p>
                            </div>
                        </div>
                    </div>
                    <div class="team-description">
                        <p id="personnelDisc">${person.description}</p>
                    </div>
                </div>
            `;
        });
    } else{
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
    }
    

    $('#' + divId).html(htmlContent);
}

function fitContent(){
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    mobile = (viewportWidth) < 750;

    if(cachedMobile != mobile){
        populateDiv('founder', founder);
        populateDiv('board', board);
        populateDiv('chair', chair);

        cachedMobile = mobile;
    }

    if(LOADED){

        if(mobile){var card = document.getElementsByClassName("team-card-one");}
        else{var card = document.getElementsByClassName("team-card");}

        console.log(card);

        if(viewportWidth < 1150 && viewportWidth > 750){
            
            for (i = 0; i < card.length; i++) {
                card[i].style.minWidth = "320px";
                card[i].style.width = "120%";
            }
        } else if(viewportWidth > 1150){
            for (i = 0; i < card.length; i++) {
                card[i].style.minWidth = "1100px";
                card[i].style.width = "70%";
            }
        } else{
            console.log("ji");
            for (i = 0; i < card.length; i++) {
                card[i].style.minWidth = "290px";
                card[i].style.width = "90%";
            }

        }
    }
}

window.addEventListener("resize", fitContent);