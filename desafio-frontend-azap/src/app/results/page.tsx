

import { DefaultPageLayout } from "@/components/default-page-layout";
import { HeroesList } from "@/components/heroes-list";
import { useHeroesBySearch } from "@/hooks/useHeroesBySearch";
import useQueryParams from "@/utils/getServerSettings";


export default async function Results() {
    const { search_query } = useQueryParams();
    const decodedQuery = decodeURIComponent(search_query);
    const results = await useHeroesBySearch(decodedQuery);

    return (
        <DefaultPageLayout>
            <HeroesList Heroes={results} />
        </DefaultPageLayout>
    );
}
