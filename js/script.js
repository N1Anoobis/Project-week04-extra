const dispaly = document.getElementsByTagName("h1");
console.log(dispaly)


let isPrime = (n) => {
    if(n===2){
        return true;
    }

    if(!Number.isInteger(n) || n<2 || !(n%2)){
        return false;
    }


for(let i = 3; i<= n-1; i++){
    if(n%i === 0){
        return false;
    }
}

return true;
}
for(let i=0; i<101; i++){
    if(isPrime(i)){
        console.log(i)
    }
}