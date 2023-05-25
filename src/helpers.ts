const helpers = {
  getNextKey: (keys: Array<number>): number =>
    keys.reduce((prev, curr) => (prev > curr ? prev : curr), -1) + 1 || 0,
}

export default helpers
