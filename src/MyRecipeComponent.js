
function MyRecipeComponent ({label, image, calories, ingredients

}){
    return(
        <div >
          <div className="container">
          <h2>{label}</h2>
          
          </div>
          <div className="container">
          <img src={image} alt="recipe"/>
          </div>
          <ul className="container list">
            {ingredients.map((ingredient, index) =>(
              <li key={index}>
                <img src={"https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png "} alt="icon" width='30px'/>
                {ingredient}</li>
            ))}
          </ul>
          <div className="container">
          <h4>{calories.toFixed()} calories</h4>
          </div>
        </div>
    )
}
export default MyRecipeComponent;
