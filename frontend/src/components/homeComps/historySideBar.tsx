import React from "react";
import blackPlayBtn from "../../assets/svg/blackPlayBtn.svg"

interface historyEntry {
    title: string;
    status: string;
    episodes_watched: number;
    poster: string;
}

const entry1: historyEntry = {
    title: "Провожающая в последний путь Фрирен 2",
    status: "Запланировано",
    episodes_watched: 0,
    poster: "https://i.postimg.cc/R6ZGB5D8/Frame-36.jpg",
}
const entry2: historyEntry = {
    title: "Кланнад: Продолжение истории",
    status: "Смотрю",
    episodes_watched: 9,
    poster: "https://i.postimg.cc/0MyZsRBF/Frame-36.png",
}
const entry3: historyEntry = {
    title: "Ван-Пис",
    status: "Брошено",
    episodes_watched: 1134,
    poster: "https://i.postimg.cc/Kk8Q2SHH/Frame-366.png",
}
const entry4: historyEntry = {
    title: "Восемьдесят шесть. Часть 2",
    status: "Просмотрено",
    episodes_watched: 0,
    poster: "https://i.postimg.cc/Q9dS3Gy4/Frame-336.jpg",
}



const HistorySideBar: React.FC = () => {
    return (
        <div className="w-100 h-126.5 pt-7.5">
            <div className="bg-[#B7B4B4CC] rounded-[45px] flex flex-col gap-3 h-119 align-top items-center text-white font-proxima font-semibold">
                <div className="flex rounded-b-full h-8 w-31 bg-[#37363633] text-[20px] justify-center">
                    <p>История</p>
                </div>

                <div className="w-[400px] h-[95px] px-[35px] py-[2.5px] justify-between flex flex-row">
                    <img src={entry1.poster} alt="" className="w-[74px] h-[90px] rounded-[10px] "/>
                    <div className="flex flex-col justify-between w-[192px]">
                        <p>{entry1.title}</p>
                        {
                            entry1.episodes_watched == 0 ? (
                                <p>{entry1.status}</p>
                            ) : (
                                <p>{entry1.status}, эпизод {entry1.episodes_watched}</p>
                            )
                        }
                    </div>
                    <img src={blackPlayBtn} alt="" className="w-[38px]"/>
                </div>

                <div className="w-[400px] h-[95px] px-[35px] py-[2.5px] justify-between flex flex-row">
                    <img src={entry2.poster} alt="" className="w-[74px] h-[90px] rounded-[10px] "/>
                    <div className="flex flex-col justify-between w-[192px]">
                        <p>{entry2.title}</p>
                        {
                            entry2.episodes_watched == 0 ? (
                                <p>{entry2.status}</p>
                            ) : (
                                <p>{entry2.status}, эпизод {entry2.episodes_watched}</p>
                            )
                        }
                    </div>
                    <img src={blackPlayBtn} alt="" className="w-[38px]"/>
                </div>

                <div className="w-[400px] h-[95px] px-[35px] py-[2.5px] flex flex-row justify-between">
                    <img src={entry3.poster} alt="" className="w-[74px] h-[90px] rounded-[10px] "/>
                    <div className="flex flex-col justify-between w-[192px]">
                        <p>{entry3.title}</p>
                        {
                            entry3.episodes_watched == 0 ? (
                                <p>{entry3.status}</p>
                            ) : (
                                <p>{entry3.status}, эпизод {entry3.episodes_watched}</p>
                            )
                        }
                    </div>
                    <img src={blackPlayBtn} alt="" className="w-[38px]"/>
                </div>

                <div className="w-[400px] h-[95px] px-[35px] py-[2.5px] justify-between flex flex-row">
                    <img src={entry4.poster} alt="" className="w-[74px] h-[90px] rounded-[10px] "/>
                    <div className="flex flex-col justify-between w-[192px]">
                        <p>{entry4.title}</p>
                        {
                            entry4.episodes_watched == 0 ? (
                                <p>{entry4.status}</p>
                            ) : (
                                <p>{entry4.status}, эпизод {entry4.episodes_watched}</p>
                            )
                        }
                    </div>
                    <img src={blackPlayBtn} alt="" className="w-[38px]"/>
                </div>


            </div>
        </div>
    );
}

export default HistorySideBar;