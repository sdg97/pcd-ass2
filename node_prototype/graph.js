class Graph{
    constructor(){
        this.nodes = new Set()
        this.edges = new Set()
    }

    addNodes(nodes){
        for(let i = 0; i < nodes.length; i ++){
            this.nodes.add(nodes[i])
        }
    }

    addEdge(e){
        if(this.nodes.has(e[0]) && this.nodes.has(e[1])){
            this.edges.add(e)
        } else {
            throw "graph hasn't one of this nodes " + e
        }
    }
}

module.exports = Graph