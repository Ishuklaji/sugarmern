
const e = require('express');
const fs = require('fs')


const makeupData ={
     features:["Purple","Smudge Free","Velvet","Waterproof","Black","Curling","Lengthening","Matte","Smudge Proof","Eyeliner","Long Lasting"],
     productType:["Kajal","Crayon Lipstick","Vivid Lipstick","Kohl","Mascara","Liquid Lipstick","Eyeliner","Brow Definer","Blushes Bronzers","Blush","Bronzer"],
     finish:["Matte","Bullet","Metallic","Natural","Creme","Gloss","Double Matte","Glossy"],
     formation:["Crayon","Bullet","Liquid","Pressed Powder","Gel","Cream","Matte","Loose Powder","Kajal","Stick"],
     concern:["Blurring","Under eye","Brightening"]
 
}

const facecareData={

   ProdctTypeArray:["Cleansing Water","Face Mask","Sheet Mask","Moisturizer","Hydrating Stick","Sunscreen","Cooling Stick","Refreshing Mist","Cleansing Mask","Serum","Hydrating Primer","SCRUB","Clarifying Spot Gel","Firming Cream","Lip Scrub","Brightening Serum","Clay Stick Mask","Hydrating Mist","Brightening Peel"],
    Feature:["Cleansing Water","Combination"],
    Formulation:["Liquid","Matte","Smudge Proof","Eyeliner","Long Lasting"],
   Conern:["Acne","Brightening","Hydration","Anti-ageing","Sun protection"]



}

const BrushesData ={
    productType:["Eyeshadow Brush","Face Brush","Foundation Brush","Brush Combo"]


}



// {
//     name:String,
//     amount:Number,
//     image:String,
//     price:Number,
//     rating:Number,
//     productType:String,
//     feature:String,
//     formulation:String,
//     concern:String,
//     cat:String
//       finish:String


//    }

//   function doit(){


//     let data = JSON.parse(fs.readFileSync('data.json',"utf-8"));

//   let map = data.brushes.map((el,i)=>{

//      el.productType = BrushesData.productType[i%BrushesData.productType.length];
    
//       el.cat = "brushes"
       


//   })
  
//   console.log(data.brushes)
//   const data2 = JSON.stringify(data, null, 2);
  

//     fs.writeFileSync('data.json', data2, {
//         encoding: 'utf-8'
//     })



//    }












module.exports = {makeupData,facecareData,BrushesData}