//1.Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours1 = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

document.write(`${year}/${month}/${date} ${hours1}:${minutes}`);