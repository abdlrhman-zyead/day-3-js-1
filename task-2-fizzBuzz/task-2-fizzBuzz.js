let userNumber = parseInt(prompt("Enter Number"))

if (userNumber % 3 === 0 && userNumber % 5 === 0 )
{
    console.log("FizzBuzz");
}
else if (userNumber % 3 === 30)
{
    console.log("Fizz");
}
else if (userNumber % 5 === 0)
{
    console.log("Buzz");
}
else
{
    console.log(userNumber);
}
