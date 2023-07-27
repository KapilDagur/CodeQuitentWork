function generateRandomNumber(from, to){
    return (Math.random()*( to - from ))+from ;
}

module.exports.getRandomNumber = generateRandomNumber;