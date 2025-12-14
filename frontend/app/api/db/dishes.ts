import { DishCard } from "@/types/card";

const dishes: DishCard[] = [
    {
        id: "d1",
        type: "dish",
        name: "Pad Ki Mao",
        image: "/images/dishes/tuna.jpg",
        description: "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
        icons: ["spicy"],
        price: 88,
    },
    {
        id: "dish-2",
        type: "dish",
        name: "Classic Cheeseburger",
        image: "/images/dishes/burger.jpg",
        description: "Beef patty, cheddar cheese, lettuce and house sauce",
        icons: ["meat"],
        price: 72,
    },
    {
        id: "dish-3",
        type: "dish",
        name: "Truffle Pasta",
        image: "/images/dishes/pasta.jpg",
        description: "Fresh pasta with black truffle cream sauce",
        icons: ["veg"],
        price: 88,
    },
    {
        id: "dish-4",
        type: "dish",
        name: "Grilled Salmon",
        image: "/images/dishes/salmon.jpg",
        description: "Salmon fillet with lemon butter and herbs",
        icons: ["fish", "gluten-free"],
        price: 94,
    },
    {
        id: "dish-5",
        type: "dish",
        name: "Chocolate Lava Cake",
        image: "/images/dishes/lava-cake.jpg",
        description: "Warm chocolate cake with molten center",
        icons: ["dessert"],
        price: 46,
    },
];

export default dishes;
