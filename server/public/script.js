// postUserStats
// age
// weight
// height
const postUserStats = (req, res) => {
    const userStats = {
        ...req.body,
        age: req.body.age,
        weight: req.body.weight,
        height: req.body.height
    }

    
}


// postDietType
// vegetarian
// vegan 