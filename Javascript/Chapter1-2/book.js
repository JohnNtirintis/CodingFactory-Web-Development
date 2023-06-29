const book = {
    author: {firstName: "George", lastName: "Orwell"},
    title: "1984",
}

if( book && book.author) {
    console.log(book['author'])
    console.log(book.author)
}

for (let [k,v] of Object.entries(book.author)){
    console.log(`${k}: ${v}`)
}

for (let k of Object.keys(book.author)){
    console.log(`${k}:`)
}

let clonedBook = {...book} // Shallow Copy

console.log(clonedBook)
