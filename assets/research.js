let posterNames = [
    "Examining Linkages of ADHD Risk Allele Dopamine Transporter Gene DAT1: A Bibliometric Analysis", 
    "Examining the Correlation Between Lifestyle Factors and the Clinical Presentation of Multiple Sclerosis",
    "Levodopa as a Treatment for Parkinson’s Disease",
    "A Study of Artificial Intelligence Papers within Neuroscience Research",
    "Opioid Epidemic Policy: Predictive Power of Collaborative Quantity vs. Quality in Determining Impactful Research",
    "Reading between the lines: Gaps in Health Outcomes as a Result of Varying Health Literacy Levels",
    "Nanoparticles as a Drug Delivery Method",
    "Investigating Psychedelic-Assisted Psychotherapy and PTSD",
    "Exploring Gaps, Trends and Applications of Research on Computational Models of Memory and Learning",
    "Trends in Disparity Research in Recent Telemedicine Literature",
    "Impact and Optimization of BCIs on Neuroplasticity for Rehabilitation in Neurological Disorders",
    "Therapeutic Benefits of Deep Brain Stimulation in Neurodegenerative Diseases Based on the Top 100 Cited Literature",
    "Exploring the Use of Spinal Cord Stimulation: A Review of its Applications for Chronic Pain Management",
    "Autism Spectrum Disorder: Learning & Social Behavior of Children with ASD During COVID-19",
    "Disparities Between Zip Codes on the Spread, Diagnosis, Treatment, and Vaccination of COVID-19",
    "Neuroimaging: Amyloid PET Scans For Alzheimer’s Diagnosis",
    "Alzheimer’s Disease",
    "Decoding Brain Waves: Machine Learning for Epilepsy Detection via EEG Scans",
    "Universal Healthcare: Private vs. Public Systems and Policy Implementation",
    "Nonhuman Modeling and it's Implications in Diverging Circuit Literature"
];
//    <h3>${posterNames[i-1]}</h3> 

let posters = `<div class="sole-project-container">`;

for (i = 1; i <= posterNames.length; i++){
    posters += 
    `
        <div class="project-item">
            <object
            data='assets/posters/2024Cohort/2024poster${i}.pdf#view=FitH'
            type="application/pdf"
            id="pdfPosterJust">
                <iframe
                src='assets/posters/2024Cohort/2024poster${i}.pdf#view=FitH'
                id="pdfPosterJust">
                    <p>This browser does not support PDF!</p>
                </iframe>
            </object>
        </div>
    `
}

posters += "</div>"


document.getElementById("insert_cohort_here").innerHTML = posters;