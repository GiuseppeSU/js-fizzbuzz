const squareDom = document.querySelector(".container");
for  (let i = 1; i <= 100; i++ ) {
    const quadratino = document.createElement('div');
    quadratino.classList.add('square');
    if  (i % 3 == 0 && i % 5 == 0) {
    quadratino.append("FizzBuzz"); 
    quadratino.classList.add('FizzBuzz'); }
    else if (i % 3 == 0) {
    quadratino.append("Fizz");
    quadratino.classList.add('Fizz');
}
    else if (i % 5 == 0) {
        quadratino.append("Buzz");
        quadratino.classList.add('Buzz');}
    else quadratino.append(i);
    squareDom.append(quadratino);

    

    
}
