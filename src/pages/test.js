const n = 10;
const mu = 55;
const mode = 109;
let ans = 1;

for (let i = 0; i < n; i++) {
  ans = (ans * n) % mode;
}

console.log(ans);
