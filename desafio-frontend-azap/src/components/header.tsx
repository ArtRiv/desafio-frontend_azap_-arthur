"use client"

import { useState } from "react"

export const Header = () => {
    const [inputValue, setInputValue] = useState<string>('');

    return (
        <header className="flex items-center pl-10 absolute top-0 right-0 w-full h-20 bg-slate-200 shadow-md">
            <div className="flex justify-start items-center h-full">
                <div className="h-1/2 relative text-center">
                    <input
                        className="h-full p-2"
                        value={inputValue}
                        type="search"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder=""
                    />
                    <label className="absolute left-2 top-2">
                        Pesquisar
                    </label>
                </div>

                <button
                    className=""
                    type="submit"
                // onClick={handleSubmit}
                >
                    {/* <SearchIcon /> */}
                </button>
            </div>
        </header>
    )
}