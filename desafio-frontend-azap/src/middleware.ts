import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

    const url = new URL(request.url);

    const search_query = url.searchParams.get('q') || "";
    
    const requestHeaders = new Headers(request.headers);

    requestHeaders.set('x-searchParams-search_query', search_query);

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        }
    });
}