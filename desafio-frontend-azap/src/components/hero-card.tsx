import { Hero } from "@/types/hero";
import Image from "next/image";

export const HeroCard = ({ heroData }: { heroData: Hero }) => {

    return (
        <li className="flex items-center justify-center self-center w-80 mx-auto h-full cursor-pointer">
            <Image
                className="shape--blob rounded-l-xl h-full"
                alt={heroData.name}
                src={heroData.images.lg}
                width={200}
                height={200}
                quality={100}
                loading="lazy"
                draggable={false}
            />
            <div className="h-full w-1/2 flex bg-foreground justify-center items-center">
                <h3 className="antialiased text-white text-center items-center">
                    {heroData.name}
                </h3>
            </div>
        </li>
    )
}