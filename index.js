function theBeatlesPlay (musicians,instruments) {
  var start = []
  for (var n=0; n<musicians.length; n++) {
    start[n]=`${musicians[n]} plays ${instruments[n]}`
    
  }
  return start
}

function johnLennonFacts (facts) {
  var result = []
  let i=0
  while (i<facts.length) {
    result[i]=`${facts[i]}!!!`
    i=i+1
  }
  return result
}

function iLoveTheBeatles (number) {
  var final = []
  do {
}