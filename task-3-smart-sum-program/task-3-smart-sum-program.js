let summation = 0 ;
while(true)
{
    let userNumber = parseInt(prompt("Enter Number :) "));
    if(userNumber == 0) break;
    summation +=userNumber;
    if(summation >= 100) break;
}
document.writeln("<h1>"+summation+"</h1>");

