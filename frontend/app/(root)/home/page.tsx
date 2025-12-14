import { fetchRestaurants } from "@/lib/api/restaurants";

const HomePage = async () => {
  const restaurants = await fetchRestaurants();

  return (
    <div>
      <h1>All restaurant details:</h1>

      <ul className="mt-10">
        {restaurants.map((rest: any) => (
          <li key={rest.id}>
            <h2>{rest.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
