import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { headers } from "next/headers";

const getProductsSearchParams = (headersList: ReadonlyHeaders) => {
    const search_query = headersList.get('x-searchParams-search_query') || '';

    return {
        search_query,
    };
}

export default function useQueryParams() {
    const headersList = headers();

    const { search_query} = getProductsSearchParams(headersList);

    return {
        search_query,
    }
}