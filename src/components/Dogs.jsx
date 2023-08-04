import { useEffect, useState } from "react";
import '../styles/styles.css'

const Dogs = () => {
    const [dog,setDog] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadDogs = () => {
        setLoading(true)
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                setDog(data.message)
                setLoading(false)
            }); 
    }

    useEffect(() => {loadDogs()}, []);

    if(loading) {
       return <h1>Getting dog...</h1>
    }

    return (   
        <div>
            <div className="dog-app-container">
                <h2>Get random dog images</h2>
                <div className="image-container">
                    <img src={dog} alt="Dog"/>
                </div>
                <button onClick={loadDogs}>Fetch dog! </button>
            </div>
        </div>
    );

}

export default Dogs;

//TODO: figure out github actions. Crede