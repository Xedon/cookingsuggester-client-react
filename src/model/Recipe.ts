export type Recipe = Readonly<{
    id: bigint,
    name: string;
    description: string;
    source: string;
    recipe_text: string;
}>