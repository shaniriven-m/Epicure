import { fetchChefs, fetchDishes, fetchRestaurants } from "@/lib/api/fetch-api";
import { Card } from "@/components/card/card";
import TextButton from "@/components/text-button"; import Hero from "@/components/hero"

const HomePage = async () => {
  const restaurants = await fetchRestaurants();
  const dishes = await fetchDishes();
  const chefs = await fetchChefs();

  const rest = restaurants[0];
  const dish = dishes[0];
  const dish1 = dishes[1];
  const chef = chefs[0];

  return (
    <div className="w-full">
      <Hero title={"Epicure works with the top \n chef restaurants in Tel Aviv"} imageSrc={"/images/hero-food.png"} />
    </div >
  )
}

export default HomePage;
