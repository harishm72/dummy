let obj = {
    0 : {
        a : "html",
        b: "Stirng",
    },
    1 : {
        a : 'PDF'
    }
}


obj['0'] = {
    ...obj['0'],
    c : "Vishal"
}

obj['0'] = {
    ...obj['0'],
    c : "Vishal denzil"
}


//console.log(obj)

state  = {
    queries : [{0: {a : 1, b : 2}}]
}

// ++ ADD
function add(){
    len = state.queries.length
    let newItem  = { [len] : {a: 1, b : 2}}
    state.queries = [...state.queries, newItem]
}

function remove(id){
    state.queries = [...state.queries.filter(query => !query[id])]
}


console.log(state.queries)
add()
console.log(state.queries)
remove(1)
console.log(state.queries)