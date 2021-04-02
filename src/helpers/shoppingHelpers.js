
export function calculateSpecialPrizes(foodData){
    const breed = foodData[0];
    const milk = foodData[1];
    const cheese = foodData[2];
    const soup = foodData[3];
    const butter = foodData[4];
    //subtotal = full amount, totalprice = user going to give, ands savings.
    var totalPrice =0, subTotal = 0, savings = 0;
    var breedSavings = 0;
    var cheeseSavings = 0;
        // Buy a soup and two breads – only one bread should be reduced
        if(soup.quantity === 1 && breed.quantity === 2){
             totalPrice = soup.ratePerQuantity + breed.ratePerQuantity - breed.sellingRate;
             breedSavings = breed.sellingRate
             subTotal = totalPrice + savings;
        }
        //  buy three, one free cheese
        if(cheese.quantity === 4){       
                totalPrice += 3 * cheese.sellingRate;
                cheeseSavings = cheese.sellingRate;
                subTotal += 4 * cheese.sellingRate;
        }
        //buy four cheese, two free
        if(cheese.quantity === 6){       
            totalPrice += 4 * cheese.sellingRate;
            cheeseSavings = 2 * cheese.sellingRate;
            subTotal += 6 * cheese.sellingRate;
        }
       //buy a cheese, you get a second cheese free
       if(cheese.quantity ===  2){
            totalPrice += cheese.sellingRate;
            cheeseSavings =  cheese.sellingRate;
            subTotal += 2 * cheese.sellingRate;
       }
        //when you buy a soup, you get a half price bread
        if(soup.quantity === 1 &&  breed.quantity === 1){
            totalPrice += soup.sellingRate + breed.sellingRate / 2;
            breedSavings = breed.sellingRate / 2;
            subTotal += soup.sellingRate + breed.sellingRate
        }
        console.log(subTotal)
       
       
       



    // if(foodData && foodData.soup.quantity === 1 && foodData.bread.quantity === 2){
    //     console.log("hello")
    // }
}