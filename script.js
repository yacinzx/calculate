function calculerNotes() {
    let modules = [
        { id: 'algo', coef: 5, hasTp: true, hasTd: true },
        { id: 'alg', coef: 3, hasTp: false, hasTd: true },
        { id: 'anal', coef: 5, hasTp: false, hasTd: true },
        { id: 'strm', coef: 3, hasTp:false, hasTd: true },
        { id: 'mp', coef: 2, hasTp: false, hasTd: true },
        { id: 'me', coef: 4, hasTp: false, hasTd: false },
        { id: 'compta', coef: 4, hasTp:false, hasTd: true },
        { id: 'inte', coef: 4, hasTp: false, hasTd: true },
        { id: 'tee', coef: 1, hasTp: false, hasTd: false },
        { id: 'btq', coef: 1, hasTp:false, hasTd: false },
        { id: 'intd', coef: 1, hasTp: false, hasTd: false },
        { id: 'ints', coef: 1, hasTp: false, hasTd: false }
    ];
    let totalCoef = 0, totalMoyenne = 0;
    
    modules.forEach(module => {
        let exam = parseFloat(document.getElementById(`exam-${module.id}`).value) || 0;
        let noteModule;
        
        if (module.hasTd) {
            let td = parseFloat(document.getElementById(`td-${module.id}`).value) || 0;
            noteModule = module.hasTp ? (0.6 * exam + 0.2 * td + 0.2 * (parseFloat(document.getElementById(`tp-${module.id}`).value) || 0)) : (0.6 * exam + 0.4 * td);
        } else {
            noteModule = exam;
        }
        
        document.getElementById(`note-${module.id}`).innerText = noteModule.toFixed(2);
        totalCoef += module.coef;
        totalMoyenne += module.coef * noteModule;
    });
    
    let moyenneGenerale = totalMoyenne / totalCoef;
    document.getElementById("moyenne-generale").innerText = moyenneGenerale.toFixed(2);
}