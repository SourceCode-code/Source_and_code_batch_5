// 1 Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and 
// measure of variability(range, variance, standard deviation)
// . In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample.
//  You can create a class called Statistics and create all the functions which do statistical calculations as
//  method for the Statistics class. Check the output below.
// ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// // you output should look like this
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

class Statistics {
  constructor(sample) {
    this.sample = [...sample]
    this.sortedSample = [...sample].sort((a, b) => a - b)
  }

  mean() {
    const sum = this.sample.reduce((acc, val) => acc + val, 0)
    return sum / this.count()
  }

  median() {
    const n = this.count()
    const mid = Math.floor(n / 2)
    if (n % 2 !== 0) {
      return this.sortedSample[mid]
    }
    return (this.sortedSample[mid - 1] + this.sortedSample[mid]) / 2
  }

  mode() {
    const frequencies = this.frequencyDistribution()
    let maxFreq = 0
    let modes = []

    for (const [val, freq] of Object.entries(frequencies)) {
      if (freq > maxFreq) {
        maxFreq = freq;
        modes = [Number(val)]
      } else if (freq === maxFreq) {
        modes.push(Number(val))
      }
    }
    return { mode: modes, count: maxFreq }
  }

  range() {
    return this.max() - this.min()
  }


  
  
  min() {
    return this.sortedSample[0]
  }

  max() {
    return this.sortedSample[this.sortedSample.length - 1]
  }

  count() {
    return this.sample.length
  }

  
  frequencyDistribution() {
    return this.sample.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1
      return acc
    }, {})
  }
  // Summary helper method
  describe() {
    const modeInfo = this.mode()
    return {
      count: this.count(),
      min: this.min(),
      max: this.max(),
      range: this.range(),
      mean: Number(this.mean().toFixed(2)),
      median: this.median(),
      mode: modeInfo.mode,
      frequencyDistribution: this.frequencyDistribution()
    };
  }

}
/*{
  count: 25,
  min: 24,
  max: 38,
  range: 14,
  mean: 29.76,
  median: 29,
  mode: [ 26 ],
  frequencyDistribution: {'24': 2,'25': 1,'26': 5,'27': 4,'29': 1,'31': 2,'32': 3,'33': 2,'34': 2,'37': 2, '38': 1 }
}
*/

// --- Execution ---
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const stats = new Statistics(ages)
console.log(stats.describe())


// 2 Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and 
// it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
  constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
    this.incomes = new Set()
    this.expenses = new Set()
  }

  addIncome(amount, description) {
    this.incomes.add({ amount, description })
  }

  addExpense(amount, description) {
    this.expenses.add({ amount, description })
  }

  totalIncome() {
    let total = 0
    for (let income of this.incomes) {
      total += income.amount
    }
    return total
  }

  totalExpense() {
    let total = 0
    for (let expense of this.expenses) {
      total += expense.amount
    }
    return total
  }

  // Calculates the remaining balance
  accountBalance() {
    return this.totalIncome() - this.totalExpense()
  }

  // Returns formatted account details and summary
  accountInfo() {
    return `
Account Holder: ${this.firstname} ${this.lastname}
Total Income: $${this.totalIncome()}
Total Expense: $${this.totalExpense()}
Current Balance: $${this.accountBalance()}
    `
  }
}


const myAccount = new PersonAccount("ajay", "mehta")

// Adding Incomes
myAccount.addIncome(5000, "Monthly Salary")
myAccount.addIncome(200, "Freelance Design")

// Adding Expenses
myAccount.addExpense(1200, "Rent")
myAccount.addExpense(150, "Groceries")
myAccount.addExpense(50, "Streaming Services")


console.log(myAccount.accountInfo())
/*
Account Holder: ajay mehta
Total Income: $5200
Total Expense: $1400
Current Balance: $3800
    */
   //=======================================================