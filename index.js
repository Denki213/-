const { spawn } = require('child_process');
//const log = require('./logger/l'); 

// Fonction pour démarrer le projet
function startProject() {
    // Récupérer le port dynamique ou utiliser un port par défaut (3000)
    const port = process.env.PORT || 3000;

    // Commande pour démarrer le projet
    const projectProcess = spawn('node', ['ArYan.js'], {
        cwd: __dirname,
        stdio: 'inherit',
        shell: true
    });

    projectProcess.on('close', (code) => {
        if (code === 0) {
            log.info('Le projet a démarré avec succès');
        } else {
            log.info('Le projet a échoué à démarrer. Tentative de redémarrage...');
            startProject(); // Redémarrer le projet si un échec se produit
        }
    });

    console.log(`Le bot écoute sur le port ${port}`);
}

// Démarrer le projet
startProject();
