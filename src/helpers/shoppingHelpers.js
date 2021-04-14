
export const calculateSpecialPrizes = foodData  => {

    const breed = foodData[0];
    const milk = foodData[1];
    const cheese = foodData[2];
    const soup = foodData[3];
    const butter = foodData[4];
    //subtotal = full amount, totalprice = user going to give, and savings.
    var totalPrice = 0, subTotal = 0, savings = 0;
    var breedSavings = 0;
    var cheeseSavings = 0;

        console.log(breed)
        totalPrice += breed.quantity * breed.sellingRate + milk.quantity * milk.sellingRate + cheese.quantity * cheese.sellingRate + soup.quantity * soup.sellingRate + butter.quantity * butter.sellingRate;
        subTotal += breed.quantity * breed.sellingRate + milk.quantity * milk.sellingRate + cheese.quantity * cheese.sellingRate + soup.quantity * soup.sellingRate + butter.quantity * butter.sellingRate;

        // Buy a soup and two breads – only one bread should be reduced
        if(soup.quantity === 1 && breed.quantity === 2){
             totalPrice = totalPrice - breed.sellingRate;
             breedSavings = breed.sellingRate
             savings += breedSavings;
             subTotal = totalPrice + breedSavings;
        }
        //  buy three, one free cheese
        if(cheese.quantity === 4){       
                totalPrice = totalPrice - cheese.sellingRate;
                cheeseSavings = cheese.sellingRate; 
                savings += cheeseSavings;
                subTotal = totalPrice + cheese.sellingRate;
        }
        //buy four cheese, two free
        if(cheese.quantity === 6){       
            totalPrice = totalPrice - 2 * cheese.sellingRate;
            cheeseSavings = 2 * cheese.sellingRate;
            savings += cheeseSavings;
            subTotal = totalPrice + 2 * cheese.sellingRate;
        }
       //buy a cheese, you get a second cheese free
       if(cheese.quantity ===  2){
            totalPrice = totalPrice - cheese.sellingRate;
            cheeseSavings =  cheese.sellingRate;
            savings += cheeseSavings;
            subTotal = totalPrice + cheese.sellingRate;
       }
        //when you buy a soup and breed, you get a half price bread
       if(soup.quantity === 1 &&  breed.quantity === 1){
            totalPrice = totalPrice - breed.sellingRate / 2;
            breedSavings = breed.sellingRate / 2;
            savings += breedSavings;
            subTotal = totalPrice + breed.sellingRate / 2;
       }
       
        return {
            totalPrice,
            savings,
            subTotal,
            breedSavings,
            cheeseSavings
        }         
           


    // if(foodData && foodData.soup.quantity === 1 && foodData.bread.quantity === 2){
    //     console.log("hello")
    // }
}