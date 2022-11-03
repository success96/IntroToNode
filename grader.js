const average = function (numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  avg = Math.round(sum / numbers.length);
  console.log(avg);
};

let scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);
let scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 40];
average(scores2);

/*const average = function (numbers) {
  let sum = 0;
  numbers.forEach(function(score){sum+=score})
  avg = Math.round(sum / numbers.length);
  console.log(avg);
  */
