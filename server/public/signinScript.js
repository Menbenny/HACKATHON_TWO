// postUserStats
// age
// weight
// height
// req, res - only in controllers

const createUser = async(event) => {
    
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // ! Frontend - logging user name
    console.log(`Frontend logging user name: ${name} ${email} ${password}`);

    // ! FOR Backend LOGIC - fetch and log the user input -> sent to router
    try {
        const res = await fetch("http://localhost:5000/signin",{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({name, email, password})
        })
        if(!res.ok) {
            throw new Error(`Error: ${res.statusText}`)
        };
        const data = await res.json()
        console.log(`Response from backend: ${JSON.stringify(data)}`);
        
    } catch (error) {
        console.log(error);
    }
}


const postUserInfo = async(event) => {

    event.preventDefault();
 
    const age = event.target.age.value;
    const weight = event.target.weight.value;
    const height = event.target.height.value;
    
    try {
        const res = await fetch("http://localhost:5000/signin",{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({age, weight, height})
        })
        if(!res.ok) throw new Error(`Error: ${res.statusText}`);
        const data = await res.json()
        return data
        // console.log(`Response from backend: ${JSON.stringify(data)}`);
        
    } catch (error) {
        console.log(error);
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

        // ! calory properly estimated according to activity
        // ! ask user activity in forms
        // ! Create swtich cases for every scenario
        // Sedentary - light - moderate - active - very active
        // ? Provide hints for allocation of level of activity 
        
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
        const res = await fetch("http://localhost:5000/signin",{
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
  
}

// const activityLevel = async(event) => {
//     event.preventDefault()

//     const form = event.target;
//     const activityLevel = form.activityLevel.value ;

//     try {
//         const res = await fetch("http://localhost:5000",{
//             method: "POST",
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify({activityLevel})
//         })
//         if(!res.ok) throw new Error(`Error: ${res.statusText}`);
//         const data = await res.json()
//         console.log(`Response from backend: ${JSON.stringify(data)}`);
        
//     } catch (error) {
//         console.log(error);
//     }

    
// }