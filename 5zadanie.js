let a = +prompt("Введите четырехзначное число");
        alert(a);
    n1 = a / 1000;
    n2 = (a / 100) % 10;
    n3 = (a % 100) / 10;
    n4 = a % 10;
console.log(Math.trunc(n1))
console.log(Math.trunc(n2))
console.log(Math.trunc(n3))
console.log(Math.trunc(n4))
