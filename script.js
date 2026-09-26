
document.getElementById("app").innerHTML = `
  <div class ="home-page">

    <header class="site-header">
       <div class="logo">
         Note<span>Vault</span>
        </div>

       <nav class="top-nav">
          <button class="nav-active">Home</button>
          <button>About</button>
          <button class="theme-btn">☼</button>
        </nav>
    </header>

    <main class="home-content">

      <div class="side-note left-note">
        <span>Study</span>
        <span>Learn</span>
        <span>Revise</span>
        <span>Grow</span>
        <div>↘</div>
      </div>

      <div class="hero">
         <div class="hero-title">
            <div class="hero-doodle">♧</div>

            <h1>
              Note<span>Vault</span>
            </h1>

            <div class="crown">♕</div>
        </div>

        <h2>Class 12 PCMB</h2>

        <p>
          Handwritten Notes and Video Lectures,
          all in one place.
        </p>
      </div>

      <div class="side-note right-note">

                <p>✓ Notes</p>
                <p>✓ Video Lectures</p>
                <p>✓ All Chapters</p>
                <p>✓ One Place</p>

            </div>

        <section class="subjects">

                <div class="subject-card physics">

                    <div class="subject-icon">⚛</div>

                    <h2>Physics</h2>

                    <div class="card-arrow">→</div>

                </div>


                <div class="subject-card chemistry">

                    <div class="subject-icon">⚗</div>

                    <h2>Chemistry</h2>

                    <div class="card-arrow">→</div>

                </div>


                <div class="subject-card mathematics">

                    <div class="subject-icon">△</div>

                    <h2>Mathematics</h2>

                    <div class="card-arrow">→</div>

                </div>


                <div class="subject-card biology">

                    <div class="subject-icon">♧</div>

                    <h2>Biology</h2>

                    <div class="card-arrow">→</div>

                </div>

            </section>

            <div class="home-bottom">

                <span>"Same Syllabus.</span>
                <u>Less Scrolling.</u>
                <span>More Learning."</span>
                <span class="smile">☺</span>

            </div>

            <div class="home-star star-one">✦</div>
            <div class="home-star star-two">✧</div>
            <div class="home-star star-three">✦</div>

        </main>

    </div>

`

const physicsCard = document.querySelector(".physics");
const chemistryCard = document.querySelector(".chemistry");
const mathematicsCard = document.querySelector(".mathematics");
const biologyCard = document.querySelector(".biology");

physicsCard.addEventListener("click", () => {
    showPhysics();
});

chemistryCard.addEventListener("click", () => {
    showChemistry();
});

mathematicsCard.addEventListener("click", () => {
    showMathematics();
});

biologyCard.addEventListener("click", () => {
    showBiology();
});


