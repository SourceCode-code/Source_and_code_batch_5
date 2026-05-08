let yearsLived = 100; // prompt("Enter the years you have lived:")

// Seconds Calculation
let secondsLived = yearsLived * 365 * 24 * 60 * 60
let secondsLeft = (100 - yearsLived) * 365 * 24 * 60 * 60

console.log("Seconds Lived:", secondsLived)
console.log("Seconds Left:", secondsLeft)

// Current Date and Time
let now = new Date()

let dd = String(now.getDate()).padStart(2, '0')
let mm = String(now.getMonth() + 1).padStart(2, '0')
let yyyy = now.getFullYear()
let HH = String(now.getHours()).padStart(2, '0')
let MM = String(now.getMinutes()).padStart(2, '0')

// 24 hours format
console.log(`${dd}:${mm}:${yyyy} ${HH}:${MM}`)   // 08:04:2026 14:30

// 12 hours format (short month - Oct)
let shortMonth = now.toLocaleString('en', { month: 'short' })
let hours12 = now.getHours() % 12 || 12
let ampm = now.getHours() >= 12 ? 'PM' : 'AM'
let hh = String(hours12).padStart(2, '0')
console.log(`${dd}:${shortMonth}:${yyyy} ${hh}:${MM} ${ampm}`)  // 08:Apr:2026 02:30 PM

// 12 hours format (full month - October)
let fullMonth = now.toLocaleString('en', { month: 'long' })
console.log(`${dd}:${fullMonth}:${yyyy} ${hh}:${MM} ${ampm}`)   // 08:April:2026 02:30 PM

// yyyy:mm:DD mm:hh
console.log(`${yyyy}:${mm}:${dd} ${MM}:${HH}`)   // 2026:04:08 30:14