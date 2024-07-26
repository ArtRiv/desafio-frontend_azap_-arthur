import Link from "next/link";
import { InputWithButton } from "./input-with-button";
import { ModeToggle } from "./ui/theme-toggle";

export const Header = () => {

    return (
        <header className="flex items-center justify-between pl-16 pr-16 fixed top-0 right-0 w-full h-20 shadow-md bg-background">
            <Link href={"/"}>
                <h1 className="text-4xl cursor-pointer"> 
                    Heroes Arena 
                </h1>
            </Link>
            <InputWithButton/>
            <div className="absolute right-2 top-2">
                <ModeToggle/>
            </div>
        </header>
    )
}