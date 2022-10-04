let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric (menu, a) {
    for(let key in menu)
    {
        if(typeof menu[key] === "number"){
            menu[key] *= a;
        }
    }
}
multiplyNumeric(menu, 3);

console.log(menu);