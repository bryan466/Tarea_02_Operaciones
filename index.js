const express =  require("express");
const app =  express();

app.get('/suma/:p1/:p2', (req, res) => {
    let status = 200;
  const q1 = parseInt(req.params.p1); 
  const q2 = parseInt(req.params.p2); 

if( isNaN(q1) || isNaN(q2)) {
    res.status(404);
    res.json({"Error": 'Bad request'});
    return;
}
 const result = q1 + q2 
 console.log(result);
 res.json({"suma" : result});
 res.status(status).json;
})

//// RESTAV //////////////////////////
app.get('/resta/:p1/:p2', (req, res) => {
    const q1 = parseInt(req.params.p1); 
    const q2 = parseInt(req.params.p2); 
  

  if( isNaN(q1) || isNaN(q2)) {
      res.status(404);
      res.json({"Error": 'al recibiir los datos'});
      return;
  }
  if(q1 || q2 <=0){
    res.status(404);
    res.json({"Error": 'parametros menos a cero'});
  }
   const result = q1 - q2 
   console.log(result);
   res.json({"Resta" : result});
  
  })

//// MULTIPLICACION //////////////////////////
app.get('/multi/:p1/:p2', (req, res) => {
    const q1 = parseInt(req.params.p1); 
    const q2 = parseInt(req.params.p2); 
  

  if( isNaN(q1) || isNaN(q2)) {
      res.status(404);
      res.json({"Error": 'al recibiir los datos'});
      return;
  }
  if(q1 || q2 <=0){
    res.status(404);
    res.json({"Error": 'parametros menos a cero'});
  }
   const result = q1 * q2 
   console.log(result);
   res.json({"multipliacion" : result});
  
  })

  //// DIVISION //////////////////////////
app.get('/division/:p1/:p2', (req, res) => {
    const q1 = parseInt(req.params.p1); 
    const q2 = parseInt(req.params.p2); 
  

  if( isNaN(q1) || isNaN(q2)) {
      res.status(404);
      res.json({"Error": 'al recibiir los datos'});
      return;
  }

   const result = q1 / q2 
   console.log(result);
   res.json({"Division" : result});
  
  })



app.listen(3000, () =>{ 
    console.clear();
    console.log("Servidor corriendo en el puesto 3000");

});