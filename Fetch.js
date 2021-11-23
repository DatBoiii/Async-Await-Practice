async function getLocation (cityName) {
    const geocode = await fetch("https://geocode.xyz/seattle?json=1");
    const Data = await geocode.json();
    console.log("Latitude is: " + Data.latt + "\n Longitude is: " + Data.longt);
}

getLocation();