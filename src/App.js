
import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4';
import MyRecipeComponent from './MyRecipeComponent';

function App() {
  const MY_ID = "cd3eeae3";
  const MY_KEY = "e5044709440a6cf538e359846874e6f9";

  const [mySearch, setMySearch] = useState("");
  const [myRecipe, setMyRecipe] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState ("avacado");

useEffect (() =>{
  const getRecipe = async () =>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}%09`);
    const data = await response.json();
    console.log(data);
    setMyRecipe(data.hits)

  }
  getRecipe()
}, [wordSubmitted])

const myRecipeSearch = (e) =>{
  setMySearch(e.target.value)
}
const finalSearch = (e) => {
  e.preventDefault()
setWordSubmitted(mySearch)
}

  return (
    <div className="App">
  <div className="container">
  <h1>Find a Recipe</h1>
  <video autoPlay muted loop>
    <source src={video} type="video/mp4" /></video>
  </div>
  <div className='container'>
     <form onSubmit={finalSearch}>
         <input className='search' placeholder='Search' onChange={myRecipeSearch} value={mySearch}/>
    </form>
</div>
<div className='container'>
     <button onClick={finalSearch}>
        <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
      </button>
</div>
{myRecipe.map ((element, index) =>(
  <MyRecipeComponent key={index}
  label={element.recipe.label}
  image={element.recipe.image} 
  calories={element.recipe.calories}
  ingredients={element.recipe.ingredientLines
}
  />
))}

  </div>
  );
}

export default App;
