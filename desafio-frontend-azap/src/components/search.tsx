"use client"

import { useState } from "react"
import { SearchIcon } from "./icons/search-icon"
import { useRouter } from "next/navigation";

export const Search = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const router = useRouter();

    const navigate = () => {
        if(inputValue) {
            const encodedQuery = encodeURIComponent(inputValue);
            router.push(`/results?q=${encodedQuery}`);
        }
    }

    return (
        <div className="flex justify-start items-center h-full">
            <div className="h-1/2 relative text-center">
                <input
                    className="h-full p-2 webkit-input-search-none text-black"
                    value={inputValue}
                    type="search"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    onChange={(event) => setInputValue(event.target.value)}
                    placeholder="Pesquisar"
                />
                <button
                    className="absolute right-2 top-2 w-6 h-6"
                    type="submit"
                    onClick={navigate}
                >
                    <SearchIcon/> 
                </button>
            </div>

        </div>
    )
}
