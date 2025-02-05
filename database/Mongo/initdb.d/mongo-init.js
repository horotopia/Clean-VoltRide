db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);

db.createUser({
  user: process.env.MONGO_USER,
  pwd: process.env.MONGO_PASSWORD,
  roles: [
    {
      role: "readWrite",
      db: process.env.MONGO_INITDB_DATABASE,
    },
  ],
});

db.createCollection("users");
db.users.createIndex({ "email": 1 }, { unique: true });
db.users.insertMany([
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b4f"),
    name: "LeGrizzly",
    email: "LeGrizzly@hotmail.fr",
    tel: '0102030405',
    password: "$2a$10$HdhL0Nwy2AQrAwyVxQ9HMuhpz5cgczdhrRPY4ePCh.gseXHniOYvS",
    role: "ROLE_ADMIN",
    isEmailVerified: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Horotopia",
    email: "guirado.leo@gmail.com",
    tel: '0102030405',
    password: "$2y$10$YQgt4OqsN4VgY67W.9xBkeGdEXBeeCRID8TBMjN2.vNbpL0IftGn2",
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b99"),
    name: "Arthur serenne",
    email: "arthur.serenne@gmail.com",
    tel: '0102030405',
    password: "$2a$10$Npo0D5N/jiazF4P2sU.yzO0EC.pVs./paGxrvZuRgtmbrYfW0z6g6",
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b51"),
    name: "Jane Doe",
    email: "fake2@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b52"),
    name: "Alice Smith",
    email: "alice.smith@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b53"),
    name: "Bob Johnson",
    email: "bob.johnson@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b70"),
    name: "Alice Smith",
    email: "alice@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b71"),
    name: "Bob Johnson",
    email: "bob@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b54"),
    name: "User 3",
    email: "user3@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b55"),
    name: "User 4",
    email: "user4@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b56"),
    name: "User 5",
    email: "user5@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b57"),
    name: "User 6",
    email: "user6@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b58"),
    name: "User 7",
    email: "user7@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b59"),
    name: "User 8",
    email: "user8@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b5a"),
    name: "User 9",
    email: "user9@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b5b"),
    name: "User 10",
    email: "user10@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b5c"),
    name: "User 11",
    email: "user11@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b5d"),
    name: "User 12",
    email: "user12@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b5e"),
    name: "User 13",
    email: "user13@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b5f"),
    name: "User 14",
    email: "user14@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b60"),
    name: "User 15",
    email: "user15@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b61"),
    name: "User 16",
    email: "user16@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b62"),
    name: "User 17",
    email: "user17@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b63"),
    name: "User 18",
    email: "user18@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b64"),
    name: "User 19",
    email: "user19@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b65"),
    name: "User 20",
    email: "user20@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b66"),
    name: "User 21",
    email: "user21@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b67"),
    name: "User 22",
    email: "user22@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b68"),
    name: "User 23",
    email: "user23@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date('2024-12-10T00:00:00Z'),
    updatedAt: new Date('2024-12-10T00:00:00Z'),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b69"),
    name: "User 24",
    email: "user24@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date('2024-12-10T00:00:00Z'),
    updatedAt: new Date('2024-12-10T00:00:00Z'),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b6a"),
    name: "User 25",
    email: "user25@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date('2024-12-10T00:00:00Z'),
    updatedAt: new Date('2024-12-10T00:00:00Z'),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b6b"),
    name: "User 26",
    email: "user26@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date('2024-12-10T00:00:00Z'),
    updatedAt: new Date('2024-12-10T00:00:00Z'),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b6c"),
    name: "User 27",
    email: "user27@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date('2024-12-10T00:00:00Z'),
    updatedAt: new Date('2024-12-10T00:00:00Z'),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b6d"),
    name: "User 28",
    email: "user28@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date('2024-12-10T00:00:00Z'),
    updatedAt: new Date('2024-12-10T00:00:00Z'),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b6e"),
    name: "User 29",
    email: "user29@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date('2024-12-10T00:00:00Z'),
    updatedAt: new Date('2024-12-10T00:00:00Z'),
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001f6b3b6f"),
    name: "User 30",
    email: "user30@mail.com",
    password: null,
    role: "ROLE_USER",
    createdAt: new Date('2024-12-10T00:00:00Z'),
    updatedAt: new Date('2024-12-10T00:00:00Z'),
  },
]);

