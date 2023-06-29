let s1 = 'Coding'
let s2 = "Factory"
let s3 = `${s1} ${s2}` // Template Literals

let s4 = `<div>
            <span> Helloooooo</span>
          </div>`

let s5 = String(1) // String
let s6 = new String(7) // object

let s7 = s3.substring(0, s3.length) // 0 till endIndex - 1


let s8 = s2.slice(1,5)

let s9 = s2.slice(-2)

let arr  = s3.split(" ")

let cp = s2.codePointAt(1) // ascii number of given char

let position = s3.indexOf("o") // index of char

let pos2 = s3.lastIndexOf("y")

if (s1 === s3){
    console.log("Sensitively equal")
}

if (s1.toUpperCase() === s2.toUpperCase()){
    console.log("Insensitively Equal")
}
