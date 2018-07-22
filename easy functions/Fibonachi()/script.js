const input = document.getElementById('input');
const button = document.getElementById('button');
const result = document.getElementById('result');
const fibonachiVals = [0,1];
function fibonachi(inputVal) {
    if (inputVal === 0){
        return fibonachiVals[0];
    }
    if (inputVal === 1){
        return fibonachiVals[1];
    }
    if(!fibonachiVals[inputVal]){
           fibonachiVals[inputVal]=fibonachi(inputVal-2) + fibonachi(inputVal-1);
    }
    return fibonachiVals[inputVal]

}
function count () {
    const inputVal = input.value;
    fibonachi(inputVal);
    result.innerText = fibonachiVals;
}
button.addEventListener('click', count);









