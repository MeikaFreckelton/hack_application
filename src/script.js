// let p = document.getElementById("fact")


const callEventsApi = async (month, day) => {
    const call = await fetch(`https://byabbe.se/on-this-day/${month}/${day}/events.json`)
    .then((res) => res) // returns our result
    .catch((err) => err) // returns the error
    
    const result = await call.json() // this is gonna fetch API returns 'readableStream', you must run .json() to convert it to JSON. weird thing just to change it back to json
    const eventList = result.events;
    const randomEvent = eventList[Math.floor(Math.random() * eventList.length)];
    console.log(randomEvent.year)
    console.log(randomEvent.description)
    
}
    
const callDeathApi = async (month, day) => {
    const call = await fetch(`https://byabbe.se/on-this-day/${month}/${day}/deaths.json`)
    .then((res) => res) // return our result
    .catch((err) => err) // returns the error
    const result = await call.json() // this is gonna fetch API returns 'readableStream', you must run .json() to convert it to JSON. same as up^^

    const deathList = result.deaths;
    const randomDeath = deathList[Math.floor(Math.random() * deathList.length)];
    return {
    year: randomDeath.year,
    description: randomDeath.description
    }
}
    
const callBirthApi = async () => {
    const call = await fetch(`https://byabbe.se/on-this-day/${month}/${day}/births.json`)
    .then((res) => res) // return result
    .catch((err) => err) // return error

    const result = await call.json() // Fetch API returns 'readableStream', you must run .json() to convert it to JSON.
    const eventList = result.events;
    const randomEvent = eventList[Math.floor(Math.random() * eventList.length)];
    console.log(randomEvent.year)
    console.log(randomEvent.description)

}