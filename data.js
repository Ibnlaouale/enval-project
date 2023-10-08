const facture = [
    
    {
        numero: 1,
        laboratoire: 'Enval',
        date: '10/03/2023',
    },

    {
        numero: 2,
        laboratoire: 'Biochimie',
        date: '10/03/2023',
    },
    {
        numero: 3,
        laboratoire: 'Biologie',
        date: '11/03/2023',
    },
    {
        numero: 4,
        laboratoire: 'Biologie',
        date: '12/03/2023',
    },
    {
        numero: 5,
        laboratoire: 'Enval',
        date: '12/03/2023',
    },
    {
        numero: 6,
        laboratoire: 'Biochimie',
        date: '12/03/2023',
    },
    {
        numero: 7,
        laboratoire: 'Enval',
        date: '13/03/2023',
    },
    {
        numero: 8,
        laboratoire: 'Géologie',
        date: '13/03/2023',
    },
    {
        numero: 9,
        laboratoire: 'Enval',
        date: '13/03/2023',
    }

]

const commande = [
    {
        numero: 1,
        laboratoire: 'Enval',
        date: '10/03/2023',
        statut: 'En cours'
    },

    {
        numero: 2,
        laboratoire: 'Codeloccol',
        date: '10/03/2023',
        statut: 'En cours'
    },

    {
        numero: 3,
        laboratoire: 'ANSI',
        date: '12/03/2023',
        statut: 'Terminé'
    },

    {
        numero: 4,
        laboratoire: 'CIPMEN',
        date: '12/03/2023',
        statut: 'En cours'
    },

    {
        numero: 5,
        laboratoire: 'ADU',
        date: '13/03/2023',
        statut: 'En cours'
    },

    {
        numero: 6,
        laboratoire: 'Codeloccol',
        date: '14/03/2023',
        statut: 'En cours'
    },

    {
        numero: 7,
        laboratoire: 'Enval',
        date: '14/03/2023',
        statut: 'En cours'
    },

    {
        numero: 8,
        laboratoire: 'ANSI',
        date: '16/03/2023',
        statut: 'En cours'
    },

    {
        numero: 1,
        laboratoire: 'ADU',
        date: '18/03/2023',
        statut: 'Terminé'
    }
]

const suivi = [
    {
        lot: 'TE202303001',
        etat: 'Reçu',
        datePrevue: '12/03/2023',
        rapport: 'Disponible'
    },

    {
        lot: 'E202302023',
        etat: 'Non Reçu',
        datePrevue: '12/03/2023',
        rapport: 'Non Disponible'
    },

    {
        lot: 'TE20230190',
        etat: 'Reçu',
        datePrevue: '14/03/2023',
        rapport: 'Non Disponible'
    },

    {
        lot: 'Carbonate',
        etat: 'Reçu',
        datePrevue: '14/03/2023',
        rapport: 'Disponible'
    },

    {
        lot: 'Chlorure',
        etat: 'Non Reçu',
        datePrevue: '15/03/2023',
        rapport: 'Non Disponible'
    },

    {
        lot: 'CO2 libre',
        etat: 'Reçu',
        datePrevue: '15/03/2023',
        rapport: 'Disponible'
    },

    {
        lot: 'Conductivité électrique',
        etat: 'Non Reçu',
        datePrevue: '15/03/2023',
        rapport: 'Non Disponible'
    },

    {
        lot: 'pH/Température',
        etat: 'Reçu',
        datePrevue: '16/03/2023',
        rapport: 'Disponible'
    },

    {
        lot: 'Couleur brute',
        etat: 'Reçu',
        datePrevue: '17/03/2023',
        rapport: 'Non Disponible'
    },

    {
        lot: 'Cyanure libre',
        etat: 'Reçu',
        datePrevue: '20/03/2023',
        rapport: 'Disponible'
    }
]

// ===================== TABLEAU D'UTILISATEURS =======================
const users = [
    {
        id : Date.now(),
        nom: 'test1',
        password: 'test1',
        picture: './avatar.jpg'
    },
    {
        id : Date.now(),
        nom: 'test2',
        password: 'test2',
        picture: './avatar.jpg'
    }
]