function getFruit() {
    let inputFruit = document.getElementById("fruteName").value.toLowerCase();
    let inputNumberFrutes = document.getElementById("numberFrutes").value;
 
    let calories;
    let fat;
    let carbs;
    let protein;
 
    switch(inputFruit) {
     case "apple":
        calories = 36.9;
        fat = 0.2;
        carbs = 9.5;
        protein = 0.1;
        calculate(inputNumberFrutes, calories, fat, carbs, protein);
     break;
   case "strawberry":
        calories = 24.9;
        fat = 0.3;
        carbs = 5.8;
        protein = 0.5;
        calculate(inputNumberFrutes, calories, fat, carbs, protein);
     break;
   case "watermelon":
       calories = 24.3;
       fat = 0.3;
       carbs = 5.5;
       protein = 0.5;
       calculate(inputNumberFrutes, calories, fat, carbs, protein);
     break;
   case "banana":
       calories = 69;
       fat = 0.4;
       carbs = 17.6;
       protein = 0.8;
       calculate(inputNumberFrutes, calories, fat, carbs, protein);
     break;
   case "orange":
       calories = 42.3;
       fat = 0.1;
       carbs = 10.6;
       protein = 0.8;
       calculate(inputNumberFrutes, calories, fat, carbs, protein);
     break;
   case "cumber":
      calories = 6.8;
      fat = 0.1;
      carbs = 1.4;
      protein = 0.4;
      calculate(inputNumberFrutes, calories, fat, carbs, protein);
     break;
   case "potato":
      calories = 57;
      fat = 0;
      carbs = 13;
      protein = 1;
      calculate(inputNumberFrutes, calories, fat, carbs, protein);
     break;
   case "tomato":
      calories = 18.9;
      fat = 0.3;
      carbs = 4.2;
      protein = 0.8;
      calculate(inputNumberFrutes, calories, fat, carbs, protein);
     break;
   case "onion":
       calories = 30.4;
       fat = 0.1;
       carbs = 6.9;
       protein = 0.9;
       calculate(inputNumberFrutes, calories, fat, carbs, protein);
     break;
   case "pineapple":
        calories = 38;
        fat = 0.3;
        carbs = 9.6;
        protein = 1.2;
       calculate(inputNumberFrutes, calories, fat, carbs, protein);
     break;
   default:
    }
 }
 
 function calculate(inputNumberFrutes, calories, fat, carbs, protein) {
 document.getElementById("result").innerHTML = "<div class='innerHTML'><p>While number of frutes is " + inputNumberFrutes + " then</p>" +
                                               "<p>Calories: " + calories*inputNumberFrutes + "</p>" +
                                               "<p>Fat (g): " + fat*inputNumberFrutes + "</p>" +
                                               "<p>Carbs (g): " + carbs*inputNumberFrutes + "</p>" +
                                               "<p>Protein (g): " + protein*inputNumberFrutes + "</p></div>"; 
 }
 
 