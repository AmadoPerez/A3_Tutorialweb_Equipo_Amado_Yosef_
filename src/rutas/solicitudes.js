const express=require("express"); //modulo externo
const route=express.Router(); //para mmanejar las rutas
const path=require("path"); //modulo interno

var options={root:path.join(__dirname,"../vistas")}; //utilizada por el metodo sendFile

route.get("/", (req,res)=> 
{
    //res.send("peticion solucionada");
    res.sendFile("index.html",options);
});



route.get("/pagina1", (req,res)=> 
{
    //res.send("peticion solucionada");
    res.sendFile("pagina1.html",options);
})
route.get("/pagina2", (req,res)=> 
{
    //res.send("peticion solucionada");
    res.sendFile("pagina2.html",options);
})
route.get("/pagina3", (req,res)=> 
{
    //res.send("peticion solucionada");
    res.sendFile("pagina3.html",options);
})
route.get("/pagina4", (req,res)=> 
{
    //res.send("peticion solucionada");
    res.sendFile("pagina4.html",options);
})

module.exports=route;