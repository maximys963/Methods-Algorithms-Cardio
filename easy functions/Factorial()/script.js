const input = document.getElementById('input');
const button = document.getElementById('button');
const result = document.getElementById('result');
function factorial(inputVal) {
    if(inputVal > 1){

        return(inputVal * factorial(inputVal-1))
    }else{
        return( inputVal)
    }
}
function count () {
    const inputVal = input.value;
    result.innerText = factorial(inputVal);
}
button.addEventListener('click', count);









