type BaseCard = {
    id: string,
    image: string,
    name: string,
}

export type RestaurantCard = BaseCard & {
    type: "restaurant";
    chef: string;
    rating: number;
};

export type DishCard = BaseCard & {
    type: "dish";
    description: string;
    icons: string[];
    price: number;
};

export type ChefCard = BaseCard & {
    type: "chef";
};

export type CardProps = RestaurantCard | DishCard | ChefCard;
