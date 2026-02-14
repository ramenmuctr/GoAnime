import React, { useEffect, useState } from 'react';
import Header from "../components/homeComps/header.tsx";
import bg1 from "../assets/pics/bg1.jpg";
import PosterArea, {type PosterAreaProp} from "../components/homeComps/posterArea.tsx";
import HistorySideBar from "../components/homeComps/historySideBar.tsx";
import AnimeRow from "../components/homeComps/animeRow.tsx";
import type { AnimeRowProps } from "../components/homeComps/animeRow.tsx";

const Home: React.FC = () => {
    const [data, setData] = useState<AnimeRowProps | null>(null);
    const [posterData, setPosterData] = useState<PosterAreaProp | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [animeRes, posterRes] = await Promise.all([
                    fetch("/mock/anime.json"),
                    fetch("/mock/poster.json")
                ]);

                if (!animeRes.ok) throw new Error("Не удалось загрузить anime.json");
                if (!posterRes.ok) throw new Error("Не удалось загрузить poster.json");

                const animeJson: AnimeRowProps = await animeRes.json();
                const posterJson: PosterAreaProp = await posterRes.json();

                setData(animeJson);
                setPosterData(posterJson);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, []);


    return (
        <div
            className="h-335.25 bg-center bg-cover flex flex-col"
            style={{backgroundImage: `url(${bg1})`}}
        >
            <Header/>
            <PosterArea data={posterData?.data || []}/>

            <div className="w-screen bg-[#89898980]">
                <div className="w-480 px-16.25 mx-auto flex flex-row gap-10 items-center">
                    <HistorySideBar/>

                    <div className="w-480 flex flex-col">
                        <div
                            className="h-25 text-proxima text-semibold flex flex-row items-center justify-between text-white">
                            <p className="text-[32px]">Популярное</p>
                            <button className="text-[16px] w-25 h-10 rounded-full bg-[#747474B3]">
                                Больше
                            </button>
                        </div>

                        {loading && (
                            <div className="text-white">Загрузка…</div>
                        )}

                        {error && (
                            <div className="text-red-400">{error}</div>
                        )}

                        {data && (
                            <AnimeRow data={data.data}/>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;
