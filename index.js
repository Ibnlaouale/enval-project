
if (window.location.pathname.includes('facture.html')) {

    const tbodyFacture = document.querySelector('#tbodyFacture');
    // ========== CHARGEMENT DU TABLEAEU FACTURE =====================
    facture.forEach(element => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td >${element.numero.toString().padStart(4, '0')}</td>
                    <td >${element.laboratoire}</td>
                    <td >${element.date}</td>
                    <td class="voir"><a class="link-voir"><button class="button">voir</button> </a></td>`;
        tbodyFacture.appendChild(tr);
    });
    //================= la fonction compare pour le tri =====================
    const compare = function (ids, asc) {
        return function (row1, row2) {
            const tdValue = function (row, ids) {
                return row.children[ids].textContent;
            }
            const tri = function (v1, v2) {
                if (v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)) {
                    return v1 - v2;
                }
                else {
                    return v1.toString().localeCompare(v2);
                }
                return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
            };
            return tri(tdValue(asc ? row1 : row2, ids), tdValue(asc ? row2 : row1, ids));
        }
    }

    const allTh = document.querySelectorAll('th');
    const allTr = tbodyFacture.querySelectorAll('tr');
    // console.log(allTr, allTh);
    for (let i = 0; i < allTh.length; i++) {
        const th = allTh[i];
        th.addEventListener('click', () => {
            let lignes = Array.from(allTr).sort(compare(Array.from(allTh).indexOf(th), this.asc = !this.asc)); // les paramètres de la methode compare() (c'est-à-dire les  a et b) representent les différents tr du tableau lignes;
            lignes.forEach(tr => tbodyFacture.appendChild(tr));
            console.log(true);
            // const icon = th.querySelector("i");
            // icon.classList.toggle('fa-arrow-up-z-a');
            // icon.classList.toggle('fa-arrow-up-a-z');

        })

    }

    // ===============FILTRAGE SUR LE BOUTTON RECHERCHE ============================
    const inputSearch = document.querySelector('#inputSearch');
    const arrayFilter = [];

    inputSearch.addEventListener('search', () => {

        let cle = inputSearch.value;
        cle = cle.toUpperCase().split(''); // ici la cle recherchée est convertie en tableau et le tableau est constitué des caracteres qui constitue la clé tous en majuscule
        facture.forEach(element => {

            const elementLabo = element.laboratoire.toUpperCase().split('');

            function sousArry(arr1, arr2) {
                return arr1.every(element => arr2.includes(element));
            }

            const result = sousArry(cle, elementLabo);

            if (result) {
                arrayFilter.push(element);
            }

        })

        tbodyFacture.innerHTML = '';
        arrayFilter.forEach(element => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td >${element.numero.toString().padStart(4, '0')}</td>
                    <td >${element.laboratoire}</td>
                    <td >${element.date}</td>
                    <td class="voir"> <button class="button">voir</button> </td>`;
            tbodyFacture.appendChild(tr);
        });
        inputSearch.value = '';
    })
    // ============================= CHARGEMENT DE L'AVATAR DE L'UTILISATEUR CONNECTE ==============================================
    let userConnecte = JSON.parse(localStorage.getItem('connecte'));
    let avatar = document.querySelector('.profilNavbar');

    function loadAvatarNavBar() {
        avatar.src = userConnecte.picture;
    }
    loadAvatarNavBar()
// =================================================================================================================
const btnDisConnect = document.querySelector('#disConnect');

