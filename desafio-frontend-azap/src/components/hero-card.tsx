import { Hero } from "@/types/hero";

export const HeroCard = ({ heroData }: { heroData: Hero }) => {

    return (
        <>
            {heroData.id}
        </>
    )
}