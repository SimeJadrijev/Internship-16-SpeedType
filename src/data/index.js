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
    const randomNumber = Math.floor( Math.random() * gameTexts.length);

    return gameTexts.filter(text => text.level === level)[randomNumber]?.text;
}

// export {getGameTexts, getGameTextsByLevel, getRandomText};
export {getGameTexts, getRandomGameText};