btnDisConnect.addEventListener('click', () =>{
    localStorage.removeItem('connecte');
})
// =================================================================================================================

    // ROUTE COMMANDE 
} else if (window.location.pathname.includes('commande.html')) {
    const tbodyCommande = document.querySelector('#tbodyCommande');
    // ========== CHARGEMENT DU TABLEAEU COMMANDE =====================

    commande.forEach(element => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td >${element.numero.toString().padStart(4, '0')}</td>
                    <td >${element.laboratoire}</td>
                    <td >${element.date}</td>
                    <td>${element.statut}</td>
                    <td class="voir"><a class="link-voir"><button class="button">voir</button> </a></td>`;
        tbodyCommande.appendChild(tr);
    })

    //================= la fonction compare pour le tri =====================
    const compare = function (ids, asc) {
        return function (row1, row2) {
            const tdValue = function (row, ids) {
                return row.children[ids].textContent;
            }
            const tri = function (v1, v2) {
                if (v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)) {
                    return v1 - v2;
                }
                else {
                    return v1.toString().localeCompare(v2);
                }
                return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
            };
            return tri(tdValue(asc ? row1 : row2, ids), tdValue(asc ? row2 : row1, ids));
        }
    }

    const allTh = document.querySelectorAll('th');
    const allTr = tbodyCommande.querySelectorAll('tr');
    // console.log(allTr, allTh);
    for (let i = 0; i < allTh.length; i++) {
        const th = allTh[i];
        th.addEventListener('click', () => {
            let lignes = Array.from(allTr).sort(compare(Array.from(allTh).indexOf(th), this.asc = !this.asc)); // les paramètres de la methode compare() (c'est-à-dire les  a et b) representent les différents tr du tableau lignes;
            lignes.forEach(tr => tbodyCommande.appendChild(tr));
            console.log(true);
            // const icon = th.querySelector("i");
            // icon.classList.toggle('fa-arrow-up-z-a');
            // icon.classList.toggle('fa-arrow-up-a-z');

        })

    }

    // ===============FILTRAGE SUR LE BOUTTON RECHERCHE ============================
    const inputSearch = document.querySelector('#inputSearch');
    const arrayFilter = [];

    inputSearch.addEventListener('search', () => {

        let cle = inputSearch.value;
        cle = cle.toUpperCase().split(''); // ici la cle recherchée est convertie en tableau et le tableau est constitué des caracteres qui constitue la clé tous en majuscule
        commande.forEach(element => {

            const elementLabo = element.laboratoire.toUpperCase().split('');

            function sousArry(arr1, arr2) {
                return arr1.every(element => arr2.includes(element));
            }

            const result = sousArry(cle, elementLabo);

            if (result) {
                arrayFilter.push(element);
            }

        })

        tbodyCommande.innerHTML = '';
        arrayFilter.forEach(element => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td >${element.numero.toString().padStart(4, '0')}</td>
            <td >${element.laboratoire}</td>
            <td >${element.date}</td>
            <td>${element.statut}</td>
            <td class="voir"> <button class="button">voir</button> </td>`;
            tbodyCommande.appendChild(tr);
        });
        inputSearch.value = '';
    })
    // ===========================================================================

    // ============================= CHARGEMENT DE L'AVATAR DE L'UTILISATEUR CONNECTE ==============================================
    let userConnecte = JSON.parse(localStorage.getItem('connecte'));
    let avatar = document.querySelector('.profilNavbar');
    function loadAvatarNavBar() {
        avatar.src = userConnecte.picture;
    }
    loadAvatarNavBar()

    // =================================================================================================================
    const btnDisConnect = document.querySelector('#disConnect');

    btnDisConnect.addEventListener('click', () =>{
        localStorage.removeItem('connecte');
    })
    // =================================================================================================================

    //  ROUTE SUIVI 
} else if (window.location.pathname.includes('suivi.html')) {
    const tbodysuivi = document.querySelector('#tbodysuivi');
    // ================// ========== CHARGEMENT DU TABLEAEU SUIVI =====================

    suivi.forEach((element, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td >${element.lot}</td>
                    <td >${element.etat}</td>
                    <td >${element.datePrevue}</td>
                    <td id="rapport" >${element.rapport}</td>
                    <td class="voir"><a data-id="${index}" class="link-voir"><button class="button">voir</button> </a></td>`;
        tbodysuivi.appendChild(tr);
    });

    //================= la fonction compare pour le tri =====================
    const compare = function (ids, asc) {
        return function (row1, row2) {
            const tdValue = function (row, ids) {
                return row.children[ids].textContent;
            }
            const tri = function (v1, v2) {
                if (v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)) {
                    return v1 - v2;
                }
                else {
                    return v1.toString().localeCompare(v2);
                }
                return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
            };
            return tri(tdValue(asc ? row1 : row2, ids), tdValue(asc ? row2 : row1, ids));
        }
    }
    // ===============RECUPERATION DES th ET MISE EN EVENNEMENT DE CHACUN ================
    const allTh = document.querySelectorAll('th');
    const allTr = tbodysuivi.querySelectorAll('tr');
    // console.log(allTr, allTh);
    for (let i = 0; i < allTh.length; i++) {
        const th = allTh[i];
        th.addEventListener('click', () => {
            let lignes = Array.from(allTr).sort(compare(Array.from(allTh).indexOf(th), this.asc = !this.asc)); // les paramètres de la methode compare() representent les différents tr du tableau lignes;
            lignes.forEach(tr => tbodysuivi.appendChild(tr));
            console.log(true);
            // const icon = th.querySelector("i");
            // icon.classList.toggle('fa-arrow-up-z-a');
            // icon.classList.toggle('fa-arrow-up-a-z');

        })

    }

    // ===============FILTRAGE SUR LE BOUTTON RECHERCHE ============================
    const inputSearch = document.querySelector('#inputSearch');
    const arrayFilter = [];

    inputSearch.addEventListener('search', () => {

        let cle = inputSearch.value;
        cle = cle.toUpperCase().split(''); // ici la cle recherchée est convertie en tableau et le tableau est constitué des caracteres qui constitue la clé tous en majuscule
        suivi.forEach(element => {

            const elementDispo = element.rapport.toUpperCase().split('');

            function sousArry(arr1, arr2) {
                return arr1.every(element => arr2.includes(element));
            }

            const result = sousArry(cle, elementDispo);

            if (result) {
                arrayFilter.push(element);
            }

        })
        console.log(arrayFilter);
        tbodysuivi.innerHTML = '';
        arrayFilter.forEach(element => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                    <td >${element.lot}</td>
                    <td >${element.etat}</td>
                    <td >${element.datePrevue}</td>
                    <td>${element.rapport}</td>
                    <td class="voir"> <button class="button">voir</button> </td>`;
            tbodysuivi.appendChild(tr);
        });
        inputSearch.value = '';
    })

    // ===================================BOUTTON VOIR LE DETAIL =============================================
    const lienVoir = document.querySelectorAll('.link-voir');

    lienVoir.forEach(button => {
        button.addEventListener('click', (e) => {
            // --------RECUPERATION DE L'OBJET A CHAQUE CLIC -----------------
            const object = suivi[e.target.parentElement.dataset.id];

            if (object.rapport === 'Disponible') {
                localStorage.setItem('objet', JSON.stringify(object)); // ENVOIE DE L'OBJET DANS LE localStorage afin de le recuperer dans la page suividtail.html

                button.href = 'suividetail.html';  // redirection vers la page suividetail

            }
        })
    })
    // ============================= CHARGEMENT DE L'AVATAR DE L'UTILISATEUR CONNECTE ==============================================
    let userConnecte = JSON.parse(localStorage.getItem('connecte'));
    let avatar = document.querySelector('.profilNavbar');
    function loadAvatarNavBar() {
        avatar.src = userConnecte.picture;
    }
    loadAvatarNavBar()

    // =================================================================================================================
    const btnDisConnect = document.querySelector('#disConnect');

    btnDisConnect.addEventListener('click', () =>{
        localStorage.removeItem('connecte');
    })
    // =================================================================================================================

