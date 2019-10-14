export type Recipe = Readonly<{
  id?: number;
  name: string;
  description: string;
  source: string;
  recipe_text: string;
}>;
