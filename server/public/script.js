// postUserStats
// age
// weight
// height
// req, res - only in controllers
const postUserStats = async(event) => {

    event.preventDefault();
 
    const age = event.target.age.value;
    const weight = event.target.weight.value;
    const height = event.target.height.value;

    try {
        try {
            const res = await fetch("http://localhost:5000/profile",{
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({age, weight, height})
            })
            if(!res.ok) throw new Error(`Error: ${res.statusText}`);
            const data = await res.json()
            console.log(`Response from backend: ${JSON.stringify(data)}`);
            
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        
    }


    // Daily calorie calculator
    //##################################### 
    /**
     * ? Harris-Benedict equation
     * ! Used to estimate the Basal Metabolic Rate (BMR)
     * ? Possible to adjust based on user activity level  
     */

    // const calculateCalory = (event) => {
    //     event.preventDefault();

    //     // ! calory properly estimated according to activity
    //     // ! ask user activity in forms
    //     // ! Create swtich cases for every scenario
    //     // Sedentary - light - moderate - active - very active
    //     // ? Provide hints for allocation of level of activity 
        
    //     const bmr = 10 * weight + 6.25 * height - 5 * age + 5

    //     return console.log(`Average Daily Calory intake: ${Math.floor(bmr)} cal`);
    // }

    const caloryCalculatorButton = document.getElementById('caloryCalculator')

    caloryCalculatorButton.addEventListener("click", (event) => {
        event.preventDefault()
        
        const bmr = 10 * weight + 6.25 * height - 5 * age + 5

        const BMR_results = `Your average daily calory intake regardless of activity: ${Math.floor(bmr)} cal`

        return document.getElementById("calorie-result").innerText = BMR_results;
    })
    // calculateCalory()
}

const postDietType = async(event) => {
    event.preventDefault();
 
   const form = event.target;
   const dietType = form.dietType.value

   console.log(dietType);

    try {
        try {
            const res = await fetch("http://localhost:5000/profile",{
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({dietType})
            })
            if(!res.ok) throw new Error(`Error: ${res.statusText}`);
            const data = await res.json()
            console.log(`Response from backend: ${JSON.stringify(data)}`);
            
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        
    }
}