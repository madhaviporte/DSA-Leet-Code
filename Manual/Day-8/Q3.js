let prompt = require('prompt-sync')()
let choice

do{
    console.log("\n---------Welcome to Restaurant----------");
    
   console.log("Enter 1 for Indian dish");
   console.log("Enter 2 for Chinese dish");

   choice = Number(prompt('Enter a choice'))  

   switch(choice){
    case 1 :{
         let IndianMenu = [
            "chhole bhature",
             "samosha",
              "dosha", 
              "fried-rice",
              "pani puri"
         ]
         console.log("\nIndian Menu");
         IndianMenu.forEach((item, index)=>{
            console.log(`${index + 1}. ${item}`);
         })
         let order = Number(prompt("Enter item number: "))
         console.log("you ordered", IndianMenu[order -1]);
         break
    }
    case 2 :{
         let ChineseMenu = ["chowmine", "egg role", "pizza", "burger","cold-drink"]

         console.log("\nChinese Menu");
         ChineseMenu.forEach((item, index)=>{
            console.log(`${index+1}.${item}`);
            
         })
         let order = Number(prompt("enter iten number"))
         console.log("you  ordered", ChineseMenu[order - 1]);
         break
         
    }


    default: console.log("Invalid number");
    
   }
   choice = Number(prompt("\nEnter a 1 for continue the ordering, 0 too exit: "))
   
   
   
}while(choice===1)

    console.log("\n Thank youu for visiting");
    