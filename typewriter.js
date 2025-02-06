const dev = document.getElementById("dev").innerHTML

 let texte =   "LEONIE GONDO DEVOLOPPEUSE WEB !"; // Le texte à afficher
        let i = 0;
        let vitesse = 100; // Vitesse de l'animation (en millisecondes)

        function typer() {
            if (i < texte.length) {
                document.getElementById("typewriter").innerHTML += texte.charAt(i);
                i++;
                setTimeout(typer, vitesse); // Affiche le caractère suivant après un délai
            }
        }

        typer()





