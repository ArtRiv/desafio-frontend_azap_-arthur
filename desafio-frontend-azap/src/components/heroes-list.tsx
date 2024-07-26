import { Hero } from "@/types/hero";
import { HeroCard } from "./hero-card";

export const HeroesList = ({ Heroes }: { Heroes: Hero[] }) => {
    return (
        <div className="w-full max-w-[120rem] mx-auto my-0">
            <ul className="grid flex-wrap justify-center grid-cols-2 gap-x-4 gap-y-4 my-4 
            md:gap-x-2 md:gap-y-8
            xl:grid-cols-3">
                {Heroes.map(hero => {
                    return (
                        <HeroCard heroData={hero} key={hero.id}/>
                    );
                })}
            </ul>
        </div>
    )
}