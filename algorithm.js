


addnumbers = () =>{

    var input1 = document.getElementById("nums1").value;
    var input2 = document.getElementById("nums2").value;
    var input3 = document.getElementById("nums3").value;
    var input4 = document.getElementById("nums4").value;
    var input5 = document.getElementById("nums5").value;

    //storing the numbers into an array
    let nums = [input1,input2,input3,input4,input5];
    nums.push(); //pushing numbers into an array


    //display accepted numbers
   document.getElementById("unsorted").innerHTML = `<b>The Unsorted numbers</b>${nums}`;
 
  
//display sorted numbers
   document.getElementById("sorted").innerHTML =`<b>The Sorted numbers</b> : ${sortBestRatingsFirst(nums)}`;
  //console.log(nums);
    
}

sortBestRatingsFirst = (numbers) => {


    for(let j = 0; j < numbers.length - 1; j++) {
    
     
    
        let max_num = numbers[j];
    
        let max_location = j;
     // finding maximum
            for(let i = j; i < numbers.length; i++) {
    
                if(numbers[i] > max_num){
    
                    //find maximum and its index( location)
                max_num = numbers[i]
                max_location = i
                }
    
            }
            //swaping the first and last numbers
            numbers[max_location] = numbers[j];
            numbers[j] = max_num;
    
    
    
            
        }
        return numbers
    }  
    
    