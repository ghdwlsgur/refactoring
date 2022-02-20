// 유클리드 호제법 (최대공약수)
// 최소공배수 = 두 수의 곱  / 최대 공약수

// 최대공약수
const gcd = (a, b) => {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

// 최소공배수
const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

const solution = arr => {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }

  return answer;
};

const test = [];
test.push(1, 2, 3);
console.log(solution(test));
