document.getElementById("app").innerHTML = `
    <div class="home-page">

        <header class="hero">
            <p class="small-title">CLASS 12 • PCMB</p>

            <h1>NoteVault</h1>

            <p class="tagline">
                Your handwritten notes & video lectures,
                all in one place.
            </p>
        </header>

        <section class="subjects">

            <div class="subject-card physics">
                <div class="subject-icon">⚡</div>
                <h2>Physics</h2>
                <p>Notes & Lectures</p>
            </div>

            <div class="subject-card chemistry">
                <div class="subject-icon">🧪</div>
                <h2>Chemistry</h2>
                <p>Notes & Lectures</p>
            </div>

            <div class="subject-card mathematics">
                <div class="subject-icon">📐</div>
                <h2>Mathematics</h2>
                <p>Notes & Lectures</p>
            </div>

            <div class="subject-card biology">
                <div class="subject-icon">🧬</div>
                <h2>Biology</h2>
                <p>Notes & Lectures</p>
            </div>

        </section>

        <p class="footer-text">
            Pick a subject and start studying ✦
        </p>

    </div>
`;

const physicsCard = document.querySelector(".physics");

physicsCard.addEventListener("click", () => {
    showPhysics();
});

const chemistryCard = document.querySelector(".chemistry");

chemistryCard.addEventListener("click", () => {
    showChemistry();
});
const mathematicsCard = document.querySelector(".mathematics");

mathematicsCard.addEventListener("click", () => {
    showMathematics();
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
        video:"https://www.youtube.com/embed/Fz3YCSbrHqc?si=nlLYrV4Xd6P2JKH9"
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
        video:"https://www.youtube.com/embed/ZzSHpxjH6Kg?si=BDXPqFYXpzp4hqo6"
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
        pdf: "resources/maths/Probability_Notes",
        video: "https://www.youtube.com/embed/_YJr2t_1NTU?si=4d0nWBaRNzEWoxbs" 
    },
];

const subjectData = {
    physics: physicsChapters,
    chemistry: chemistryChapters,
    mathematics: mathematicsChapters,
};

const subjectNames = {
    physics: "Physics",
    chemistry: "Chemistry",
    mathematics: "Mathematics",
};

function showPhysics() {

    document.getElementById("app").innerHTML = `
        <div class="subject-page">

            <button class="back-btn" onclick="goHome()">
                ← Back
            </button>

            <header class="subject-header">
                <p>CLASS 12 • PHYSICS</p>
                <h1>Physics</h1>
                <span>Choose a chapter to start studying</span>
            </header>

            <div class="chapter-list">

                ${physicsChapters.map(chapter => `
                    <div class="chapter"
                         onclick="toggleChapter(this, '${chapter.number}', 'physics')">

                        <span>${chapter.number}</span>
                        <h3>${chapter.name}</h3>

                    </div>
                `).join("")}

            </div>

        </div>
    `;
}

function showChemistry() {

    document.getElementById("app").innerHTML = `
        <div class="subject-page">

            <button class="back-btn" onclick="goHome()">
                ← Back
            </button>

            <header class="subject-header">
                <p>CLASS 12 • CHEMISTRY</p>
                <h1>Chemistry</h1>
                <span>Choose a chapter to start studying</span>
            </header>

            <div class="chapter-list">

                ${chemistryChapters.map(chapter => `
                    <div class="chapter"
                         onclick="toggleChapter(this, '${chapter.number}', 'chemistry')">

                        <span>${chapter.number}</span>
                        <h3>${chapter.name}</h3>

                    </div>
                `).join("")}

            </div>

        </div>
    `;
}

function showMathematics() {

    document.getElementById("app").innerHTML = `
        <div class="subject-page">

            <button class="back-btn" onclick="goHome()">
                ← Back
            </button>

            <header class="subject-header">
                <p>CLASS 12 • MATHEMATICS</p>
                <h1>Mathematics</h1>
                <span>Choose a chapter to start studying</span>
            </header>

            <div class="chapter-list">

                ${mathematicsChapters.map(chapter => `
                    <div class="chapter"
                         onclick="toggleChapter(this, '${chapter.number}', 'mathematics')">

                        <span>${chapter.number}</span>
                        <h3>${chapter.name}</h3>

                    </div>
                `).join("")}

            </div>

        </div>
    `;
}

function goHome() {
    location.reload();
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

            <button onclick="openNotes('${subject}', '${chapterNumber}')">
                📄 Handwritten Notes
            </button>

            <button onclick="openVideo('${subject}', '${chapterNumber}')">
                🎥 Video Lecture
            </button>

        </div>
    `);
}

function openNotes(subject, chapterNumber) {

    const chapters = subjectData[subject];

    const chapter = chapters.find(
        item => item.number === chapterNumber
    );

    document.getElementById("app").innerHTML = `

        <div class="study-page">

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

            <button class="menu-btn" onclick="toggleSidebar()">
                ☰
            </button>

            <div style="
                flex: 1;
                min-width: 0;
                padding: 50px;
                background: #fffdf5;
            ">

                <h1 style="
                    font-family: 'Segoe Print', 'Comic Sans MS', cursive;
                    font-size: 42px;
                    margin-bottom: 30px;
                ">
                    ${chapter.name}
                </h1>

                <div class="pdf-container">

                    <iframe
                        src="${chapter.pdf}"
                        width="100%"
                        height="700px">
                    </iframe>

                </div>

            </div>

        </div>
    `;
}

function openVideo(subject, chapterNumber) {

    const chapters = subjectData[subject];

    const chapter = chapters.find(
        item => item.number === chapterNumber
    );

    document.getElementById("app").innerHTML = `

        <div class="study-page">

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

            <button class="menu-btn" onclick="toggleSidebar()">
                ☰
            </button>

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

    const studyPage = document.querySelector(".study-page");
    const sidebar = document.getElementById("studySidebar");
    const existingNotes = document.querySelector(".notes-panel");

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

    sidebar.classList.toggle("collapsed");
}

function toggleSidebarChapter(chapter) {

    document.querySelectorAll(".sidebar-chapter").forEach(item => {

        if (item !== chapter) {
            item.classList.remove("open");
        }

    });

    chapter.classList.toggle("open");
}

function closeOtherDropdowns(current) {

    document.querySelectorAll(".sidebar-chapter").forEach(item => {

        if (item !== current) {
            item.removeAttribute("open");
        }

    });
}