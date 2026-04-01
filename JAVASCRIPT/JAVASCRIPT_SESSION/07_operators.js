// Operators --> SYMBOLS THAT ARE USED TO PERFORM A OPERTAION

/**
 * DIFFERENT OF OPERTAORS 
 * 
 * 1 ARTHMATIC OPERTORS   --> USED TO PERFROM ARTHMATICS (+,-,*,/,%)
 * 2 ASSIGNMENT OPERTAORS --> USED TO ASSIGN VALUES TO VARIABLE
 * 3 COMPRASION OPERATORS --> USED TO COMPARE TWO VALUE AND RETURN BOOLEAN OUTPUT
 * 4 LOGICAL OPERTORS     --> USED TO PERFOM LOGICAL OPERATIONS 
 * 5 INCREMENT & DECREMENT --> USED TO INCREASE OR DECREASE TEH VALUE OF VARAIBLE 
 * 6 TERNARY OPERTORS     --> USED TO CHECK IF ESLE CONDITION
 * 7 TYPE OF OPERTOR     --> USED TO CHECK TO DATA TYPE OF THE VARIBALES 
 */

/**
 * ------------------ARTHMATIC OPERTAOR---------------
 * 
 * +  --> ADDITION 
 * - --> SUBSTRACTION
 * * --> MULTIPLICATION
 * / --> DIVISION 
 * % -->MODULUS
 * **--> EXPONENTIATIATION
 */

console.log(2+2) // 4


// ---------------------ASSIGNMENT OPERATORS ----------------------------------

// = -> (equal assignment)

let a =10 // here = is assignment operator 
let b = a //  


//+= add and assignment 

let c = 5
let e= 5

// e+=c // e = e+c 
console.log(e+=c)
let d = 10
let f = 100 

// console.log(f+=d) // f = f+d




// -=  subtract and assign

console.log(f-=d) // f=f-d  //90


let aa = 10
let bb = 100

console.log(aa-=bb) //aa = aa-bb

// ------------------------ COMPARSION OPERATORS -----------------

/**
 * >  -->GREATER THAN
 * <  -->LESS THAN
 * >= -->GREATER THAN EQUAL TO 
 * <= -->LESS THAN EQUAL TO 
 * == -->EQUAL  (VALUE)
 * === ->EQUAL VALUE AND EQUAL DATATYPE
 * != -->NOT EQUAL
 * !== -> NOT EQUAL VALUE NOR DATATYPE 

 */

/**
 * NOTE :-  when use 2 comparsion (==) , it will only check the value
 *          but when you use 3 comparison (===) it will check the value as well as datatype 
 */

console.log("2"==2)// true 
console.log(2==="2") // false
console.log(!false) //true


// ------------------------LOGICAL OPERATORS--------------------

// NOTE : LOGICAL OPERATORS ARE USED TO PERFROM LOGICAL OPERTORS AND ITS OUTPUT WILL BE BOOLEAN 

/** WE HAVE TOTAL 3 LOGICAL OPERATORS 
 * AND (&&) 
 * OR  (||)
 * NOT (!)
*/

// AND --> (OUTPUT COMBINATION OPERATOR ) --> 
// IF WE HAVE 2 CONDITION 
// THEN IF WE USE AND OPERATOR THERE IF THE OUTPUT OF BOTH ARE TRUE  --> THEN COMBINE LOGICAL WILL BE TRUE
// IF ONE OF TWO IS FALSE THEN -->THE COMBINE WILL BE FALSE

console.log(3<4&& 200000<100)

/*
T && T ==> T
T && F ==> F
F && T ==> F
F && F ==> F
*/

// OR (||) --> IF ANYONE OF CONDITION IS TRUE THEN THE RESULTS WILL BE TRUE 

console.log(3<4 || 200000<100)

/*
T || T ==> T
T || F ==> T
F || T ==> T
F || F ==> F
*/

// NOT (!) --> THIS IS USED TO REVERSE YOUR OUTPUT 

// !T ==> F
// !F ==>T



// INCREMENT AND DECREMENT --> THIS ARE USED TO INCREASE OR DECRESE THE VALUE OF VARAIBLE 

/**
 * POSTINCREMENT ( VARIABLE++) -->it will first use the value and then increse it by 1 
 * PREINCREMENT ( ++VARIABLE)  -->it will first increase and then we can use it 
 *
 * POST DRECEMENT (VARIABLE--) -->it will first use the value and then decrease it by 1 
 * PRE DRECEMENT ( --VARIABLE) -->it will first decrease and then we can use it
 * 
 * 
 */

let prenum = 10 
console.log(++prenum) //11

let postnum = 10
console.log(postnum++) //10
console.log(postnum) //11



// ----------------------------------TERNARY OPERATORS -------------

// THIS WILL REPRESNT IF ESLE CONDITION

// SYNTAX ---------> (CONDITION)?POSTIVE OUTPUT : NEGATIVE OUTPUT
let age = 18
let canvote  = (age>=18)?"yes you can vote":"no you cannot vote"

console.log(canvote)

let raining =false

let rain= (raining ==true)?" please carry you rain coat its raining":"no there is no need of rain coat"

console.log(rain)