//  ROUTE SUIVI DETAILLE 
} else if (window.location.pathname.includes('suividetail.html')) {
    let object = JSON.parse(localStorage.getItem('objet')) // RECUPERATION DE L'OBJET DE localStarage
    const nomLot = document.querySelector('#nomLot');
    const nomRapport = document.querySelector('#nomRapport');
    nomLot.textContent = object.lot;
    nomRapport.textContent = object.lot;

    // ============================= CHARGEMENT DE L'AVATAR DE L'UTILISATEUR CONNECTE ==================================
    let userConnecte = JSON.parse(localStorage.getItem('connecte'));
    let avatar = document.querySelector('.profilNavbar');
    function loadAvatarNavBar() {
        avatar.src = userConnecte.picture;
    }
    loadAvatarNavBar();

    // =================================================================================================================
    const btnDisConnect = document.querySelector('#disConnect');

    btnDisConnect.addEventListener('click', () =>{
        localStorage.removeItem('connecte');
    })
    // =================================================================================================================

    //  ROUTE INDEX 
} else if (window.location.pathname.includes('index.html')) {
    // ====================== CONNEXION ==============================
    const btnConnexion = document.querySelector('#btnConnexion');
    const inputIdentifant = document.querySelector('#identifiant');
    const inputPassword = document.querySelector('#password');
    const notification = document.querySelector('.notification');
    const munite = document.querySelector('#munite');
    const seconde = document.querySelector('#seconde');
    const timer = document.querySelector('.timer');
    let essai = 0;
    let tabUsers = JSON.parse(localStorage.getItem('user')); // RECUPERATUION DE TABLEAU DES UTLISATEURS DE localStorage
    btnConnexion.addEventListener('click', () => {
        if (inputIdentifant.value === "" || inputPassword.value === '') {
            notification.querySelector('p').textContent = 'Veuillez renseigner tous les champ';
            essai = 0;
            setTimeout(() => {
                location.reload();
            }, 3500);
        }
        const email = inputIdentifant.value.trim();
        const password = inputPassword.value.trim();
        let existUser = tabUsers.find(user => (user.nom === email && user.password === password))

        if (existUser) {
           window.location.href = 'dashbord.html';
            // btnConnexion.target = "_blank";
            localStorage.setItem('connecte', JSON.stringify(existUser)); // ENVOIE DE L'UTILISATEUR CONNECTE DANS LE localStrorage
        } else {
            essai++;
            notification.classList.remove('hidden');
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 3000);

            if (essai === 3) {
                notification.querySelector('h2').textContent = 'Compte bloqué';
                notification.querySelector('p').textContent = 'Oups!!! votre compte est temporairement bloqué';

                setTimeout(() => {
                    const question = prompt('Question secrete: quel est le surnom de Nueuve ?');
                    if (question === 'mouton') {
                        window.location.href = 'dashbord.html';
                    } else {
                        timer.classList.remove('hidden');
                        chrono(5);  // le timer
                        //====================== RECUPERATIN DE TOUTS LES INPUTS ET LES DESACTIVER ================================ 
                        const form = document.querySelector('.login-box');
                        const allInput = form.querySelectorAll('input');
                        allInput.forEach(input => input.disabled = true);
                        setTimeout(() => {
                            timer.classList.add('hidden');
                            allInput.forEach(input => input.disabled = false); // reactivation des inputs
                        }, 300000);
                    }
                }, 4000);
            }

        }
    })

   
    // ========================================== Fonctios =================================================
    // ------------------------------ fonction timer ---------------------------------
    let date = Date.now();

    function addMunites(date, mn) {
        date.setMinutes(date.getMinutes() + mn);
        return date;
    };

    function chrono(time) {

        let newDate = new Date();
        let temps = time * 60

        let interval = setInterval(() => {

            munite.textContent = `0${Math.floor(temps / 60)} :`;
            seconde.textContent = `${Math.floor(temps % 60)}`;

            temps = temps <= 0 ? 0 : --temps;


            if (temps === 0) {
                clearInterval(interval);
            }

        }, 1000);
        addMunites(newDate, time);
    }
    // ---------------------------------------------------------------------------
    
