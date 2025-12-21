import { CardType } from "@/components/card/card";

export async function fetchRestaurants() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) {
        throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
    }

    const response = await fetch(`${baseUrl}/api/restaurants`);

    if (!response.ok) {
        throw new Error("Failed to fetch restaurants");
    }

    return response.json();
}

export async function fetchDishes() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) {
        throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
    }

    const response = await fetch(`${baseUrl}/api/dishes`);

    if (!response.ok) {
        throw new Error("Failed to fetch dishes");
    }

    return response.json();
}
export async function fetchChefs() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) {
        throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
    }

    const response = await fetch(`${baseUrl}/api/chefs`);

    if (!response.ok) {
        throw new Error("Failed to fetch chefs");
    }

    return response.json();
}

export async function fetchTopRated(type: CardType, number = 5) {
    switch (type) {
        case CardType.RESTAURANT: {
            const restaurants = await fetchRestaurants();
            return restaurants.slice(0, number);
        }
        case CardType.DISH: {
            const dishes = await fetchDishes();
            return dishes.slice(0, number);
        }
        case CardType.CHEF: {
            const chefs = await fetchChefs();
            return chefs.slice(0, number);
        }
        default: {
            throw new Error(`Unsupported type: ${type}`);
        }
    }
}