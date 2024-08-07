// Retrieve user data from local storage
const dietType = localStorage.getItem('dietType');
const activityLevel = localStorage.getItem('activityLevel');
console.log(activityLevel);

console.log(dietType);

const mealOptions = document.querySelector('.mealOption');

function fetchAndDisplayRecipes() {
  // Get user data from local storage or server
  const userData = JSON.parse(localStorage.getItem('userData')); // Replace with your user data retrieval method

  // fetch user by id - // ! 
  fetch(`/api/recipes?dietType=${encodeURIComponent(userData.dietType)}&activityLevel=${encodeURIComponent(userData.activityLevel)}`)

    .then(response => response.json())
    .then(data => {
      // Clear existing recipes
      mealOptions.innerHTML = '';

      // Create recipe elements
      data.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.innerHTML = `
          <h3>${recipe.title}</h3>
          <p>Calories: ${recipe.calories}</p>
        `;
        mealOptions.appendChild(recipeElement);
      });
    })
    .catch(error => {
      console.error('Error fetching recipes:', error);
      // Handle error, display error message to user
    });
}

// Call the function to fetch and display recipes
fetchAndDisplayRecipes();
