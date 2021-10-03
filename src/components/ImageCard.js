import { FaComments, FaThumbsUp, FaEye, FaDownload } from "react-icons/fa";

const ImageCard = ({ image }) => {

    const tags = image.tags.split(",");

    return (
    <div>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl bg-gray-100">
        <img src={image.webformatURL} alt="" className="w-full" />
        <div className="px-3 py-2">
          <p className="font-bold mb-2 inline-block text-purple-600 text-xl hover:text-purple-900">Photo By {image.user}</p>
          <div className="border-b-2 border-purple-700"></div>
          <ul className="mt-2">
            <li className="flex justify-between">
              <strong><span className="inline-block mr-2  text-xl"><FaEye /></span>Views: <span className="font-light">{image.views}</span></strong>
              <a href={image.largeImageURL} target="_blank" rel="noopener noreferrer" className="bg-purple-500 text-xs text-gray-100 p-2 py-1 rounded-2xl hover:bg-purple-700 hover:shadow-xl">
                See Photo
              </a>
            </li>
            <li>
              <strong><span className="inline-block mr-2 text-xl"><FaThumbsUp /></span>Likes: </strong>
              {image.likes}
            </li>
            <li>
              <strong><span className="inline-block mr-2 text-xl"><FaComments /></span>Comments: </strong>
              {image.comments}
            </li>
            <li>
              <strong><span className="inline-block mr-2 text-xl"><FaDownload /></span>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
            </li>
          </ul>
        </div>
          <div className="px-3 py-2">
            {tags.map((tag, index) => (
                <span key={index} className="inline-block bg-gray-300 text-gray-700 text-sm font-semibold rounded-full py-1 px-2 mr-2 mt-1">
                    #{tag}
                </span>
            ))}
          </div>
      </div>
    </div>
    );
}
 
export default ImageCard;