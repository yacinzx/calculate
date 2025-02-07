function calculerNotes() {
    let modules = [
        { id: 'algo', hasTp: true, hasTd: true },
        { id: 'alg', hasTp: false, hasTd: true },
        { id: 'anal', hasTp: false, hasTd: true },
        { id: 'strm', hasTp: false, hasTd: true },
        { id: 'mp', hasTp: false, hasTd: true },
        { id: 'me', hasTp: false, hasTd: false },
        { id: 'compta', hasTp: false, hasTd: true },
        { id: 'inte', hasTp: false, hasTd: true },
        { id: 'tee', hasTp: false, hasTd: false },
        { id: 'btq', hasTp: false, hasTd: false },
        { id: 'intd', hasTp: false, hasTd: false },
        { id: 'ints', hasTp: false, hasTd: false },
        { id: 'stat', hasTp: false, hasTd: false }
    ];

    let totalCoef = 0, totalMoyenne = 0;

    modules.forEach(module => {
        let exam = parseFloat(document.getElementById(`exam-${module.id}`).value) || 0;
        let coef = parseFloat(document.getElementById(`coef-${module.id}`).value) || 1;
        let noteModule;

        if (module.hasTd) {
            let td = parseFloat(document.getElementById(`td-${module.id}`).value) || 0;
            if (module.hasTp) {
                let tp = parseFloat(document.getElementById(`tp-${module.id}`).value) || 0;
                noteModule = (0.6 * exam + 0.2 * td + 0.2 * tp);
            } else {
                noteModule = (0.6 * exam + 0.4 * td);
            }
        } else {
            noteModule = exam;
        }

        let noteElement = document.getElementById(`note-${module.id}`);
        noteElement.innerText = noteModule.toFixed(2);

        // ✅ Change color based on noteModule
        noteElement.style.color = noteModule < 10 ? "#c22200" : "#6de701";

        totalCoef += coef;
        totalMoyenne += coef * noteModule;
    });

    let moyenneGenerale = totalMoyenne / totalCoef;
    let moyenneElement = document.getElementById("moyenne-generale");

    moyenneElement.innerText = moyenneGenerale.toFixed(2);

    // ✅ Change color based on moyenne
    moyenneElement.style.color = moyenneGenerale < 10 ? "red" : "green";
}

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    body.classList.toggle('light-mode');
    
    // Update icon
    if (body.classList.contains('light-mode')) {
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.querySelector('.theme-toggle i');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    }
});

// Add click event listener to theme toggle button
document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
