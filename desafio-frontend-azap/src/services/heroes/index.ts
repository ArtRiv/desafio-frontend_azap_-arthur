import { Hero } from "@/types/hero";

export async function getHeroesData(): Promise<Hero[]>{
    const options = {
        method: 'GET',
    };
    const url = `https://homologacao3.azapfy.com.br/api/ps/metahumans`;
    const res = await fetch(url, options);

    if(!res.ok) {
        console.log('Erro na requisição GET');
    }

    const data = await res.json(); 

    return data;
}
