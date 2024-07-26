import { DefaultPageLayout } from "@/components/ui/default-page-layout";
import { HeroesList } from "@/components/heroes-list";
import { getHeroesData } from "@/services/heroes";

export default async function Home() {
  const heroesData = await getHeroesData();

  return (
    <DefaultPageLayout>
      <HeroesList Heroes={heroesData}/>
    </DefaultPageLayout>
  );
}
