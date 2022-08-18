function build_tower(n) {
let x = (2*n) - 1
let y = 1;
let z = (x - y)/2

let return_array = []
for (let i = 1; i <= n; i++) {
let string = ""
for (let i = 1; i <= z; i++) {
    string += " "
}
for (let i = 1; i <= y; i++) {
    string += "*"
}
for (let i = 1; i <= z; i++) {
    string += " "
}
y += 2
z -= 1
return_array.push(string)
}

return return_array
}

//console.log(build_tower(15))


module.exports = build_tower