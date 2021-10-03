import { useState } from 'react';



const ImageSearch = ({ searchText }) => {

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text);
    }


    return (
        <div className="max-w-sm rounded-lg overflow-hidden my-10 mx-auto">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="flex items-center border-2 shadow-xl border-teal-500 py-2">
                <input onChange={e => setText(e.target.value)}  className="appearance-none bg-transparent border-none w-full text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
                 type="text" placeholder="Search Image Term..." />
                <button className="flex-shrink-0 bg-purple-500 hover:bg-purple-600 border-purple-500 hover:border-purple-600 text-sm border-4 text-white py-1 px-2 rounded-lg mr-2"
                 type="submit">
                    Search
                </button>
                </div>
            </form>
        </div>
    );
}
 
export default ImageSearch;