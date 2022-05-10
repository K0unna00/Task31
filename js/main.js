var array=[3,4,2,5,2];

function MaxInt(array){
    let max=0;
    for (const item of array) {
        if(max<item){
            max=item;
        }
    }
    return max;
}
function SumEven(array){
    let sum=0;
    for (const item of array) {
        if(item%2==0){
            sum+=item;
        }
    }
    return sum;
}
function SQRT(num1 , num2){
    let temp = num1;
    for (let index = 0; index < num2-1; index++) {
        num1*=temp;
    }
    return num1;
}
alert(MaxInt(array));
alert(SumEven(array));


var num1=prompt("1ci eded");
var num2=prompt("2ci eded");
alert("Cavab" + " " + SQRT(num1,num2));