// Function to display the welcome message with today's date
const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage(); // Call the welcomeMessage function when the script loads

// Function to display the workout routine and handle duplicate entries
const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const getList = workoutList.querySelectorAll('li');
   
    if (getList !== null && getList !== undefined && getList !== '') { // Checking if the list of workouts is not empty
        const myArray = Array.from(getList);

        for (let i = 0; i < myArray.length; i++) {
            let put = workoutInput.trim();
            if (myArray[i].textContent.toLocaleLowerCase() === put.toLocaleLowerCase()) {
                // Alert if a duplicate workout is detected
                if (alert("duplicated " + " " + workoutInput) === undefined) {
                    document.querySelector('#workoutInput').value = '';
                }
                return;
            }
        }
    }

    // If no duplicate found, add the new workout to the list
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
    document.querySelector('#workoutInput').value = '';
};

// Event listener for submitting workout routine
document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// Function to add new goals and handle duplicate entries
const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    const goals = Array.from(goalList.querySelectorAll('li'));
    
    // Check for duplicates in the list of goals
    for (let i = 0; i < goals.length; i++) {
        let getGoalInput = goalInput.trim();
        if (goals[i].textContent.toLocaleLowerCase() === getGoalInput.toLocaleLowerCase()) {
            // Alert if a duplicate goal is detected
            if (alert("duplicate detected" + " " + goalInput) === undefined) {
                document.querySelector('#goalInput').value = ' ';
            }
            return;
        }
    }

    // If no duplicate found, add the new goal to the list
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);
    document.querySelector('#goalInput').value = ' ';
};

// Event listener for submitting new goals
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

// Variable to track water intake
let waterIntake = 0;

// Function to update water intake and display it
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

// Event listeners for increasing and decreasing water intake
document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

// Function to update progress charts (placeholders)
const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts(); // Call the function to update progress charts

// Function to toggle between light and dark themes
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

// Event listener for theme toggle button
document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

// Function to handle form submission for meal plans
const submitMealPlan = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    alert('Meal plan submitted successfully! 🍴' );
};

// Event listener for meal plan form submission
document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
