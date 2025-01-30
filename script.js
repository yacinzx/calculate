function calculerNotes() {
    let modules = [
        { id: 'algo', coef: 5, hasTp: true, hasTd: true },
        { id: 'alg', coef: 3, hasTp: false, hasTd: true },
        { id: 'anal', coef: 5, hasTp: false, hasTd: true },
        { id: 'strm', coef: 3, hasTp: false, hasTd: true },
        { id: 'mp', coef: 2, hasTp: false, hasTd: true },
        { id: 'me', coef: 4, hasTp: false, hasTd: false },
        { id: 'compta', coef: 4, hasTp: false, hasTd: true },
        { id: 'inte', coef: 4, hasTp: false, hasTd: true },
        { id: 'tee', coef: 1, hasTp: false, hasTd: false },
        { id: 'btq', coef: 1, hasTp: false, hasTd: false },
        { id: 'intd', coef: 1, hasTp: false, hasTd: false },
        { id: 'ints', coef: 1, hasTp: false, hasTd: false }
    ];

    let totalCoef = 0, totalMoyenne = 0;

    modules.forEach(module => {
        let exam = parseFloat(document.getElementById(`exam-${module.id}`).value) || 0;
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

        totalCoef += module.coef;
        totalMoyenne += module.coef * noteModule;
    });

    let moyenneGenerale = totalMoyenne / totalCoef;
    let moyenneElement = document.getElementById("moyenne-generale");

    moyenneElement.innerText = moyenneGenerale.toFixed(2);

    // ✅ Change color based on moyenne
    moyenneElement.style.color = moyenneGenerale < 10 ? "red" : "green";
}
