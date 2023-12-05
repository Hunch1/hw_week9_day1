import "./animelist.css"

const AnimeList = () => {
    const animeList = ['Bleach', 'Naruto', 'One piece'];

    return (
        <div className="center-box">
            <ul className="list-group">
                {animeList.map((show, idx) => {
                    return <li key={idx} className="list-group-item">{show}</li>;
                })}
            </ul>
        </div>
    );
};

export default AnimeList;