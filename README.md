# myRecipeFinderApp

ReadMe file
App: Recipe Finder
_______________________________________________
1)Guide to running the project locally

1. Unzip the file from GitHub
2. open cmd or terminal on your pc
3. cd to the directory of the folder called "recipeApp"
 eg "cd C:\Users\Asheran\comp301Apps\recipeApp"
4. Once in the directory type "expo start"
5. Once expo starts you can either open in Web browser/ can the QR Code on the expo mobile app/ or run in an emulator
6. If you run it in the web browser you can do the following to make it look like a mobile
-right click on the page then select inspect
-on the top left corner of the inspect planner select "Toggle device emulation"
-you then have the option to select the device you want to emulate
-I suggest using the "Pixel 2 XL" as it has a good screen size but any device will work
7. You are then done and can use the app
8. <IMPORTANT NOTE> The app uses spoonacular api which only allows 150 calls to the endpoint per day
and since the app makes multiple calls to the endpoint everything you use it, the max calls can be reached after a few uses
and when the max number of calls is reach when you click the Find recipe button you will get can ERROR saying it cannot access 'Calories'
<FIX> to fix this you can either wait a day and run the app the next day
OR go to "https://spoonacular.com/registeremail" and register with your email
then login and go to Profile and you should see and api key
Copy the api key and paste it in HomeScreen.js file in the getMealData() function in fetch
eg "https://api.spoonacular.com/mealplanner/generate?apiKey=<INSERT YOUR API>&timeFrame=day&targetCalories=${calories}"
then go to the Meal.js file under useEffect() function in the fetch , insert your api key in the link
eg "https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=<INSERT YOUR API>&includeNutrition=false"

___________________________________________________

2)Overview of the project

There are alot of people who are into fitness and want to either just stay healthy or lose weight
Apps then help you do this such as myFitnessPal which uses your info such as weight, height, goal weight etc
to calculate the maximum calories you should eat per day to rach your goal weight.

The problem is that finding meals to stay under your maximum calaries for the day can be difficult
and discourages alot of people from using the app.

That is where my App comes in. It is called RecipeFinder, all you have to enter is the
maximum number of calories you want to eat for the day and it will generate a meal plan for you
consisting of 3 meals and links to the recipe and instructions for each meal, making not only choosing meals
but also staying under your maximum calorie goal easy.

The app uses the Spoonacular api to get the data for the meals which can be found on
"https://spoonacular.com/food-api"

GOOGLE Drive link for the App : "https://drive.google.com/drive/folders/1T17x0nAz45NZ_f61oG0wwoJB1e373c0y?usp=sharing"	
Video Demo Link "https://drive.google.com/file/d/1T1ybsAzd_UA-S7fzkgCRgL4KJ0RPgTzs/view?usp=sharing"

Thank you
