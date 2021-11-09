var gb = 0      // Gingerbread
var cc = 0      // Chocolate Chip
var sugar = 0   // Sugar Sprinkle
var cookieTotals = 0
var gingerBread = 0
var chocolateChip = 0
var sugarCookie = 0
var cookieQuantityTotals = 0

var yourName = "Jennifer Herdzina" 
document.getElementById('credit').textContent = `Created by ${yourName}`

document.getElementById('add-gb').addEventListener('click', function(e){
    gb++
    cookieTotals.textContent = gb
    document.getElementById('qty-gb').textContent = gb
    document.getElementById('qty-total').textContent = gb + cc + sugar
})
document.getElementById('minus-gb').addEventListener('click', function(e){
    if (gb > 0){
        gb--
        cookieTotals.textContent = gb
        document.getElementById('qty-gb').textContent = gb
        document.getElementById('qty-total').textContent = gb + cc + sugar
    }
})
document.getElementById('add-cc').addEventListener('click', function(e){
    cc++
    cookieTotals.textContent = cc
    document.getElementById('qty-cc').textContent = cc
    document.getElementById('qty-total').textContent = gb + cc + sugar
})
document.getElementById('minus-cc').addEventListener('click', function(e){
    if (cc > 0){
        cc--
        cookieTotals.textContent = cc
        document.getElementById('qty-cc').textContent = cc
        document.getElementById('qty-total').textContent = gb + cc + sugar
    }
})
document.getElementById('add-sugar').addEventListener('click', function(e){
    sugar++
    cookieTotals.textContent = sugar
    document.getElementById('qty-sugar').textContent = sugar
    document.getElementById('qty-total').textContent = gb + cc + sugar
})
document.getElementById('minus-sugar').addEventListener('click', function(e){
    if (sugar > 0){
        sugar--
        cookieTotals.textContent = sugar
        document.getElementById('qty-sugar').textContent = sugar
        document.getElementById('qty-total').textContent = gb + cc + sugar
    }
})