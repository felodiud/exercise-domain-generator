let pronoun = ['the','our','that','one'];
let adj = ['great', 'big','jucy','angry' ];
let noun = ['jogger','racoon','dog','ass','phone','bicycle'];


let x = Math.floor(Math.random() * pronoun.length)
let y = Math.floor(Math.random() * adj.length)
let z = Math.floor(Math.random() * noun.length)



console.log(pronoun[x]+adj[y]+noun[z])