const physicsChapters = [
    {
        number: "01",
        name: "Electric Charges and Fields",
        pdf: "resources/physics/Electric_Charges_and_Fields_Notes.pdf",
        video: "https://www.youtube.com/embed/i_yT6CpUOTk?si=gvsNCd6Ga2VxOFQ0"
    },
    {
        number: "02",
        name: "Electrostatic Potential and Capacitance",
        pdf: "resources/physics/Electrostatic_Potential_and_Capacitance_Notes.pdf",
        video: "https://www.youtube.com/embed/5Wj95zTraZI?si=mtqKB1bJF1DCktt0"
    },
    {
        number: "03",
        name: "Current Electricity",
        pdf: "resources/physics/Current_Electricity_Notes.pdf",
        video: "https://www.youtube.com/embed/ANz7YYAZzrM?si=KTm4zeD6tXUzBylh"
    },
    {
        number: "04",
        name: "Moving Charges and Magnetism",
        pdf: "resources/physics/Moving_Charges_and_Magnetism_Notes.pdf",
        video: "https://www.youtube.com/embed/LSJIX_tSdPY?si=6q-FxrrVrlZKNfQr"
    },
    {
        number: "05",
        name: "Magnetism and Matter",
        pdf: "resources/physics/Magnetism_and_Matter_Notes.pdf",
        video: "https://www.youtube.com/embed/JfJRMqx_YHE?si=QQOWDAa3uZAicVSJ"
    },
    {
        number: "06",
        name: "Electromagnetic Induction",
        pdf: "resources/physics/Electromagnetic_Induction_Notes.pdf",
        video: "https://www.youtube.com/embed/-ik_b6qN5b4?si=QshRibeIhqLBR97E"
    },
    {
        number: "07",
        name: "Alternating Current",
        pdf: "resources/physics/Alternating_Current_Notes.pdf",
        video: "https://www.youtube.com/embed/jZeRVBO0ymI?si=de99--qSNLj9pYnj"
    },
    {
        number: "08",
        name: "Electromagnetic Waves",
        pdf: "resources/physics/Electromagnetic_Waves_notes.pdf",
        video: "https://www.youtube.com/embed/alFEgW-gE9M?si=M70M-H--4O_-0e2c"
    },
    {
        number: "09",
        name: "Ray Optics and Optical Instruments",
        pdf: "resources/physics/Ray_Optics_and_Optical_Instruments_Notes.pdf",
        video: "https://www.youtube.com/embed/ovfNP_TqolM?si=4ZYDhDAXKymnM9Dc"
    },
    {
        number: "10",
        name: "Wave Optics",
        pdf: "resources/physics/Wave_optics_Notes.pdf",
        video: "https://www.youtube.com/embed/2gumHdFXums?si=R6KCR9iNSOFS0jKR"
    },
    {
        number: "11",
        name: "Dual Nature of Radiation and Matter",
        pdf: "resources/physics/Dual_Nature_of_Radiation_and_Matter_Notes.pdf",
        video: "https://www.youtube.com/embed/6GaLVcWIVzw?si=gKwFKNJwefL1VKBq"
    },
    {
        number: "12",
        name: "Atoms",
        pdf: "resources/physics/Atoms_Notes.pdf",
        video: "https://www.youtube.com/embed/uf2UvFqUoXE?si=67A3QVMnE2JBk3sZ"
    },
    {
        number: "13",
        name: "Nuclei",
        pdf: "resources/physics/Nuclei_Notes.pdf",
        video: "https://www.youtube.com/embed/kHz5ZoBeSVs?si=i7TB4hya9Ya9ajvn"
    },
    {
        number: "14",
        name: "Semiconductor Electronics",
        pdf: "resources/physics/Semiconductor_Electronics_Notes.pdf",
        video: "https://www.youtube.com/embed/03PgdzPn-XE?si=GT30y2wqFPgDO98X"
    }
];


