// Normal Coder
function canVoteV1(age) {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }
  
  // Good coder
  function canVoteV2(age) {
    if (age >= 18) return true;
    return false;
  }
  
  // Better coder
  function canVoteV3(age) {
    return age >= 18 ? true : false;
  }
  
  // Best coder
  function canVoteV4(age) {
    return age >= 18;
  }
  
  // Amazing coder
  const canVoteV5 = (age) => age >= 18;// no need to write return statement because it is single statement
  // canVoteV5 is a function not a variable remember


  const result = typeof tmp !== 'string' ? 'invalid':
                                            tmp.length%2!=0?'invalid':
                                            tmp[0] !=='a' || tmp[0] !=='e' || tmp[0] !=='i' || tmp[0] !=='o' || tmp[0] !=='u'?'invalid':
                                            'valid';


