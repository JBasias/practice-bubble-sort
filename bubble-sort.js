
function bubbleSort(A) {

    // Iterate through the array

    let Is=true; let cry;

    while(Is)
    {
       Is=false;
       for(let i=0;i<A.length-1;i++)
       {
           if(A[i]>A[i+1])
            {
                Is=true;
                cry=A[i];
                A[i] = A[i+1];
                A[i+1] =cry;
                console.log(A.join(","));
                //break;
            }
       }

       //console.log(A.join(","));
    }

      // If the current value is greater than its neighbor to the right
        // Swap those values

        // Do not move this console.log
       // console.log(A.join(","));

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning

}

module.exports = bubbleSort;
