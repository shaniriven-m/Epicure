import { chefs } from "@/app/api/db/data";

export async function GET() {
    return Response.json(chefs);
}

export async function POST(request: Request) {
    const restaurant = await request.json();
    chefs.push(restaurant);
    return Response.json(restaurant, { status: 201 });
}
