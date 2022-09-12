export const nftInfo = {
    brief: 'Before my developer days I wanted to create my own NFT project. It had to be a collection of animated characters  ',
    description: "A collection of 3,333 statistically randomised NFT's from hand-drawn assets on the Ethereum blockchain. This project features it's own website and minting dApp which allows a user to buy an NFT's from the smart-contract. The website was created on Webflow and all the concepts were designed and created by myself. The illustrations were created using Adobe Illustrator and the animations were created with Adboe After Effects and Adobe Animate",
    challenges: [
        "Creating 3,333 randomised, animated GIFs - This was achieved by drawing individual assets and animating them separately. The animation of the object was then converted into a 30 frame sprite sheet, once all the assets had been animated and converted into sprite sheets, I used JavaScript to randomly layer assets on top of each other. The resulting sprite sheet was then sliced and converted into a GIF using Javascript.",
        "Metadata - Each animated GIF has a corresponding JSON metadata file. These files were created during the randomisation process and contain all the information about the character. This metadata contains an url that points to where the GIF is stored, GIFS were stored on IPFS and then all metadata files had to updated to reflect the storage location on the network. After all the JSON were updated they were then stored on IPFS.",
        "Minting dApp and Gas limits -"
    ],
    tools: [
        "Languages: Javascript, React, Solidity.",
        "Applicatons: Webflow, Adobe Illustrator, Adobe Animate, Adobe After Effects, Adobe Media Encoder."
    ],
    reflections: [
        "Managing communities is a job in itself"
    ],
    links: {
        link: 'https://test-407fa6.webflow.io/',
        comment: 'CRAZY BEANZ'
    }
}

export const blackjackInfo = {
    brief: 'Create a browser game that allows a user to play blackjack, earn rewards, level up and play mini-games',
    description: "Browser mini-game created by a team of three using Github. This app utilises local storage. Users can play blackjack, place wagers, level up, un-lock new blackjack tabels and wager on mini-games such as the Wheel Of Fortune, Roll the Dice and more.",
    challenges: [
        "Simple game logic can get complicated quickly.",
        "The Ace problem.",
        "Splitting a hand."
    ],
    tools: [
        "Languages: Javascript, React.",
        "Applicatons: Adobe Illustrator.",
        "Frameworks: MaterialUI."
    ],
    reflections: [
        "MaterialUI looks great but isn't the most flexible",
        "Needs more emphasis on making the art-style unique."
    ],
    links: {
        link: '',
        comment: 'n/a'
    }
}

export const cryptoInfo = {
    brief: 'Build a web app that allows a user to track the top 100 cryptocurrencies, create favourites and view charts for different time scales.',
    description: "A simple web app made over a weekend. Users can can track the top 100 coins and create a favourite list. The app features a search bar and charting system, users can select a time scale which submits a new API request to Coingecko to display historic price data.",
    challenges: [
        "Coingecko API only allows a certain amount of calls per minute",
        "Labelling x-axis for different time scales."
    ],
    tools: [
        "Languages: Javascript, React.",
        "API's: Coingecko.",
        "Libraries: Chart.js."
    ],
    reflections: [
        "Chart.js is good for simple charting but does not have complex functionality, like HighCharts.",
    ],
    links: {
        link: '',
        comment: 'n/a'
    }
}


export const calorieInfo = {
    brief: 'Create a web app that allows a user to set calorie targets for each day, create food types and set reminders. Users should be able to confirm that they have eaten a food and have their progress update.',
    description: "Full stack web-app using Python, Flask and PostgreSQL. Allows multiple users to track calories and create food types and assign them to specific days. Users can create food types with a calorie value and save them to the database, users can see all food types created by other users. Foods can be added to specific days and checked if they've been eaten or not, the target calories will update dynamically and the progress bar will reflect that.",
    challenges: [
        "All the functionality it present on a single page for simplicity.",
        "Made using Flask so quite heavy, every action needs to be computed on the server and results in a new page load with database querry."
    ],
    tools: [
        "Languages: Python",
        "Framework: Flask"
    ],
    reflections: [
        "Interesting learning experience but I was limited to using Flask so the UI is relatively basic."
    ],
    links: {
        link: '',
        comment: 'n/a'
    }
}

export const siteInfo = {
    brief: 'Build my own portfolio site from scratch using React.js and learn a new library along the way.',
    description: "Portfolio website created using React, Three.js & MaterialUI. Three.js is a javascript library that uses WebGL to create 3D graphics in the browser. The project features many Three.js components that interact with the users mouse-movement, the 3D textures are normal maps and do not contain any lighting/ shading to improve preformance.",
    challenges: [
        "Preformance issues and frame-rate drops due to lighting and materials.",
        "Creating a design theme that was coherent and simple."
    ],
    tools: [
        "Languages: Javascript, React.",
        "Libraries: Three.js, MaterialUI"
    ],
    reflections: [
        "Three.js is an awesome library.",
        "React Three Fiber would be better suited."
    ],
    links: {
        link: 'https://www.chrisholt.codes',
        comment: 'Portfolio site'
    }
}