//  ROUTE PARAMETTRE 
} else if (window.location.pathname.includes('parametre.html')) {

    let notification = document.querySelector('.notification');
    let titreNotif = notification.querySelector('h2');
    let texteNotif = notification.querySelector('p');
    // console.log(notification, titre, texte);
    // ================MODIFICATION DE MOT DE PASSE DE L'ULISATEUR ===========================
    const modifierPass = document.querySelector('#btnPass');
    let userConnecte = JSON.parse(localStorage.getItem('connecte'));
    let tabUsers = JSON.parse(localStorage.getItem('user')); // RECUPERATUION DE TABLEAU DES UTLISATEURS DE localStorage

    modifierPass.addEventListener('click', () => {

        const divModifierPass = document.querySelector('#divModifierPass');
        divModifierPass.classList.remove('hidden');

        let inputPassEncien = document.querySelector('#inputPassEncien');
        let inputPassNouveau = document.querySelector('#inputPassNouveau');
        let inputPassConfirm = document.querySelector('#inputPassConfirm');
        const btnPassEdit = document.querySelector('#btnPassEdit');
        btnPassEdit.addEventListener('click', (e) => {
            e.preventDefault();
            let valPassEncien = inputPassEncien.value;
            let valPasssNouveau = inputPassNouveau.value;
            let valPassConfirm = inputPassConfirm.value;
            // let userConnecte = JSON.parse(localStorage.getItem('connecte'));
            //let tabUsers = JSON.parse(localStorage.getItem('user')); // RECUPERATUION DE TABLEAU DES UTLISATEURS DE localStorage
            user = tabUsers.find(ulitisaleur => ulitisaleur.password === userConnecte.password)
            let indexUser = tabUsers.indexOf(user); // RECHERCHE DE L'INDEX DE L'UTILISATEUR CONNECTE
            tabUsers.splice(indexUser, 1); // SUPPRESSION DE L'UTILISATEUR CONNECTE DE TABLEAU DES UTILISATEURS

            if (valPassEncien === '' || valPasssNouveau == '' || valPassConfirm === '') {

                titreNotif.textContent = 'Modification de mot de passe';
                texteNotif.textContent = 'Echec..!!! Veuillez renseigner tout les champs';
                notification.setAttribute('style', 'border:2px solid red');
                texteNotif.setAttribute('style', 'color: red');
                titreNotif.setAttribute('style', 'background-color: red');
                alertNotif();

            } else if (userConnecte.password === valPassEncien && valPasssNouveau === valPassConfirm) {
                userConnecte.password = valPasssNouveau;
                tabUsers.push(userConnecte);
                console.log(tabUsers);
                updateUserTabUser();

                titreNotif.textContent = 'Modification de mot de passe';
                texteNotif.textContent = 'mot de passe modifié avec succès';
                alertNotif();
                inputPassEncien.value = '';
                inputPassNouveau.value = '';
                inputPassConfirm.value = '';

            } else if (userConnecte.password !== valPassEncien) {

                titreNotif.textContent = 'Modification de mot de passe';
                texteNotif.textContent = 'Echec..!!! Encien mot de passe incorrect';
                notification.setAttribute('style', 'border:2px solid red');
                texteNotif.setAttribute('style', 'color: red');
                titreNotif.setAttribute('style', 'background-color: red');
                alertNotif();
            } else if (userConnecte.password !== valPassConfirm) {
                // alert('mot de passe confirmé incorrect');

                titreNotif.textContent = 'Modification de mot de passe';
                texteNotif.textContent = 'Echec..!!! Le nouveau et la confirmation doivent être identiques';
                notification.setAttribute('style', 'border:2px solid red');
                texteNotif.setAttribute('style', 'color: red');
                titreNotif.setAttribute('style', 'background-color: red');
                alertNotif();
            }

            divModifierPass.classList.add('hidden');
        })

    })

    // ==========SUPPRESSION DE COMPTE =================================

    const btnDelCompte = document.querySelector('#btnDel');

    btnDelCompte.addEventListener('click', () => {
        user = tabUsers.find(ulitisaleur => ulitisaleur.password === userConnecte.password)
        let indexUser = tabUsers.indexOf(user)// RECHERCHE DE L'INDEX DE L'UTILISATEUR CONNECTE
        tabUsers.splice(indexUser, 1);// SUPPRESSION DE L'UTILISATEUR CONNECTE DE TABLEAU DES UTILISATEURS
        localStorage.setItem('user', JSON.stringify(tabUsers));
        localStorage.removeItem('connecte');
        alert('compte supprimer avec succes');
        location.href = 'index.html'; // redirection de à la page index
    })

    // ==================================MODIFICATION DE PROFIL ======================================

    const inputNomEdit = document.querySelector('#inputNomEdit');
    const inputMailEdit = document.querySelector('#inputMailEdit');
    const inputBiblio = document.querySelector('#inputBiblio');
    const btnEditProfil = document.querySelector('#btnEditProfil');



    btnEditProfil.addEventListener('click', (e) => {
        e.preventDefault();
        let valInputNomEdit = inputNomEdit.value;
        let valInputMailEdit = inputMailEdit.value;
        let valInputBiblio = inputBiblio.value;
        if (valInputNomEdit === '' || inputMailEdit === '' || valInputBiblio === '') {
            alert('veuillez renseigner les champs afin de mettre les données à jour');
        } else {
            userConnecte.nom = valInputNomEdit;
            userConnecte.mail = valInputMailEdit;
            userConnecte.bibliographie = valInputBiblio;

            user = tabUsers.find(ulitisaleur => ulitisaleur.password === userConnecte.password)
            let indexUser = tabUsers.indexOf(user)// RECHERCHE DE L'INDEX DE L'UTILISATEUR CONNECTE
            tabUsers.splice(indexUser, 1);// SUPPRESSION DE L'UTILISATEUR CONNECTE DE TABLEAU DES UTILISATEURS
            tabUsers.push(userConnecte);
            alert('la mise à jour a été effectuée avec succès');
            updateUserTabUser();
        }


    })

    // ============================= CHARGEMENT DE L'AVATAR DE L'UTILISATEUR CONNECTE ==============================================
    /*  if(!localStorage.getItem('avatar')){
         localStorage.setItem('avatar', JSON.stringify('./avatar.jpg'));
     } */

    let avatar = document.querySelector('.profilNavbar');

    function loadAvatarNavBar() {
        avatar.src = userConnecte.picture;
    }
    loadAvatarNavBar()

    // ===========FONCTION QUI PERMET DE METTRE A JOUR L'AVATAR DU PROFIL CONNECTE =================

    function updateAvatar() {
        let url = ''
        if (!localStorage.getItem('avatar')) {
            localStorage.setItem('avatar', JSON.stringify('./avatar.jpg'));
        }
        url = JSON.parse(localStorage.getItem('avatar'));
        document.querySelector('#avatarNavbar').src = url;
    }
    // updateAvatar();
    // ===========================MODIFICATION DE L'AVATAR DE L'UTILISATEUR =================================

    const btnEditAvatar = document.querySelector('#editAvatar');
    const pictureProfil = document.querySelector('#pictureProfil');
    const inputFile = document.createElement('input');
    inputFile.type = 'file';
    inputFile.accept = 'image/*';

    btnEditAvatar.addEventListener('click', () => {
        inputFile.click();
    });

    // Événement de changement de fichier
    inputFile.addEventListener('change', () => {
        let file = inputFile.files[0]; // Accédez au fichier sélectionné

        if (file) {

            localStorage.setItem('avatar', JSON.stringify(URL.createObjectURL(file)));
            let selectedFile = JSON.parse(localStorage.getItem('avatar'))

            userConnecte.picture = selectedFile;
            pictureProfil.src = selectedFile;
            user = tabUsers.find(ulitisaleur => ulitisaleur.password === userConnecte.password)
            let indexUser = tabUsers.indexOf(user)// RECHERCHE DE L'INDEX DE L'UTILISATEUR CONNECTE
            tabUsers.splice(indexUser, 1);// SUPPRESSION DE L'UTILISATEUR CONNECTE DE TABLEAU DES UTILISATEURS
            tabUsers.push(userConnecte);
            updateUserTabUser();
            loadAvatarNavBar()

        }
    });
    pictureProfil.src = userConnecte.picture
    // ===============================================================================================================

    // ===========================================SUPPRESSION DE L'AVATAR DE L'ULISATEUR ============================
    const btnDelAvatar = document.querySelector('#delAvatar');

    btnDelAvatar.addEventListener('click', () => {
        userConnecte.picture = 'avatar.jpg'; // ATTRIBUTION DE L'AVATAR PAR DEFAUT A L'UTILISATEUR AVANT LA MISE A JOUR DE localStorage
        user = tabUsers.find(ulitisaleur => ulitisaleur.password === userConnecte.password);
        user = tabUsers.find(ulitisaleur => ulitisaleur.password === userConnecte.password);
        let indexUser = tabUsers.indexOf(user)// RECHERCHE DE L'INDEX DE L'UTILISATEUR CONNECTE
        tabUsers.splice(indexUser, 1);// SUPPRESSION DE L'UTILISATEUR CONNECTE DE TABLEAU DES UTILISATEURS
        tabUsers.push(userConnecte);
        updateUserTabUser();
        location.reload();
        // console.log(tabUsers);

    })
    // ==============================================================================================================

    // ===============FONCTION DE MISE A JOUR DE localstorage  après modificaton de mot de passe  ===================
    function updateUserTabUser() {
        localStorage.setItem('user', JSON.stringify(tabUsers)); //mise à jour de tableau des utilisateurs
        localStorage.setItem('connecte', JSON.stringify(userConnecte)) // mise à jours de l'utilisateur connecté
    }

    // ==========================fFONCTION ALERT DE NOTIFICATION ================
    function alertNotif() {
        notification.classList.remove('hidden');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 3000);
    }



    // =================================================================================================================
    const btnDisConnect = document.querySelector('#disConnect');

    btnDisConnect.addEventListener('click', () =>{
        localStorage.removeItem('connecte');
    })
    // =================================================================================================================

    //  ROUTE DASHBORD 
} else if (window.location.pathname.includes('dashbord.html')) {
    // ============================= CHARGEMENT DE L'AVATAR DE L'UTILISATEUR CONNECTE ==================================
    let userConnecte = JSON.parse(localStorage.getItem('connecte'));
    let avatar = document.querySelector('.profilNavbar');
    function loadAvatarNavBar() {
        avatar.src = userConnecte.picture;
    }
    loadAvatarNavBar()

    // =================================================================================================================
    const btnDisConnect = document.querySelector('#disConnect');

    btnDisConnect.addEventListener('click', () =>{
        localStorage.removeItem('connecte');
    })
    // =================================================================================================================

    //  ROUTE SERVICE CLIENT 
} else if (window.location.pathname.includes('serviceClient.html')) {
    // ============================= CHARGEMENT DE L'AVATAR DE L'UTILISATEUR CONNECTE ==============================================
    let userConnecte = JSON.parse(localStorage.getItem('connecte'));
    let avatar = document.querySelector('.profilNavbar');
    function loadAvatarNavBar() {
        avatar.src = userConnecte.picture;
    }
    loadAvatarNavBar()
}


    // =================================================================================================================
    const btnDisConnect = document.querySelector('#disConnect');

    btnDisConnect.addEventListener('click', () =>{
        localStorage.removeItem('connecte');
    })
    // =================================================================================================================



// ===================localstorage========================================
// ========= ENVOI DE TABLEAU DES UTILISATEURS DANS le localstorage =======
if (!localStorage.getItem('user')) {
    localStorage.setItem('user', JSON.stringify(users))
}
