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
