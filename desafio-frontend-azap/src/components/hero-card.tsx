import { Hero } from "@/types/hero";
import { getBackgroundColor } from "@/utils/getCardBackground";
import Image from "next/image";

export const HeroCard = ({ heroData }: { heroData: Hero }) => {

    const cardBackground = getBackgroundColor(heroData.powerstats);

    return (
        <li className={`flex flex-col items-center justify-center self-center flex-1 mx-auto h-full cursor-pointer ${cardBackground} rounded-xl`}>
            <Image
                className="shape--blob rounded-t-xl h-full"
                alt={heroData.name}
                src={heroData.images.lg}
                width={200}
                height={200}
                quality={100}
                loading="lazy"
                draggable={false}
            />
            <div className="h-full w-1/2 flex justify-center items-center">
                <h3 className="antialiased text-white text-center items-center">
                    {heroData.name}
                </h3>
            </div>
        </li>
    )
}