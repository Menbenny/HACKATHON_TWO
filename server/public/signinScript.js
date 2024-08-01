// const  users = require('../users.json')

const createUser = async(event) => {
    event.preventDefault();
    // const myUser = {
    //     ...req.body,
    //     id: users.length + 1,
    //     name: req.body.name,
    //    email: req.body.email,
    //    password: req.body.password
    // }

    // users.push(myUser)
    // writeFileFunc(users)
    // res.sendStatus(201)



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


