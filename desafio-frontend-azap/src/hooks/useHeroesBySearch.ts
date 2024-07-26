import { getHeroesData } from "@/services/heroes";
import { Hero } from "@/types/hero";

export async function useHeroesBySearch(search_query: string): Promise<Hero[]> {
    try {
        const rawData: Hero[] = await getHeroesData();
        console.log(search_query);

        const filteredHeroes = rawData.filter(hero =>
            hero.name.toLowerCase().includes(search_query.toLowerCase())
        );

        return filteredHeroes;
    } catch (error) {
        console.error("Error fetching heroes data:", error);
        return [];
    }
}
