// Project Mixed Messages. The message will be meteorological forecast.
const firstWord = ['Сегодня', 'Завтра', 'Послезавтра'];
const secondWord = ['сильный', 'слабый', 'переменчивый'];
const thirdWord = ['дождь', 'снег', 'туман'];


function mixedMessages () {
    let randFirstWord = firstWord[Math.floor(Math.random() * firstWord.length)];
    let randSecondWord = secondWord[Math.floor(Math.random() * secondWord.length)];
    let randThirdWord = thirdWord[Math.floor(Math.random() * thirdWord.length)];

    console.log(randFirstWord + ' ожидается ' + randSecondWord + ' ' + randThirdWord);
    
}

mixedMessages();