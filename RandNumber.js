function getRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random()*10));
        }, 500)
    })
}

async function randNumber() {
    const num = await getRandomNumber();
    console.log(num);
}

randNumber();