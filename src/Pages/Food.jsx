

const Food = (food) => {
    return (
        <div className=" w-[30%] p-10 m-5">
        <div>
            <img src={food.data.strMealThumb} alt="" />
            <div className=" flex justify-between mb-5 mt-3">
            <a className=" bg-[green] p-3 text-[#fff] rounded-xl" href={food.data.strYoutube}>Watch video</a>
            <h2 className=" text-[indigo] uppercase text-[24px]">Recipe</h2>
            </div>
            <p className=" h-[290px] overflow-hidden mb-3"> {food.data.strInstructions} </p>
        </div>
        <div>
            <h2> {food.data.strMeal} </h2>
            <p> {food.data. strArea} Food </p>
        </div>
       </div>
    );
};

export default Food;