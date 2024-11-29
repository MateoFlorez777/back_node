const Inventario = require("../models/inventario");

function prueba(req,res){
    res.status(200).send({
    message: 'probando una acción'
    });
    }
   

function saveInventario(req,res){
    var myInventario= new Inventario(req.body);
    myInventario.save((err,result)=>{
    res.status(200).send({message:result});
    });
    }
       
module.exports={
    prueba,
    saveInventario
    }

    function buscarData(req,res){
        var idinventario=req.params.id;
        Inventario.findById(idinventario).exec((err,result)=>{
        if(err){
        res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
        }else{
        if(!result){
        res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
        }else{
        res.status(200).send({result});
        }
        }
        });
        }


        function listarAllData(req,res){
            var idinventario=req.params.idb;
            if(!idinventario){
            var result=Inventario.find({}).sort('nombre');
            }else{
            var result=Inventario.find({_id:idinventario}).sort('nombre');
            }
           
            result.exec(function(err,result){
                if(err){
                res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
                }else{
                if(!result){
                res.status(404).send({message:'El registro a buscar no se encuentra disponible'})
                ;
                }else{
                res.status(200).send({result});
                }
                }
                })
                }

                module.exports={
                    prueba,
                    saveInventario,
                    buscarData,
                    listarAllData
                    }  
                   

                    function updateInventario(req,res){
                        var id = mongoose.Types.ObjectId(req.query.productId);
                        Inventario.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err,
                        Inventario) {
                        if (err)
                        res.send(err);
                        res.json(Inventario);
                        });
                        };

                        function deleteInventario(req,res){
                            var idinventario=req.params.id;
                            Inventario.findByIdAndRemove(id, function(err, inventario){
                            if(err) {
                            return res.json(500, {
                            message: 'No hemos encontrado el producto'
                            })
                            }
                            return res.json(inventario)
                            });
                        };

                        module.exports={
                            prueba,
                            saveInventario,
                            buscarData,
                            listarAllData,
                            updateInventario,
                            deleteInventario
                            }
                           
                       
               
       