const items = ['a', 'b', 'c', 'd', 'e', 'f']
const i = 3
const filteredItems = items.slice(0, i).concat(items.slice(i+1, items.length))

console.log(filteredItems)