const chemistryChapters = [
    {
        number: "01",
        name: "Solutions",
        pdf: "resources/chemistry/Solutions_Notes.pdf",
        video: "https://www.youtube.com/embed/U_dJxj895Jw?si=05MNS81wK87abjfJ"
    },
    {
        number: "02",
        name: "Electrochemistry",
        pdf: "resources/chemistry/Electrochemistry_Notes.pdf",
        video: "https://www.youtube.com/embed/_CVRAZ1b4qg?si=WQKb8QO5vPSTHQQ_"
    },
    {
        number: "03",
        name: "Chemical Kinetics",
        pdf: "resources/chemistry/Chemical_Kinetics_Notes.pdf",
        video: "https://www.youtube.com/embed/Xz8wjFX6S_0?si=IVUaOyVRaUQjkyjM"
    },
    {
        number: "04",
        name: "The d and f Block Elements",
        pdf: "resources/chemistry/The_d_and_f_Block_Elements_Notes.pdf",
        video: "https://www.youtube.com/embed/Fz3YCSbrHqc?si=nlLYrV4Xd6P2JKH9"
    },
    {
        number: "05",
        name: "Coordination Compounds",
        pdf: "resources/chemistry/Coordination_Compunds_Notes.pdf",
        video: "https://www.youtube.com/embed/t38_SGflTak?si=nJpSTNh0vCTPQsC9"
    },
    {
        number: "06",
        name: "Haloalkanes and Haloarenes",
        pdf: "resources/chemistry/Haloalkanes_and_Haloarenes_Notes.pdf",
        video: "https://www.youtube.com/embed/cB9sbMu6R04?si=Kf7F-t591LTQpeUE"
    },
    {
        number: "07",
        name: "Alcohols,Phenols and Ethers",
        pdf: "resources/chemistry/Alcohols_Phenols_and_Ethers_Notes.pdf",
        video: "https://www.youtube.com/embed/JBGnunZzCUM?si=ghIKbyI-n-Myk1JY"
    },
    {
        number: "08",
        name: "Aldehyde,Ketones and Acids",
        pdf: "resources/chemistry/Aldehydes_Ketones_and_Acids_Notes.pdf",
        video: "https://www.youtube.com/embed/LUhUM_Vw4Oo?si=Z5MEQspL9n_6RXUc"
    },
    {
        number: "09",
        name: "Amines",
        pdf: "resources/chemistry/Amines_Notes.pdf",
        video: "https://www.youtube.com/embed/OBqFtHYhSYM?si=BJsWCLWwjLlYPu9S"
    },
    {
        number: "10",
        name: "Biomolecules",
        pdf: "resources/chemistry/Biomolecules_Notes.pdf",
        video: "https://www.youtube.com/embed/ZzSHpxjH6Kg?si=BDXPqFYXpzp4hqo6"
    }
];


const mathematicsChapters = [
    {
        number: "01",
        name: "Relation and Functions",
        pdf: "resources/maths/Relation_and_functions_Notes.pdf",
        video: "https://www.youtube.com/embed/a8YasMSWFvc?si=BL0Yb49GKTodleu9"
    },
    {
        number: "02",
        name: "Inverse Trigonometric Functions",
        pdf: "resources/maths/Inverse_Trigonometric_Functions_Notes.pdf",
        video: "https://www.youtube.com/embed/4Aml6yd4tDY?si=ilSgh9vXUqb5epSb"
    },
    {
        number: "03",
        name: "Matrices",
        pdf: "resources/maths/Matrices_Notes.pdf",
        video: "https://www.youtube.com/embed/2zHpum8F5RA?si=Jey2v6fv_UUN3ntR"
    },
    {
        number: "04",
        name: "Determinants",
        pdf: "resources/maths/Determinants_Notes.pdf",
        video: "https://www.youtube.com/embed/pafeee3O6u8?si=fAJRn7ZwLrOMpwxz"
    },
    {
        number: "05",
        name: "Continuity and Differentiability",
        pdf: "resources/maths/Continuity_and_Differentiability_Notes.pdf",
        video: "https://www.youtube.com/embed/cIxHoVCUN1M?si=2-iLyvZSu7rsKSqo"
    },
    {
        number: "06",
        name: "Application of Derivatives",
        pdf: "resources/maths/Application_of_Derivatives_Notes.pdf",
        video: "https://www.youtube.com/embed/uVEOu40lYEY?si=xcF2umylc0mj0Cqa"
    },
    {
        number: "07",
        name: "Integrals",
        pdf: "resources/maths/Integrals_Notes.pdf",
        video: "https://www.youtube.com/embed/dBglfhVX6kI?si=8tSyOzCuukAUAKbP"
    },
    {
        number: "08",
        name: "Application of Integrals",
        pdf: "resources/maths/Application_of_Integrals_Notes.pdf",
        video: "https://www.youtube.com/embed/-tcuZsZqXZk?si=ZrJSFyqh79c6O47G"
    },
    {
        number: "09",
        name: "Differential Equations",
        pdf: "resources/maths/Differential_Equations_Notes.pdf",
        video: "https://www.youtube.com/embed/EEudvNSWzXE?si=w5iKoSsVKjhOTu00"
    },
    {
        number: "10",
        name: "Vector Algebra",
        pdf: "resources/maths/Vector_Algebra_Notes.pdf",
        video: "https://www.youtube.com/embed/B5Rq-af5R14?si=Og7BmMHY0NqbXKNO"
    },
    {
        number: "11",
        name: "Three Dimensional Geometry",
        pdf: "resources/maths/3D_Geometry_Notes.pdf",
        video: "https://www.youtube.com/embed/7ggiHx1dEok?si=GDrbvOhYhjTzFAwd"
    },
    {
        number: "12",
        name: "Linear Programming",
        pdf: "resources/maths/Linear_Programming_Notes.pdf",
        video: "https://www.youtube.com/embed/98ngGuFd9Vg?si=Xnh63qWgTPiz__Q0"
    },
    {
        number: "13",
        name: "Probability",
        pdf: "resources/maths/Probability_Notes.pdf",
        video: "https://www.youtube.com/embed/_YJr2t_1NTU?si=4d0nWBaRNzEWoxbs"
    }
];


