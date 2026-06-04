const numbers = [1,2,3,4];
const doubled = numbers.map(
    function(num){
        return num*2;
    }
)
const tripled = numbers.map(
    (num)=>{
        return num*3
    }



)
const quadrupled = numbers.map(num=>num*4)
console.log(doubled)
console.log(tripled)
console.log(quadrupled)
