// array of animals, writtenin plural with first capital letter
const animals = [
    "Cats",
    "Dogs",
    "Elephants",
    "Giraffes",
    "Horses",
    "Lions",
    "Monkeys",
    "Pigs",
    "Rabbits",
    "Sheep",]

// array of cities

const cities = [
    "Berlin",
    "Hamburg",
    "Munich",
    "Cologne",
    "Frankfurt",
    "Stuttgart",
    "Dusseldorf",
    "Dortmund",]

const getTeamName = () => {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];

    return `${randomCity} ${randomAnimal}`;
};

export const backup = {
    league: "German National League",
    round: "1",
    opponent: getTeamName(),
    venue: "hall",
    startTime: "05/05/2021 12:00",
    numberOfPlayers: "12",
};