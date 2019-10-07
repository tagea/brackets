module.exports = function check(str, bracketsConfig) {
  let strCopy = str;
  let iter = 0;
  if(strCopy.length % 2 != 0 ){
    return false;
  }else{
    while(iter <= bracketsConfig.length && strCopy.length){
      iter++;
      bracketsConfig.forEach(item => {
        const concatBr = item[0] + item[1];
      
        let equalBr = strCopy.indexOf(concatBr);
        while(equalBr !== -1){
          // delete found brackets
          strCopy = strCopy.substring(0, equalBr) + strCopy.substring(equalBr + concatBr.length, strCopy.length);
          equalBr = strCopy.indexOf(concatBr);
        }    
      });
    }

    if(strCopy.length){
      return false;
    }
    else{
      return true;
    }
  }
}