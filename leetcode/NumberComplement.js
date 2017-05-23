var findComplement = function(num) {
    var temp = num.toString(2);
    temp = temp.split("");
    var temp2 = "";
    for(var i=0;i<temp.length;i++){
       if(temp[i] == '1'){temp[i] = 0; temp2 += temp[i];}
       else{temp[i] = 1; temp2 += temp[i];}
       
     }
    temp3 = parseInt(temp2,2);
    return temp3; 
};
