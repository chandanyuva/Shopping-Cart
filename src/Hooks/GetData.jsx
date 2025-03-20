import { useState, useEffect } from "react";

const useGetData = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url, { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((response) => setData(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { data, error, loading };
};

export default useGetData;

// const Image = () => {
//   const { imageURL, error, loading } = useImageURL();

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>A network error was encountered</p>;

//   return (
//     <>
//       <h1>An image</h1>
//       <img src={imageURL} alt={"placeholder text"} />
//     </>
//   );
// };
