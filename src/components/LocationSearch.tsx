import type { Place } from "../api/Place";
import { useState } from "react";

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void;
}

const LocationSearch = ({ onPlaceClick }: LocationSearchProps): any => {
    const [term, setTerm] = useState("");
    const [places, setPlaces] = useState<Place[]>([]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("Need to search api...", term);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className='font-bold' htmlFor='term'>
                    Search
                </label>
                <input
                    className='m-2 border border-stone-500 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2 w-full'
                    id='term'
                    type='text'
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                ></input>
            </form>
        </div>
    );
};

export default LocationSearch;