const biologyChapters = [
    {
        number: "01",
        name: "Sexual Reproduction in Flowering",
        pdf: "resources/biology/Sexual_Reproduction_in_Flowering.pdf",
        video: "https://www.youtube.com/embed/N84u3PcLffc?si=dRcMV5XmpXxdkq3I"
    },
    {
        number: "02",
        name: "Human Reproduction",
        pdf: "resources/biology/Human_Reproduction_Notes.pdf",
        video: "https://www.youtube.com/embed/FWaOU7X6B0E?si=apu6YxmVvbFtenE3"
    },
    {
        number: "03",
        name: "Reproductive Health",
        pdf: "resources/biology/Reproductive_Health_Notes.pdf",
        video: "https://www.youtube.com/embed/ZbaGJT4EScs?si=CWWVLfFag_b1aImQ"
    },
    {
        number: "04",
        name: "Principles of Inheritance and Variation",
        pdf: "resources/biology/Principles_of_Inheritance_and_Variation_Notes.pdf",
        video: "https://www.youtube.com/embed/CvTstNChMww?si=A2pX231-MmMsyNS8"
    },
    {
        number: "05",
        name: "Molecular Basis od Inheritance",
        pdf: "resources/biology/Molecular_Basis_of_Inheritance_Notes.pdf",
        video: "https://www.youtube.com/embed/5qCpewUFNk0?si=GxYrzBRQtNiQzMEJ"
    },
    {
        number: "06",
        name: "Evolution",
        pdf: "resources/biology/Evolution_Notes.pdf",
        video: "https://www.youtube.com/embed/DaNhRwRui3Q?si=5meRMmS0m8XcObht"
    },
    {
        number: "07",
        name: "Human Health and Disease",
        pdf: "resources/biology/Human_Health_and_Disease_Notes.pdf",
        video: "https://www.youtube.com/embed/WJPaKue8Fws?si=wn1GqsLVE5dVdVxl"
    },
    {
        number: "08",
        name: "Microbes",
        pdf: "resources/biology/Microbes_Notes.pdf",
        video: "https://www.youtube.com/embed/4uErIyc5XGs?si=Ldd2-AEe-r3W8yiJ"
    },
    {
        number: "09",
        name: "Biotechnology Principles and Processes",
        pdf: "resources/biology/Biotechnology_Principles_and_Processes_Notes.pdf",
        video: "https://www.youtube.com/embed/o334PgHRINA?si=giIzwnGI34-JHHv8"
    },
    {
        number: "10",
        name: "Biotechnology and Its Applications",
        pdf: "resources/biology/Biotechnoogy_and_its_Applications_Notes.pdf",
        video: "https://www.youtube.com/embed/_HpS_SyziO4?si=F4XTDR8TLq2YMMze"
    },
    {
        number: "11",
        name: "Organism and Population",
        pdf: "resources/biology/Organism_and_Population_Notes.pdf",
        video: "https://www.youtube.com/embed/mezR5ap9aPg?si=7PeI4G8L-_NCtz-E"
    },
    {
        number: "12",
        name: "Ecosystem",
        pdf: "resources/biology/Ecosystem_Notes.pdf",
        video: "https://www.youtube.com/embed/HXJFVRiT3Hc?si=4Lvux_6wuZqgyISt"
    },
    {
        number: "13",
        name: "Biodiversity and Conservation",
        pdf: "resources/biology/Biodiversity_and_Conservation_Notes.pdf",
        video: "https://www.youtube.com/embed/uvzFdsyZ_xo?si=xsxzVEWoZpsJlTK5"
    }
];


