module.exports = {
  config: {
    name: "emoji_chats",
    version: "1.0",
    author: "Ghost",
    countDown: 5,
    role: 0,
    shortDescription: "Réponses aux emojis de chats",
    longDescription: "Réponses humoristiques et provocantes pour chaque emoji de chat",
    category: "reply",
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    const emoji = event.body.trim();

    const responses = {
      "😺": [
        "T’as l’air heureux, mais on sait tous que t’es un faux-cul.",
        "Un sourire aussi large ? T’as gagné au loto ou quoi ?",
        "Si t’es content, c’est sûrement que t’as encore rien compris.",
        "T’as vu ton reflet, c’est pour ça que tu souris comme un idiot ?",
        "T’es heureux comme un chat qui voit une souris, mais t’oublies que t’es la souris.",
        "Ton bonheur me donne des caries, merci.",
        "Tu sourirais moins si tu voyais ton compte en banque.",
        "Fais gaffe, sourire trop fort peut provoquer des crampes… ou des gifles.",
        "Un sourire forcé comme ça, on dirait un vendeur en fin de mois.",
        "T’es content ? Profite, ça va pas durer.",
        "Un chat souriant, c’est mignon. Toi ? Beaucoup moins.",
      ],
      "😸": [
        "T’as vu une blague ou c’est toi la blague ?",
        "Rire comme ça, c’est suspect. T’as fait une connerie, avoue.",
        "Un rire de chat ? On dirait que t’étouffes.",
        "Ton humour est aussi cassé que tes ambitions.",
        "Si t’étais vraiment drôle, les murs riraient. Mais non.",
        "Un chat qui rigole, c’est mignon. Toi ? T’as juste l’air idiot.",
        "Arrête de rire comme ça, tu vas réveiller les morts.",
        "T’es le genre de gars qui rigole à ses propres blagues nulles.",
        "Rire nerveux ? T’as peur qu’on découvre la vérité sur toi ?",
        "On dirait que tu viens de comprendre une blague vieille de trois ans.",
        "Ton rire est aussi crédible qu’un compliment de toi.",
      ],
      "😹": [
        "Pleurer de rire ? Ton existence est si pathétique que ça ?",
        "T’as vu ta tête ? C’est pour ça que tu pleures ?",
        "Arrête de pleurer, t’as pas de mouchoirs.",
        "T’es le genre de gars qui rigole jusqu’à ce qu’il se rappelle de ses problèmes.",
        "Un chat qui pleure de rire, c’est mignon. Toi, t’es juste gênant.",
        "On dirait que t’as vu une vidéo TikTok débile.",
        "Arrête de forcer, même ton rire sonne faux.",
        "Si tu rigoles trop, fais gaffe, t’auras plus d’énergie pour pleurer ce soir.",
        "T’as l’air heureux, mais t’es clairement en pleine crise existentielle.",
        "Rire et pleurer en même temps ? T’es le mélange parfait de désespoir et de ridicule.",
        "Un rire pareil, c’est à la limite de l’accident cardiaque.",
      ],
      "😻": [
        "T’es amoureux ? Qui aurait cru qu’on puisse aimer quelqu’un comme toi ?",
        "Un chat avec des cœurs, et toi, t’es juste le clown.",
        "Tu fais le mignon, mais t’es clairement en manque d’attention.",
        "Un crush ? Ça doit être quelqu’un de désespéré pour aimer un cas comme toi.",
        "Tes cœurs font mal aux yeux. Garde-les pour toi.",
        "T’as vu une pub pour de la bouffe ou quoi ?",
        "On dirait un chat devant un bol de croquettes.",
        "Amoureux ? Ça doit être triste pour l’autre personne.",
        "L’amour te va bien. Dommage que ce soit pas réciproque.",
        "T’es amoureux ? Profite, ça va pas durer.",
        "Un chat mignon, et toi t’es juste le parasite.",
      ],
      "😼": [
        "Oh, un sourire narquois. T’as volé quelque chose ?",
        "T’as l’air fier, mais de quoi exactement ?",
        "Arrête de te la péter, personne te prend au sérieux.",
        "Un sourire comme ça ? On dirait que tu prépares un coup foireux.",
        "Un chat sournois ? Non, t’es juste agaçant.",
        "Si t’es malin, alors le monde est foutu.",
        "T’as volé les croquettes ou quoi ?",
        "Ton sourire me donne envie de sortir les griffes.",
        "T’as l’air d’un escroc en pleine négociation.",
        "On dirait que tu prépares une connerie monumentale.",
        "Un regard comme ça, t’as sûrement fait une bêtise.",
      ],
      "😽": [
        "Un bisou ? Pas à moi, merci.",
        "T’es doux comme un chat… Mais aussi inutile qu’un coussin.",
        "Un bisou de toi, c’est comme un coup de griffes.",
        "T’es en manque d’affection ou quoi ?",
        "Un chat affectueux, et toi, juste un boulet.",
        "Garde tes bisous pour quelqu’un qui les mérite.",
        "Un bisou ? J’espère que t’as au moins du dentifrice.",
        "T’es aussi tendre qu’un hérisson.",
        "Tes bisous sont sûrement toxiques, garde-les pour toi.",
        "Un bisou mignon, mais venant de toi, ça fait peur.",
        "Un chat câlin, et toi, juste un parasite.",
      ],
      "🙀": [
        "Oh, t’as vu ton compte bancaire ?",
        "Un chat choqué, et toi t’as l’air encore plus paumé.",
        "T’es surpris ? La vie est dure, mon gars.",
        "Un regard comme ça, t’as dû voir ton reflet.",
        "T’as l’air de découvrir la misère de ta vie.",
        "Un chat qui hurle, mais toi, t’as juste l’air idiot.",
        "T’as vu tes notes d’examen ou quoi ?",
        "Un cri de désespoir ? Bienvenue dans la vraie vie.",
        "T’as l’air aussi choqué qu’un poisson hors de l’eau.",
        "Si t’es surpris, c’est sûrement que t’as encore rien compris.",
        "Un regard vide, à l’image de ta vie.",
      ],
      "😿": [
        "Un chat triste, mais toi, c’est juste ta nature.",
        "Oh, tu pleures ? Personne t’écoute, t’inquiète.",
        "Triste ? Attends que ça empire.",
        "Un regard déprimé, à l’image de ta vie.",
        "T’es en PLS émotionnelle ou quoi ?",
        "Arrête de pleurer, t’as déjà l’air ridicule.",
        "Un chat triste est mignon, toi, t’es juste pathétique.",
        "Pleure pas trop, tu vas ruiner le sol.",
        "La tristesse te va bien, c’est ton état naturel.",
        "T’as l’air d’un chiot abandonné… sauf que personne te veut.",
        "Un chat triste, et toi juste un échec.",
      ],
      "😾": [
        "T’as l’air énervé, mais t’es toujours aussi inutile.",
        "Un chat en colère, et toi t’es juste frustré.",
        "T’es fâché ? Va te calmer dans ton coin.",
        "La rage te va pas, tu restes ridicule.",
        "Un regard mauvais, mais toujours aussi insignifiant.",
        "T’es énervé comme un chat qui a perdu ses croquettes.",
        "Garde ta colère, personne s’en soucie.",
        "Un chat en colère est mignon, toi t’es juste chiant.",
        "T’as l’air furieux, mais personne te prend au sérieux.",
        "T’énerver comme ça, c’est fatigant à regarder.",
        "Un regard noir, mais t’es toujours aussi pathétique.",
      ],
    };

    if (responses[emoji]) {
      const randomResponse =
        responses[emoji][Math.floor(Math.random() * responses[emoji].length)];
      return message.reply(randomResponse);
    }
  },
};
