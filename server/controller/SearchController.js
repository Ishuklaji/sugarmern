const mongoose = require("mongoose");
const {makeupData,facecareData,BrushesData} = require("../Data/filter.js")


// {
//   "_id": {
//     "$oid": "6380a395054c9303cd6aca18"
//   },
//   "amount": 37,
//   "image": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-pore-care-mask-pack-of-6-12784627187795.jpg?v=1619114552",
//   "name": "CHEAT SHEET PORE CARE MASK (PACK OF 6)",
//   "price": 699,
//   "rating": 9,
//   "productType": "Cleansing Water",
//   "feature": "Combination",
//   "formulation": "Liquid",
//   "conern": "Acne"
// }



let products = new mongoose.Schema(
  {
        name:String,
    amount:Number,
    image:String,
    price:Number,
    rating:Number,
    productType:String,
    feature:String,
    formulation:String,
    concern:String,
    cat:String,
      finish:String


   }

)

let data = mongoose.model("products",products,"products");




 async function search( req,res){
 



   // Face Care
   let ProdctTypeArray = facecareData.ProdctTypeArray;
   let Feature =facecareData.Feature
   let Formulation=facecareData.Formulation
   let Conern = facecareData.Conern;


  let {

    search = '',
    sortOrder = '',
    productType="all",
    feature="all",
    formulation="all",
    conern="all",
    cat=""
  } = req.query

  

  
  try{


      

        var s = await data.find(
          {
            $and: [
                // condition 1

                { 
                  cat:cat
              },

                { 
                    name: { 
                        $regex:search ,$options:"i"
                    },
                },
                // condition 2
                {
                  productType: {$in: (productType=="all")?ProdctTypeArray:productType.split(",")}
                },
                {
                  feature: {$in: (feature=="all")?Feature:feature.split(",")}
                },
                 {
                  formulation: {$in: (formulation=="all")?Formulation:formulation.split(",")}
                },
                {
                  conern: {$in: (conern=="all")?Conern:conern.split(",")}
                }

                
                
            ]
        }
        )
        
        var main =  (sortOrder==="")?s:s.sort((a,b)=>{
            return (sortOrder==="low")?(a.price-b.price):(b.price-a.price);
        })

        console.log(s+"nklknk");

      
      

      res.send(
        main
     );

  


  }catch(e){
    res.send(
      {}
  );

   console.log(e)

  }




}




async function makeup( req,res){
 

  
    

  



  // makeup
  // let ProdctTypeArray = ["Kajal","Crayon Lipstick","Vivid Lipstick","Kohl","Mascara","Liquid Lipstick","Eyeliner","Brow Definer","Blushes Bronzers","Blush","Bronzer"]
  // let Feature =["Cleansing Water","Combination"]
  // let Formulation=["Liquid","Tube"]
  // let Conern = ["Acne","Brightening","Hydration","Anti-ageing","Sun protection"]

  let ProdctTypeArray = makeupData.productType;
  let Feature = makeupData.features;
  let Formulation = makeupData.formation;
  let Conern = makeupData.concern;
  let Finish = makeupData.finish;


 let {
   finish='all',
   search = '',
   sortOrder = '',
   productType="all",
   feature="all",
   formulation="all",
   conern="all",
   cat=""
 } = req.query

 

 
 try{


     

       var s = await data.find(
         {
           $and: [
            { 
             cat:cat
          },
               { 
                   name: { 
                       $regex:search ,$options:"i"
                   },
               },
               // condition 2
               {
                 productType: {$in: (productType=="all")?ProdctTypeArray:productType.split(",")}
               },
               {
                 feature: {$in: (feature=="all")?Feature:feature.split(",")}
               },
                {
                 formulation: {$in: (formulation=="all")?Formulation:formulation.split(",")}
               },
               {
                 conern: {$in: (conern=="all")?Conern:conern.split(",")}
               },
               {
                finish: {$in: (finish=="all")?Finish:finish.split(",")}
              }


               
               
           ]
       }
       )
       
       var main =  (sortOrder==="")?s:s.sort((a,b)=>{
           return (sortOrder==="low")?(a.price-b.price):(b.price-a.price);
       })

       

     
     

     res.send(
       {
        status:"sus",
        data:main
       }
    );

 


 }catch(e){
   res.send(
     {
      status:"error"
     }
 );

  console.log(e)

 }




}

async function brushes( req,res){
 

  
    

  



  //Brushes
  let ProdctTypeArray = BrushesData.productType;
  


 let {

   search = '',
   sortOrder = '',
   productType="all",
   cat="",
 } = req.query

 

 
 try{


     

       var s = await data.find(
         {
           $and: [
               // condition 1
               { 
               cat:cat
            },
               { 
                   name: { 
                       $regex:search ,$options:"i"
                   },
               },
               // condition 2
               {
                 productType: {$in: (productType=="all")?ProdctTypeArray:productType.split(",")}
               },
              

               
               
           ]
       }
       )
       
       var main =  (sortOrder==="")?s:s.sort((a,b)=>{
           return (sortOrder==="low")?(a.price-b.price):(b.price-a.price);
       })

       console.log(s+"nklknk");

     
     

     res.send(
       main
    );

 


 }catch(e){
   res.send(
     {}
 );

  console.log(e)

 }




}


module.exports ={
    search,makeup,brushes
}