db.createCollection("product");
db.product.insertMany([
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111111"),
    name: "Tiplouf",
    description: "Tiplouf est un Pokémon de type Eau qui ressemble à un petit pingouin. Fier de nature, il refuse de montrer ses faiblesses et garde toujours la tête haute, même dans la défaite. Son corps est parfaitement adapté à la nage, avec un plumage imperméable qui le protège des eaux glacées. Malgré sa petite taille, il est capable de briser la glace avec son bec robuste et peut plonger pendant plus de 10 minutes à la recherche de nourriture.",
    habitat: "Tiplouf vit principalement dans les régions froides, près des côtes glacées et des banquises. Il construit son nid dans des cavités rocheuses protégées du vent, souvent en colonies avec d'autres Tiplouf. Ces habitats lui permettent d'avoir un accès facile à l'océan pour la pêche tout en restant à l'abri des prédateurs. La nuit, les Tiplouf se regroupent en petits groupes serrés pour se tenir chaud.",
    habitude: "Tiplouf est un Pokémon très sociable qui vit en colonies. Il passe une grande partie de sa journée à pêcher en groupe, plongeant avec une précision remarquable pour attraper des petits poissons et des crustacés. Sur terre, il s'entraîne régulièrement à glisser sur son ventre et à perfectionner ses mouvements de nage. Très fier, il entretient méticuleusement son plumage et peut passer des heures à le lisser. Les Tiplouf organisent souvent des parades où ils marchent en formation, démontrant leur discipline naturelle. La nuit, ils dorment en groupes serrés, se relayant pour monter la garde.",
    type: "eau",
    evolutionLevel: 1,
    evolutionReference: "Prinplouf",
    weight: 5200,
    height: 40,
    age: 3,
    price: 45000,
    category: "pokémon",
    stock: 10
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111112"),
    name: "Fantominus",
    description: "Fantominus est un Pokémon de type Spectre et Poison, composé principalement de gaz toxique. Son corps gazeux lui permet de traverser les murs et de se rendre pratiquement invisible à volonté. Ses grands yeux lumineux sont souvent la seule partie visible de son corps dans l'obscurité. Capable de créer des illusions et d'utiliser des attaques psychiques, il est particulièrement redoutable la nuit. Sa capacité à manipuler les rêves et à créer des cauchemars en fait un Pokémon craint mais fascinant.",
    habitat: "Fantominus préfère les environnements sombres et abandonnés comme les vieilles maisons, les tours en ruines et les cimetières anciens. Il se cache souvent dans les recoins obscurs pendant la journée, devenant plus actif à la tombée de la nuit. Ces lieux lui permettent de se fondre facilement dans les ombres et d'utiliser l'écho pour amplifier ses capacités spectrales. Il crée souvent des territoires où la brume est permanente, créant une atmosphère mystérieuse.",
    habitude: "Fantominus est un Pokémon nocturne qui se nourrit principalement d'énergie négative et de peurs. Il passe ses journées à dormir dans des endroits sombres, se dissolvant partiellement dans l'air. La nuit, il devient très actif, cherchant à effrayer les autres créatures pour s'amuser et se nourrir de leur frayeur. Il est particulièrement joueur et aime créer des illusions complexes. Fantominus communique avec ses semblables par des signaux gazeux invisibles à l'œil nu et peut fusionner temporairement avec d'autres Fantominus pour augmenter sa puissance. Son sommeil est léger, et il reste toujours partiellement conscient de son environnement.",
    type: "spectre",
    evolutionLevel: 1,
    evolutionReference: "Spectrum",
    weight: 100,
    height: 130,
    age: 4,
    price: 65000,
    category: "pokémon",
    stock: 5
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111113"),
    name: "Pikachu",
    description: "Pikachu est un Pokémon de type Électrique emblématique, reconnaissable à ses joues rouges qui stockent l'électricité et sa queue en forme d'éclair. Capable de générer des décharges électriques puissantes, il peut paralyser des ennemis beaucoup plus grands que lui. Son corps agit comme un générateur naturel, accumulant l'énergie électrique qu'il peut libérer à volonté. Malgré sa puissance, Pikachu est connu pour sa nature affectueuse et sa loyauté envers son dresseur.",
    habitat: "Pikachu vit principalement dans les forêts denses et les zones boisées, où il peut facilement grimper aux arbres et se cacher dans la végétation. Il construit des nids dans des arbres creux ou des terriers abandonnés, qu'il tapisse de feuilles douces et de petites branches. Ces habitats lui permettent d'être à l'abri des prédateurs tout en ayant accès à ses aliments préférés. Les colonies de Pikachu créent souvent des réseaux complexes de nids interconnectés.",
    habitude: "Pikachu est un Pokémon diurne très actif qui passe une grande partie de sa journée à chercher des baies et à jouer avec ses congénères. Il utilise sa queue comme un détecteur pour repérer les dangers et communiquer avec les autres Pikachu. Très sociable, il forme des liens étroits avec son groupe et son dresseur. La nuit, il dort en groupe dans des nids surélevés, ses joues émettant parfois de petites étincelles pendant son sommeil. Son régime alimentaire se compose principalement de baies, mais il peut absorber l'électricité directement pour recharger son énergie.",
    type: "electrik",
    evolutionLevel: 1,
    evolutionReference: "Raichu",
    weight: 6000,
    height: 40,
    age: 3,
    price: 85000,
    category: "pokémon",
    stock: 3
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111114"),
    name: "Mewtwo",
    description: "Mewtwo est un Pokémon légendaire de type Psy, créé par clonage génétique. Doté d'une intelligence exceptionnelle et de pouvoirs psychiques immenses, il est considéré comme l'un des Pokémon les plus puissants jamais créés. Sa capacité à lire dans les pensées et à manipuler la matière par la force de son esprit en fait un être redoutable. Malgré sa création artificielle, Mewtwo possède une conscience profonde et une compréhension complexe de son existence.",
    habitat: "Mewtwo, en raison de sa nature solitaire et de sa puissance, choisit des lieux isolés et difficiles d'accès comme les grottes profondes ou les sommets montagneux. Il crée souvent des barrières psychiques autour de son territoire pour détecter les intrus et maintenir son isolement. Son repaire est généralement une structure complexe modifiée par ses pouvoirs psychiques, créant un environnement parfaitement adapté à ses besoins.",
    habitude: "Mewtwo est un être solitaire qui passe la majorité de son temps à méditer et à perfectionner ses pouvoirs psychiques. Il peut léviter pendant des heures, absorbé dans ses pensées et ses observations du monde qui l'entoure. Son intelligence supérieure lui permet de comprendre et d'analyser rapidement toute situation. Il ne dort que très peu, maintenant une vigilance constante grâce à ses pouvoirs psychiques. Bien que méfiant envers les humains, il peut développer un lien profond avec ceux qui gagnent sa confiance.",
    type: "psy",
    evolutionLevel: 1,
    evolutionReference: "Aucune",
    weight: 122000,
    height: 200,
    age: 999,
    price: 100000,
    category: "pokémon",
    stock: 1
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111115"),
    name: "Abra",
    description: "Abra est un Pokémon de type Psy connu pour son sommeil quasi permanent et ses extraordinaires capacités de téléportation. Doté d'un quotient intellectuel impressionnant, il peut sentir le danger même en dormant et se téléporter instantanément en lieu sûr. Son cerveau est constamment actif, même pendant son sommeil, consommant une grande quantité d'énergie qui nécessite jusqu'à 18 heures de sommeil par jour.",
    habitat: "Abra préfère les environnements calmes et isolés, souvent près des zones urbaines mais à l'écart de l'agitation. Il crée son refuge dans des endroits tranquilles comme des grottes peu profondes ou des structures abandonnées, où il peut dormir sans être dérangé. Son habitat est généralement marqué par une légère signature psychique qui permet à d'autres Abra de le repérer tout en restant invisible pour les autres espèces.",
    habitude: "Abra passe la majorité de son temps à dormir, se téléportant inconsciemment pour échapper au danger même pendant son sommeil. Les quelques heures où il est éveillé sont consacrées à la recherche de nourriture et au développement de ses pouvoirs psychiques. Il se nourrit principalement d'énergie psychique qu'il absorbe de son environnement. Très sensible aux ondes cérébrales des autres êtres vivants, il peut prédire les actions avant qu'elles ne se produisent.",
    type: "psy",
    evolutionLevel: 1,
    evolutionReference: "Kadabra",
    weight: 19500,
    height: 90,
    age: 5,
    price: 75000,
    category: "pokémon",
    stock: 4
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111116"),
    name: "Toudoudou",
    description: "Toudoudou est un adorable Pokémon de type Normal et Fée, reconnaissable à sa forme ronde et sa touffe de cheveux bouclée. Il possède une voix mélodieuse capable d'apaiser même les êtres les plus agités. Son corps léger lui permet de flotter légèrement dans l'air, porté par les courants d'air chaud. Bien que petit, il dégage une aura apaisante qui attire naturellement les autres Pokémon et les humains.",
    habitat: "Toudoudou vit dans des environnements doux et accueillants, souvent dans des prairies fleuries ou des jardins bien entretenus. Il construit de petits nids douillets dans les buissons ou les arbres bas, utilisant des matériaux moelleux comme des pétales de fleurs et du duvet. Ces habitats sont souvent parfumés naturellement par les fleurs environnantes, créant une atmosphère paisible qui correspond à sa nature.",
    habitude: "Toudoudou est un Pokémon très social qui passe ses journées à chanter et à jouer avec ses congénères. Il utilise sa voix mélodieuse pour communiquer et créer des liens avec les autres Pokémon. Très sensible aux émotions, il peut adapter sa mélodie pour réconforter ceux qui sont tristes ou célébrer les moments joyeux. Il se nourrit de fruits sucrés et de nectar de fleurs, ce qui influence la douceur de sa voix.",
    type: "fée",
    evolutionLevel: 1,
    evolutionReference: "Rondoudou",
    weight: 1000,
    height: 30,
    age: 2,
    price: 35000,
    category: "pokémon",
    stock: 15
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111117"),
    name: "Caninos",
    description: "Caninos est un Pokémon de type Feu ressemblant à un chiot loyal et courageux. Son pelage orange rayé de noir est remarquablement doux et chaud, capable de maintenir une température constante même dans des conditions extrêmes. Doté d'un excellent odorat et d'un sens aigu de la justice, il est souvent utilisé par les forces de police pour des missions de recherche et de sauvetage.",
    habitat: "Caninos s'adapte à divers environnements mais préfère les zones montagneuses et les prairies ouvertes où il peut courir librement. Il creuse des tanières confortables dans les sols secs, souvent près de sources de chaleur naturelle comme des sources chaudes ou des zones volcaniques inactives. Ces repaires sont soigneusement entretenus et servent de point de ralliement pour sa meute.",
    habitude: "Caninos est un Pokémon extrêmement loyal qui vit en meute hiérarchisée. Il patrouille régulièrement son territoire, utilisant son odorat développé pour détecter les intrus ou les dangers potentiels. Très protecteur, il n'hésite pas à affronter des adversaires plus grands que lui pour défendre ses amis. Son régime alimentaire est principalement carnivore, mais il complète son alimentation avec des baies riches en énergie.",
    type: "feu",
    evolutionLevel: 1,
    evolutionReference: "Arcanin",
    weight: 19000,
    height: 70,
    age: 4,
    price: 55000,
    category: "pokémon",
    stock: 8
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111118"),
    name: "Bulbizarre",
    description: "Bulbizarre est un Pokémon de type Plante et Poison unique, reconnaissable au bulbe végétal qui pousse sur son dos. Ce bulbe stocke l'énergie solaire nécessaire à sa croissance et à ses attaques. Calme et patient, il est considéré comme l'un des meilleurs Pokémon pour les dresseurs débutants en raison de sa nature docile et de sa capacité à créer des liens profonds avec son dresseur.",
    habitat: "Bulbizarre prospère dans les environnements riches en végétation comme les forêts claires et les prairies ensoleillées. Il crée son territoire près de points d'eau claire, où il peut s'hydrater et nourrir son bulbe. Son habitat idéal combine des zones ensoleillées pour la photosynthèse et des espaces ombragés pour se reposer pendant les heures les plus chaudes de la journée.",
    habitude: "Bulbizarre est un Pokémon diurne qui passe une grande partie de sa journée à absorber la lumière solaire pour alimenter son bulbe. Il est particulièrement actif le matin et en fin d'après-midi, évitant les chaleurs extrêmes. Social mais calme, il forme souvent des groupes avec d'autres de son espèce pour s'entraider et se protéger. Son régime est principalement herbivore, complété par des minéraux qu'il absorbe par ses racines.",
    type: "plante",
    evolutionLevel: 1,
    evolutionReference: "Herbizarre",
    weight: 6900,
    height: 70,
    age: 3,
    price: 45000,
    category: "pokémon",
    stock: 12
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111119"),
    name: "Charpenti",
    description: "Charpenti est un Pokémon de type Combat reconnaissable à sa petite taille mais à sa musculature impressionnante. Il porte toujours une poutre en bois qu'il utilise comme outil et arme d'entraînement. Passionné par la construction et le travail physique, il développe constamment sa force en soulevant des objets lourds et en s'entraînant avec sa poutre.",
    habitat: "Charpenti vit principalement dans des zones urbaines en construction ou près des chantiers, où il peut trouver facilement des matériaux pour s'entraîner. Il crée des espaces d'entraînement improvisés avec des poutres et des blocs de construction, transformant souvent les sites abandonnés en véritables salles de musculation naturelles.",
    habitude: "Charpenti est un travailleur acharné qui commence sa journée avant l'aube avec des exercices intensifs. Il passe son temps à perfectionner ses techniques de combat et à aider dans les travaux de construction. Très méthodique, il suit un programme d'entraînement strict qu'il adapte constamment pour devenir plus fort. Son régime est riche en protéines, et il mange souvent des baies énergétiques pour maintenir son niveau d'énergie.",
    type: "combat",
    evolutionLevel: 1,
    evolutionReference: "Ouvrifier",
    weight: 12500,
    height: 60,
    age: 3,
    price: 40000,
    category: "pokémon",
    stock: 14
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111120"),
    name: "Magikarp",
    description: "Magikarp est un Pokémon de type Eau souvent sous-estimé, connu pour son apparente faiblesse et son comportement maladroit. Capable uniquement de sauter et d'éclabousser, il semble inutile au premier abord. Cependant, sa persévérance et sa capacité à survivre dans presque n'importe quel environnement aquatique en font un Pokémon remarquablement résilient. Sa transformation en Léviator est l'une des plus spectaculaires du monde Pokémon.",
    habitat: "Magikarp peut survivre dans presque tous les environnements aquatiques, des rivières aux océans, même dans les eaux polluées. Il préfère les eaux calmes où il peut nager tranquillement près de la surface. On le trouve souvent en grands groupes dans les lacs et les étangs, où il se nourrit de petits organismes aquatiques.",
    habitude: "Magikarp passe ses journées à nager près de la surface, se nourrissant de plancton et de petits organismes. Malgré son apparente faiblesse, il peut sauter étonnamment haut, parfois plusieurs mètres au-dessus de l'eau. Cette capacité lui permet d'échapper aux prédateurs et de remonter les cascades. Il est particulièrement actif pendant la saison de reproduction, où les mâles rivalisent pour impressionner les femelles avec leurs sauts.",
    type: "eau",
    evolutionLevel: 1,
    evolutionReference: "Léviator",
    weight: 10000,
    height: 90,
    age: 2,
    price: 5000,
    category: "pokémon",
    stock: 30
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111121"),
    name: "Prinplouf",
    description: "Prinplouf est l'évolution de Tiplouf, un Pokémon de type Eau plus grand et plus fier que son prédécesseur. Ses nageoires se sont développées en lames tranchantes capables de briser la glace et de blesser ses adversaires. Son sens de la fierté s'est encore accentué, le rendant parfois difficile à dresser, mais sa loyauté envers son dresseur reste inébranlable.",
    habitat: "Prinplouf vit dans des régions encore plus froides que Tiplouf, s'aventurant plus loin dans les eaux glacées. Il établit son territoire sur des icebergs ou des côtes rocheuses isolées, où il peut plonger facilement pour chasser. Ces zones lui permettent de surveiller un vaste territoire et de repérer les intrus de loin.",
    habitude: "Plus solitaire que Tiplouf, Prinplouf passe de longues heures à perfectionner ses techniques de combat et de chasse. Il peut plonger à des profondeurs importantes pour attraper ses proies, utilisant ses ailes tranchantes pour fendre l'eau avec une précision mortelle. Très territorial, il défend farouchement son espace contre les autres Pokémon.",
    type: "eau",
    evolutionLevel: 2,
    evolutionReference: "Pingoléon",
    weight: 23000,
    height: 80,
    age: 5,
    price: 65000,
    category: "pokémon",
    stock: 6
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111134"),
    name: "Pingoléon",
    description: "Pingoléon est l'évolution finale de la lignée Tiplouf, un majestueux Pokémon de type Eau et Acier. Ses ailes se sont transformées en lames d'acier capables de trancher n'importe quoi, et sa prestance naturelle lui vaut le surnom de 'empereur des mers glacées'. Sa fierté n'a d'égale que sa puissance au combat.",
    habitat: "Pingoléon règne sur les mers polaires, établissant son territoire sur les plus hauts icebergs où il peut surveiller son domaine. Il crée des palais de glace complexes qu'il défend farouchement, et où seuls les plus fidèles membres de son groupe sont autorisés à entrer.",
    habitude: "Véritable empereur des glaces, Pingoléon dirige un groupe de Tiplouf et Prinplouf, les guidant et les protégeant. Il peut plonger à des profondeurs extrêmes pendant plus de 40 minutes, chassant les plus grandes proies. Son sens de l'honneur est légendaire, et il n'attaque jamais un adversaire plus faible sans provocation.",
    type: "eau",
    evolutionLevel: 3,
    evolutionReference: "Aucune",
    weight: 84500,
    height: 170,
    age: 8,
    price: 85000,
    category: "pokémon",
    stock: 3
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111135"),
    name: "Spectrum",
    description: "Spectrum est l'évolution de Fantominus, un Pokémon de type Spectre et Poison plus menaçant et plus puissant. Sa capacité à se fondre dans les ombres s'est perfectionnée, et il peut maintenant manipuler les cauchemars de ses victimes avec une précision effrayante. Son sourire malicieux cache une intelligence redoutable.",
    habitat: "Spectrum préfère les endroits encore plus lugubres que Fantominus, comme les manoirs abandonnés et les cimetières anciens. Il crée des zones d'influence où les ombres semblent plus profondes et où règne une atmosphère glaciale, marquant ainsi son territoire.",
    habitude: "Plus calculateur que Fantominus, Spectrum élabore des plans complexes pour effrayer ses victimes. Il se nourrit de leurs peurs mais préfère créer une terreur durable plutôt que des frayeurs passagères. Il peut maintenir son corps gazeux dans une forme plus stable, lui permettant d'interagir davantage avec le monde physique.",
    type: "spectre",
    evolutionLevel: 2,
    evolutionReference: "Ectoplasma",
    weight: 1,
    height: 160,
    age: 7,
    price: 80000,
    category: "pokémon",
    stock: 4
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111136"),
    name: "Ectoplasma",
    description: "Ectoplasma est l'évolution finale de la lignée Fantominus, un Pokémon de type Spectre et Poison redouté dans le monde entier. Sa maîtrise des arts spectraux est totale, lui permettant de projeter des malédictions puissantes et de se déplacer entre les dimensions. Son intelligence et sa cruauté en font un adversaire redoutable.",
    habitat: "Ectoplasma crée des zones de distorsion dimensionnelle où les lois de la physique semblent altérées. Il établit son repaire dans des lieux maudits ou des structures anciennes, où l'énergie négative est particulièrement concentrée.",
    habitude: "Maître des ombres, Ectoplasma passe son temps à perfectionner ses capacités psychiques et spectrales. Il peut absorber toute forme d'énergie négative et la transformer en puissance pure. Contrairement à ses évolutions précédentes, il préfère la confrontation directe, confiant dans sa capacité à dominer ses adversaires.",
    type: "spectre",
    evolutionLevel: 3,
    evolutionReference: "Aucune",
    weight: 40500,
    height: 150,
    age: 10,
    price: 95000,
    category: "pokémon",
    stock: 2
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111137"),
    name: "Raichu",
    description: "Raichu est l'évolution de Pikachu, un Pokémon de type Électrique plus puissant et plus mature. Ses capacités électriques se sont considérablement développées, lui permettant de produire jusqu'à 100 000 volts. Sa queue agit comme une prise de terre, lui permettant de décharger en toute sécurité l'excès d'électricité.",
    habitat: "Raichu préfère les zones ouvertes comme les plaines et les prairies, où il peut libérer son électricité sans danger. Il construit son nid en hauteur, souvent dans des arbres creux protégés des intempéries, qu'il équipe de matériaux isolants.",
    habitude: "Plus calme que Pikachu, Raichu passe son temps à méditer pour maintenir l'équilibre de son énergie électrique. Il chasse principalement la nuit, utilisant ses capacités électriques pour paralyser ses proies. Très protecteur envers sa famille, il n'hésite pas à utiliser sa puissance pour défendre les siens.",
    type: "electrik",
    evolutionLevel: 2,
    evolutionReference: "Aucune",
    weight: 30000,
    height: 80,
    age: 6,
    price: 90000,
    category: "pokémon",
    stock: 2
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111138"),
    name: "Kadabra",
    description: "Kadabra est l'évolution d'Abra, un Pokémon de type Psy dont les pouvoirs psychiques se sont considérablement développés. Il manipule une cuillère en métal qui amplifie ses capacités psychiques. Son QI a atteint 5000, lui permettant de résoudre des problèmes complexes en quelques secondes.",
    habitat: "Kadabra vit dans des zones isolées où il peut méditer sans être dérangé, souvent dans des grottes en altitude ou des structures abandonnées. Son environnement est marqué par une forte concentration d'énergie psychique qui peut perturber les appareils électroniques.",
    habitude: "Contrairement à Abra, Kadabra reste éveillé plus longtemps, consacrant son temps à l'étude et au développement de ses pouvoirs. Il communique télépathiquement avec ses congénères et peut prévoir les événements futurs avec une grande précision. Son sommeil est plus court mais plus profond.",
    type: "psy",
    evolutionLevel: 2,
    evolutionReference: "Alakazam",
    weight: 56500,
    height: 130,
    age: 7,
    price: 85000,
    category: "pokémon",
    stock: 3
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111139"),
    name: "Alakazam",
    description: "Alakazam est l'évolution finale de la lignée Abra, un Pokémon de type Psy d'une intelligence quasi divine. Capable de mémoriser tout ce qu'il a vécu depuis sa naissance, son QI dépasse 5000. Il manipule deux cuillères qui canalisent ses immenses pouvoirs psychiques.",
    habitat: "Alakazam crée des sanctuaires psychiques invisibles aux yeux normaux, souvent situés dans des dimensions parallèles qu'il peut atteindre grâce à ses pouvoirs. Ces lieux sont imprégnés d'une énergie psychique si pure qu'elle peut améliorer les capacités mentales de ceux qui y séjournent.",
    habitude: "En constante méditation, Alakazam passe son temps à explorer les mystères de l'univers avec son esprit surpuissant. Il peut prédire l'avenir avec une précision troublante et résoudre des équations complexes en une fraction de seconde. Il ne dort presque plus, son cerveau fonctionnant en permanence.",
    type: "psy",
    evolutionLevel: 3,
    evolutionReference: "Aucune",
    weight: 48000,
    height: 150,
    age: 10,
    price: 95000,
    category: "pokémon",
    stock: 2
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111140"),
    name: "Rondoudou",
    description: "Rondoudou est l'évolution de Toudoudou, un Pokémon de type Normal et Fée connu pour sa voix hypnotique. Sa capacité à endormir instantanément ses adversaires avec sa berceuse en fait un combattant redoutable malgré son apparence adorable.",
    habitat: "Rondoudou préfère les endroits calmes et paisibles comme les clairières fleuries ou les jardins tranquilles. Il crée des nids douillets dans les arbres creux ou les buissons touffus, qu'il décore de fleurs et de feuilles douces.",
    habitude: "Plus confiant que Toudoudou, Rondoudou n'hésite pas à utiliser sa voix comme une arme. Il s'entraîne régulièrement à chanter, perfectionnant sa berceuse pour la rendre plus efficace. Très sociable, il forme souvent des groupes qui chantent en chœur les soirs de pleine lune.",
    type: "fée",
    evolutionLevel: 2,
    evolutionReference: "Grodoudou",
    weight: 5500,
    height: 50,
    age: 4,
    price: 45000,
    category: "pokémon",
    stock: 10
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111141"),
    name: "Grodoudou",
    description: "Grodoudou est l'évolution finale de la lignée Toudoudou, un Pokémon de type Normal et Fée d'une puissance insoupçonnée. Sa voix s'est tellement développée qu'elle peut créer des ondes sonores destructrices. Malgré son apparence douce, c'est un combattant redoutable.",
    habitat: "Grodoudou établit son territoire dans des zones vallonnées où l'acoustique est particulièrement bonne. Il crée des nids confortables dans des grottes ou des structures naturelles qui amplifient sa voix, transformant ces lieux en véritables salles de concert.",
    habitude: "Maître dans l'art du chant, Grodoudou peut moduler sa voix pour produire différents effets : endormir, paralyser ou même attaquer. Il passe beaucoup de temps à enseigner le chant aux Toudoudou et Rondoudou de son groupe. Son régime alimentaire est principalement composé de fruits et de miel.",
    type: "fée",
    evolutionLevel: 3,
    evolutionReference: "Aucune",
    weight: 12000,
    height: 100,
    age: 6,
    price: 65000,
    category: "pokémon",
    stock: 5
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111142"),
    name: "Arcanin",
    description: "Arcanin est l'évolution de Caninos, un Pokémon de type Feu majestueux et puissant. Considéré comme légendaire dans de nombreuses cultures, il impressionne par sa vitesse et sa force. Son pelage est extraordinairement doux et résistant au feu, cachant une musculature puissante.",
    habitat: "Arcanin parcourt de vastes territoires, préférant les régions montagneuses et les plaines ouvertes. Il établit plusieurs tanières sur son territoire, souvent près de sources de chaleur naturelle comme des sources chaudes ou des zones volcaniques.",
    habitude: "Noble et fier, Arcanin est un protecteur né qui veille sur son territoire et sa meute avec un dévouement total. Il peut courir pendant des jours sans se fatiguer, atteignant des vitesses impressionnantes. Son sens de la justice et sa loyauté en font un allié précieux des forces de l'ordre.",
    type: "feu",
    evolutionLevel: 2,
    evolutionReference: "Aucune",
    weight: 155000,
    height: 190,
    age: 8,
    price: 85000,
    category: "pokémon",
    stock: 4
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111143"),
    name: "Herbizarre",
    description: "Herbizarre est l'évolution de Bulbizarre, un Pokémon de type Plante et Poison dont le bulbe s'est transformé en bourgeon. Plus grand et plus fort que son prédécesseur, il peut utiliser les lianes de son bourgeon avec une précision accrue.",
    habitat: "Herbizarre préfère les forêts denses et humides où la lumière filtre à travers la canopée. Il crée des zones de repos près des points d'eau, où il peut absorber les nutriments nécessaires à la croissance de son bourgeon.",
    habitude: "Plus actif que Bulbizarre, Herbizarre passe beaucoup de temps à chercher les meilleurs endroits pour absorber la lumière solaire. Il utilise ses lianes pour se déplacer dans les arbres et attraper sa nourriture. Le bourgeon sur son dos dégage un parfum agréable lorsqu'il approche de l'évolution.",
    type: "plante",
    evolutionLevel: 2,
    evolutionReference: "Florizarre",
    weight: 13000,
    height: 100,
    age: 5,
    price: 65000,
    category: "pokémon",
    stock: 8
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111144"),
    name: "Florizarre",
    description: "Florizarre est l'évolution finale de la lignée Bulbizarre, un Pokémon de type Plante et Poison impressionnant. La fleur sur son dos a pleinement éclos, libérant un parfum apaisant qui calme les esprits combatifs. Sa force est comparable à celle d'un tank vivant.",
    habitat: "Florizarre vit dans des plaines fertiles où il peut absorber un maximum de lumière solaire. Il crée des jardins naturels autour de lui, sa présence favorisant la croissance des plantes. Son territoire est reconnaissable aux fleurs luxuriantes qui y poussent.",
    habitude: "Véritable gardien de la nature, Florizarre utilise ses pouvoirs pour maintenir l'équilibre de son écosystème. Il peut déclencher de courtes périodes de forte luminosité en utilisant sa fleur, créant des micro-climats favorables à la croissance des plantes. Très territorial, il protège farouchement les plus faibles.",
    type: "plante",
    evolutionLevel: 3,
    evolutionReference: "Aucune",
    weight: 100000,
    height: 200,
    age: 8,
    price: 85000,
    category: "pokémon",
    stock: 4
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111145"),
    name: "Ouvrifier",
    description: "Ouvrifier est l'évolution de Charpenti, un Pokémon de type Combat dont la force s'est considérablement développée. Il manie maintenant deux poutres en acier comme si elles ne pesaient rien. Son corps musclé est capable de soulever des charges encore plus importantes.",
    habitat: "Ouvrifier vit près des zones de construction et des chantiers importants, où il peut trouver du matériel pour s'entraîner. Il crée des zones d'entraînement complexes avec des obstacles et des poids, transformant son territoire en véritable salle de musculation.",
    habitude: "Encore plus discipliné que Charpenti, Ouvrifier suit un programme d'entraînement ultra-strict. Il aide souvent dans les travaux de construction, capable de soulever des charges que même les machines ont du mal à déplacer. Son régime alimentaire est extrêmement riche en protéines.",
    type: "combat",
    evolutionLevel: 2,
    evolutionReference: "Bétochef",
    weight: 40000,
    height: 120,
    age: 5,
    price: 60000,
    category: "pokémon",
    stock: 7
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111146"),
    name: "Bétochef",
    description: "Bétochef est l'évolution finale de la lignée Charpenti, un Pokémon de type Combat d'une force colossale. Son corps est devenu une véritable montagne de muscles, capable de soulever des immeubles entiers. Il manie des poutres en acier massif comme si c'était des baguettes.",
    habitat: "Bétochef établit son territoire dans des zones industrielles ou des carrières, où il peut trouver des matériaux suffisamment lourds pour s'entraîner. Il crée des complexes d'entraînement élaborés qui ressemblent à des chantiers de construction géants.",
    habitude: "Véritable maître du combat et de la construction, Bétochef partage son temps entre l'entraînement intensif et la supervision de grands projets de construction. Il peut soulever des charges impossibles pour les machines modernes. Son sens de la perfection le pousse à toujours chercher à se surpasser.",
    type: "combat",
    evolutionLevel: 3,
    evolutionReference: "Aucune",
    weight: 130000,
    height: 140,
    age: 8,
    price: 80000,
    category: "pokémon",
    stock: 3
  },
  {
    _id: ObjectId("60f4b6e1e9f0f4001b111147"),
    name: "Léviator",
    description: "Léviator est l'évolution de Magikarp, un Pokémon de type Eau et Vol terrifiant. Cette évolution spectaculaire transforme le faible Magikarp en une créature d'une puissance dévastatrice. Sa fureur est légendaire, capable de provoquer des tempêtes juste en agitant sa queue.",
    habitat: "Léviator règne sur les océans et les grands lacs, créant son territoire dans les eaux profondes. Il peut survivre aussi bien en eau douce qu'en eau salée, et préfère les zones où il peut facilement terroriser ses proies. Son apparition dans une zone provoque souvent la fuite de tous les autres Pokémon aquatiques.",
    habitude: "Contrairement à Magikarp, Léviator est extrêmement agressif et territorial. Il passe son temps à patrouiller son territoire, chassant tout intrus avec une violence démesurée. Sa colère peut être déclenchée par le moindre incident, provoquant des tempêtes qui peuvent durer plusieurs jours.",
    type: "eau",
    evolutionLevel: 2,
    evolutionReference: "Aucune",
    weight: 235000,
    height: 650,
    age: 10,
    price: 90000,
    category: "pokémon",
    stock: 2
  },
  {
    "_id": ObjectId("60f4b6e1e9f0f4001b111122"),
    "name": "Laisse Rétractable",
    "description": "Laisse rétractable de 5 mètres, idéale pour les promenades.",
    "habitat": "Extérieur, pour balades en parc ou en ville.",
    "habitude": "Facile à utiliser et adaptée pour tous les animaux domestiques.",
    "type": "Accessoire de promenade",
    "evolutionLevel": 0,
    "evolutionReference": "",
    "weight": 300,
    "height": 0.15,
    "age": 0,
    price: 2500,
    "category": "accessoire",
    "stock": 50
  },
  {
    "_id": ObjectId("60f4b6e1e9f0f4001b111123"),
    "name": "Panier Douillet",
    "description": "Panier en tissu moelleux pour le confort de votre animal.",
    "habitat": "Intérieur, idéal pour le salon ou la chambre.",
    "habitude": "Convient pour un sommeil paisible et confortable.",
    "type": "Lit pour animaux",
    "evolutionLevel": 0,
    "evolutionReference": "",
    "weight": 1200,
    "height": 0.3,
    "age": 0,
    price: 4500,
    "category": "accessoire",
    "stock": 20
  },
  {
    "_id": ObjectId("60f4b6e1e9f0f4001b111124"),
    "name": "Balle Interactive",
    "description": "Jouet qui libère des friandises pour stimuler l'activité de votre animal.",
    "habitat": "Intérieur et extérieur.",
    "habitude": "Parfait pour les jeux interactifs et l'entraînement.",
    "type": "Jouet pour animaux",
    "evolutionLevel": 0,
    "evolutionReference": "",
    "weight": 200,
    "height": 0.1,
    "age": 0,
    price: 1500,
    "category": "accessoire",
    "stock": 35
  },
  {
    "_id": ObjectId("60f4b6e1e9f0f4001b111125"),
    "name": "Gamelle Anti-Glouton",
    "description": "Gamelle conçue pour ralentir la prise de nourriture.",
    "habitat": "Intérieur, adaptée à tous les espaces.",
    "habitude": "Idéale pour réguler la digestion des animaux gourmands.",
    "type": "Accessoire de repas",
    "evolutionLevel": 0,
    "evolutionReference": "",
    "weight": 400,
    "height": 0.1,
    "age": 0,
    price: 2000,
    "category": "accessoire",
    "stock": 40
  },
  {
    "_id": ObjectId("60f4b6e1e9f0f4001b111126"),
    "name": "Arbre à jeu",
    "description": "Structure pour grimper, se cacher et se reposer.",
    "habitat": "Intérieur, pour espaces de toutes tailles.",
    "habitude": "Favorise l'activité physique et le repos.",
    "type": "Accessoire de jeu",
    "evolutionLevel": 0,
    "evolutionReference": "",
    "weight": 5000,
    "height": 1.5,
    "age": 0,
    price: 10000,
    "category": "accessoire",
    "stock": 15
  },
  {
    "_id": ObjectId("60f4b6e1e9f0f4001b111127"),
    "name": "Croquettes Premium 5kg",
    "description": "Croquettes riches en protéines et en nutriments.",
    "habitat": "Pour tous types d'animaux domestiques.",
    "habitude": "Repas équilibré pour maintenir la vitalité de votre animal.",
    "type": "Nourriture pour animaux",
    "evolutionLevel": 0,
    "evolutionReference": "",
    "weight": 5000,
    "height": 0.4,
    "age": 0,
    price: 8000,
    "category": "accessoire",
    "stock": 60
  },
  {
    "_id": ObjectId("60f4b6e1e9f0f4001b111128"),
    "name": "Pokéball",
    "description": "Pokéball pour transporter votre animal.",
    "habitat": "Idéal pour voyages et déplacements.",
    "habitude": "Assure la sécurité et le confort de l'animal.",
    "type": "Accessoire de transport",
    "evolutionLevel": 0,
    "evolutionReference": "",
    "weight": 1500,
    "height": 0.5,
    "age": 0,
    price: 6000,
    "category": "accessoire",
    "stock": 25
  },
  {
    "_id": ObjectId("60f4b6e1e9f0f4001b111129"),
    "name": "Fontaine à Eau Automatique",
    "description": "Fontaine pour garder l'eau fraîche et en mouvement.",
    "habitat": "Intérieur, pratique pour la maison.",
    "habitude": "Encourage les animaux à boire plus d'eau.",
    "type": "Accessoire d'hydratation",
    "evolutionLevel": 0,
    "evolutionReference": "",
    "weight": 2500,
    "height": 0.3,
    "age": 0,
    price: 7500,
    "category": "accessoire",
    "stock": 18
  },
  {
    "_id": ObjectId("60f4b6e1e9f0f4001b111130"),
    "name": "Griffoir en Sisal",
    "description": "Accessoire pour les griffes des chats, avec base stable.",
    "habitat": "Intérieur, adapté aux chats actifs.",
    "habitude": "Aide à protéger les meubles et à entretenir les griffes.",
    "type": "Accessoire pour chats",
    "evolutionLevel": 0,
    "evolutionReference": "",
    "weight": 1200,
    "height": 0.8,
    "age": 0,
    price: 3500,
    "category": "accessoire",
    "stock": 30
  },
  {
    "_id": ObjectId("60f4b6e1e9f0f4001b111131"),
    "name": "Jouet à Plumes",
    "description": "Jouet interactif pour éveiller l'instinct de chasse des chats.",
    "habitat": "Intérieur, idéal pour les séances de jeu.",
    "habitude": "Stimule l'activité physique et mentale.",
    "type": "Jouet pour chats",
    "evolutionLevel": 0,
    "evolutionReference": "",
    "weight": 150,
    "height": 0.3,
    "age": 0,
    price: 1200,
    "category": "accessoire",
    "stock": 45
  },
  {
    "_id": ObjectId("60f4b6e1e9f0f4001b111132"),
    "name": "Superball",
    "description": "Superball pour transporter votre animal.",
    "habitat": "Idéal pour voyages et déplacements.",
    "habitude": "Assure la sécurité et le confort de l'animal.",
    "type": "Accessoire de transport",
    "evolutionLevel": 0,
    "evolutionReference": "",
    "weight": 1500,
    "height": 0.5,
    "age": 0,
    price: 16000,
    "category": "accessoire",
    "stock": 25
  },
  {
    "_id": ObjectId("60f4b6e1e9f0f4001b111133"),
    "name": "Hyperball",
    "description": "Hyperball pour transporter votre animal.",
    "habitat": "Idéal pour voyages et déplacements.",
    "habitude": "Assure la sécurité et le confort de l'animal.",
    "type": "Accessoire de transport",
    "evolutionLevel": 0,
    "evolutionReference": "",
    "weight": 1500,
    "height": 0.5,
    "age": 0,
    price: 26000,
    "category": "accessoire",
    "stock": 25
  },
]);

