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
})

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
                         onclick="toggleChapter(this, '${chapter.number}')">

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

function toggleChapter(chapterElement, chapterNumber) {

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

            <button onclick="openNotes('${chapterNumber}')">
                📄 Handwritten Notes
            </button>

            <button onclick="openVideo('${chapterNumber}')">
                🎥 Video Lecture
            </button>

        </div>
    `);
}

function openNotes(chapterNumber) {

    const chapter = physicsChapters.find(
        item => item.number === chapterNumber
    );

    document.getElementById("app").innerHTML = `

        <div class="study-page">

            <aside class="study-sidebar" id="studySidebar">

                <h2>⚡ Physics</h2>

                <div class="sidebar-chapters">

                    ${physicsChapters.map(item => `

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
                                    onclick="event.stopPropagation(); openNotes('${item.number}')"
                                >
                                    📄 Notes
                                </button>

                                <button
                                    onclick="event.stopPropagation(); openVideo('${item.number}')"
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

function openVideo(chapterNumber) {

    const chapter = physicsChapters.find(
        item => item.number === chapterNumber
    );

    document.getElementById("app").innerHTML = `

        <div class="study-page">

            <aside class="study-sidebar" id="studySidebar">

                <h2>⚡ Physics</h2>

                <div class="sidebar-chapters">

                    ${physicsChapters.map(item => `

                        <details
                           class="sidebar-chapter
                           ${item.number === chapterNumber ? "active" : ""}"
                           onclick="closeOtherDropdowns(this)"
                        >

                            <summary>

                                <span>${item.number}</span>

                                <p>${item.name}</p>

                            </summary>

                            <div class="sidebar-options">

                                <button
                                    onclick="openNotes('${item.number}')"
                                >
                                    📄 Notes
                                </button>

                                <button
                                    onclick="openVideo('${item.number}')"
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


                <div style="
                    width: 100%;
                    height: 550px;
                    background: black;
                    border: 2px solid #29251f;
                    border-radius: 10px;
                    overflow: hidden;
                ">

                    <iframe
                        src="${chapter.video}"
                        title="${chapter.name} Lecture"
                        style="
                            width: 100%;
                            height: 100%;
                            border: none;
                        "
                        allowfullscreen>
                    </iframe>

                </div>

            </div>

        </div>
    `;
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