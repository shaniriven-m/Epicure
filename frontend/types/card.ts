export type BaseCard = {
    id: string,
    image: string,
    name: string,
}

export type RatingProps = {
    value: number;
    max?: number;
};

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

export type CardProps = RestaurantCard |;
