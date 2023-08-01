/* 
1.Declare 4 variables pair1A, pair1B, pair2A, pair2B

2. write if condition to check both the pair with strict equality atleast one pair should be true.
 so the condition is ((pair1A === pair1B) ||(pair2A ===pair2B)

3. If condition satisfies then print "true"

4. Else print "false"
*/

let pair1A = "cat",pair1B ="cat", pair2A=6, pair2B="6";
if((pair1A === pair1B) ||(pair2A ===pair2B)){
    console.log("true");
}
else{
    console.log("false");
}