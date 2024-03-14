const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
   const getList = workoutList.querySelectorAll('li');
   
    if(getList !== null && getList !== undefined && getList !== ''){
        const myArray = Array.from(getList);

        for (let i = 0 ; i < myArray.length ; i++ ){
            let put = workoutInput.trim();
            if ( myArray[i].textContent.toLocaleLowerCase() === put.toLocaleLowerCase()){
                if(alert("duplicated "+ " "+ workoutInput )=== undefined){
                        document.querySelector('#workoutInput').value = '';
                }
            return;
        }
    }

};


    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
    document.querySelector('#workoutInput').value = '';
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);



const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    const goals = Array.from(goalList.querySelectorAll('li'));
    
    // ⚠️ Hint 1: Check for duplicates
    // Use 'goalList' to get all existing goals and check if 'goalInput' matches any of them.

    for (let i = 0 ; i < goals.length; i++){
        let getGoalInput = goalInput.trim();
        if (goals[i].textContent.toLocaleLowerCase() === getGoalInput.toLocaleLowerCase()){
            if (alert("duplicate detected"+ " " + goalInput ) === undefined){
                document.querySelector('#goalInput').value = ' ';
            }
            return;
        }
        
    };  
    
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);
    document.querySelector('#goalInput').value = ' ';
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
