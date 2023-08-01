/*

1. declare a sum,num1 and num2

2. add num1 and num2 then assign it to the sum

3. if (sum <= -1000) is less than -1000 print sum + " is less than -1000";

4. if else(sum < 0) result is negative value print sum + " is a negative number"

5. if else(sum == 0) sum is equal to 0 the print sum + " is equal to 0";

6. if else(sum > 0) sum is larger than 0 then print sum + " is larger than 0";

7. if else(sum >=100) sum is greater than 100 then print sum + " is greater than 100";
*/

let num1 = a,num2 =b,sum;

sum=num1+num2;

if(sum < -1000){
    console.log(sum+ " is less than -1000");
}
 if(sum < 0 && sum >= -1000){
    console.log(sum+ " is a negative number");
}
else if(sum === 0){
    console.log( sum+" is equal to 0");
}
else if(sum > 0 && sum <= 100){
    console.log(sum+" is larger than 0");
}
else if(sum > 100){
     console.log(sum + " is greater than 100");
}
else{
    console.log("Please enter numbers");
}