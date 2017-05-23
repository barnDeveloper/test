/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
   
    z = x ^ y ;
    z = z.toString(2);
    var value = z.split("");
    var  num = 0; 
    for(i=0;i<value.length;i++){
        if (value[i]== 1)
        num ++;
    }
    return num;
    
};