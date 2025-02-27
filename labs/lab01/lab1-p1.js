const lodash = require("lodash")

const holidays = [
    {name: "Christmas",date:new Date("2025-12-25")},
    {name: "Canada Day",date:new Date("2025-07-01")},
    {name: "April Fools",date:new Date("2025-04-01")},
]
let today = new Date();
holidays.forEach(holiday => {
    //console.log(holiday)
    let dateDifference = holiday.date - today
    let days = Math.ceil(dateDifference/(1000 * 60 * 60 * 24))
    console.log(days," days untill ",holiday.name)
})

console.log(lodash.sample(holidays))
console.log(lodash.findIndex(holidays, {name: "Christmas"}))
console.log(lodash.findIndex(holidays, {name: "Canada Day"}))
console.log(lodash.findIndex(holidays, {name: "April Fools"}))
