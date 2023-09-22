

if (window.location.pathname.includes('facture.html')){
    const tbodyFacture = document.querySelector('#tbodyFacture');
    // ========== CHARGEMENT DU TABLEAEU FACTURE =====================
facture.forEach(element => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td >${element.numero.toString().padStart(4, '0')}</td>
                    <td >${element.laboratoire}</td>
                    <td >${element.date}</td>
                    <td class="voir"> <button class="button">voir</button> </td>`;
    tbodyFacture.appendChild(tr);
});

}else if (window.location.pathname.includes('commande.html')){
    const tbodyCommande = document.querySelector('#tbodyCommande');
// ========== CHARGEMENT DU TABLEAEU COMMANDE =====================

commande.forEach(element => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td >${element.numero.toString().padStart(4, '0')}</td>
                    <td >${element.laboratoire}</td>
                    <td >${element.date}</td>
                    <td>${element.statut}</td>
                    <td class="voir"> <button class="button">voir</button> </td>`;
    tbodyCommande.appendChild(tr);
})

}else if (window.location.pathname.includes('suivi.html')){
    const tbodysuivi = document.querySelector('#tbodysuivi');
// ================// ========== CHARGEMENT DU TABLEAEU SUIVI =====================

suivi.forEach(element => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td >${element.lot}</td>
                    <td >${element.etat}</td>
                    <td >${element.datePrevue}</td>
                    <td>${element.rappot}</td>
                    <td class="voir"> <button class="button">voir</button> </td>`;
                    tbodysuivi.appendChild(tr);
});

}

// ========================================== Fonctios =================================================
