function saturdayFun(activity="roller-skate"){
 return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

//function wrapAdjective(adjective="special"){
    //return `You are ${adjective}!`
//}
function wrapAdjective(visualFlair = "*") {
    return function(adjective = "special") {
      return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
 }