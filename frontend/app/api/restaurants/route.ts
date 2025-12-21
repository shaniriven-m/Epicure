import { restaurants } from "@/app/api/db/data";

export async function GET() {
    return Response.json(restaurants);
}

export async function POST(request: Request) {
    const restaurant = await request.json();
    restaurants.push(restaurant);
    return Response.json(restaurant, { status: 201 });
}
