mongoose=require('mongoose');

var Schema = mongoose.Schema;

var InventarioSchema=Schema({
    nombre:String,
    descripcion:String,
    cantidadunidad:int,
    preciounidad:int,
    unidadesexistencia:int
    
    });


    const Inventario = mongoose.model('inventario',InventarioSchema);
    module.exports = Inventario;
   