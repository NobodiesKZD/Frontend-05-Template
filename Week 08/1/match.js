function mathch (str){
    for(let c of str){
        if(c === 'a'){
            return true;
        }
    }
    return false;
}

mathch('i am a robot');