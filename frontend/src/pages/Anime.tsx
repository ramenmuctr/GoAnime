import React from 'react';
import { useParams } from 'react-router-dom';

const Anime: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <h1>Anime Page</h1>
            <p>Вы перешли на аниме с ID: <strong>{id}</strong></p>
        </div>
    );
};

export default Anime;
