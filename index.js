// code your solution here
function saturdayFun(sth = "roller-skate") {
    return 'This Saturday, I want to ' + sth + "!";
}

function mondayWork(sth = "go to the office") {
    return 'This Monday, I will ' + sth + '.';
}

function wrapAdjective(flair = '*') {
    return function (str = "special") {
        return `You are ${flair}` + str + `${flair}!`;
    }

}