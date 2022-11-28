//TASK1 

/*const numberFirst = prompt('Podaj liczbe calkowitą:');
console.log(typeof(numberFirst));
const numberAfterParseIntFirst = parseInt(numberFirst)
console.log(typeof(numberAfterParseIntFirst));
function calculateSquareArea(height){
    return height * height
}
console.log(calculateSquareArea(numberAfterParseIntFirst))
*/

const anotherNumberFirst = prompt('Podaj liczbe:');
const anotherNumberFirstAfterParseFloat = parseFloat(anotherNumberFirst);
console.log(anotherNumberFirstAfterParseFloat.toPrecision(3));
console.log(calculateSquareArea(anotherNumberFirstAfterParseFloat).toFixed(2));


//TASK 2
const str = "abcde";
let tabOfStr = [...str];

console.log(tabOfStr.pop());
console.log(tabOfStr);
tabOfStr.pop()
console.log(tabOfStr);
console.log(tabOfStr.shift());

function shiftIt(args){
    args.pop()
    args.shift()
    let argsStr = args.toString()
    return argsStr
}
console.log(shiftIt(tabOfStr));

if (3.1+2+3 === "6") {
    console.log("Prawda");
}else{
    console.log("Fałsz");
}
console.log(typeof(3.1+2+3));

const emailStr = "mariusz@gmail.com"
const femail = "kasia@example.com"
const semail = "adam.kowalski@domena.pl"
function getEmailParts(email){
    if (email.indexOf('@') && email.indexOf('.')) {
        let positiona = email.indexOf('@')
        let afterDot = email.slice()
        emailObj = {
            pars: email.split('@'),
            name: email.substring(0, positiona),
            domain: email.substr(positiona+1, email.length),
            domainExt : email.slice(email.lastIndexOf('.')+1)
        }
        return emailObj;
    } else {
        return null;
    }
}
console.log(getEmailParts(femail));
console.log(getEmailParts(semail));
//console.log(emailStr.slice(emailStr.lastIndexOf('.')+1));

//TASK 6

const strSix = "Zło to zło mniejsze większe średnie";
function reverseSent(args){
    let newStr = args.split(" ");
    for (let i = 0; i < newStr.length; i++) {
        newStr[i].reverse();
        
    }
    console.log(newStr);
    let anotherStr = newStr.toString()
    console.log(anotherStr);
    anotherStr.replaceAll(' ', '')
    let anStr = anotherStr.replaceAll(',', ' ')
    console.log(anStr);
    return anStr
}
console.log(reverseSent(strSix))

//TASK 7

function BMI(m,w){
    let res = m/(w**w)
    console.log(res);
    switch (res) {
        case (res<=18.5):
             return "Underweight"
            break;
        case (res<=25.0):
            return "Normal"
            break;
        case (res<=30.0):
            return "Overweight"
            break;
        case (res>30.0):
            return "Obese"
            break;
        default:
            break;
    }
}
console.log(BMI(67,1.85))

//TASK 8

let cars = ['dodge', 'chevy', 'gmc', 'pontiac', 'acura', 'toyota'];
let sold = []
for (let i = 0; i <= 2; i++) {
    sold.push(cars.shift())
    
}
console.log(`Sprzedane ${sold} pozostałe ${cars}`);
cars.push('nissan')
cars.push('porsche')
cars.push('merc')
console.log(cars);
cars.unshift('gmc')
console.log(cars);

//TASK 9

const emailStr = "ola@domena.com"
function getEmailParts(email){
    if (email.indexOf('@') && email.indexOf('.')) {
        let positiona = email.indexOf('@')
        let emailTab = email.split('@')
        let dotPoint = email.indexOf('.')
        emailObj = {
            user: emailTab[0],
            domainName: email.slice(positiona+1, dotPoint),
            domainExt: email.slice(dotPoint+1, email.length)
        }
        return emailObj;
    } else {
        return null;
    }
}
console.log(getEmailParts(emailStr));


//TASK 10

function kebab(a){
     let tab=a.split(" ");
     return (Math.max(...tab) +" "+Math.min(...tab));
    }
let arr = "1 2 3 4 5 6"
let tab=arr.split(" ");
console.log(tab);
console.log((Math.max(...tab) +" "+Math.min(...tab)));

//TASK 11

function filterArr(arr, callback){
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]) == true) {
            console.log(arr[i]);
        }
        
    }
}
const nameCheck = (name) => {
    if (name.length > 3) {
        return true
    }else{
        return false
    }
}
const tab = [ "Ania", "Kasia", "Ola", "Daniel"]
filterArr(tab, nameCheck)

//TASK 12

let numbers = [1,2,3,4,5,6];
function changeArr(arr, callback){
    for (let i = 0; i < arr.length; i++) {
        console.log(callback(arr[i]))
        
    }
}
console.log(changeArr(numbers, (num)=>{
    return num*2;
}));

//TASK 13

const getRektArea = (a,b) => {
    return a*b
}
console.log(getRektArea(-2,3));
console.log(getRektArea(-10,4));


//TASK 14

function createTable(countOfTabs, countOfColumns, charA, charB){
    let newTab = []
    for (let i = 1; i <= countOfTabs; i++) {
        let newQube = []
        newQube.length = countOfColumns;
        for (let i = 0; i < newQube.length/2; i++) {
            newQube.push(charA)
            newQube.push(charB)
            
        }
        newTab.push(newQube);
        //console.log(newTab);
    }
    return newTab;
}
console.log(createTable(5, 5, 'A', 'B'));


//TASK 15

function nextPalin(arg){
    let num = true;
    args = arg+1
    while (num==true){
        args.toString();
        let argsTab = [...args];
        let isPalindrom = false;
        for (let i = 0; i < argsTab.length/2; i++) {
            if (argsTab[i]==argsTab[argsTab.length-i]) {
                isPalindrom = true;
            }
            else{
                isPalindrom = false;
            }
            
        }
        if (isPalindrom == true) {
            num=false
            console.log(args);
        }else{
            args = args+1;
        }
    }

}
console.log(nextPalin(39));

//TASK 16

const firstTabForFiveTask = [
    [1,2,3,4,5,6,7,8,9,10],
    [10,9,8,7,6,5,4,3,2,1]
]
const secondTabForFiveTask = [
    [10,9,8,7,6,5,4,3,2,1],
    [1,2,3,4,5,6,7,8,9,10]
]

function multipleTable(tab1, tab2) {
    let newTab = []
    for (let i = 0; i < 2; i++) {
        let newQube = []
        for (let j = 0; j < 10; j++) {
            
            newQube.push(tab1[i][j]*tab2[i][j])
            
        }
        newTab.push(newQube);
        
    }
    console.log(newTab);
}
multipleTable(firstTabForFiveTask, secondTabForFiveTask)

let nr = "52.11"
let n = 29.678
console.log(Math.floor(n));

//TASK 4
//ALFANUMERYCZNY

const l = "a9dfcvsf9s_f";
l.includes(' ') || l.includes('_') ? console.log('Ciąg nie jest'): console.log('Ciąg jest');