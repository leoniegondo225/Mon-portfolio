const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuration du transporteur SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'leoniegondo@gmail.com', // Remplacez par votre adresse e-mail
    pass: 'Dieumerci', // Remplacez par votre mot de passe
  },
});

// Route pour afficher le formulaire de contact
app.get('/index.html', (req, res) => {
  res.send(`
    <form id="InscriptionSubmit" class="row mb-3">
                <div class="col-lg-6">
                  <div class="input-group flex-nowrap mb-4 shadow  rounded-5  ">
                    <span class="input-group-text border-end-0 bg-transparent border-0 rounded-start-5" id="addon-wrapping"><i class="fa fa-user fa-2x text-dark"></i></span>
                    <input type="text" class="form-control border-start-0  border-0 p-3 rounded-end-5 champs  " id="nom" placeholder="Entrez votre nom" aria-label="name" aria-describedby="addon-wrapping">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-group flex-nowrap mb-4 shadow  rounded-5  ">
                    <span class="input-group-text border-end-0 bg-transparent border-0 rounded-start-5" id="addon-wrapping"><i class="fa fa-user fa-2x text-dark"></i></span>
                    <input type="text" class="form-control border-start-0  border-0 p-3 rounded-end-5 champs  " id="prenom" placeholder="Entrez votre prenom" aria-label="name" aria-describedby="addon-wrapping">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="input-group flex-nowrap mb-4 shadow  rounded-5  ">
                    <span class="input-group-text border-end-0 bg-transparent border-0 rounded-start-5" id="addon-wrapping"><i class="fa fa-envelope fa-2x text-dark"></i></span>
                    <input type="email" class="form-control border-start-0  border-0 p-3 rounded-end-5 champs  " id="email" placeholder="Email adresse" aria-label="email" aria-describedby="addon-wrapping">
                  </div>
                </div>
                <div class="col-lg-12 mb-3">
                  <div class=" flex-nowrap ">
                    <textarea class="form-control flex-nowrap mb-4 shadow  rounded-5" rows="5" placeholder="Vos besoins" id="message"></textarea>
                  </div>
                </div>
                <div class="col-lg-12 ">
                  <button type="submit" id="submit" class="btn btn-warning btn-lg  text-white fw-bold rounded-2 p-2 m-2 shadow">Envoyer votre message</button>
                </div>
              </form>
  `);
});

// Route pour traiter l'envoi de l'e-mail
app.post('/send-email', (req, res) => {
  const { nom, prenom, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'leoniegondo@gmail.com', // Remplacez par votre adresse e-mail
    subject: `Nouveau message de ${name}`,
    text: `Nom: ${nom}\nNom: ${prenom}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Erreur lors de l\'envoi de l\'e-mail.');
    }
    res.send('Votre message a été envoyé avec succès.');
  });
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
