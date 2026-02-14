import React from "react";
import AnimeCard, {type AnimeDataProps} from "./animeCard.tsx";

export interface AnimeRowProps {
    data: AnimeDataProps[];
}

const AnimeRow: React.FC<AnimeRowProps> = ({data}) => {
    return (
        <div className="flex flex-row gap-12.5">
            <AnimeCard id={data[0].id} genres={data[0].genres} poster = {data[0].poster} title = {data[0].title}></AnimeCard>
            <AnimeCard id={data[1].id} genres={data[1].genres} poster = {data[1].poster} title = {data[1].title}></AnimeCard>
            <AnimeCard id={data[2].id} genres={data[2].genres} poster = {data[2].poster} title = {data[2].title}></AnimeCard>
            <AnimeCard id={data[3].id} genres={data[3].genres} poster = {data[3].poster} title = {data[3].title}></AnimeCard>
        </div>
    );
}

export default AnimeRow;