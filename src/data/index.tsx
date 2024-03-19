export type AdventureProps = {
    id: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    location: string;
    difficulty: string;
    status: ADVENTURE_STATUS
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
        description: "Fun for all ages, The Village’s Mini Golf course offers 18 holes, including obstacles! Create lasting memories with everyone by playing a friendly game, or by keeping score for a competitive round of Mini Golf. Bring your own putter, or use one of our own colorful putters and golf balls. The Mini Golf course offers fun for everyone. Bring the whole family down to play a friendly game.",
        location: "Village Mini Golf",
        difficulty: "Easy",
        status: ADVENTURE_STATUS.AVAILABLE
    },
    {
        id: "800af8a5-bd13-4596-9b13-63e4f24d5549",
        imageSrc: "axe-throwing",
        imageAlt: "An axe thrown at a target",
        title: "Axe Throwing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lorem volutpat, bibendum neque quis, commodo urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id velit tortor. Donec eget ligula sit amet nisi consequat mollis. Praesent eget lacus pellentesque, faucibus dolor et, mattis erat. Suspendisse potenti. Etiam non facilisis erat, ornare rhoncus odio. Vestibulum venenatis augue id cursus vestibulum.",
        location: "Unofficial Logging Co.",
        difficulty: "Normal",
        status: ADVENTURE_STATUS.AVAILABLE
    },
    {
        id: "ea724ad6-acec-4329-bc05-6f714631b5dc",
        imageSrc: "alpaca-farm",
        imageAlt: "An alpaca on a farm",
        title: "Alpaca Farm",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lorem volutpat, bibendum neque quis, commodo urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id velit tortor. Donec eget ligula sit amet nisi consequat mollis. Praesent eget lacus pellentesque, faucibus dolor et, mattis erat. Suspendisse potenti. Etiam non facilisis erat, ornare rhoncus odio. Vestibulum venenatis augue id cursus vestibulum.",
        location: "Crescent Moon Ranch",
        difficulty: "Easy",
        status: ADVENTURE_STATUS.AVAILABLE
    },
    {
        id: "52ca613c-1dea-41ac-a91d-40890fe766f7",
        imageSrc: "ice-skating-lesson",
        imageAlt: "A woman wearing ice skates and skating on ice",
        title: "Ice Skating Lesson",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lorem volutpat, bibendum neque quis, commodo urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id velit tortor. Donec eget ligula sit amet nisi consequat mollis. Praesent eget lacus pellentesque, faucibus dolor et, mattis erat. Suspendisse potenti. Etiam non facilisis erat, ornare rhoncus odio. Vestibulum venenatis augue id cursus vestibulum.",
        location: "The Pavilion",
        difficulty: "Heroic",
        status: ADVENTURE_STATUS.AVAILABLE
    },
    {
        id: "c6843858-cf68-4d7b-93a8-c439e11e887c",
        imageSrc: "movie-night",
        imageAlt: "A group of musicians playing in a circle",
        title: "Movie Night",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lorem volutpat, bibendum neque quis, commodo urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id velit tortor. Donec eget ligula sit amet nisi consequat mollis. Praesent eget lacus pellentesque, faucibus dolor et, mattis erat. Suspendisse potenti. Etiam non facilisis erat, ornare rhoncus odio. Vestibulum venenatis augue id cursus vestibulum.",
        location: "Any",
        difficulty: "Normal",
        status: ADVENTURE_STATUS.LOCKED
    },
    {
        id: "51ea83fe-38a8-4d38-97fb-c341f082bcdf",
        imageSrc: "mtb-excursion",
        imageAlt: "A mountain biker riding on mountain trail",
        title: "MTB Excursion",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lorem volutpat, bibendum neque quis, commodo urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id velit tortor. Donec eget ligula sit amet nisi consequat mollis. Praesent eget lacus pellentesque, faucibus dolor et, mattis erat. Suspendisse potenti. Etiam non facilisis erat, ornare rhoncus odio. Vestibulum venenatis augue id cursus vestibulum.",
        location: "Lorem Ipsum",
        difficulty: "Legendary",
        status: ADVENTURE_STATUS.AVAILABLE
    },
    {
        id: "38042f8e-4127-47e7-ac84-280e701a90ee",
        imageSrc: "pine-nursery-walk",
        imageAlt: "A man walking a dog along a stone path",
        title: "Pine Nursery Walk",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lorem volutpat, bibendum neque quis, commodo urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id velit tortor. Donec eget ligula sit amet nisi consequat mollis. Praesent eget lacus pellentesque, faucibus dolor et, mattis erat. Suspendisse potenti. Etiam non facilisis erat, ornare rhoncus odio. Vestibulum venenatis augue id cursus vestibulum.",
        location: "Pine Nursery Dog Park",
        difficulty: "Easy",
        status: ADVENTURE_STATUS.UNAVAILABLE
    },
    {
        id: "ad37d657-7cbb-4164-9a2d-6e2f1b0428cc",
        imageSrc: "go-kart-racing",
        imageAlt: "A group of men racing carts",
        title: "Go Kart Racing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lorem volutpat, bibendum neque quis, commodo urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id velit tortor. Donec eget ligula sit amet nisi consequat mollis. Praesent eget lacus pellentesque, faucibus dolor et, mattis erat. Suspendisse potenti. Etiam non facilisis erat, ornare rhoncus odio. Vestibulum venenatis augue id cursus vestibulum.",
        location: "K1 Speed",
        difficulty: "Heroic",
        status: ADVENTURE_STATUS.AVAILABLE
    },
    {
        id: "0c1a01c5-76c6-4d02-9d66-1fa4bee0bfa2",
        imageSrc: "cat-walk-around-town",
        imageAlt: "A man wearing high heels and red mini skirt in front of a castle",
        title: "Catwalk Around Town",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lorem volutpat, bibendum neque quis, commodo urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id velit tortor. Donec eget ligula sit amet nisi consequat mollis. Praesent eget lacus pellentesque, faucibus dolor et, mattis erat. Suspendisse potenti. Etiam non facilisis erat, ornare rhoncus odio. Vestibulum venenatis augue id cursus vestibulum.",
        location: "Multiple Locations",
        difficulty: "Legendary",
        status: ADVENTURE_STATUS.MEMBERS_ONLY
    },
] as const;
