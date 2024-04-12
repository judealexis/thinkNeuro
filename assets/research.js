let posters = `<div class="sole-project-container">`;

for (i = 1; i <= 21; i++){
    posters += 
    `
        <div class="project-item">
            <object
            data='assets/posters/2024Cohort/2024poster${i}.pdf#view=FitH'
            type="application/pdf"
            id="pdfPoster">
                <iframe
                src='assets/posters/2024Cohort/2024poster${i}.pdf#view=FitH'
                id="pdfPoster">
                    <p>This browser does not support PDF!</p>
                </iframe>
            </object>
        </div>
    `
}

posters += "</div>"


document.getElementById("insert_cohort_here").innerHTML = posters;