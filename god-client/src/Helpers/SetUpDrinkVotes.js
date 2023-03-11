import GetDrinkOptions from './GetDrinkOptions.js';

function SetUpDrinkVotes() {
  let drinkVotes = [];
  let drinkOptions = GetDrinkOptions(5, 0);
  console.log(`Drink options: ${drinkOptions}`);
  drinkOptions.forEach((element) => {
    drinkVotes.push({
      drinkName: element,
      drinkVoteCount: 0,
      drinkChance: 0,
    });
  });
  return drinkVotes;
}

export default SetUpDrinkVotes;
