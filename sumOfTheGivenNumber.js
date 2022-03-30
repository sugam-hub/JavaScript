let digit = prompt("Enter number for sum:");
let sum=0;
while(digit>0){
    sum += Math.floor(digit%10);
    digit /= 10;
}
console.log(sum);