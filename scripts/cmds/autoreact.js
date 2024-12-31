module.exports = {
    config: {
        name: "autoreact",
        version: "1.0",
        author: "Loid Butter",
        countDown: 5,
        role: 0,
        shortDescription: "Réagit automatiquement avec des emojis",
        longDescription: "Ajoute une réaction emoji en fonction des lettres du message.",
        category: "fun"
    },
    onStart: async function () {
        // Initialisation si nécessaire
    },
    alphabetEmotions: {
        "a": ["😊", "😁", "🤗"],
        "b": ["😎", "🤩", "😏"],
        "c": ["😜", "😝", "🤪"],
        "d": ["😠", "🤬", "😤"],
        "e": ["😃", "😂", "🤣"],
        "f": ["🥺", "😢", "😭"],
        "g": ["😇", "😎", "😍"],
        "h": ["🤔", "🧐", "😕"],
        "i": ["😢", "😔", "😭"],
        "j": ["😝", "😂", "😜"],
        "k": ["😳", "🥺", "😬"],
        "l": ["😂", "🤣", "😆"],
        "m": ["😋", "🤩", "💋"],
        "n": ["🤪", "😜", "😏"],
        "o": ["🥳", "🎉", "😎"],
        "p": ["🤩", "😲", "🤗"],
        "q": ["😱", "😨", "🥶"],
        "r": ["😤", "🤬", "😡"],
        "s": ["😈", "👹", "👿"],
        "t": ["🤗", "💖", "🫶"],
        "u": ["😜", "😉", "💋"],
        "v": ["🤐", "😶", "🤫"],
        "w": ["😤", "💪", "🥇"],
        "x": ["😑", "😬", "🙄"],
        "y": ["🙃", "😜", "😝"],
        "z": ["😶", "😐", "😌"]
    },
    onChat: async function ({ event, api }) {
        const message = event.body.toLowerCase();
        for (const letter in this.alphabetEmotions) {
            if (message.includes(letter)) {
                const emojis = this.alphabetEmotions[letter];
                const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                return api.setMessageReaction(randomEmoji, event.messageID);
            }
        }
    }
};
