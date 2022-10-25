export function validatePhone(phone:string){

    const correctChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '+', '-'];
    const phoneArr = phone.split('');

    let check = false;

    for(let i = 0; i < phoneArr.length; i++){

        for(let j = 0; j < correctChars.length; j++){

            if(phoneArr[i] === correctChars[j]){
                check = true;
            }
        }

        if(check === false){
            return false;
        }
        else{
            check = false;
        }
    }

    return true;
}