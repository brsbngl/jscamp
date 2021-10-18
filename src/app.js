console.log("Merhaba Kodlama.io")

//JS type safe değildir. Type safe = Tip Güvenli Değildir. Yani sen sonradan bir değişkenin değerini değiştirebilirsin.
let dolarBugun = 9.30

let dolarDun = 9.20

{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.2 //const = sabit demektir. Yani bir değer atadığın zaman başka bir değer atayamazsın. Bir nevi type safe oluyor gibi.
euroDun = 11 

console.log(euroDun)

let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi", "Kamu Konut Kredisi" ]
console.log("<ul>")
for (let i = 0; i<konutKredileri.length;i++)//i= index      ++ = Bir bir arttır demek.
 {
console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

