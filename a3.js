function factorialize(num)
{
    let answer = 1;

    while (num > 0)
    {
       answer = answer * num;
       num--;
    }

    return answer;
}

console.log("Result for 0:", factorialize(0));
console.log("Result for 5:", factorialize(5));
console.log("Result for 10:", factorialize(10));You can always use a while loop too:

function factorialize(num)

.as-console {background-color:black !important; color:lime;}
.as-console-wrapper {max-height:100% !important; top:0;}
Expand snippet
Or go the recursive way:

const factorialize = (num) => num <= 0 ? 1 : num * factorialize(num - 1);

console.log("Result for 0:", factorialize(0));
console.log("Result for 5:", factorialize(5));
console.log("Result for 10:", factorialize(10));