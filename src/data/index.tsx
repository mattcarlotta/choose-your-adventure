export type AdventureProps = {
    id: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    location: string;
    difficulty: string;
    status: ADVENTURE_STATUS
    priority?: boolean;
}

export enum ADVENTURE_STATUS {
    AVAILABLE,
    LOCKED,
    UNAVAILABLE,
    MEMBERS_ONLY
}

export const ADVENTURES = [
    {
        id: "e6ea5add-0585-4dc2-8daa-bc1f2b16ab8b",
        imageSrc: "mini-golf",
        imageAlt: "A mini golf course",
        title: "Mini Golf",
        description: "Join me for a fantastic time playing mini-golf! Imagine a vibrant 18 course filled with quirky challenges like looping ramps, tricky water hazards, and whimsical obstacles. This adventure offers a blend of friendly competition and laughter as we aim for that elusive hole-in-one. Gather your wits and putters and let's tee off for a memorable game!",
        location: "Village Mini Golf",
        difficulty: "Easy",
        status: ADVENTURE_STATUS.AVAILABLE,
        priority: true,
    },
    {
        id: "800af8a5-bd13-4596-9b13-63e4f24d5549",
        imageSrc: "axe-throwing",
        imageAlt: "An axe thrown at a target",
        title: "Axe Throwing",
        description: "Join me for an exhilarating experience of throwing axes at targets! Picture this: a backdrop of wooden boards with painted bullseyes, a line marked for throwing, and a collection of well-balanced axes waiting to be launched. Feel the rush of adrenaline as you step up to the line with an axe in your grip and watch it fly across the room as it ricohets off the target!",
        location: "Unofficial Logging Co.",
        difficulty: "Normal",
        status: ADVENTURE_STATUS.AVAILABLE,
        priority: true,
    },
    {
        id: "ea724ad6-acec-4329-bc05-6f714631b5dc",
        imageSrc: "alpaca-farm",
        imageAlt: "An alpaca on a farm",
        title: "Alpaca Farm",
        description: "Join me for an enchanting visit to an alpaca farm, where we'll immerse ourselves in the charm and tranquility of these gentle creatures. Picture rolling grasses dotted with fluffy alpacas grazing peacefully as their curious eyes and soft fleece invite us to feed them. Let's embark on this unforgettable journey and let the magical alpacas brighten our day!",
        location: "Crescent Moon Ranch",
        difficulty: "Easy",
        status: ADVENTURE_STATUS.AVAILABLE,
        priority: true,
    },
    {
        id: "52ca613c-1dea-41ac-a91d-40890fe766f7",
        imageSrc: "ice-skating-lesson",
        imageAlt: "A woman wearing ice skates and skating on ice",
        title: "Ice Skating Lesson",
        description: "Join me for an exciting ice skating lesson that promises thrills and skill-building! Imagine gliding gracefully across a glistening rink while feeling the crisp air against your face. You'll learn the fundamental moves like forward skating, stopping techniques, and maybe even some fun spins. Lace up your skates and let's hit the ice for a thrilling skating adventure!",
        location: "The Pavilion",
        difficulty: "Heroic",
        status: ADVENTURE_STATUS.AVAILABLE
    },
    {
        id: "c6843858-cf68-4d7b-93a8-c439e11e887c",
        imageSrc: "movie-night",
        imageAlt: "A group of musicians playing in a circle",
        title: "Movie Night",
        description: "Join me for an unforgettable movie night filled with laughter, snacks, and great company! Picture cozying up together, surrounded by soft blankets and pillows. Whether we're cheering for the heroes, solving mysteries, or shedding a tear at touching moments, movie night is all about relaxation. Grab your favorite snacks, pick out a comfy spot, and let's dive into a cinematic journey!",
        location: "Any",
        difficulty: "Normal",
        status: ADVENTURE_STATUS.LOCKED
    },
    {
        id: "51ea83fe-38a8-4d38-97fb-c341f082bcdf",
        imageSrc: "mtb-excursion",
        imageAlt: "A mountain biker riding on mountain trail",
        title: "MTB Excursion",
        description: "Join me for an exhilarating mountain bike excursion that promises adventure, stunning views, and an adrenaline rush like no other! Picture rugged trails winding through majestic paths, rocky terrain challenging our skills, and breathtaking vistas rewarding every climb. Gear up, pack your water bottle, and let's hit the trails for a mountain biking experience that will leave us exhausted!",
        location: "Any",
        difficulty: "Legendary",
        status: ADVENTURE_STATUS.AVAILABLE
    },
    {
        id: "38042f8e-4127-47e7-ac84-280e701a90ee",
        imageSrc: "pine-nursery-walk",
        imageAlt: "A man walking a dog along a stone path",
        title: "Dog Walk",
        description: "Join me for a stroll around this park, where we'll explore scenic trails, lush greenery, and enjoy the company of our furry friends! With each step, we'll immerse ourselves in the peaceful ambiance of the park, take in the fresh air, and relish in our canine companionship. Leash up your pup, grab some treats, and let's embark on a dog walk we'll remember for years to come!",
        location: "Pine Nursery Park",
        difficulty: "Easy",
        status: ADVENTURE_STATUS.UNAVAILABLE
    },
    {
        id: "ad37d657-7cbb-4164-9a2d-6e2f1b0428cc",
        imageSrc: "go-kart-racing",
        imageAlt: "A group of men racing carts",
        title: "Go Kart Racing",
        description: "Join me for an adrenaline-pumping adventure in go-kart racing! Picture zooming around sharp turns, navigating challenging bends, and feeling the thrill of speed as we race against each other. With each lap, the excitement will build; creating an unforgettable experience filled with laughter and friendly rivalry. Buckle up, put on your racing gear, and let's hit the track for a race that will leave us speechless!",
        location: "K1 Speed",
        difficulty: "Heroic",
        status: ADVENTURE_STATUS.AVAILABLE
    },
    {
        id: "0c1a01c5-76c6-4d02-9d66-1fa4bee0bfa2",
        imageSrc: "cat-walk-around-town",
        imageAlt: "A man wearing high heels and red mini skirt in front of a castle",
        title: "Catwalk Around Town",
        description: "Join me for a stylish and fun catwalk around town! We'll strut our stuff, showcase our fashion flair, and enjoy the spotlight! Picture us strolling down bustling streets turning heads with our trendy outfits and confident strides. From chic dresses to casual ensembles, every step will be a statement of our personal style and individuality. Let's hit the town and turn every sidewalk into our own runway!",
        location: "Any",
        difficulty: "Legendary",
        status: ADVENTURE_STATUS.MEMBERS_ONLY
    },
] as const;
