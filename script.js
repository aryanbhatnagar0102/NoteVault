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

function showPhysics() {
    document.getElementById("app").innerHTML = `
       <div class="subject-page">

         <button class = "back-btn" onclick="goHome()">
            ← Back
        </button>

        <header class="subject-header">
           <p>CLASS 12 • PHYSICS</p>
           <h1>Physics</h1>
           <span>Choose a chapter to start studying</span>
        </header>

        <div class="chapter-list">

           <div class = "chapter" onclick="toggleChapter(this)">
              <span>01</span>
              <h3>Electric Charges and Fields</h3>
           </div>

           <div class = "chapter" onclick="toggleChapter(this)">
              <span>02</span>
              <h3>Electrostatic Potential and Capacitance</h3>
           </div>

           <div class = "chapter" onclick="toggleChapter(this)">
              <span>03</span>
              <h3>Current Electricity</h3>
           </div>

           <div class = "chapter" onclick="toggleChapter(this)">
              <span>04</span>
              <h3>Moving Charges and Magnetism</h3>
           </div>

           <div class = "chapter" onclick="toggleChapter(this)">
              <span>05</span>
              <h3>Magnetism and Matter</h3>
           </div>

           <div class = "chapter" onclick="toggleChapter(this)">
              <span>06</span>
              <h3>Electromagnetic Induction</h3>
           </div>

           <div class = "chapter" onclick="toggleChapter(this)">
              <span>07</span>
              <h3>Alternating Current</h3>
           </div>

           <div class = "chapter" onclick="toggleChapter(this)">
              <span>08</span>
              <h3>Electromagnetic Waves</h3>
           </div>

           <div class = "chapter" onclick="toggleChapter(this)">
              <span>09</span>
              <h3>Ray Optics and Optical Instruments</h3>
           </div>

           <div class = "chapter" onclick="toggleChapter(this)">
              <span>10</span>
              <h3>Wave optics</h3>
           </div>

           <div class = "chapter" onclick="toggleChapter(this)">
              <span>11</span>
              <h3>Dual Nature of Radiation and Matter</h3>
           </div>

           <div class = "chapter" onclick="toggleChapter(this)">
              <span>12</span>
              <h3>Atoms</h3>
           </div>

           <div class = "chapter" onclick="toggleChapter(this)">
              <span>13</span>
              <h3>Nuclei</h3>
           </div>

           <div class = "chapter" onclick="toggleChapter(this)">
              <span>14</span>
              <h3>Semiconductor Electronics</h3>
           </div>

    `
}

function goHome() {
    location.reload();
}

function toggleChapter(chapter) {

    document.querySelectorAll(".chapter").forEach(item => {
        if(item !== chapter) {
            item.classList.remove("open");

            const options = item.querySelector(".chapter-options");

            if (options) {
                options.remove();
            }
        }
    });

    if (chapter.classList.contains("open")) {
        chapter.classList.remove("open");

        const options = chapter.querySelector(".chapter-options");

        if(options) {
            options.remove();
        }

        return;
    }

    chapter.classList.add("open");

    chapter.insertAdjacentHTML("beforeend", `
        <div class="chapter-options">

          <button onclick="openNotes()">
            📄 Handwritten Notes
          </button>

           <button onclick="openVideo()">
                🎥 Video Lecture
           </button>

        </div>
        `);
}

function openNotes() {
    document.getElementById("app").innerHTML = `
        <div class="notes-page">

            <button class="back-btn" onclick="showPhysics()">
                ← Back to Physics
            </button>

            <h1>Current Electricity</h1>

            <div class="pdf-container">
                <iframe
                    src="resources/physics/Current_Electricity_Notes.pdf"
                    width="100%"
                    height="700px">
                </iframe>
            </div>

        </div>
    `;
}

function openVideo() {
    document.getElementById("app").innerHTML = `

        <div class="study-page">

            <aside class="study-sidebar" id="studySidebar">

                <h2>⚡ Physics</h2>

                <div class="sidebar-chapter active">
                    <span>03</span>
                    <p>Current Electricity</p>
                </div>

                <div class="sidebar-chapter">
                    <span>01</span>
                    <p>Electric Charges and Fields</p>
                </div>

                <div class="sidebar-chapter">
                    <span>02</span>
                    <p>Electrostatic Potential</p>
                </div>

                <div class="sidebar-chapter">
                    <span>04</span>
                    <p>Moving Charges and Magnetism</p>
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
                    Current Electricity
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
                        src="https://www.youtube.com/embed/AnZ7YAAzZmM"
                        title="Current Electricity Lecture"
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

    sidebar.classLis.toggle("collapsed");
}
