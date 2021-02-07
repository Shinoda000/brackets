module.exports = function check(str, bracketsConfig) {
  brStr = str;
  if (brStr.length % 2 == 0) {
    let tr = true
    while (tr) {
      for (let i = 0; i < bracketsConfig.length; i++) {
        let brackets = bracketsConfig[i].join('');
        while (brStr.indexOf(brackets) !== -1) {
          brStr = brStr.replace(brackets, '');
        }
      }
      for (let k = 0; k < bracketsConfig.length; k++) {
        if (brStr.indexOf(bracketsConfig[k].join('')) !== -1) {
          break;
        } else if (k == bracketsConfig.length-1) {
          tr = false;
        }
      }
    }
    for (let i = 0; i < brStr.length; i++) {
      if (brStr[i] != 'a') {
        return false;
      }
    }
    return true;
  } else { 
    return false;
  }
}
