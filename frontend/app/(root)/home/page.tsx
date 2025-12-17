import { fetchChefs, fetchDishes, fetchRestaurants } from "@/lib/api/fetch-api";
import { Card } from "@/components/card/card";

const HomePage = async () => {
  const restaurants = await fetchRestaurants();
  const dishes = await fetchDishes();
  // const chefs = await fetchChefs();

  const rest = restaurants[0];
  const dish = dishes[0];
  // const chef = chefs[0];

  return (
    <div>
      <h1>All restaurant details:</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card key={rest.id} {...rest} />
        <Card key={dish.id} {...dish} />
        {/* <Card key={chef.id} {...chef} /> */}
      </div>
    </div>
  );
};

export default HomePage;
