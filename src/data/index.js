import gameTexts from "./gameTexts.json";

const getGameTexts = () => gameTexts;

const getRandomGameText = (level) => {
    const gameTexts = getGameTexts();
    const filteredByLevelGameTexts = gameTexts.filter(text => text.level === level);
    const randomNumber = Math.floor( Math.random() * filteredByLevelGameTexts.length);

    return filteredByLevelGameTexts[randomNumber]?.text;
}

export {getGameTexts, getRandomGameText};