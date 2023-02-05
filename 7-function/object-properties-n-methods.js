function newDiscount(){
   dress.currentPrice = dress.currentPrice - 10;
}

const dress = {
    name : 'Ruffeled-top',
    brand : 'H&M',
    isAvailable : false,
    currentPrice : 1000,



    startdiscount :function (){
        dress.isAvailable = true;
    },

    stopDiscount : function(){
            dress.isAvailable = false;
    },
    
    increasePrice : () => {
        dress.currentPrice= dress.currentPrice + 20;
    },

    decreasePrice : newDiscount ,

    printDetails: () => {
        console.log(`
          Dress Detail info 
          ----------------------------
          Name: ${dress.name}
          Brand: ${dress.brand}
          Availability: ${dress.isAvailable}
          Price: ${dress.currentPrice}
      `)
      }

}


console.log( ` Dress Info ` , dress);

dress.printDetails();

dress.decreasePrice();
dress.decreasePrice();
dress.decreasePrice();
dress.decreasePrice();
dress.printDetails();