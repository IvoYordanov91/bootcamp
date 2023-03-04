let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;

for (var i = 1; i <= 2; i++) {
eval("car" + i).finalPrice = eval("car" + i).basePrice + globalBasePrice;
}
console.log(car1);
console.log(car2);