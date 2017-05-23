var arrayPairSum = function(nums) {
    var quickSort = function(arr) {
        if(arr.length <= 1){
            return arr;
        }
        var index = Math.floor(arr.length / 2);
        var temp = arr.splice(index,1)[0];
        var leftArray = [];
        var rightArray = [];
        for(i=0;i<arr.length;i++){
            if(arr[i]<temp){
                leftArray.push(arr[i]);
            }
            else{
                rightArray.push(arr[i]);
            }
        }
        return quickSort(leftArray).concat([temp],quickSort(rightArray));
        
    }
    var sorted = quickSort(nums);
    var sum = 0;
    for(j=0;j<sorted.length;j=j+2){
        sum = sum + sorted[j];
    }
    return sum;
    
};
 console.log(arrayPairSum([1,4,3,2]));