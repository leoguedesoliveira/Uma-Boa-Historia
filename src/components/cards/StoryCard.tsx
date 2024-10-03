import React from 'react';
import { Link } from 'react-router-dom';

interface StoryCardProps {
  id: string
  image: string;
  title: string;
  synopsis: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ id, image, title, synopsis }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img className="w-full h-48 object-cover" src={`${import.meta.env.BASE_URL}assets/${image}`} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800 hover:text-orange-700 cursor-pointer transition duration-500">
          <Link to={`/Uma-Boa-Historia/story/${id}`}>{title}</Link>
        </div>
        <p className="text-gray-700 text-base">
          {synopsis}
        </p>
      </div>
    </div>
  );
};

export default StoryCard;
