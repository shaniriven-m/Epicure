export async function fetchRestaurants() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) {
        throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
    }

    const response = await fetch(`${baseUrl}/api/restaurants`);

    // whaen using real server
    // fetch("/api/restaurants", {
    //     cache: "no-store",
    //   });

    if (!response.ok) {
        throw new Error("Failed to fetch restaurants");
    }

    return response.json();
}

