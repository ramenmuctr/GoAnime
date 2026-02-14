import React from 'react';

interface GenresRowsProps {
    genres: string[];
}

const GenresRows: React.FC<GenresRowsProps> = ({ genres }) => {
    const sorted = [...genres].sort((a, b) => a.length - b.length);

    const rows: string[][] = [];
    let remaining = [...sorted];

    while (remaining.length > 0 && rows.length < 2) {
        if (remaining.length === 1) {
            rows.push([remaining[0]]);
            remaining = [];
            break;
        }

        const first = remaining[0];
        const second = remaining[1] ?? null;

        if (second && first.length + second.length <= 15) {
            rows.push([first, second]);
            remaining = remaining.slice(2);
        } else {
            rows.push([first]);
            remaining = remaining.slice(1);
        }
    }

    return (
        <div className="flex flex-col gap-3.5 py-3.5 w-50 h-25 font-proxima font-semibold text-[14px] text-white">
            {rows.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className="flex flex-row gap-3 pl-3.75"
                    style={{
                        justifyContent: row.length === 1 ? 'center' : 'flex-start',
                        flexWrap: 'wrap',
                    }}
                >
                    {row.map((genre) => (
                        <div className="bg-[#222020cc] rounded-[15px] px-3 h-7.25 leading-none flex items-center">
                            <p className=""
                               key={genre}
                               style={{
                                   whiteSpace: 'nowrap',
                               }}
                            >
                                {genre}
                            </p>
                        </div>
                    ))}
                </div>
            ))}

            {rows.length === 0 && (
                <p style={{ textAlign: 'center', color: '#888' }}>Жанров нет</p>
            )}
        </div>
    );
};

export default GenresRows;