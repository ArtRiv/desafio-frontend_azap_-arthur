import { Search } from "./search";

export const Header = () => {

    return (
        <header className="flex items-center pl-10 absolute top-0 right-0 w-full h-20 bg-slate-200 shadow-md">
            <Search/>
        </header>
    )
}