// ";" is not as important for javascript
console.log("Hello, World!");
//type "node main.js" in the terminal

let year = 1398;
let name = "SKKU";

const department = "Computer Science and Engineering";
const ids = [20220001, 20220002, 20220003, 20220004, 20220005];

console.log(name);

console.log(typeof "123");  //string
typeof Number("123");   //number

typeof 123; //number
typeof String(123); //string
typeof (123).toString(); //string

if (name === "SKKU") 
{
    console.log("Welcome to SKKU")
}
else if (name == "SKU")
{
    console.log("Welcome?")
}
else
{
    console.log("Bye")
}

//for can be similar to c or python
const arr = ["Open", "Source", "Software"]
for (let i = 0; i < 3; i++) console.log(i, arr[i])// 0 Open 1 Source 2 Software
for(let idx in arr) console.log(idx)    //012
for(let val of arr) console.log(val)    //Open Source Software


//arrays
const a = ["Open", "Source", "Software", 1398, ["Linux", "Windows", "MacOS"]];

console.log(a.length); //5
console.log(typeof a); //object
console.log(Array.isArray(a));//true

let IDCLab = {
    director: {
        name: "Jaemin Jo"
    },
    students: [
        {name: "John", id: 111},
        {name: "Zoey", id: 112},
        {name: "Chen", id: 113, graduated: true},
    ]
}

console.log(IDCLab.director)
console.log(IDCLab.director.name)
console.log()
console.log(IDCLab.students)
console.log(IDCLab.students[0].name)

for(const student of IDCLab.students) {
    if(student.graduated) console.log(student.name + " graduated")
    else console.log(student.name + " is studying")
}