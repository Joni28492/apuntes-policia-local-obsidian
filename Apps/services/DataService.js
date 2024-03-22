const fs = require("fs")


class DataService {


    path = './data' 
    blocks = [
        'constitucion-especial',
        'materias-comunes',
        'ffccss',
        'trafico',
        'codigo-penal',
    ]

    constructor(){
        console.log("Data Service instanciado");
        this.execute()
    
    }
    //por archivo json

    // all-todos 
    // allData(){

    //     let data = []
    //     this.blocks.forEach((_,i) => {
    //         data = [...data, this.getByBlock(i)]
    //     });
    // }

    // por bloque
    getByBlock(block=1){

        const scopePath = `${this.path}/${this.blocks[block]}`;
        const fileJson = fs.readdirSync(scopePath)
    
        let data = []
        fileJson.forEach( file => {
            data = [...data, 
                JSON.parse(fs.readFileSync(`${scopePath}/${file}`, {encoding: 'utf8'}))
            ]
        });
        
        return data.flatMap(e => e)

    }

    // por tema
    

    // mis de temas


    //random data


    execute(){
        // this.allData()
    }



}



module.exports = { 
    DataService
}