const subjectData = {
    physics: physicsChapters,
    chemistry: chemistryChapters,
    mathematics: mathematicsChapters,
    biology: biologyChapters
};

const subjectNames = {
    physics: "Physics",
    chemistry: "Chemistry",
    mathematics: "Mathematics",
    biology: "Biology"
};


function showSubject(subject) {
    const chapters = subjectData[subject];

    document.getElementById("app").innerHTML = `
        <div class="subject-page">

            <button class="back-btn" onclick="goHome()">
                ← Back
            </button>

            <header class="subject-header">
                <p>CLASS 12 • ${subjectNames[subject].toUpperCase()}</p>
                <h1>${subjectNames[subject]}</h1>
                <span>Choose a chapter to start studying</span>
            </header>

            <div class="chapter-list">

                ${chapters.map(chapter => `
                    <div class="chapter"
                         onclick="toggleChapter(this, '${chapter.number}', '${subject}')">

                        <span>${chapter.number}</span>
                        <h3>${chapter.name}</h3>

                    </div>
                `).join("")}

            </div>

        </div>
    `;
}


function showPhysics() {
    showSubject("physics");
}

function showChemistry() {
    showSubject("chemistry");
}

function showMathematics() {
    showSubject("mathematics");
}

function showBiology() {
    showSubject("biology");
}


function goHome() {
    location.reload();
}


function goBackToSubject(subject) {
    showSubject(subject);
}


function toggleChapter(chapterElement, chapterNumber, subject) {

    document.querySelectorAll(".chapter").forEach(item => {

        if (item !== chapterElement) {

            item.classList.remove("open");

            const options = item.querySelector(".chapter-options");

            if (options) {
                options.remove();
            }
        }
    });


    if (chapterElement.classList.contains("open")) {

        chapterElement.classList.remove("open");

        const options = chapterElement.querySelector(".chapter-options");

        if (options) {
            options.remove();
        }

        return;
    }


    chapterElement.classList.add("open");

    chapterElement.insertAdjacentHTML("beforeend", `
        <div class="chapter-options">

            <button onclick="event.stopPropagation(); openNotes('${subject}', '${chapterNumber}')">
                📄 Handwritten Notes
            </button>

            <button onclick="event.stopPropagation(); openVideo('${subject}', '${chapterNumber}')">
                🎥 Video Lecture
            </button>

        </div>
    `);
}


function createStudyNavigation(subject) {
    return `
        <div class="study-navigation">

            <button class="menu-btn" onclick="toggleSidebar()">
                ☰
            </button>

            <button class="nav-home-btn" onclick="goHome()">
                🏠 Home
            </button>

            <button class="nav-back-btn" onclick="goBackToSubject('${subject}')">
                ← Back
            </button>

        </div>
    `;
}


