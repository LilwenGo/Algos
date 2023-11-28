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

function ex5_8 () {
    let bignum = 0
    let num = 0
    let bigpos = 0
    let pos = 1
    do {
        num = prompt("Donnez un nombre") * 1
        if(num > bignum) {
            bignum = num
            bigpos = pos
        }
        if(num == 0 && 0 >= bignum) {
            bigpos = pos
        }
        pos++
    } while(num !== 0)
    alert(`Plus grand nombre: ${bignum} entré en ${bigpos}e position.`) 
}

function ex6_10 () {
    let arr1 = []
    let arr2 = []
    let arr3 = []
    for(let i = 0;i < (Math.round(Math.random() * 10));i++) {
        arr1.push(Math.round(Math.random() * 100))
        arr2.push(Math.round(Math.random() * 100))
        arr3.push(arr1[i] + arr2[i])
    }
    console.log(arr1, arr2, arr3)
}

function ex6_11 () {
    let arr1 = []
    let arr2 = []
    let shtroumf = 0
    for(let i = 0;i < (Math.round(Math.random() * 10));i++) {
        arr1.push(Math.round(Math.random() * 100))
    }
    for(let i = 0;i < (Math.round(Math.random() * 10));i++) {
        arr2.push(Math.round(Math.random() * 100))
    }
    for(let i = 0;i < arr2.length;i++) {
        for(let j = 0;j < arr1.length;j++) {
            shtroumf = shtroumf + (arr2[i] * arr1[j])
        }
    }
    console.log(arr1, arr2, shtroumf)
}

function ex6_12 () {
    let notes = []
    let sommenotes = 0
    let notessup = []
    for(let i = 0;i < 30;i++) {
        notes.push(Math.round(Math.random() * 20))
        sommenotes = sommenotes + notes[i]
    }
    let moyenne = Math.round(sommenotes/notes.length)
    for(let i = 0;i < notes.length;i++) {
        if(notes[i] > moyenne) {
            notessup.push(notes[i])
        }
    }
    console.log(`Notes: ${notes}, Moyenne: ${moyenne}, Notes supérieures à la moyenne: ${notessup}`)
}

function dé () {
    return Math.ceil(Math.random() * 6)
}

function testdé () {
    const a = dé()
    const b = dé()
    const c = dé()
    if(a + b + c == 7 && a * b * c == 8) {
        console.log(`${"" + a + b + c} a bien les nombres 4, 2 et 1`)
    } else {
        console.log(`${"" + a + b + c} n'a pas les nombres 4, 2 et 1`)
    }
}

function pgcd() {
    let a = prompt("Donnez un premier nombre")
    let b = prompt("Donnez un deuxième nombre")
    let arr1 = []
    let arr2 = []
    for(let i = 0;i <= a;i++) {
        if(a%i == 0) {
            arr1.push(i)
        }
    }
    for(let i = 0;i <= b;i++) {
        if(b%i == 0) {
            arr2.push(i)
        }
    }
    console.log(`${arr1}`)
    console.log(`${arr2}`)
}

function algoSS() {
    let a = parseInt(prompt("Donnez un premier nombre"))
    let b = parseInt(prompt("Donnez un deuxième nombre"))
    let c = 0
    do {
        if(a > b) {
            c = a - b
            a = b
            b = c
        } else {
            c = b - a
            a = b
            b = c
        }
        console.log(c)
    } while (c !== 0)
}

function algoEuclide() {
    let a = parseInt(prompt("Donnez un premier nombre"))
    let b = parseInt(prompt("Donnez un deuxième nombre"))
    // Soit a un premier nombre et b un deuxième plus petit que a
    let c = 0
    do {
        c = a%b
        // c deviens le reste de a : b
        a = b
        b = c
        console.log(c)
    } while (c !== 0 || c !== NaN)
    // Repeter tant que reste !null
}

function cesar() {
    let nombre = parseInt(prompt("Donnez un nombre"))
    let mot = ""
    do {
        mot = prompt("Donnez un mot")
    } while(mot.length == 0)
    let tableau = mot.split("")
    for(let i = 0;i < tableau.length;i++) {
        let ascii = mot.charCodeAt(i)
        if((ascii + (nombre%26)) > 90 && (ascii + (nombre%26)) < 97 || (ascii + (nombre%26)) > 122) {
            ascii -= 26
        }
        if ((ascii + (nombre%26)) < 65 || (ascii + (nombre%26)) > 122) {
            ascii = 65 - nombre%26
        }
        ascii += nombre%26
        tableau[i] = String.fromCharCode(ascii)
    }
    console.log(mot)
    console.log(tableau.join(""))
}

cesar()