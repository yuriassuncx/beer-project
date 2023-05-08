export declare class Beer {
    readonly id: string;
    name: string;
    description: string;
    type: string;
    image_url: string;
    price: number;
    constructor(props: Omit<Beer, "id">, id?: string);
}
