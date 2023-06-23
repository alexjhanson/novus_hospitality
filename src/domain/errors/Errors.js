// Type error.
class IllegalArgumentError extends Error {
    constructor(message) {
        super(message);
        this.name = 'IllegalArgumentError';
      }
}

// Object state error.
class InvalidStateError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidStateError';
      }
}

// Value error.
class InvalidArgumentError extends Error {
  constructor(message) {
      super(message);
      this.name = 'InvalidArgumentError';
    }
}

export {
  IllegalArgumentError,
  InvalidStateError,
  InvalidArgumentError
}