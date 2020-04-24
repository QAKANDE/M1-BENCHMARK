// 21) Given variable X = "John" and Y = "Doe", write on the console log "John <> Doe"
let x="john"
let y="Doe"
console.log(x + '<>' + y)

// 22) Create an object with properties such Name, Surname, Email
// 23) Delete Email from the previously created object
let qObject = {
    name: "quadri",
    surname:"akande",
    email:"quadri@gmail.com"
};
 delete qObject.email
 console.log(qObject)
 
//  ) Create an array with 10 strings in it
 let qArray = ['we' , 'are' , 'very' ,'happy' ,'today' , 'coz' ,"it's" , 'friday','hurray' ,'hurray']

//  ) Print in the console every string in the previous array
 console.log(qArray.toString())

//  Create an array with 100 random numbers in it
 let emptyArray = []
 for (let i=1 ; i<101 ; i++)
 {
     emptyArray.push(i);
 }
 console.log(emptyArray)

//  27) Wrote a function to get the MAX and the MIN from the previously created array
 function getMaxAndMin(s)
 {
      let maxNumber=  Math.max(...s);
      let minNumber = Math.min(...s);
      console.log(maxNumber);
      console.log(minNumber);
 }
getMaxAndMin(emptyArray)
 
// Create an array of arrays, in which every array has 10 random numbers
let nestedArray = [
      sa= [], qd=[]
]
for(let i=1 ; i<10 ; i++)
{
   let randomValues =  Math.floor(Math.random(i) * 10) + 1
    sa.push(randomValues)
    qd.push(randomValues);
}
console.log(nestedArray)

