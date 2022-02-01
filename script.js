window.addEventListener("DOMContentLoaded", function () { //Chargement du DOM 

    // LE CURSOR
    // Voici le lien que j'ai utilisé pour reprendre le code afin de faire le curseur en rond : https://yogeshchauhan.com/how-to-create-a-circle-that-follows-a-cursor-using-javascript-and-css/
    var cursor = document.getElementById("cursor");
    document.body.addEventListener("mousemove", function (e) {
        cursor.style.left = e.clientX + "px",
            cursor.style.top = e.clientY + "px";
    });

    // BLOC PORTRAIT CHINOIS
    //On va ici charger ici le contenu du fichier JSON dans une variable data en utilisant fetch Javascipt
    fetch('analogies.json').then(function (response) {
        response.json().then(function (data) {

            function ajouteanal(data) {
                data.forEach(function (f) {
                    // On va créer une section avec tous les éléments contenus dans notre JSON 
                    var blocPrincipal = document.createElement("section");
                    //A cette section on rajoute dans le html les différentes div ou titre/texte voulues accompagné des variables contenues dans JSON qui se complèteront dans cette boucle 
                    blocPrincipal.innerHTML =
                        '<div style="background-image: url(\' ' + f.background + '\')"' + 'class="background">' +
                        '<h2 class="analogie">' +
                        'Si j’étais ' + f.analogie + ', je serais ' + '</h2>' +
                        '<h2 class="valeur">' + f.valeur + '</h2>' +
                        // Utilisation de la librairie aos pour réaliser un fade right
                        '<div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">' +
                        '<p class="justification justification' + f.num + '">' + f.justification + '</p>' +
                        '</div>'
                    '</div>'
                    //On rajoute notre section à notre div bloc-portrait-chinois
                    document.querySelector("div.bloc-portrait-chinois").append(blocPrincipal);
                });


            }
            ajouteanal(data)
        })
    })

    // LES MENTIONS LEGALES


    document.querySelector('.volet-invisible').addEventListener('click', function (click) {
        //Afficher le mot "click" dans la console quand on a cliqué sur l'élément ayant pour classe volet-invisible
        console.log("click")

        //L'élement ayant pour ID "volet" sera animé après 800ms sur une hauteur de 33em 
        document.getElementById('volet').animate([{
            height: '33em'
        }], {
            duration: 800
        })

        //On attribue ici la classe volet-visible en supprimant la classe volet-invisible
        //Ainsi les mentions légales pourront se dérouler 
        setTimeout(function () {
            document.querySelector('.volet-invisible').classList.add('volet-visible');
            document.querySelector('.volet-invisible').classList.remove('volet-invisible');
        }, 800);
    })

    // Pour refermer le volet des mentions légales : 

    document.getElementById('volet').addEventListener('click', function (click) {
        // afficher le mot « click » dans la console quand on a cliqué sur l’élément ayant pour classe volet-invisible
        console.log("click")

        // Animation au bout de 800 millisecondes après le clic
        document.querySelector('.volet-visible').animate([{
            height: '5em'
        }], {
            duration: 800
        })
        // Attribution de la classe volet-invisible en supprimant la classe volet-visible
        //La classe volet-invisible étant remise, la partie des mentions légales est caché 
        setTimeout(function () {
            document.getElementById('volet').classList.remove('volet-visible');
            document.getElementById('volet').classList.add('volet-invisible');
        }, 800);

    })



    // LE A PROPOS VISIBLE OU NON ( POP UP ) 

    // Initialisation de 3 variables 
    var BoutonApropos = document.querySelector('.ButtonDuhaut')
    var fenetreModale1 = document.getElementById('fenetreModale');
    var fermetureApropos1 = document.getElementById('fermetureApropos')

    // Au clique sur le bouton à propos on enlève la classe fenetreModale-invisible qui va permettre d'enlever le display none présent sur a fenetre pop up, notre fenetre à propos sera donc visible. Le bouton lui sera désormais invisible. 
    BoutonApropos.addEventListener('click', function (e) {
        fenetreModale1.classList.remove('fenetreModale-invisible');
        BoutonApropos.classList.add('fenetreModale-invisible')
    });

    // Au clique sur la croix à propos on ajoute une nouvelle classe à elle ci qui va permettre de refermer notre pop up en ajoutant le display none présent sur fenetreModale-invisible, le bouton lui sera à nouveau visible
    fermetureApropos1.addEventListener('click', function (e) {
        e.preventDefault()
        fenetreModale1.classList.add('fenetreModale-invisible');
        BoutonApropos.classList.remove('fenetreModale-invisible')
    });

    //
    window.addEventListener('mouseup', function (e) {
        if (e.target !== fenetreModale1 && e.target.parentNode !== fenetreModale1) {
            fenetreModale1.classList.add('fenetreModale-invisible');
            BoutonApropos.classList.remove('fenetreModale-invisible')
        }
    });


    // LE FORMULAIRE VISIBLE OU NON


    // Initialisation de 3 variables 
    var Boutoncreer1 = document.querySelector('.Boutoncreer')
    var formulaire1 = document.getElementById('form');
    var boutonFermer1 = document.getElementById('boutonFermer')

    //Au clique sur le bouton, la class 'bloc formulaire' est retiré, le formulaire apparait, le display none est retiré 
    Boutoncreer1.addEventListener('click', function (e) {
        formulaire1.classList.remove('blocFormulaire');
    });
    //Au clique sur la croix qui permet de fermer le formulaire, la class 'blocFormulaire' est ajouté, alors le display none est rajouté et on ne voit plus le formulaire qui disparait
    boutonFermer1.addEventListener('click', function (e) {
        e.preventDefault()
        formulaire1.classList.add('blocFormulaire');
    });

    //Ajout de l'analogie suggerée dans le HTML 

    // CHAMPS MODIF POUR MAIL Détection qu'une touche du clavier a été relâchée sur le champ analogie
    document.querySelector(".MailFormulaire").addEventListener('keyup', function (e) {
        //On affiche dans la console que le champs de mail a été modifié 
        console.log("mail modifié");
    })

    // CHAMPS MODIF POUR ANALOGIE Détection qu'une touche du clavier a été relâchée sur le champ analogie
    document.querySelector(".AnalogieFormulaire").addEventListener('keyup', function (e) {
        //On affiche dans la console que le champs d'analogie a été modifié 
        console.log("analogie modifié");
    })
    // CHAMPS MODIF POUR VALEURANALOGIE Détection qu'une touche du clavier a été relâchée sur le champ analogie
    document.querySelector(".ValeurAnalogieFormulaire").addEventListener('keyup', function (e) {
        //On affiche dans la console que le champs de valeur d'analogie a été modifié 
        console.log("Champ valeurAnalogie modifié");
    })
    //  CHAMPS MODIF POUR JUSTIFICATION Détection qu'une touche du clavier a été relâchée sur le champ analogie
    document.querySelector(".justificationFormulaire").addEventListener('keyup', function (e) {
        //On affiche dans la console que le champs de justification d'analogie a été modifié 
        console.log("justification modifié");
    })


    // NOUVELLE SECTION DANS LA FENTETRE MODALE

    //On initialise la variable 
    var BoutonENVOYERlien = document.getElementById('BoutonEnvoyer')

    //Au clique sur le bouton du formulaire 
    BoutonENVOYERlien.addEventListener('click', function (e) {

        formulaire1.classList.add('blocFormulaire')
        //on initialise des variables avec les valeurs présente dans les class qui seront remplis par l'utilisateur
        var image1 = "img/SVG/Suggestion.svg"
        var analogieFormulaire = document.querySelector(".AnalogieFormulaire").value
        var valeurAnalogieFormulaire = document.querySelector(".ValeurAnalogieFormulaire").value
        var justificationFormulaire = document.querySelector(".justificationFormulaire").value

        // SECTION EN PLUS 
        //On créer une nouvelle section 
        var blocPrincipal = document.createElement("section");
        //On rajoute cette section au HTML 
        blocPrincipal.innerHTML =
        //On rajoute à notre code les variables qu'on a précédemment initialisé 
            '<div style="background-image: url(\' ' + image1 + '\')"' + 'class="background">' +
            '<h2 class="analogie">' +
            'Si j’étais ' + analogieFormulaire + ', je serais ' + '</h2>' +
            '<h2 class="valeur">' + valeurAnalogieFormulaire + '</h2>' +
            '<div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">' +
            '<p class="justification">' + justificationFormulaire + '</p>' +
            '</div>'

        //On rajoute notre section à la div 'bloc-portrait-chinois'
        document.querySelector("div.bloc-portrait-chinois").append(blocPrincipal);
    });

    // API BASE DE DONNEES 

    //Au clique du bouton d'envoie du formulaire, dans les variables initualisés on va avoir les valeurs rentrer par l'utilisateur qu'on récupere grace aux différentes class 
    BoutonENVOYERlien.addEventListener('click', function (e) {

        //Initialisation des variables pour récuperer les valeurs grace à value. 
        var mailFormulaire = document.querySelector(".MailFormulaire").value
        var analogieFormulaire = document.querySelector(".AnalogieFormulaire").value
        var valeurAnalogieFormulaire = document.querySelector(".ValeurAnalogieFormulaire").value
        var justificationFormulaire = document.querySelector(".justificationFormulaire").value

        //Lien API de Phillipe Gambette qui est remplis par les variables contenant les valeurs rentrés par l'utilisateur
        var API_URL = 'https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=douangpraseuth&courriel=philippe.gambette@u-pem.fr&message=' + 'mail:' + mailFormulaire + 'Si jetais :' + analogieFormulaire + ' , je serais ' + valeurAnalogieFormulaire + ' parce que  : ' + justificationFormulaire;

        //Affichage de l'url de L'API dans la console 
        console.log(API_URL);

        // Envoie des données vers l'API 
        fetch(API_URL).then(function (response) {
            response.json().then(function (data) {
                console.log("Réponse reçue : ")
                console.log(data);
            })
        })

        console.log(data)


    });
});