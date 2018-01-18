var musicians =['Zakir Hussain','Kadri Gopalnath','Dr. L. Subramaniam']
var instruments=['tabla','saxophone','violin']
function theBeatlesPlay(musicians,instruments){
  var musiciansinstruments=[];
  for(let i=0;i<(musicians.length-1 || instruments.length-1);i++){
    musiciansinstruments[i]=`${musicians[i]} plays ${instruments[i]}`;
  }
  return musiciansinstruments;
}

function johnLennonFacts