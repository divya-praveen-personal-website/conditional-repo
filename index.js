/*
1.declare a variable value

2.write a if statement with condition value is true print "true"

3.if else the value is null (value === null) then print "The null value is falsy"

4.if else value is undefined the (value === undefined)  then print "undefined is falsy"

5.if else value is zero (value === 0) then print "The number 0 is falsy (the only falsy number)"

6.if else the value is a empty string (value === "") then print "The empty string is falsy (the only falsy string)"

*/

let value = 2;
if(value ){
    console.log("true");
}
else if(value === false){
    console.log("The boolean value false is falsy");
}
else if(value === null){
    console.log("The null value is falsy");
}
else if(value === undefined){
    console.log("undefined is falsy");
}
else if(value === 0){
    console.log("The number 0 is falsy (the only falsy number)");
}
else if(value === ""){
    console.log("The empty string is falsy (the only falsy string)")
}

