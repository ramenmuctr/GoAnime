import playBtn from "../../assets/svg/PlayBlack.svg";
import dot from "../../assets/svg/dot.svg";
import arrowNext from "../../assets/svg/ArrowNext.svg";
import arrowBack from "../../assets/svg/arrowBack.svg";
import redPlayBtn from "../../assets/svg/redPlayBtn.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import frame1 from "../../assets/pics/Frame1.jpg"
import frame2 from "../../assets/pics/Frame2.jpg"
import frame3 from "../../assets/pics/Frame3.jpg"

export interface PosterAreaProps {
    id: number;
    poster: string;
    title: string;
    description: string;
    genres: string[];
}

export interface PosterAreaProp {
    data: PosterAreaProps[];
}

const foo = (posterInfo: PosterAreaProp | null, index: number): PosterAreaProps | null => {
    const posterArray = posterInfo?.data ?? [];
    const item = posterArray[index];

    if (!item) return null; // безопасно, если нет данных или индекс не существует

    const shortestGenres = (item.genres ?? [])
        .sort((a, b) => a.length - b.length)
        .slice(0, 3);

    return {
        id: item.id,
        poster: item.poster,
        title: item.title,
        description: item.description,
        genres: [shortestGenres[0], shortestGenres[1], shortestGenres[2]]
    };
};



const PosterArea: React.FC<PosterAreaProp> = (props: PosterAreaProp) => {
    const navigate = useNavigate();
    const [value, setValue] = useState(() => Math.floor(Math.random() * 4));
    const increment = () => {
        setValue(prev => (prev >= 3 ? 0 : prev + 1));
    };

    const decrement = () => {
        setValue(prev => (prev <= 0 ? 3 : prev - 1));
    };
    const poster = foo(props, value);
    if (!poster) {
        return <div>Загрузка данных...</div>;
    }

    return (
        <div className="w-screen h-177.5 bg-[#89898980] font-proxima">
            <div className="w-480 px-16.25 mx-auto flex flex-row gap-10 items-center">
                <div id="announce" className="rounded-[45px] max-w-[400px] w-[400px] h-177.5 bg-[#B7B4B4CC] flex flex-col font-semibold text-[16px] text-white">
                    <div className="h-[75px] w-[400px] relative">
                        <div className="absolute top-[20px] left-[40px] bg-[#37363633] rounded-full w-[180px] h-[40px] flex justify-center items-center ">
                            <p className="leading-none">🔥 Новые анонсы</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px] items-center">
                        <div className="relative h-[200px] w-[320px] rounded-[20px]" style={{ backgroundImage: `url(${frame1})`}}>
                            <div className="absolute bg-[#6B6B6B] h-[50px] w-[320px] flex flex-row gap-[10px] px-[12px] rounded-b-[20px] top-[150px] opacity-90 items-center">
                                <p className="h-[40px] w-[250px] leading-tight">Волшебные сёстры Лулутто Лилли</p>
                                <img src={redPlayBtn} className="w-[40px] h-[40px]" alt=""/>
                            </div>
                        </div>
                        <div className="relative h-[200px] w-[320px] rounded-[20px]" style={{ backgroundImage: `url(${frame2})`}}>
                            <div className="absolute bg-[#6B6B6B] h-[50px] w-[320px] flex flex-row gap-[10px] px-[12px] rounded-b-[20px] top-[150px] opacity-90 items-center">
                                <p className="h-[40px] w-[250px] leading-tight">Моя геройская академия: Вне закона</p>
                                <img src={redPlayBtn} className="w-[40px] h-[40px]" alt=""/>
                            </div>
                        </div>
                        <div className="relative h-[200px] w-[320px] rounded-[20px]" style={{ backgroundImage: `url(${frame3})`}}>
                            <div className="absolute bg-[#6B6B6B] h-[50px] w-[320px] flex flex-row gap-[10px] px-[12px] rounded-b-[20px] top-[150px] opacity-90 items-center">
                                <p className="h-[40px] w-[250px] leading-tight">Цугаи загробного мира</p>
                                <img src={redPlayBtn} className="w-[40px] h-[40px]" alt=""/>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="rounded-[60px] bg-center bg-cover" style={{ backgroundImage: `url(${poster.poster})`}}>
                    <div id="poster" className="relative w-337.5 h-177.5 rounded-[60px] bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_20%,rgba(255,255,255,0.1)_80%)]">
                        <div className="w-50 h-10 bg-[#37363699] rounded-[30px] text-white text-[15px] flex justify-center items-center absolute top-6.25 left-10">
                            <p className="leading-none font-semibold">🔥Популярно сейчас</p>
                        </div>

                        <div className="absolute w-162.5 flex flex-col gap-3 px-6 h-fit" style={{ bottom: `140px`}}>
                            <div className="flex flex-row px-6 gap-6 h-8.25 text-white text-[15px] font-semibold">
                                <div className="flex justify-center items-center w-fit px-[10px] bg-[#37363680] rounded-[15px]">
                                    <p className="leading-none">{poster.genres[0]}</p>
                                </div>
                                <div className="flex justify-center items-center w-fit px-[10px] bg-[#37363680] rounded-[15px]">
                                    <p className="leading-none" >{poster.genres[1]}</p>
                                </div>
                                <div className="flex justify-center items-center w-fit px-[10px] bg-[#37363680] rounded-[15px]">
                                    <p className="leading-none" >{poster.genres[2]}</p>
                                </div>
                            </div>
                            <div
                                className="text-white px-6 pb-4 font-semibold"
                                style={{
                                    fontSize: poster.title.length > 20 ? '60px' : '70px'
                                }}
                            >
                                <p className="leading-none">{poster.title}</p>
                            </div>
                            <div className="text-white text-[15px] font-regular px-6 w-125 min-h-[150px] max-h-[200px]">
                                <p className="leading-tight">{poster.description}</p>
                            </div>
                        </div>

                        <div className="absolute flex flex-row w-337.5 h-15 px-10 justify-between" style={{ top: `610px`}}>
                            <div className="w-116.25 flex flex-row gap-3.75">
                                <button className="min-w-50 h-15 gap-3.75 bg-white text-black text-[16px] font-regular rounded-full flex flex-row justify-center items-center">
                                    <img src={playBtn} alt="PLAY"/>
                                    <p className="leading-none relative bottom-px">Смотреть сейчас</p>
                                </button>
                                <button onClick={() => navigate(`/anime/${poster.id}`)} className="w-43.75 h-15 leading-none bg-[#FFFFFF1A] border border-white rounded-full text-white font-regular" >Подробнее</button>
                                <button className="w-15 h-15 bg-[#FFFFFF1A] border border-white rounded-full flex flex-row gap-[3px] justify-center items-center">
                                    <img src={dot} alt=""/>
                                    <img src={dot} alt=""/>
                                    <img src={dot} alt=""/>
                                </button>
                            </div>
                            <div className="w-35 flex flex-row gap-5">
                                <button className="w-15 h-15 rounded-full bg-[#BABABA] flex justify-center items-center" onClick={decrement}>
                                    <img src={arrowBack} alt=""/>
                                </button>
                                <button className="w-15 h-15 rounded-full bg-[#636363B3] flex justify-center items-center" onClick={increment}>
                                    <img src={arrowNext} alt=""/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PosterArea;