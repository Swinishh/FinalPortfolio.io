// Initialize an empty array
let array = [];

// Step 1: Populate the array with values directly in console.log()
console.log(array = [20, 30, 23, 45, 67, 87, 54, 2, 99, 56]);

// Step 2: Bubble sort function to sort the array
function bubbleSort() {
    let n = array.length;

    // Outer loop to control the number of passes
    for (let i = 0; i < n; i++) {  // Loop n-1 times for proper sorting
        // Inner loop to compare adjacent elements
        for (let j = 0; j < n- i; j++) {  // Inner loop goes from 0 to n-1-i
            if (array[j] > array[j + 1]) {
                // Swap elements if they're in the wrong order
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

// Step 3: Call bubbleSort to sort the array
bubbleSort();

// Step 4: Output the sorted array
console.log(array);  // Log the sorted array after sorting







       



