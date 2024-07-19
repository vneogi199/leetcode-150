class RandomizedSet {
  numMapping: Record<number, number> = {};
  numList: number[] = [];
  constructor() {

  }

  insert(val: number): boolean {
    if (this.numMapping[val] !== undefined) {
      return false;
    }
    this.numList.push(val);
    this.numMapping[val] = this.numList.length - 1;
    return true;
  }

  remove(val: number): boolean {
    const idx = this.numMapping[val];
    if (this.numList.length === 0) { return false; }
    if (idx === this.numList.length - 1) {
      this.numList.pop();
      delete this.numMapping[val];
      return true;
    }
    if (idx !== undefined) {
      const popped = this.numList.pop() as number;
      this.numList[idx] = popped;
      delete this.numMapping[val];
      this.numMapping[popped] = idx;
      return true;
    }
    return false;
  }

  getRandom(): number {
    const randomIdx = Math.floor(Math.random() * this.numList.length);
    return this.numList[randomIdx];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

