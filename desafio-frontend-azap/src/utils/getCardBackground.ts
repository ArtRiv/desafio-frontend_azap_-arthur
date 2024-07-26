import { Powerstats } from "@/types/hero";

export const getBackgroundColor = (powerStats: Powerstats): string => {

    const maxStat = Object.keys(powerStats).reduce((max, stat) => 
        powerStats[stat as keyof Powerstats] > powerStats[max as keyof Powerstats] ? stat : max
    , Object.keys(powerStats)[0]);


    const colorMap: { [key: string]: string } = {
        intelligence: "bg-cardIntelligence/40 shadow-xl shadow-cardIntelligence",
        strength: "bg-cardStrength/40",
        speed: "bg-cardSpeed/40",
        durability: "bg-cardDurability/40",
        power: "bg-cardPower/40",
        combat: "bg-cardCombat/40"
    };
    return colorMap[maxStat];
};
