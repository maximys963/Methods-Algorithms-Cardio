let sortArray = [2,17,4,3,2,12,4,8,0,9];

function bubbleSort(Array){
    let prevValue = 0;
    let nextValue = 0;
    for (let i = 0; i < Array.length; i++) {
        for (let j = 0; j < Array.length - i; j++) {
            if(Array[j]>Array[j+1]){
                prevValue = Array[j+1];
                nextValue = Array[j];
                Array[j] =  prevValue;
                Array[j+1] = nextValue;
            }
        }
    }
    return Array
}

const ArrayNew = bubbleSort(sortArray);
console.log(`bubble sort result ${ArrayNew}`);