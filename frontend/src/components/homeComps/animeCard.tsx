import React from "react"
import GenresRows from "./genresRows.tsx"
import playBtnBig from "../../assets/svg/playBtnBig.svg"
import { useNavigate } from "react-router-dom"

export interface AnimeDataProps {
    id: number;
    title: string;
    genres: string[];
    poster: string;
}

const AnimeCard: React.FC<AnimeDataProps> = ({id, title, genres, poster}) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/anime/${id}`)} className="w-75 h-101.5 rounded-[30px] font-proxima font-semibold" style={{backgroundImage: `url(${poster})`, backgroundSize: "cover"}}>
            <div className="flex items-end w-75 h-101.5 rounded-[30px] bg-[linear-gradient(215deg,rgba(255,255,255,0.2)_60%,rgba(0,0,0,0.6)_80%)]">
                <div className="w-75 h-51.5 flex flex-col">
                    <div className="h-26.5 w-75 text-[24px] flex items-end text-white pl-3.75 pb-0">
                        <p>{title}</p>
                    </div>
                    <div id="genres+btn" className="h-25 w-75 flex flex-row gap-3.75">
                        <GenresRows genres = {genres}></GenresRows>
                        <img src={playBtnBig} alt="" className="w-17.5"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimeCard;