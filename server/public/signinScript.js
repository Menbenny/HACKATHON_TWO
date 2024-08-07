const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    const form = event.target;

    await createUser(event);
    await postUserInfo(event);
    await postDietType(event);
    await mealSelection(event);
    await activitySelection(event);
    // local storage functions
    
    
};

const createUser = async(event) => {
    
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    //################
    // LOCAL STORAGE

    // if (name) {
    //     localStorage.setItem('username', name);
    //     window.location.href = '/server/public/mealOptions.html';
    // }
    
    const userInfoLocalStorage = () => {
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        window.location.href = '/server/public/mealOptions.html';
    }
    userInfoLocalStorage();
    

    //################

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

    console.log(`${age}, ${weight}, ${height}`);

    const userInfoLocalStorage = () => {
        localStorage.setItem('age', age);
        localStorage.setItem('weight', weight);
        localStorage.setItem('height', height);
        window.location.href = '/server/public/mealOptions.html';
    }
    userInfoLocalStorage();
    
    
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
        console.log(`Response from backend: ${JSON.stringify(data)}`);
        
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

    // const caloryCalculatorButton = document.getElementById('caloryCalculator')

    // caloryCalculatorButton.addEventListener("click", (event) => {
    //     event.preventDefault()
        const calculateCalory = () => {
            const bmr = 10 * weight + 6.25 * height - 5 * age + 5
            const BMR_results = `Your average daily calory intake regardless of activity: ${Math.floor(bmr)} cal`
            return document.getElementById("calorie-result").innerText = BMR_results;
        }
       
    // })
    calculateCalory()
}

const postDietType = async(event) => {

    event.preventDefault();
 
   const form = event.target;
   const dietType = form.dietType.value

   console.log(dietType);

   const userInfoLocalStorage = () => {
    localStorage.setItem('dietType', dietType);
 
    window.location.href = '/server/public/mealOptions.html';
    }
    userInfoLocalStorage();

    
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


const mealSelection = async (event) => {
    event.preventDefault(); 
    
    
    const mealOptions = document.getElementsByName('mealOption');
    let selectedMeals = [];

    
    for (let i = 0; i < mealOptions.length; i++) {
        if (mealOptions[i].checked) {
            selectedMeals.push(mealOptions[i].value);
        }
    }

    
    console.log(`Selected meals: ${selectedMeals.join(', ')}`);

    try {
        
        const res = await fetch("http://localhost:5000/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ meals: selectedMeals }) 
        });
        
        
        if (!res.ok) throw new Error(`Error: ${res.statusText}`);

        
        const data = await res.json();
        console.log(`Response from backend: ${JSON.stringify(data)}`);
    } catch (error) {
        
        console.error(error);
    }
};


const activitySelection = async(event) => {
    event.preventDefault()

    const form = event.target;
    const activityLevel = form.activityLevel.value ;

    console.log(activityLevel);

    const userInfoLocalStorage = () => {
        localStorage.setItem('activityLevel', activityLevel);
     
        window.location.href = '/server/public/mealOptions.html';
        }
        userInfoLocalStorage();
    

    try {
        const res = await fetch("http://localhost:5000/signin",{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({activityLevel})
        })
        if(!res.ok) throw new Error(`Error: ${res.statusText}`);
        const data = await res.json()
        console.log(`Response from backend: ${JSON.stringify(data)}`);
        
    } catch (error) {
        console.log(error);
    }

    
}