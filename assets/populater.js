$(document).ready(function() {
    // Fetch the JSON file using jQuery's getJSON method
    $.getJSON('assets/data/people.json', function(dataArray) {
        let htmlContent = "";

        // Loop through each person in the array
        $.each(dataArray, function(index, data) {
            htmlContent += `
                <div class="team-card">
                    <div class="team-info">
                        <img src="${data.imageUrl}" alt="${data.name}">
                        <h2>${data.name}</h2>
                        <p>${data.title}</p>
                    </div>
                    <div class="team-description">
                        <p id="personnelDisc">${data.description}</p>
                    </div>
                </div>
            `;
        });

        // Insert the generated content into the div
        $('#founder').html(htmlContent);
    });
});
