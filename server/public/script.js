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


    // Daily calory calculator
    
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