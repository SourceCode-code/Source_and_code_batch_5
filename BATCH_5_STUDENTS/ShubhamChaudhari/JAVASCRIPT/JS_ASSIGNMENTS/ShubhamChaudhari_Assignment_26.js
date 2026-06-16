//1 Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation)
//. In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
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
const ages = [
  31, 26, 34, 37, 27,
  26, 32, 32, 26, 27,
  27, 24, 32, 33, 27,
  25, 26, 38, 37, 31,
  34, 24, 33, 29, 26
];

class Statistics {
  constructor(data) {
    this.data = data;
  }

  count() {
    return this.data.length;
  }

  sum() {
    return this.data.reduce((acc, curr) => acc + curr, 0);
  }

  min() {
    return Math.min(...this.data);
  }

  max() {
    return Math.max(...this.data);
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return this.sum() / this.count();
  }

  median() {
    let sorted = [...this.data].sort((a, b) => a - b);

    let mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2;
    }

    return sorted[mid];
  }

  mode() {
    let frequency = {};

    for (let num of this.data) {
      frequency[num] = (frequency[num] || 0) + 1;
    }

    let modeValue;
    let maxCount = 0;

    for (let key in frequency) {
      if (frequency[key] > maxCount) {
        maxCount = frequency[key];
        modeValue = Number(key);
      }
    }

    return {
      mode: modeValue,
      count: maxCount
    };
  }

  variance() {
    let mean = this.mean();

    let squaredDiffs = this.data.map(
      num => Math.pow(num - mean, 2)
    );

    return (
      squaredDiffs.reduce((a, b) => a + b, 0) /
      this.count()
    ).toFixed(2);
  }

  std() {
    return Math.sqrt(this.variance()).toFixed(2);
  }

  freqDist() {
    let frequency = {};

    for (let num of this.data) {
      frequency[num] = (frequency[num] || 0) + 1;
    }

    let result = [];

    for (let key in frequency) {
      let percentage =
        ((frequency[key] / this.count()) * 100).toFixed(1);

      result.push([Number(percentage), Number(key)]);
    }

    return result.sort((a, b) => b[0] - a[0]);
  }

  describe() {
    console.log("Count:", this.count());
    console.log("Sum:", this.sum());
    console.log("Min:", this.min());
    console.log("Max:", this.max());
    console.log("Range:", this.range());
    console.log("Mean:", this.mean().toFixed(2));
    console.log("Median:", this.median());
    console.log("Mode:", this.mode());
    console.log("Variance:", this.variance());
    console.log("Standard Deviation:", this.std());
    console.log("Frequency Distribution:", this.freqDist());
  }
}

const statistics = new Statistics(ages);

statistics.describe();


//2 Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.