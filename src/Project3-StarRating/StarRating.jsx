import { useState } from "react";

export const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const totalStars = 10;

  return (
    <div>
      <h1 className="text-3xl mt-10 h-20">Project 3-Star Rating</h1>
      {[...Array(totalStars)].map((__dirname, index) => {
        const starValue = index + 1;
        return (
          <button
            className="bg-transparent border-none cursor-pointer p-1 text-4xl focus:outline-none"
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          >
            <span
              style={{
                color: starValue <= (hover || rating) ? "#FFD700" : "#e4e5e9",
              }}
            >
              ★
            </span>
          </button>
        );
      })}
      {rating ? (
        <div>
          <p>
            you have selected {rating} out of {totalStars}
          </p>
          <button
            className="p-2 mt-3 bg-[#e4e5e9] rounded border-2 hover:bg-[#FFD700] cursor-pointer"
            onClick={() => setRating(0)}
          >
            Reset
          </button>
        </div>
      ) : (
        <p>Click to enter the rating</p>
      )}
    </div>
  );
};
