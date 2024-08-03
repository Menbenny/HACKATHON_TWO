const createUser = async(event) => {
    
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // ! Frontend - logging user name
    console.log(`Frontend logging user name: ${name}`);

    // ! FOR Backend LOGIC - fetch and log the user input -> sent to router
    try {
        const res = await fetch("http://localhost:5000/",{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({name, email, password})
        })
        if(!res.ok) throw new Error(`Error: ${res.statusText}`);
        const data = await res.json()
        console.log(`Response from backend: ${JSON.stringify(data)}`);
        
    } catch (error) {
        console.log(error);
    }
}


