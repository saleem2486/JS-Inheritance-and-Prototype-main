// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

let parent={
    name:"anwaar",
    roll:12,
    isAdmin:true,
    walk: function () {
                console.log('I AM Parent')
       }
    
}
let child={}
child.__proto__ = parent
child.walk()



// Write code to explain prototype chaining
let obj1={
    name:"MALIK",
     set:function(){
         console.log("let SET")
        }
 }
 let obj2={
     lname:"MUDASIR",
     walks:"true",
 }
    let obj3={
        food:"junk food",
        walks:"true",
    
     }
    
     obj2.__proto__=obj1
     obj3.__proto__=obj2
     obj2.set()// let SET
    obj3.set()// the output is More
    


//Write a JavaScript function to retrieve all the names of object's own and inherited properties.
     for (let key in child) {
        if (child.hasOwnProperty(key)) {
              console.log(key, 'OWN')
          } else {
              console.log(key, 'INHERITED')
          }
     }



     
 //  Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
     let AA=[100,200,300,400,500]
     let res = AA.reduce((acc,curr)=>{
         acc+=curr
         return acc
     },0)
     console.log(res);

    
     
     