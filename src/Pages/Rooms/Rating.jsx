const Rating = ({ rate }) => {
  const { name, rating, newdate, comment } = rate;

  return (
    <div className=" p-5 border-2 border-[#FA4612] shadow-2xl">
      <h1 className="text-xl text-gray-700">
        <span className="font-semibold">Name : </span>
        {name}
      </h1>
      <h1 className="text-xl text-gray-700">
        <span className="font-semibold">Rating : </span>
        {rating}
      </h1>
      <p>
        <span className="font-semibold text-xl">Date : </span> {newdate}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold text-xl">Comment : </span> {comment}
      </p>
    </div>
  );
};

export default Rating;
