function* fib() {
  let a = 0;
  let b = 1;
  while (true) {
    yield b;
    [a, b] = [b, a + b]
  }
}

const myFib = fib();
console.log(myFib.next());
console.log(myFib.next());
console.log(myFib.next());
console.log(myFib.next());
console.log(myFib.next());
console.log(myFib.next());
console.log(myFib.next());
console.log(myFib.next());
