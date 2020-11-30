// find string 'ab' in a given string

function match(str){
    // let foundA = false;
    let charPre;
    for(let c of str){
        if(c === 'a'){
            charPre = c;
            // foundA = true;
        }
        else if(charPre === 'a' && c === 'b'){
            return true;
        }
        else{
            // foundA = false;
            charPre = c;
        }
    }
    return false;
}

console.log(match('i am ab robot'));

