import { dishes } from "@/app/api/db/data";

export async function GET() {
    return Response.json(dishes);
}

export async function POST(request: Request) {
    const restaurant = await request.json();
    dishes.push(restaurant);
    return Response.json(restaurant, { status: 201 });
}