db.createCollection("address");
db.address.insertMany([
  {
    street: "1 rue de la paix",
    city: "Paris",
    postalCode: "75001",
    country: "France",
    userId: ObjectId("60f4b6e1e9f0f4001f6b3b4f"),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    street: "2 rue de la liberté",
    city: "Lyon",
    postalCode: "69000",
    country: "France",
    userId: ObjectId("677c182040bdca0c615e739c"),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    street: "3 rue de la fraternité",
    city: "Marseille",
    postalCode: "13000",
    country: "France",
    userId: ObjectId("60f4b6e1e9f0f4001f6b3b99"),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    street: "4 rue de l'égalité",
    city: "Bordeaux",
    postalCode: "33000",
    country: "France",
    userId: ObjectId("60f4b6e1e9f0f4001f6b3b52"),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    street: "5 rue de la justice",
    city: "Lille",
    postalCode: "59000",
    country: "France",
    userId: ObjectId("60f4b6e1e9f0f4001f6b3b53"),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]);

db.createCollection("orders");
db.orders.insertMany([
  {
    userId: ObjectId("60f4b6e1e9f0f4001f6b3b4f"),
    items: [
      {
        productId: ObjectId("60f4b6e1e9f0f4001b111111"),
        quantity: 2,
        price: 80000,
      },
      {
        productId: ObjectId("60f4b6e1e9f0f4001b111112"),
        quantity: 1,
        price: 45001,
      },
    ],
    totalAmount: 125001,
    status: 'completed',
    createdAt: new Date('2024-05-18T13:00:00Z'),
    updatedAt: new Date('2024-05-20T12:00:00Z')
  },
  {
    userId: ObjectId("60f4b6e1e9f0f4001f6b3b50"),
    items: [
      {
        productId: ObjectId("60f4b6e1e9f0f4001b111113"),
        quantity: 3,
        price: 126000,
      },
    ],
    totalAmount: 126000,
    status: "pending",
    createdAt: new Date('2024-05-18T13:00:00Z'),
    updatedAt: new Date('2024-05-20T12:00:00Z')
  },
  {
    userId: ObjectId("60f4b6e1e9f0f4001f6b3b53"),
    items: [
      {
        productId: ObjectId("60f4b6e1e9f0f4001b111111"),
        quantity: 1,
        price: 35001,
      },
      {
        productId: ObjectId("60f4b6e1e9f0f4001b111114"),
        quantity: 2,
        price: 70002,
      },
    ],
    totalAmount: 105003,
    status: "cancelled",
    createdAt: new Date('2024-05-18T13:00:00Z'),
    updatedAt: new Date('2024-05-20T12:00:00Z')
  },
  {
    userId: ObjectId("60f4b6e1e9f0f4001f6b3b51"),
    items: [
      {
        productId: ObjectId("60f4b6e1e9f0f4001b111116"),
        quantity: 4,
        price: 180004,
      },
    ],
    totalAmount: 180004,
    status: 'completed',
    createdAt: new Date('2024-05-18T13:00:00Z'),
    updatedAt: new Date('2024-05-20T12:00:00Z')
  },
  {
    userId: ObjectId("60f4b6e1e9f0f4001f6b3b4f"),
    items: [
      {
        productId: ObjectId("60f4b6e1e9f0f4001b111117"),
        quantity: 2,
        price: 80000,
      },
      {
        productId: ObjectId("60f4b6e1e9f0f4001b111118"),
        quantity: 1,
        price: 35001,
      },
    ],
    totalAmount: 115001,
    status: "pending",
    createdAt: new Date('2024-05-18T13:00:00Z'),
    updatedAt: new Date('2024-05-20T12:00:00Z')
  },
  {
    _id: ObjectId('677ba9272b2996c7e63840c1'),
    userId: ObjectId('677ba5466d3761f898e9496a'),
    items: [
      {
        productId: ObjectId('60f4b6e1e9f0f4001b111111'),
        quantity: 2,
        price: 40000,
        _id: ObjectId('677ba9272b2996c7e63840c2')
      }
    ],
    totalAmount: 80000,
    status: 'completed',
    createdAt: new Date('2024-01-10T10:00:00Z'),
    updatedAt: new Date('2024-01-12T12:00:00Z')
  },
  {
    _id: ObjectId('677ba9272b2996c7e63840c3'),
    userId: ObjectId('677ba5466d3761f898e9496b'),
    items: [
      {
        productId: ObjectId('60f4b6e1e9f0f4001b111112'),
        quantity: 1,
        price: 25000,
        _id: ObjectId('677ba9272b2996c7e63840c4')
      },
      {
        productId: ObjectId('60f4b6e1e9f0f4001b111113'),
        quantity: 3,
        price: 20000,
        _id: ObjectId('677ba9272b2996c7e63840c5')
      }
    ],
    totalAmount: 85000,
    status: 'pending',
    createdAt: new Date('2024-02-15T15:00:00Z'),
    updatedAt: new Date('2024-02-15T15:00:00Z')
  },
  {
    _id: ObjectId('677ba9272b2996c7e63840c6'),
    userId: ObjectId('677ba5466d3761f898e9496c'),
    items: [
      {
        productId: ObjectId('60f4b6e1e9f0f4001b111114'),
        quantity: 1,
        price: 120000,
        _id: ObjectId('677ba9272b2996c7e63840c7')
      }
    ],
    totalAmount: 120000,
    status: 'completed',
    createdAt: new Date('2024-03-05T11:00:00Z'),
    updatedAt: new Date('2024-03-07T14:00:00Z')
  },
  {
    _id: ObjectId('677ba9272b2996c7e63840c8'),
    userId: ObjectId('677ba5466d3761f898e9496d'),
    items: [
      {
        productId: ObjectId('60f4b6e1e9f0f4001b111115'),
        quantity: 2,
        price: 35000,
        _id: ObjectId('677ba9272b2996c7e63840c9')
      }
    ],
    totalAmount: 70000,
    status: 'pending',
    createdAt: new Date('2024-04-25T16:30:00Z'),
    updatedAt: new Date('2024-04-25T16:30:00Z')
  },
  {
    _id: ObjectId('677ba9272b2996c7e63840ca'),
    userId: ObjectId('677ba5466d3761f898e9496e'),
    items: [
      {
        productId: ObjectId('60f4b6e1e9f0f4001b111116'),
        quantity: 4,
        price: 15000,
        _id: ObjectId('677ba9272b2996c7e63840cb')
      }
    ],
    totalAmount: 60000,
    status: 'completed',
    createdAt: new Date('2024-05-18T13:00:00Z'),
    updatedAt: new Date('2024-05-20T12:00:00Z')
  },
  {
    _id: ObjectId('677ba9272b2996c7e63840cc'),
    userId: ObjectId('677ba5466d3761f898e9496f'),
    items: [
      {
        productId: ObjectId('60f4b6e1e9f0f4001b111117'),
        quantity: 2,
        price: 60000,
        _id: ObjectId('677ba9272b2996c7e63840cd')
      },
      {
        productId: ObjectId('60f4b6e1e9f0f4001b111118'),
        quantity: 1,
        price: 40000,
        _id: ObjectId('677ba9272b2996c7e63840ce')
      }
    ],
    totalAmount: 160000,
    status: 'cancelled',
    createdAt: new Date('2024-06-30T10:15:00Z'),
    updatedAt: new Date('2024-07-01T08:00:00Z')
  },
  {
    _id: ObjectId('677ba9272b2996c7e63840cf'),
    userId: ObjectId('677ba5466d3761f898e94960'),
    items: [
      {
        productId: ObjectId('60f4b6e1e9f0f4001b111119'),
        quantity: 1,
        price: 45000,
        _id: ObjectId('677ba9272b2996c7e63840d0')
      }
    ],
    totalAmount: 45000,
    status: 'pending',
    createdAt: new Date('2024-07-20T09:00:00Z'),
    updatedAt: new Date('2024-07-20T09:00:00Z')
  },
  {
    _id: ObjectId('677ba9272b2996c7e63840d1'),
    userId: ObjectId('677ba5466d3761f898e94961'),
    items: [
      {
        productId: ObjectId('60f4b6e1e9f0f4001b111120'),
        quantity: 3,
        price: 30000,
        _id: ObjectId('677ba9272b2996c7e63840d2')
      }
    ],
    totalAmount: 90000,
    status: 'completed',
    createdAt: new Date('2024-08-14T10:00:00Z'),
    updatedAt: new Date('2024-08-15T15:00:00Z')
  },
  {
    _id: ObjectId('677ba9272b2996c7e63840d4'),
    userId: ObjectId('677ba5466d3761f898e94961'),
    items: [
      {
        productId: ObjectId('60f4b6e1e9f0f4001b111120'),
        quantity: 3,
        price: 40000,
        _id: ObjectId('677ba9272b2996c7e63840d2')
      }
    ],
    totalAmount: 120000,
    status: 'completed',
    createdAt: new Date('2024-11-14T10:00:00Z'),
    updatedAt: new Date('2024-11-15T15:00:00Z')
  },
  {
    _id: ObjectId('677ba9272b2996c7e63840d5'),
    userId: ObjectId('677ba5466d3761f898e94961'),
    items: [
      {
        productId: ObjectId('60f4b6e1e9f0f4001b111120'),
        quantity: 3,
        price: 60000,
        _id: ObjectId('677ba9272b2996c7e63840d2')
      }
    ],
    totalAmount: 180000,
    status: 'completed',
    createdAt: new Date('2025-01-06T10:00:00Z'),
    updatedAt: new Date('2025-01-06T15:00:00Z')
  },
//   {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x7300ab38ca2bc7e2748574e5'),
//             quantity: 8,
//             price: 6835
//         },
//         {
//             productId: ObjectId('0x3a88c7b03ac06dc434f66a70'),
//             quantity: 10,
//             price: 28969
//         }
//     ],
//     totalAmount: 344370,
//     status: 'completed',
//     createdAt: "2024-06-26T00:00:00Z",
//     updatedAt: "2024-07-19T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xfbcf98b4e2730fae13dff474'),
//             quantity: 6,
//             price: 32446
//         }
//     ],
//     totalAmount: 194676,
//     status: 'completed',
//     createdAt: "2024-03-29T00:00:00Z",
//     updatedAt: "2024-04-13T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x7a0965775ad9fd45db374571'),
//             quantity: 1,
//             price: 24147
//         },
//         {
//             productId: ObjectId('0x192d75813e8ac624bf14dde1'),
//             quantity: 2,
//             price: 27442
//         },
//         {
//             productId: ObjectId('0x6dd7c26aea9a9526334ac21c'),
//             quantity: 4,
//             price: 23870
//         }
//     ],
//     totalAmount: 174511,
//     status: 'completed',
//     createdAt: "2024-11-19T00:00:00Z",
//     updatedAt: "2024-11-30T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x4e558cec5c88b3a1732dd6c0'),
//             quantity: 3,
//             price: 18223
//         }
//     ],
//     totalAmount: 54669,
//     status: 'completed',
//     createdAt: "2024-01-21T00:00:00Z",
//     updatedAt: "2024-02-07T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xe402d453d8dd9f9adee1738e'),
//             quantity: 10,
//             price: 17205
//         }
//     ],
//     totalAmount: 172050,
//     status: 'completed',
//     createdAt: "2024-09-21T00:00:00Z",
//     updatedAt: "2024-10-07T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x5661b114d3d7c3d2d6a78830'),
//             quantity: 2,
//             price: 42057
//         }
//     ],
//     totalAmount: 84114,
//     status: 'completed',
//     createdAt: "2024-03-13T00:00:00Z",
//     updatedAt: "2024-03-18T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xb83d34db903c4fb8b682039c'),
//             quantity: 10,
//             price: 28045
//         },
//         {
//             productId: ObjectId('0x14f738b62e15bac0c183a136'),
//             quantity: 9,
//             price: 10924
//         }
//     ],
//     totalAmount: 378766,
//     status: 'completed',
//     createdAt: "2024-05-19T00:00:00Z",
//     updatedAt: "2024-06-18T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x2b9945aa23853429d5111eae'),
//             quantity: 1,
//             price: 28556
//         }
//     ],
//     totalAmount: 28556,
//     status: 'completed',
//     createdAt: "2024-02-11T00:00:00Z",
//     updatedAt: "2024-02-25T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x166547034b382675a7ba0746'),
//             quantity: 4,
//             price: 49595
//         },
//         {
//             productId: ObjectId('0x2705a6b8c1328c367527cd62'),
//             quantity: 6,
//             price: 29689
//         },
//         {
//             productId: ObjectId('0xff3372f6546290ab09f2a422'),
//             quantity: 6,
//             price: 12511
//         }
//     ],
//     totalAmount: 451580,
//     status: 'completed',
//     createdAt: "2024-03-03T00:00:00Z",
//     updatedAt: "2024-03-22T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x21ce4d188f3903f792da3a36'),
//             quantity: 4,
//             price: 35595
//         }
//     ],
//     totalAmount: 142380,
//     status: 'completed',
//     createdAt: "2024-11-30T00:00:00Z",
//     updatedAt: "2024-12-27T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x803c1e179b3e58d96d8606bf'),
//             quantity: 1,
//             price: 29496
//         },
//         {
//             productId: ObjectId('0xc21e6945e6c37133621858f7'),
//             quantity: 1,
//             price: 43706
//         },
//         {
//             productId: ObjectId('0x36962c76503a32651af5685c'),
//             quantity: 2,
//             price: 12003
//         }
//     ],
//     totalAmount: 97208,
//     status: 'completed',
//     createdAt: "2024-11-16T00:00:00Z",
//     updatedAt: "2024-12-02T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x38218d28137cfa321193cf5f'),
//             quantity: 9,
//             price: 12620
//         },
//         {
//             productId: ObjectId('0x491b7d1647ffa5c8e3dba7cf'),
//             quantity: 8,
//             price: 19813
//         }
//     ],
//     totalAmount: 272084,
//     status: 'completed',
//     createdAt: "2024-11-12T00:00:00Z",
//     updatedAt: "2024-12-11T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xc3fc87150fe8e1d4f960f885'),
//             quantity: 8,
//             price: 20429
//         },
//         {
//             productId: ObjectId('0x3325b8cea934a8323b01de62'),
//             quantity: 10,
//             price: 23864
//         },
//         {
//             productId: ObjectId('0x99ed1a1d5e108af1353132b3'),
//             quantity: 1,
//             price: 10288
//         }
//     ],
//     totalAmount: 412360,
//     status: 'completed',
//     createdAt: "2024-10-20T00:00:00Z",
//     updatedAt: "2024-11-05T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x5c2cbc6df9599244b6a6f905'),
//             quantity: 6,
//             price: 6801
//         }
//     ],
//     totalAmount: 40806,
//     status: 'completed',
//     createdAt: "2024-11-04T00:00:00Z",
//     updatedAt: "2024-11-20T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x5a1ba02d33c13ef68766e07e'),
//             quantity: 3,
//             price: 16454
//         },
//         {
//             productId: ObjectId('0xe28711d3c4766411f8223628'),
//             quantity: 9,
//             price: 8314
//         },
//         {
//             productId: ObjectId('0x4588b206abdfdd28218d22de'),
//             quantity: 6,
//             price: 20865
//         }
//     ],
//     totalAmount: 249378,
//     status: 'completed',
//     createdAt: "2024-05-03T00:00:00Z",
//     updatedAt: "2024-05-20T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xd9bd185623f69c1c8b717cd5'),
//             quantity: 10,
//             price: 34363
//         },
//         {
//             productId: ObjectId('0xa381621da2a662fe4e503bbd'),
//             quantity: 2,
//             price: 42571
//         }
//     ],
//     totalAmount: 428772,
//     status: 'completed',
//     createdAt: "2024-10-09T00:00:00Z",
//     updatedAt: "2024-10-26T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x88c8a180d90cf295c476885a'),
//             quantity: 3,
//             price: 16318
//         }
//     ],
//     totalAmount: 48954,
//     status: 'completed',
//     createdAt: "2024-10-13T00:00:00Z",
//     updatedAt: "2024-10-25T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xc8de58441a2165ba8c09e767'),
//             quantity: 6,
//             price: 44996
//         },
//         {
//             productId: ObjectId('0x99cc9ef93b216ea8be6004a2'),
//             quantity: 8,
//             price: 46713
//         }
//     ],
//     totalAmount: 643680,
//     status: 'completed',
//     createdAt: "2024-02-18T00:00:00Z",
//     updatedAt: "2024-03-07T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x4e04428f455a9b02556ee4d5'),
//             quantity: 8,
//             price: 3529
//         }
//     ],
//     totalAmount: 28232,
//     status: 'completed',
//     createdAt: "2024-09-08T00:00:00Z",
//     updatedAt: "2024-09-20T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x8f09d920b2af3f6f830ee8cb'),
//             quantity: 1,
//             price: 6783
//         },
//         {
//             productId: ObjectId('0xebe33706943039e9034b1bbb'),
//             quantity: 8,
//             price: 37336
//         },
//         {
//             productId: ObjectId('0x3143041751f2874e21ef6098'),
//             quantity: 1,
//             price: 37650
//         }
//     ],
//     totalAmount: 343121,
//     status: 'completed',
//     createdAt: "2024-06-04T00:00:00Z",
//     updatedAt: "2024-06-26T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x3e9f1a6575488a61dac09db5'),
//             quantity: 7,
//             price: 1940
//         }
//     ],
//     totalAmount: 13580,
//     status: 'completed',
//     createdAt: "2024-02-28T00:00:00Z",
//     updatedAt: "2024-03-25T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x437f0e15f5f32bcdf1746be3'),
//             quantity: 3,
//             price: 8198
//         }
//     ],
//     totalAmount: 24594,
//     status: 'completed',
//     createdAt: "2024-12-25T00:00:00Z",
//     updatedAt: "2025-01-09T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xbc13320d566d89f158a307c9'),
//             quantity: 6,
//             price: 39143
//         }
//     ],
//     totalAmount: 234858,
//     status: 'completed',
//     createdAt: "2024-09-25T00:00:00Z",
//     updatedAt: "2024-09-28T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xdc0fd124c602f18ac4a4c12c'),
//             quantity: 9,
//             price: 7614
//         }
//     ],
//     totalAmount: 68526,
//     status: 'completed',
//     createdAt: "2024-12-26T00:00:00Z",
//     updatedAt: "2024-12-27T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x6fabb85b80c5259f8ab97aaa'),
//             quantity: 7,
//             price: 22610
//         },
//         {
//             productId: ObjectId('0x3ef4b4387084cad67e2f2118'),
//             quantity: 7,
//             price: 30519
//         }
//     ],
//     totalAmount: 371903,
//     status: 'completed',
//     createdAt: "2024-04-20T00:00:00Z",
//     updatedAt: "2024-04-29T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xec7ddc1ca39864dc418198af'),
//             quantity: 6,
//             price: 40619
//         }
//     ],
//     totalAmount: 243714,
//     status: 'completed',
//     createdAt: "2024-08-28T00:00:00Z",
//     updatedAt: "2024-09-27T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xad05da5ba4411bb7c0956d44'),
//             quantity: 1,
//             price: 42799
//         },
//         {
//             productId: ObjectId('0xc4a1e78490deb1e38489f934'),
//             quantity: 8,
//             price: 43309
//         }
//     ],
//     totalAmount: 389271,
//     status: 'completed',
//     createdAt: "2024-02-14T00:00:00Z",
//     updatedAt: "2024-02-17T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xe9d1eb602ab5581d79ff07ba'),
//             quantity: 4,
//             price: 45201
//         },
//         {
//             productId: ObjectId('0xbd08826ed9f726d7005402ab'),
//             quantity: 4,
//             price: 39482
//         },
//         {
//             productId: ObjectId('0xe8c93afc64ace303cfd16dbc'),
//             quantity: 4,
//             price: 20130
//         }
//     ],
//     totalAmount: 419252,
//     status: 'completed',
//     createdAt: "2024-01-26T00:00:00Z",
//     updatedAt: "2024-02-25T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x2d935af049a6204b9dbc5c8f'),
//             quantity: 8,
//             price: 19049
//         },
//         {
//             productId: ObjectId('0xdad645dda71757e7aeba8c99'),
//             quantity: 2,
//             price: 21323
//         }
//     ],
//     totalAmount: 195038,
//     status: 'completed',
//     createdAt: "2024-08-14T00:00:00Z",
//     updatedAt: "2024-08-24T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xd5d0a2d909f150735d79feca'),
//             quantity: 10,
//             price: 26531
//         },
//         {
//             productId: ObjectId('0xca097489c1474605800a9dc4'),
//             quantity: 8,
//             price: 22048
//         },
//         {
//             productId: ObjectId('0xa9e187efb3d2e4d4ee40e37f'),
//             quantity: 1,
//             price: 41112
//         }
//     ],
//     totalAmount: 482806,
//     status: 'completed',
//     createdAt: "2024-01-27T00:00:00Z",
//     updatedAt: "2024-01-29T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xc513cd7908ffbbb9105a5435'),
//             quantity: 4,
//             price: 35349
//         },
//         {
//             productId: ObjectId('0x584b09c13ed00353a0268e09'),
//             quantity: 5,
//             price: 32149
//         },
//         {
//             productId: ObjectId('0x3959886fcb0772cc7d8bbb44'),
//             quantity: 8,
//             price: 31241
//         }
//     ],
//     totalAmount: 552069,
//     status: 'completed',
//     createdAt: "2024-05-09T00:00:00Z",
//     updatedAt: "2024-06-05T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x1dd012e5cb042c517794ccd3'),
//             quantity: 3,
//             price: 45233
//         }
//     ],
//     totalAmount: 135699,
//     status: 'completed',
//     createdAt: "2024-04-28T00:00:00Z",
//     updatedAt: "2024-05-15T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xc5425680861167382b771bff'),
//             quantity: 10,
//             price: 10662
//         }
//     ],
//     totalAmount: 106620,
//     status: 'completed',
//     createdAt: "2024-09-15T00:00:00Z",
//     updatedAt: "2024-09-27T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x2f3e31917e2f8ae3263e89fd'),
//             quantity: 4,
//             price: 9108
//         }
//     ],
//     totalAmount: 36432,
//     status: 'completed',
//     createdAt: "2024-11-22T00:00:00Z",
//     updatedAt: "2024-12-17T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x4dfdbe9fc565354ac461b200'),
//             quantity: 7,
//             price: 8660
//         },
//         {
//             productId: ObjectId('0xb14a6841cf14e45683b4d999'),
//             quantity: 1,
//             price: 15836
//         },
//         {
//             productId: ObjectId('0x1954e08d214f14835ce28a55'),
//             quantity: 7,
//             price: 25046
//         }
//     ],
//     totalAmount: 251778,
//     status: 'completed',
//     createdAt: "2024-07-21T00:00:00Z",
//     updatedAt: "2024-08-14T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x1a88d7bdeabc1176529c78d3'),
//             quantity: 4,
//             price: 24775
//         },
//         {
//             productId: ObjectId('0x316db6d9a6b4604ba26c08aa'),
//             quantity: 9,
//             price: 48314
//         },
//         {
//             productId: ObjectId('0xe2cbd79e44754749381ac84d'),
//             quantity: 3,
//             price: 5730
//         }
//     ],
//     totalAmount: 551116,
//     status: 'completed',
//     createdAt: "2024-03-19T00:00:00Z",
//     updatedAt: "2024-04-08T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xb6f7d962c64f8563b1c7f4ed'),
//             quantity: 4,
//             price: 16306
//         }
//     ],
//     totalAmount: 65224,
//     status: 'completed',
//     createdAt: "2024-10-14T00:00:00Z",
//     updatedAt: "2024-10-31T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x8675876ee666e1496d4623b2'),
//             quantity: 3,
//             price: 17588
//         }
//     ],
//     totalAmount: 52764,
//     status: 'completed',
//     createdAt: "2024-10-17T00:00:00Z",
//     updatedAt: "2024-11-02T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xb8ca57b1310372aca03aa86d'),
//             quantity: 7,
//             price: 14223
//         }
//     ],
//     totalAmount: 99561,
//     status: 'completed',
//     createdAt: "2024-02-04T00:00:00Z",
//     updatedAt: "2024-02-20T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x351535572337cd240772d053'),
//             quantity: 7,
//             price: 44337
//         },
//         {
//             productId: ObjectId('0x3818d2eb48aaca1349b5eb4a'),
//             quantity: 2,
//             price: 15869
//         },
//         {
//             productId: ObjectId('0xa1a0398a5842becb577acb67'),
//             quantity: 2,
//             price: 7727
//         }
//     ],
//     totalAmount: 357551,
//     status: 'completed',
//     createdAt: "2024-05-17T00:00:00Z",
//     updatedAt: "2024-06-05T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x574efb10da7c8f2d121e0d51'),
//             quantity: 6,
//             price: 1985
//         },
//         {
//             productId: ObjectId('0x4fd625aeeda640e0c34059d7'),
//             quantity: 2,
//             price: 13697
//         }
//     ],
//     totalAmount: 39304,
//     status: 'completed',
//     createdAt: "2024-08-23T00:00:00Z",
//     updatedAt: "2024-08-27T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xb3ed8275008491d59c8d747c'),
//             quantity: 4,
//             price: 39889
//         }
//     ],
//     totalAmount: 159556,
//     status: 'completed',
//     createdAt: "2024-04-22T00:00:00Z",
//     updatedAt: "2024-05-08T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xcd3d845065d7a67903883492'),
//             quantity: 9,
//             price: 19374
//         }
//     ],
//     totalAmount: 174366,
//     status: 'completed',
//     createdAt: "2024-12-13T00:00:00Z",
//     updatedAt: "2025-01-01T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x12e94a84f80bfaa95bd2e6f7'),
//             quantity: 2,
//             price: 34869
//         },
//         {
//             productId: ObjectId('0x66314b734ff2e920b9c8f18d'),
//             quantity: 10,
//             price: 39342
//         },
//         {
//             productId: ObjectId('0xf15fb48639e9b8c4af47ec2a'),
//             quantity: 3,
//             price: 4037
//         }
//     ],
//     totalAmount: 475269,
//     status: 'completed',
//     createdAt: "2024-09-24T00:00:00Z",
//     updatedAt: "2024-09-29T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xc5337d6c90ad49d31b75d9b0'),
//             quantity: 3,
//             price: 49555
//         }
//     ],
//     totalAmount: 148665,
//     status: 'completed',
//     createdAt: "2024-06-13T00:00:00Z",
//     updatedAt: "2024-07-02T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xf212a971f3b78b979e34911d'),
//             quantity: 2,
//             price: 8616
//         }
//     ],
//     totalAmount: 17232,
//     status: 'completed',
//     createdAt: "2024-12-10T00:00:00Z",
//     updatedAt: "2025-01-09T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xeeb144257610d84b07c55345'),
//             quantity: 4,
//             price: 39499
//         },
//         {
//             productId: ObjectId('0x9625fe569b504304c115c081'),
//             quantity: 2,
//             price: 42092
//         },
//         {
//             productId: ObjectId('0x6a7700a7fc170ed1c8834bd4'),
//             quantity: 10,
//             price: 17650
//         }
//     ],
//     totalAmount: 418680,
//     status: 'completed',
//     createdAt: "2024-11-26T00:00:00Z",
//     updatedAt: "2024-12-14T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xaddc49d57e7b089cbe2cad3d'),
//             quantity: 2,
//             price: 36304
//         }
//     ],
//     totalAmount: 72608,
//     status: 'completed',
//     createdAt: "2024-05-22T00:00:00Z",
//     updatedAt: "2024-06-08T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x1d422c3264c6649d5ba76336'),
//             quantity: 1,
//             price: 37051
//         }
//     ],
//     totalAmount: 37051,
//     status: 'completed',
//     createdAt: "2024-03-10T00:00:00Z",
//     updatedAt: "2024-03-13T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x5ab9dd925319704a521b32cd'),
//             quantity: 7,
//             price: 4766
//         },
//         {
//             productId: ObjectId('0x9dec5a8cdf4623d0f1afb303'),
//             quantity: 1,
//             price: 48406
//         },
//         {
//             productId: ObjectId('0xf6087e5ed64b47cccf0f2761'),
//             quantity: 10,
//             price: 4113
//         }
//     ],
//     totalAmount: 122898,
//     status: 'completed',
//     createdAt: "2024-03-30T00:00:00Z",
//     updatedAt: "2024-04-26T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xb6500b47b9e414b55db4e545'),
//             quantity: 2,
//             price: 8435
//         }
//     ],
//     totalAmount: 16870,
//     status: 'completed',
//     createdAt: "2024-01-28T00:00:00Z",
//     updatedAt: "2024-02-20T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xc9268ac529168d95207874d4'),
//             quantity: 1,
//             price: 17642
//         }
//     ],
//     totalAmount: 17642,
//     status: 'completed',
//     createdAt: "2024-11-16T00:00:00Z",
//     updatedAt: "2024-12-11T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x699be834a80798345f43e8a4'),
//             quantity: 5,
//             price: 24503
//         },
//         {
//             productId: ObjectId('0x1f63c7382b3a6d42f73d4319'),
//             quantity: 6,
//             price: 10469
//         }
//     ],
//     totalAmount: 185329,
//     status: 'completed',
//     createdAt: "2024-01-19T00:00:00Z",
//     updatedAt: "2024-01-21T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x675a4b197e05025a80fd5c6e'),
//             quantity: 7,
//             price: 31929
//         }
//     ],
//     totalAmount: 223503,
//     status: 'completed',
//     createdAt: "2024-03-24T00:00:00Z",
//     updatedAt: "2024-04-06T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xbefe7668676e43835eaa5e14'),
//             quantity: 1,
//             price: 28372
//         },
//         {
//             productId: ObjectId('0x1fa55f5b16020e73612666eb'),
//             quantity: 5,
//             price: 23527
//         }
//     ],
//     totalAmount: 146007,
//     status: 'completed',
//     createdAt: "2024-09-13T00:00:00Z",
//     updatedAt: "2024-09-24T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x2e8f2693f131bd16f7ad2322'),
//             quantity: 10,
//             price: 15714
//         }
//     ],
//     totalAmount: 157140,
//     status: 'completed',
//     createdAt: "2024-07-30T00:00:00Z",
//     updatedAt: "2024-08-06T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x24a274d17f0ba3a0e1b62e0e'),
//             quantity: 8,
//             price: 40521
//         }
//     ],
//     totalAmount: 324168,
//     status: 'completed',
//     createdAt: "2024-08-22T00:00:00Z",
//     updatedAt: "2024-09-09T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x4cc5720b2c7bbcc1ad11dc85'),
//             quantity: 5,
//             price: 47613
//         }
//     ],
//     totalAmount: 238065,
//     status: 'completed',
//     createdAt: "2024-05-19T00:00:00Z",
//     updatedAt: "2024-05-22T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xc49f4bad31e92167295a6e9e'),
//             quantity: 2,
//             price: 15014
//         },
//         {
//             productId: ObjectId('0x511beb8850982265cdbda632'),
//             quantity: 3,
//             price: 13657
//         },
//         {
//             productId: ObjectId('0x692605eafaa2695042491968'),
//             quantity: 8,
//             price: 21064
//         }
//     ],
//     totalAmount: 239511,
//     status: 'completed',
//     createdAt: "2024-08-06T00:00:00Z",
//     updatedAt: "2024-08-19T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x84ff754dc3533cf86d016cdf'),
//             quantity: 5,
//             price: 34661
//         },
//         {
//             productId: ObjectId('0x28161beb553b5e1c12af8102'),
//             quantity: 9,
//             price: 1324
//         }
//     ],
//     totalAmount: 185221,
//     status: 'completed',
//     createdAt: "2024-06-30T00:00:00Z",
//     updatedAt: "2024-07-12T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x937851cd3a507903bbd8929d'),
//             quantity: 4,
//             price: 29666
//         },
//         {
//             productId: ObjectId('0x2bbe25ca29486cace64b38be'),
//             quantity: 3,
//             price: 21576
//         }
//     ],
//     totalAmount: 183392,
//     status: 'completed',
//     createdAt: "2024-03-01T00:00:00Z",
//     updatedAt: "2024-03-08T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x51e399cc630a3b3d39f89547'),
//             quantity: 5,
//             price: 21429
//         },
//         {
//             productId: ObjectId('0x586070422f93ecdae2fc0f34'),
//             quantity: 9,
//             price: 29395
//         }
//     ],
//     totalAmount: 371700,
//     status: 'completed',
//     createdAt: "2024-02-08T00:00:00Z",
//     updatedAt: "2024-03-04T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x2cdb07d8427fc521a1b30bcf'),
//             quantity: 9,
//             price: 25678
//         },
//         {
//             productId: ObjectId('0x539a649e068e1fa9eeabe257'),
//             quantity: 5,
//             price: 10396
//         }
//     ],
//     totalAmount: 283082,
//     status: 'completed',
//     createdAt: "2024-11-11T00:00:00Z",
//     updatedAt: "2024-11-24T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x3321c63397d37259cee0b920'),
//             quantity: 10,
//             price: 38421
//         },
//         {
//             productId: ObjectId('0xd0666a4634d03179bd5691a7'),
//             quantity: 2,
//             price: 49766
//         },
//         {
//             productId: ObjectId('0xa17f76d9261f1d80babbcda3'),
//             quantity: 4,
//             price: 35085
//         }
//     ],
//     totalAmount: 624082,
//     status: 'completed',
//     createdAt: "2024-03-26T00:00:00Z",
//     updatedAt: "2024-04-14T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xc7ce2f38280e65caa2df5f27'),
//             quantity: 10,
//             price: 17542
//         },
//         {
//             productId: ObjectId('0x9a2f21138e17c13a9af7e6dc'),
//             quantity: 6,
//             price: 34429
//         }
//     ],
//     totalAmount: 381994,
//     status: 'completed',
//     createdAt: "2024-11-22T00:00:00Z",
//     updatedAt: "2024-11-29T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x14c6249d573a6a0afdfe4b58'),
//             quantity: 2,
//             price: 20397
//         },
//         {
//             productId: ObjectId('0x8ba70796f7d3e5331fdf78b7'),
//             quantity: 4,
//             price: 39510
//         }
//     ],
//     totalAmount: 198834,
//     status: 'completed',
//     createdAt: "2024-11-14T00:00:00Z",
//     updatedAt: "2024-11-27T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x2d583277bb3a8aacfff6614b'),
//             quantity: 5,
//             price: 6830
//         },
//         {
//             productId: ObjectId('0x4cfc2db2ca54023926a2643b'),
//             quantity: 8,
//             price: 21703
//         }
//     ],
//     totalAmount: 207774,
//     status: 'completed',
//     createdAt: "2024-06-12T00:00:00Z",
//     updatedAt: "2024-07-09T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xfcda1bc122d7fbe8fc76f7b4'),
//             quantity: 1,
//             price: 6044
//         },
//         {
//             productId: ObjectId('0xb25ec3c142a4148f05e63a1e'),
//             quantity: 7,
//             price: 30093
//         },
//         {
//             productId: ObjectId('0x8da7b8af2a7a59e3054261a1'),
//             quantity: 6,
//             price: 1774
//         }
//     ],
//     totalAmount: 227339,
//     status: 'completed',
//     createdAt: "2024-04-04T00:00:00Z",
//     updatedAt: "2024-05-01T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xe7250bd5c1f19bd20cdcc2b1'),
//             quantity: 9,
//             price: 7648
//         },
//         {
//             productId: ObjectId('0x95dafebe451531c567e1b771'),
//             quantity: 1,
//             price: 22374
//         },
//         {
//             productId: ObjectId('0xd4535751921c71e32551f32b'),
//             quantity: 10,
//             price: 48721
//         }
//     ],
//     totalAmount: 578416,
//     status: 'completed',
//     createdAt: "2024-11-04T00:00:00Z",
//     updatedAt: "2024-11-29T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x74eb0014772846713c29782c'),
//             quantity: 1,
//             price: 16654
//         },
//         {
//             productId: ObjectId('0x60fc71bbe103273c0ad17c45'),
//             quantity: 5,
//             price: 29717
//         },
//         {
//             productId: ObjectId('0xa9adbed7e91df7020d748189'),
//             quantity: 6,
//             price: 11532
//         }
//     ],
//     totalAmount: 234431,
//     status: 'completed',
//     createdAt: "2024-07-25T00:00:00Z",
//     updatedAt: "2024-08-12T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xf8bd1ce72bba4be3462100f7'),
//             quantity: 4,
//             price: 45086
//         },
//         {
//             productId: ObjectId('0x5eca806cc7d158d79386c2b0'),
//             quantity: 4,
//             price: 27147
//         }
//     ],
//     totalAmount: 288932,
//     status: 'completed',
//     createdAt: "2024-05-07T00:00:00Z",
//     updatedAt: "2024-05-29T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xfd4df8f42608668634a3d4b0'),
//             quantity: 4,
//             price: 5834
//         },
//         {
//             productId: ObjectId('0xdac27bf15ef1c3bdb40cad77'),
//             quantity: 2,
//             price: 26282
//         },
//         {
//             productId: ObjectId('0xcec7f7576bd54647b2f8ca8e'),
//             quantity: 6,
//             price: 14803
//         }
//     ],
//     totalAmount: 164718,
//     status: 'completed',
//     createdAt: "2024-04-07T00:00:00Z",
//     updatedAt: "2024-04-25T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x2c6466da0948619a16a8f633'),
//             quantity: 5,
//             price: 46143
//         },
//         {
//             productId: ObjectId('0x3d1f70e89e8e42b5be6c33c3'),
//             quantity: 7,
//             price: 15149
//         },
//         {
//             productId: ObjectId('0x2618282d16ec2831bcf7db77'),
//             quantity: 8,
//             price: 48792
//         }
//     ],
//     totalAmount: 727094,
//     status: 'completed',
//     createdAt: "2024-04-18T00:00:00Z",
//     updatedAt: "2024-04-24T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x7d2db9cece23721b5305782b'),
//             quantity: 7,
//             price: 27889
//         },
//         {
//             productId: ObjectId('0x6a4c4d655324e5de11532594'),
//             quantity: 6,
//             price: 47244
//         },
//         {
//             productId: ObjectId('0x3f05203cdced65927e215760'),
//             quantity: 10,
//             price: 21913
//         }
//     ],
//     totalAmount: 697817,
//     status: 'completed',
//     createdAt: "2024-09-21T00:00:00Z",
//     updatedAt: "2024-10-15T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xa6e2c3495213581c699734c6'),
//             quantity: 4,
//             price: 39098
//         },
//         {
//             productId: ObjectId('0x2df16c89e38f5d34c4fa3f23'),
//             quantity: 2,
//             price: 49147
//         },
//         {
//             productId: ObjectId('0x542c2955602d4df6e4dbd142'),
//             quantity: 6,
//             price: 22031
//         }
//     ],
//     totalAmount: 386872,
//     status: 'completed',
//     createdAt: "2024-11-26T00:00:00Z",
//     updatedAt: "2024-12-20T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x4f53341d312c3b51dd567a8e'),
//             quantity: 3,
//             price: 13559
//         }
//     ],
//     totalAmount: 40677,
//     status: 'completed',
//     createdAt: "2024-06-05T00:00:00Z",
//     updatedAt: "2024-06-10T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x8547fc1e796d46df6f8b0a3a'),
//             quantity: 6,
//             price: 23455
//         },
//         {
//             productId: ObjectId('0x4afdd09e6745e0c89596a443'),
//             quantity: 1,
//             price: 32810
//         }
//     ],
//     totalAmount: 173540,
//     status: 'completed',
//     createdAt: "2024-07-21T00:00:00Z",
//     updatedAt: "2024-08-16T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x9f6e59a7a7c0be5050581b44'),
//             quantity: 9,
//             price: 28985
//         },
//         {
//             productId: ObjectId('0xa5836585b3ad76359980d482'),
//             quantity: 5,
//             price: 42168
//         },
//         {
//             productId: ObjectId('0x22d8ea57d28d9ca98fbde6e1'),
//             quantity: 5,
//             price: 28830
//         }
//     ],
//     totalAmount: 615855,
//     status: 'completed',
//     createdAt: "2024-09-30T00:00:00Z",
//     updatedAt: "2024-10-16T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x84570ccc89f5ba4ac1e1900a'),
//             quantity: 5,
//             price: 19547
//         },
//         {
//             productId: ObjectId('0x5c120b502792b472bf381de1'),
//             quantity: 2,
//             price: 35783
//         }
//     ],
//     totalAmount: 169301,
//     status: 'completed',
//     createdAt: "2024-12-16T00:00:00Z",
//     updatedAt: "2025-01-12T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x43d96d717e19c1f18455230c'),
//             quantity: 10,
//             price: 2432
//         },
//         {
//             productId: ObjectId('0x2490a06469d430dcf3e8a8af'),
//             quantity: 3,
//             price: 10456
//         },
//         {
//             productId: ObjectId('0xb21f45f1fdc20a9fbb8f6a36'),
//             quantity: 3,
//             price: 42042
//         }
//     ],
//     totalAmount: 181814,
//     status: 'completed',
//     createdAt: "2024-09-06T00:00:00Z",
//     updatedAt: "2024-10-03T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xec3f6c678609e7d56c9e6c0b'),
//             quantity: 2,
//             price: 34630
//         },
//         {
//             productId: ObjectId('0xf34ee6639d131e878ef9d1b6'),
//             quantity: 9,
//             price: 43842
//         },
//         {
//             productId: ObjectId('0x410b7f1821efd292b3118231'),
//             quantity: 5,
//             price: 9918
//         }
//     ],
//     totalAmount: 513428,
//     status: 'completed',
//     createdAt: "2024-07-03T00:00:00Z",
//     updatedAt: "2024-07-05T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x4cc5a3465875b3a7b4c8924a'),
//             quantity: 1,
//             price: 1586
//         }
//     ],
//     totalAmount: 1586,
//     status: 'completed',
//     createdAt: "2024-07-30T00:00:00Z",
//     updatedAt: "2024-08-24T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xaa09c3ec43668c9639f158ab'),
//             quantity: 7,
//             price: 40964
//         },
//         {
//             productId: ObjectId('0xdabab814f85d04a7f2ba4fb3'),
//             quantity: 1,
//             price: 33155
//         }
//     ],
//     totalAmount: 319903,
//     status: 'completed',
//     createdAt: "2024-05-25T00:00:00Z",
//     updatedAt: "2024-05-27T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x94b3a44c6fc3487d733165f3'),
//             quantity: 7,
//             price: 26232
//         }
//     ],
//     totalAmount: 183624,
//     status: 'completed',
//     createdAt: "2024-12-19T00:00:00Z",
//     updatedAt: "2025-01-07T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xffd0d756b3ea6d74a5e8b47a'),
//             quantity: 8,
//             price: 47652
//         }
//     ],
//     totalAmount: 381216,
//     status: 'completed',
//     createdAt: "2024-02-09T00:00:00Z",
//     updatedAt: "2024-03-04T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xd13d0af9f968b0129a3df551'),
//             quantity: 5,
//             price: 4787
//         }
//     ],
//     totalAmount: 23935,
//     status: 'completed',
//     createdAt: "2024-04-27T00:00:00Z",
//     updatedAt: "2024-05-09T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xe3a0bed1438c977dd3fec401'),
//             quantity: 4,
//             price: 20690
//         },
//         {
//             productId: ObjectId('0x705b2bcf77d97921411f5649'),
//             quantity: 6,
//             price: 18310
//         }
//     ],
//     totalAmount: 192620,
//     status: 'completed',
//     createdAt: "2024-09-10T00:00:00Z",
//     updatedAt: "2024-09-14T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x45a8e669e3b55c447c28df5c'),
//             quantity: 7,
//             price: 39628
//         },
//         {
//             productId: ObjectId('0xcefcaf973606813c8a124e31'),
//             quantity: 1,
//             price: 49294
//         },
//         {
//             productId: ObjectId('0x7b3fca5251127521a515dd9f'),
//             quantity: 3,
//             price: 18965
//         }
//     ],
//     totalAmount: 383585,
//     status: 'completed',
//     createdAt: "2024-10-29T00:00:00Z",
//     updatedAt: "2024-11-24T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xc0123216c77a9f8f346c0ef3'),
//             quantity: 2,
//             price: 15376
//         },
//         {
//             productId: ObjectId('0xe751bacc83dc1777583e53e4'),
//             quantity: 3,
//             price: 1739
//         }
//     ],
//     totalAmount: 35969,
//     status: 'completed',
//     createdAt: "2024-04-13T00:00:00Z",
//     updatedAt: "2024-04-18T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xf3d0f1389c1ee613c20a86e2'),
//             quantity: 3,
//             price: 37752
//         },
//         {
//             productId: ObjectId('0xd6b3034b3a6a84a6f63ba8b4'),
//             quantity: 4,
//             price: 10021
//         },
//         {
//             productId: ObjectId('0x8652ff0e0037390111237022'),
//             quantity: 3,
//             price: 35604
//         }
//     ],
//     totalAmount: 260152,
//     status: 'completed',
//     createdAt: "2024-01-01T00:00:00Z",
//     updatedAt: "2024-01-18T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x3f58b459e9a9d9c6e4517985'),
//             quantity: 2,
//             price: 21711
//         },
//         {
//             productId: ObjectId('0x5687db34160589eccece37a7'),
//             quantity: 1,
//             price: 20893
//         }
//     ],
//     totalAmount: 64315,
//     status: 'completed',
//     createdAt: "2024-10-31T00:00:00Z",
//     updatedAt: "2024-11-23T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xdeac48c057f4401299cee9b4'),
//             quantity: 1,
//             price: 17612
//         },
//         {
//             productId: ObjectId('0x7cbf6808c4e0373b0f0ed1a4'),
//             quantity: 9,
//             price: 31090
//         },
//         {
//             productId: ObjectId('0x35856cf779fa87a5046d666a'),
//             quantity: 5,
//             price: 39651
//         }
//     ],
//     totalAmount: 495677,
//     status: 'completed',
//     createdAt: "2024-07-08T00:00:00Z",
//     updatedAt: "2024-07-16T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xf1d11cbb27a5eed4f4780e48'),
//             quantity: 3,
//             price: 33843
//         },
//         {
//             productId: ObjectId('0xa9ba530b8b05a90e46755757'),
//             quantity: 6,
//             price: 41173
//         },
//         {
//             productId: ObjectId('0x5fa144c4f7d8dc5d0e89774d'),
//             quantity: 8,
//             price: 13233
//         }
//     ],
//     totalAmount: 454431,
//     status: 'completed',
//     createdAt: "2024-05-13T00:00:00Z",
//     updatedAt: "2024-06-10T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x891cc254ad25877d3bde1f18'),
//             quantity: 10,
//             price: 35253
//         }
//     ],
//     totalAmount: 352530,
//     status: 'completed',
//     createdAt: "2024-12-05T00:00:00Z",
//     updatedAt: "2024-12-10T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x9b148cf8803c590930c9a91c'),
//             quantity: 10,
//             price: 31331
//         }
//     ],
//     totalAmount: 313310,
//     status: 'completed',
//     createdAt: "2024-08-30T00:00:00Z",
//     updatedAt: "2024-09-27T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x6b8cfca56c29faf9b7d9e0eb'),
//             quantity: 1,
//             price: 36606
//         }
//     ],
//     totalAmount: 36606,
//     status: 'completed',
//     createdAt: "2024-08-05T00:00:00Z",
//     updatedAt: "2024-08-20T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xd47e71891e995382a2c92820'),
//             quantity: 5,
//             price: 19390
//         },
//         {
//             productId: ObjectId('0x665e478081d9e754bf48a1ab'),
//             quantity: 8,
//             price: 8877
//         }
//     ],
//     totalAmount: 167966,
//     status: 'completed',
//     createdAt: "2024-04-06T00:00:00Z",
//     updatedAt: "2024-04-12T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xee1fe8c86e797d7a40fea097'),
//             quantity: 8,
//             price: 43999
//         },
//         {
//             productId: ObjectId('0x92a03d033176e726249a2261'),
//             quantity: 6,
//             price: 33870
//         }
//     ],
//     totalAmount: 555212,
//     status: 'completed',
//     createdAt: "2024-01-17T00:00:00Z",
//     updatedAt: "2024-01-30T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0xa1a6a8142685d6d22d3b0fb8'),
//             quantity: 7,
//             price: 5062
//         },
//         {
//             productId: ObjectId('0xf156b2b221154c396d95adaa'),
//             quantity: 2,
//             price: 12573
//         },
//         {
//             productId: ObjectId('0xda3ca8a59765c313e619cb6c'),
//             quantity: 6,
//             price: 8922
//         }
//     ],
//     totalAmount: 114112,
//     status: 'completed',
//     createdAt: "2024-12-04T00:00:00Z",
//     updatedAt: "2024-12-07T00:00:00Z"
// },
// {
//     userId: ObjectId('677c1371ee194dc8f05e739c'),
//     items: [
//         {
//             productId: ObjectId('0x264a32c65fa31dfc7b7b6205'),
//             quantity: 1,
//             price: 39985
//         },
//         {
//             productId: ObjectId('0x653a04d13ce664ce1bb595c2'),
//             quantity: 6,
//             price: 32398
//         },
//         {
//             productId: ObjectId('0xc2cc071c658ad25e4e39d2f7'),
//             quantity: 2,
//             price: 41761
//         }
//     ],
//     totalAmount: 317895,
//     status: 'completed',
//     createdAt: "2024-10-31T00:00:00Z",
//     updatedAt: "2024-11-22T00:00:00Z"
// },
// {
//   userId: ObjectId('677c1371ee194dc8f05e739c'),
//   items: [
//       {
//           productId: ObjectId('0xdef63147afc5d2e58b9d9796'),
//           quantity: 10,
//           price: 27234
//       },
//       {
//           productId: ObjectId('0x6a46a2fae53535cd3724fbf6'),
//           quantity: 8,
//           price: 34910
//       }
//   ],
//   totalAmount: 551620,
//   status: 'completed',
//   createdAt: new Date(),
//   updatedAt: new Date()
// },
// {
//   userId: ObjectId('677c1371ee194dc8f05e739c'),
//   items: [
//       {
//           productId: ObjectId('0x90a9ff937379d8f4fa94e523'),
//           quantity: 8,
//           price: 27723
//       },
//       {
//           productId: ObjectId('0xe45fdd6dae5be837e0f9a4b9'),
//           quantity: 2,
//           price: 14874
//       }
//   ],
//   totalAmount: 251532,
//   status: 'completed',
//   createdAt: new Date(),
//   updatedAt: new Date()
// },
// {
//   userId: ObjectId('677c1371ee194dc8f05e739c'),
//   items: [
//       {
//           productId: ObjectId('0xd2b3adde5f67e66b099782b1'),
//           quantity: 1,
//           price: 6783
//       }
//   ],
//   totalAmount: 6783,
//   status: 'completed',
//   createdAt: new Date(),
//   updatedAt: new Date()
// },
// {
//   userId: ObjectId('677c1371ee194dc8f05e739c'),
//   items: [
//       {
//           productId: ObjectId('0x73d073063fcb104f1db9e49b'),
//           quantity: 4,
//           price: 41800
//       },
//       {
//           productId: ObjectId('0x16b99c976caaa8ee1b7ffa0e'),
//           quantity: 2,
//           price: 24571
//       },
//       {
//           productId: ObjectId('0x4a63d505c96921a79cfb774b'),
//           quantity: 4,
//           price: 21006
//       }
//   ],
//   totalAmount: 300366,
//   status: 'completed',
//   createdAt: new Date(),
//   updatedAt: new Date()
// },
// {
//   userId: ObjectId('677c1371ee194dc8f05e739c'),
//   items: [
//       {
//           productId: ObjectId('0x65d8d3b98bb7c8ad12cb8d47'),
//           quantity: 3,
//           price: 30824
//       },
//       {
//           productId: ObjectId('0x3cf4d8143f342b25a72b38bf'),
//           quantity: 6,
//           price: 5489
//       }
//   ],
//   totalAmount: 125406,
//   status: 'completed',
//   createdAt: new Date(),
//   updatedAt: new Date()
// },
// {
//   userId: ObjectId('677c1371ee194dc8f05e739c'),
//   items: [
//       {
//           productId: ObjectId('0xc2007fa39d317ac221e9a20d'),
//           quantity: 7,
//           price: 36312
//       },
//       {
//           productId: ObjectId('0x8ee0a09592a6108527c03501'),
//           quantity: 10,
//           price: 28873
//       }
//   ],
//   totalAmount: 542914,
//   status: 'completed',
//   createdAt: new Date(),
//   updatedAt: new Date()
// },
// {
//   userId: ObjectId('677c1371ee194dc8f05e739c'),
//   items: [
//       {
//           productId: ObjectId('0xa39a32c253aa98877efb1b98'),
//           quantity: 9,
//           price: 42755
//       },
//       {
//           productId: ObjectId('0x49474ee651b502d9b644a10f'),
//           quantity: 5,
//           price: 21306
//       },
//       {
//           productId: ObjectId('0xf3278ce0a4054c4e741f60f3'),
//           quantity: 1,
//           price: 33874
//       }
//   ],
//   totalAmount: 525199,
//   status: 'completed',
//   createdAt: new Date(),
//   updatedAt: new Date()
// },
// {
//   userId: ObjectId('677c1371ee194dc8f05e739c'),
//   items: [
//       {
//           productId: ObjectId('0x2ac11efb02ff4a1b48076d9c'),
//           quantity: 9,
//           price: 34294
//       },
//       {
//           productId: ObjectId('0x31781074445bc432998ac80c'),
//           quantity: 4,
//           price: 39329
//       },
//       {
//           productId: ObjectId('0xcd97b06ca94fd9a55cac81d4'),
//           quantity: 9,
//           price: 33336
//       }
//   ],
//   totalAmount: 765986,
//   status: 'completed',
//   createdAt: new Date(),
//   updatedAt: new Date()
// },
// {
//   userId: ObjectId('677c1371ee194dc8f05e739c'),
//   items: [
//       {
//           productId: ObjectId('0x4fd40e54a8a0cfece1c41e52'),
//           quantity: 7,
//           price: 44833
//       },
//       {
//           productId: ObjectId('0x36d0a0613fcb33195eb63412'),
//           quantity: 3,
//           price: 27562
//       }
//   ],
//   totalAmount: 396517,
//   status: 'completed',
//   createdAt: new Date(),
//   updatedAt: new Date()
// },
// {
//   userId: ObjectId('677c1371ee194dc8f05e739c'),
//   items: [
//       {
//           productId: ObjectId('0x82eecda5aaec5c893353e1b6'),
//           quantity: 1,
//           price: 24007
//       }
//   ],
//   totalAmount: 24007,
//   status: 'completed',
//   createdAt: new Date(),
//   updatedAt: new Date()
// },
// {
//   userId: ObjectId('677c1371ee194dc8f05e739c'),
//   items: [
//       {
//           productId: ObjectId('0x6f345e127e9524b48a0a738e'),
//           quantity: 3,
//           price: 49957
//       }
//   ],
//   totalAmount: 149871,
//   status: 'completed',
//   createdAt: new Date(),
//   updatedAt: new Date()
// },
// {
//   userId: ObjectId('677c1371ee194dc8f05e739c'),
//   items: [
//       {
//           productId: ObjectId('0xe1512436a4ba8c319681b8a2'),
//           quantity: 5,
//           price: 18548
//       }
//   ],
//   totalAmount: 92740,
//   status: 'completed',
//   createdAt: new Date(),
//   updatedAt: new Date()
// },
// {
//   userId: ObjectId('677c1371ee194dc8f05e739c'),
//   items: [
//       {
//           productId: ObjectId('0x7cd6fbca61364e85505ef167'),
//           quantity: 4,
//           price: 35019
//       },
//       {
//           productId: ObjectId('0xd12caaa24a9af3b1ae6d5573'),
//           quantity: 9,
//           price: 20753
//       },
//       {
//           productId: ObjectId('0x61b486fa13236a562092bcee'),
//           quantity: 2,
//           price: 42833
//       }
//   ],
//   totalAmount: 412519,
//   status: 'completed',
//   createdAt: new Date(),
//   updatedAt: new Date()
// },
// {
//   userId: ObjectId('677c1371ee194dc8f05e739c'),
//   items: [
//       {
//           productId: ObjectId('0x47f7d5acfde4a922733891eb'),
//           quantity: 4,
//           price: 47092
//       }
//   ],
//   totalAmount: 188368,
//   status: 'completed',
//   createdAt: new Date(),
//   updatedAt: new Date()
// },
// {
//   userId: ObjectId('677c1371ee194dc8f05e739c'),
//   items: [
//       {
//           productId: ObjectId('0x64503712707edd385538be38'),
//           quantity: 2,
//           price: 32318
//       }
//   ],
//   totalAmount: 64636,
//   status: 'completed',
//   createdAt: "2025-01-09T00:00:00Z",
//   updatedAt: "2025-01-21T00:00:00Z"
// },
// {
//   userId: ObjectId('677c1371ee194dc8f05e739c'),
//   items: [
//       {
//           productId: ObjectId('0xf2ef1f03694fcdd30f671b60'),
//           quantity: 6,
//           price: 42959
//       }
//   ],
//   totalAmount: 257754,
//   status: 'completed',
//   createdAt: new Date(),
//   updatedAt: new Date()
// },
// {
//   userId: ObjectId('677c1371ee194dc8f05e739c'),
//   items: [
//       {
//           productId: ObjectId('0x4a61cea5c81d03849fcff9ab'),
//           quantity: 10,
//           price: 36249
//       },
//       {
//           productId: ObjectId('0xf5a6250b03bbbf1012290a51'),
//           quantity: 10,
//           price: 16055
//       },
//       {
//           productId: ObjectId('0x2b46a12a29a6d77fd27d0b3b'),
//           quantity: 6,
//           price: 11464
//       }
//   ],
//   totalAmount: 591824,
//   status: 'completed',
//   createdAt: new Date(),
//   updatedAt: new Date()
// },
// {
//   userId: ObjectId('677c1371ee194dc8f05e739c'),
//   items: [
//       {
//           productId: ObjectId('0x3a1d1085825acbb8bbfe4602'),
//           quantity: 8,
//           price: 35398
//       },
//       {
//           productId: ObjectId('0xa628977a0515302d048d46ca'),
//           quantity: 3,
//           price: 32662
//       },
//       {
//           productId: ObjectId('0xeb1677c0dc45bc196eabb201'),
//           quantity: 8,
//           price: 43657
//       }
//   ],
//   totalAmount: 730426,
//   status: 'completed',
//   createdAt: new Date(),
//   updatedAt: new Date()
// },
]);
