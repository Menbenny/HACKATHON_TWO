const createUser = async(event) => {
    
    event.preventDefault();

    try {
        const res = await fetch("http://localhost:5000/api",{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({msg: 'fetching to local'})
        })
        console.log(res);
        const user = await res.json()
        
        console.log(user);
    } catch (error) {
       
        console.log(error);
    }
}


