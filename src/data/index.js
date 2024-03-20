import gameTexts from "./gameTexts.json";

const getGameTexts = () => gameTexts;

// FIXME
// const getGameTextsByLevel = (level) => {
//     const result = text.filter((text) => text.level === level);
//     return result;
// }

// const getRandomText = (allTexts) => {
//     const randomNumber = Math.floor( Math.random() * allTexts.length);
//     const result = allTexts[randomNumber];
//     return result;
// }

const getRandomGameText = (level) => {
    const gameTexts = getGameTexts();
    const filteredByLevelGameTexts = gameTexts.filter(text => text.level === level);
    const randomNumber = Math.floor( Math.random() * filteredByLevelGameTexts.length);

    return filteredByLevelGameTexts[randomNumber]?.text;
}

// export {getGameTexts, getGameTextsByLevel, getRandomText};
export {getGameTexts, getRandomGameText};