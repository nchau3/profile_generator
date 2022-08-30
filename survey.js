const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const surveyData = {};

rl.question('What is your preferred name or nickname? ', (answer) => {
  surveyData.name = answer;
    rl.question('What is an activity you like doing? ', (answer) => {
      surveyData.activities = answer;
      rl.question('What kind of music do you like? ', (answer) => {
        surveyData.favMusic = answer;
        rl.question('What is your favourite meal (eg: dinner, breakfast, etc.)? ', (answer) => {
          surveyData.favMeal = answer;
          rl.question('What do you like to eat for your favourite meal? ', (answer) => {
            surveyData.favFoodAtMeal = answer;
            rl.question('Where is your favourite place to be? ', (answer) => {
              surveyData.favPlaceToBe = answer;
              rl.question('What is something you look forward to this year? ', (answer) => {
                surveyData.lookingForwardTo = answer;
                rl.close();
                console.log(`Hi, my name is ${surveyData.name}! I like ${surveyData.activities} and listening to ${surveyData.favMusic} music. My favourite meal of the day is ${surveyData.favFoodAtMeal} for ${surveyData.favMeal}, and there's no place I'd rather be than ${surveyData.favPlaceToBe}. I can't wait for ${surveyData.lookingForwardTo}!`);
            });
          });
        });
      });
    });
  });
});