function createSidebar(subject, chapterNumber) {

    const chapters = subjectData[subject];

    return `
        <aside class="study-sidebar" id="studySidebar">

            <h2>${subjectNames[subject]}</h2>

            <div class="sidebar-chapters">

                ${chapters.map(item => `
                    <details
                        class="sidebar-chapter ${item.number === chapterNumber ? "active" : ""}"
                        onclick="closeOtherDropdowns(this)"
                    >

                        <summary>

                            <span>${item.number}</span>

                            <p>${item.name}</p>

                        </summary>

                        <div class="sidebar-options">

                            <button
                                onclick="event.stopPropagation(); openNotes('${subject}', '${item.number}')"
                            >
                                📄 Notes
                            </button>

                            <button
                                onclick="event.stopPropagation(); openVideo('${subject}', '${item.number}')"
                            >
                                🎥 Video
                            </button>

                        </div>

                    </details>
                `).join("")}

            </div>

        </aside>
    `;
}


function openNotes(subject, chapterNumber) {

    const chapters = subjectData[subject];

    const chapter = chapters.find(
        item => item.number === chapterNumber
    );

    if (!chapter) {
        return;
    }

    document.getElementById("app").innerHTML = `

        <div class="study-page">

            ${createStudyNavigation(subject)}

            ${createSidebar(subject, chapterNumber)}

            <main class="study-content notes-content">

                <div class="study-header">

                    <h1>${chapter.name}</h1>

                </div>

                <div class="pdf-container">

                    <iframe
                        src="${chapter.pdf}#navpanes=0"
                        title="${chapter.name} Notes"
                        width="100%"
                        height="700px">
                    </iframe>

                </div>

            </main>

        </div>
    `;
}


function openVideo(subject, chapterNumber) {

    const chapters = subjectData[subject];

    const chapter = chapters.find(
        item => item.number === chapterNumber
    );

    if (!chapter) {
        return;
    }

    document.getElementById("app").innerHTML = `

        <div class="study-page">

            ${createStudyNavigation(subject)}

            ${createSidebar(subject, chapterNumber)}

            <main class="study-content">

                <div class="study-header">

                    <h1>${chapter.name}</h1>

                    <button
                        class="open-notes-btn"
                        onclick="studyWithNotes('${subject}', '${chapter.number}')"
                    >
                        📖 Study with Notes
                    </button>

                </div>

                <div class="video-container">

                    <iframe
                        src="${chapter.video}"
                        title="${chapter.name} Lecture"
                        allowfullscreen>
                    </iframe>

                </div>

            </main>

        </div>
    `;
}


function studyWithNotes(subject, chapterNumber) {

    const chapters = subjectData[subject];

    const chapter = chapters.find(
        item => item.number === chapterNumber
    );

    if (!chapter) {
        return;
    }

    const studyPage = document.querySelector(".study-page");
    const sidebar = document.getElementById("studySidebar");
    const existingNotes = document.querySelector(".notes-panel");

    if (!studyPage || !sidebar) {
        return;
    }


    if (existingNotes) {

        existingNotes.remove();

        sidebar.classList.remove("collapsed");

        studyPage.classList.remove("notes-mode");

        return;
    }


    sidebar.classList.add("collapsed");

    studyPage.classList.add("notes-mode");


    studyPage.insertAdjacentHTML("beforeend", `

        <aside class="notes-panel">

            <div class="notes-panel-header">

                <h2>📄 Notes</h2>

                <span>${chapter.name}</span>

            </div>

            <div class="notes-panel-pdf">

                <iframe
                    src="${chapter.pdf}#navpanes=0"
                    title="${chapter.name} Notes"
                    width="100%"
                    height="100%">
                </iframe>

            </div>

        </aside>
    `);
}


function toggleSidebar() {

    const sidebar = document.getElementById("studySidebar");

    if (!sidebar) {
        return;
    }

    sidebar.classList.toggle("collapsed");
}


function closeOtherDropdowns(current) {

    document.querySelectorAll(".sidebar-chapter").forEach(item => {

        if (item !== current) {
            item.removeAttribute("open");
        }

    });
}