function ex3_2 () {
    const a = prompt("Donnez un premier nombre")
    const b = prompt("Donnez un deuxième nombre")
    if ((a < 0) && (b >= 0) || (b < 0) && (a >= 0)) {
        alert("Leur produit est négatif")
    } else if (a !== (null || undefined) && b !== (null || undefined)) {
        alert("Leur produit est positif")
    } else {

    }
}

function ex3_3 () {
    const nom1 = prompt("Donnez un premier nom")
    const nom2 = prompt("Donnez un deuxième nom")
    const nom3 = prompt("Donnez un dernier nom")
    if((nom1 < nom2) && (nom2 < nom3)) {
        alert("Les noms sont rangés dans l'ordre alphabétique")
    } else {
        alert("Les noms ne sont pas rangés dans l'ordre alphabétique")
    }
}

function ex3_6 () {
    const age = prompt("Donnez l'age d'un enfant")
    if(age >= 12) {
        alert("Cadet")
    } else if (age >= 10) {
        alert("Minime")
    } else if (age >= 8) {
        alert("Minime")
    } else if (age >= 6) {
        alert("Poussin")
    } else {
        alert("L'age doit être superieur à 6")
    }
}

function ex4_3 () {
    let heures = prompt("Veuillez entrer les heures")
    let minutes = prompt("Veuillez entrer les minutes")
    let secondes = prompt("Veuillez entrer les secondes")
    secondes++
    if(secondes == 60) {
        minutes++
        secondes = 0
        if(minutes == 60) {
            heures++
            minutes = 0
            if(heures == 24) {
                heures = 0
            }
        }
    }
    alert(`Il sera ${heures} heure(s) ${minutes} minute(s) ${secondes} seconde(s)`)
}

function ex4_4 () {
    const photos = prompt("Combien de photocopies ?")
    let prix = 0
    if(photos > 30) {
        prix += 1
        prix += 1.8
        prix += (photos - 30) * 0.08
    } else if (photos <= 30 && photos > 10) {
        prix += 1
        prix += (photos - 10) * 0.09
    } else if (photos <= 10) {
        prix += photos * 0.1
    }
    alert(`Facture : ${prix} E`)
}

function ex4_6 () {
    const cand1 = prompt("Score du candidat 1")
    const cand2 = prompt("Score du candidat 2")
    const cand3 = prompt("Score du candidat 3")
    const cand4 = prompt("Score du candidat 4")
    alert(`Scores : Candidat 1 = ${cand1}, Candidat 2 = ${cand2}, Candidat 3 = ${cand3}, Candidat 4 = ${cand4}`)
    if(cand1 > 50) {
        alert("Le candidat 1 est élu")
    } else if (cand1 < 12.5 || cand2 > 50 || cand3 > 50 || cand4 > 50) { 
        alert("Le candidat 1 est battu")
    } else if(cand1 > 12.5 && cand1 > cand2 && cand1 > cand3 && cand1 > cand4) {
        alert("Le candidat 1 est favorable")
    } else {
        alert("Le candidat 1 est défavorable")
    }
}

function ex4_8 () {
    const jour = prompt("Entrez un jour")
    const mois = prompt("Entrez un mois (nombre)")
    const année = prompt("Entrez une année")
    const longueurmois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if(année%4 == 0 && année%100 !== 0 || année%400 == 0) {
        longueurmois[1] = 29
    }
    if((jour <= longueurmois[mois - 1] && jour > 0) && (mois <= 12 && mois > 0) && année > 0) {
        alert(`La date entrée (${jour}/${mois}/${année}) est valide`)
    } else {
        alert(`La date entrée (${jour}/${mois}/${année}) n'est pas valide`)
    }
}

function ex5_2 () {
    let n = Math.floor(Math.random() * 20)
    let r = 0
    do {
        n = Math.floor(Math.random() * 20)
    } while(n < 10)
    while(r !== n) {
        r = prompt("Donnez un nombre") * 1
        if(r < 10) {
            alert('Plus Grand !')
        } else if(r > 20) {
            alert('Plus Petit !')
        }
    }
}

function ex5_4 () {
    let r = prompt("Donnez un nombre")
    console.log(`Table de ${r}`)
    for(let i = 1;i < 11;i++) {
        console.log(`${r} x ${i} = ${r * i}`)
    }
}

function ex5_6 () {
    let r = prompt("Donnez un nombre")
    let fact = 1
    for(let i = r;i > 0;i--) {
        fact *= i
    }
    alert(`Le resultat est ${fact}`)
}

ex5_6()