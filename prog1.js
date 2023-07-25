a=10;
b=20;
c=56;

if(a>b){
    console.log("A is GREATER")
}
else{
    console.log("B is GREATER")
}
if(b>c){
    console.log("B is GREATER")
}
else{
    console.log("C is GREATER")
}
if(c>a){
    console.log("C is GREATER")
}
else{
    console.log("A is GREATER")
}


// ----------------------------------------------------------------------------------------------------------------------------
// --------using airthmetic operators------------------------

a=30;
b=45;
sum=a+b;
sub=a-b;
mul=a*b;
diff=a/b;
mod=a%b;
console.log (sum)
console.log (sub)
console.log (mul)
console.log (diff)
console.log (mod)

// ---------------------------------------------------------------------------------------------------------------------------

// ---------------using relational / conditional operators----------------------

//
// ------------------------------------------------------------------------------------------------------------------------

console.log("Enter The Day : ")
let day=prompt("day");

if ((day=="sat") && (day=="sun"))
{
    console.log("...ITS YOUR OFF....");
}
else if((day=="mon") || (day=="tues") || (day=="wed") || (day=="thurs") || (day=="fri"))
{
    console.log("....ITS YOUR WORKING DAY....");
}

// /---------------------------------------------------------------------------------------------------------------------------
// -----using concatination..............................

const name= " ANNU "
const surname = "DHULL"
const fullname =  name  + " " +  surname
console.log(fullname)

// ---------------------------------------------------------------------------------------------------------------------------
// .............using ternary operator............


let marks = prompt("marks");

Result = (marks>33?"PASS":"FAIL")
console.log(Result)