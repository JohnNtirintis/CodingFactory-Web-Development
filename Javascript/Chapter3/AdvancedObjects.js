const book = {author: {firstname: "George", surname: "Orwell"}, bookInfo: {title:1984, pages:449, date:1949}, publisher:"Secker & Warburg", authorRealName:"Eric Arthur Blair"}

// in case of nested objects:

for(let [k,v] of Object.entries(book)){
    if(typeof v == 'object'){
        for(let [k2,v2] of Object.entries(v)){
            console.log(`${k}.${k2}: ${v2}`)
        }
    } else{
        console.log(`${k}: ${v}`)
    }
}

// Recursion

function traverseObj(obj, parentKey = ''){
    for(let [key, value] of Object.entries(obj)){
        let newKey = parentKey ? `${parentKey}.${key}` : key;
        if(typeof value == "object"){
            traverseObj(value, newKey);
        } else{
            console.log(`${newKey}: ${value}`)
        }
    }
}

traverseObj(book)