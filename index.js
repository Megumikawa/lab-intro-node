class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  
  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => {
      return a - b 
    })
    this.length = this.items.length
    return this.items
  }

  get(pos) {
    if(pos < this.length){
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    } 
    let maxNum = 0
    for(let i = 0; i < this.length; i++) {
      if(maxNum < this.items[i]){
        maxNum = this.items[i]
      }
    }
    return maxNum
  }

  min() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }
    let minNum = this.items[0]
    for(let i = 1; i< this.length; i++) {
      if(minNum >= this.items[i]){
        minNum = this.items[i]
      }
    }
    return minNum
  }

  sum() {
    let total = this.items.reduce((accumulator,currentValue) =>{
      return accumulator + currentValue
    },0)
    return total
  }

  avg() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }
    let result = this.sum()
    return (result/this.items.length)
  }
}

module.exports = SortedList;
