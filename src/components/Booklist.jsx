import { useState, useEffect } from "react";

export const Booklist = ({ language, getData }) => {
    const [bookData, setBookData] = useState(null); //setBookData → bookDataの中身を編集するために必要

    useEffect(() => {
        getData?.(language).then((response) =>
            setBookData(response)
        );
    }, [language, getData]);

    return(
        <ol>{/*三項演算子を用いて条件分岐（nullの場合はデータを読み込まない） */}
            {bookData === null ?(
                <p>now loading...</p>
            ) : (
              bookData.data.items.map((x, index) =>(
                    <li key={index}>
                        <p>{x.volumeInfo.title}</p>
                        <img src={x.volumeInfo.imageLinks.thumbnail} alt=""/>
                        <p>出版日：{x.volumeInfo.publishedDate}</p>
                    </li>
              ))
            )}
        </ol>
    );
};