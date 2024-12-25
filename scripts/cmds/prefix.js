module.exports = {
    config: {
        name: "prefix",
        version: "1.2",
        author: "XxGhostxx",
        countDown: 5,
        role: 0,
        shortDescription: "Affiche le préfixe du bot",
        longDescription: "Répond avec une réponse aléatoire pour montrer le préfixe du bot",
        category: "reply"
    },
    onStart: async function () {
        // Code à exécuter au démarrage du module, si nécessaire
    },
    onChat: async function ({ event, message, getLang }) {
        if (event.body && event.body.toLowerCase() === "prefix") {
            // Liste étendue des réponses possibles
            const responses = [
                "MON PREFIX EST [~]"
                
            ];

            // Sélectionner une réponse aléatoire
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            // Envoyer la réponse
            return message.reply(randomResponse);
        }
    }
};
