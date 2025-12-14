import { fetchRestaurants } from "@/lib/api/restaurants";
import { Card } from "@/components/ui/card";
import { CardProps } from "@/types/card";

const HomePage = async () => {
  const restaurants = await fetchRestaurants();
  const rest = restaurants[0];

  return (
    <div>
      <h1>All restaurant details:</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card key={rest.id} {...rest} />
      </div>
    </div>
  );
};

export default HomePage;
