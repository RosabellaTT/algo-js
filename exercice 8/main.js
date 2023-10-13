let student {
    name : "Mai",
    favouriteFood : "Pho",
    city : "Paris",
};


let result = 0;
let values = Object.values(student);

values.forEach((value) => {
    result += value.length
});
console.log(result)


// Pair ou impair?

if (result % 2) {
   console.log('impair');
}else{
    console.log('pair');
}

console.log('Le résultat est ${result}');
console.log('Le résultat est' + result);

//Terminaire
console.log(Le résultat est ${result % 2 ? 'impair : 'pair});
//condition ? vrai : faux