import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';


const AppDetailsPage = () => {
  const { id } = useParams();
  const [appDetails, setAppDetails] = useState(null);
  const [showReview, setShowReview] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/Dcatagorydata.json');
        const data = await res.json();
        const selectedApp = data.find((item) => item.id === id);
        setAppDetails(selectedApp);
      } catch (error) {
        console.error('Error fetching app details:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleInstall = () => {
    setShowReview(true);
  };

  const handleReviewSubmit = () => {
    if (reviewText.trim() === '') {
      alert(`Please write a review before submitting.`);
      return;
    }

    const newReview = {
      text: reviewText,
      author: 'You',
      date: new Date().toLocaleDateString(),
    };

    setReviews([newReview, ...reviews]);
    setReviewText('');
    setShowReview(false);
  };

  if (!appDetails) {
    return (
      <div className="mt-10 text-lg text-center text-red-500">
        <div className="w-16 h-16 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-lime-600"></div>
        App not found or still loading...?
      </div>
    );
  }

  return (
    <div className='py-5 bg-black'>
      <div className="flex flex-col p-8 mx-auto mt-8 rounded-md shadow-sm bg-slate-900 max-w-7xl text-cyan-300">
        <h1 className="mb-4 text-3xl font-bold">{appDetails.name}</h1>

        <Link to={appDetails.banner}>
          <img
            src={appDetails.thumbnail}
            alt={appDetails.name}
            className="object-cover w-40 h-40 mx-auto mb-4 rounded-lg"
          />
        </Link>
        <p><strong></strong> {appDetails.developer}</p>
        <p><strong></strong> {appDetails.viue}</p>
        <p><strong></strong> {appDetails.rating} ★★★</p>
        <p><strong></strong> {appDetails.category}</p>
        <p><strong></strong> {appDetails.description}</p>
        <p><strong></strong> {appDetails.features}</p>
		<p className='btn max-w-prose text-cyan-300 bg-slate-900 rounded-2xl'><strong></strong> {appDetails.install}</p>
      </div>

	
      <div className="flex flex-col p-8 mx-auto mt-2 shadow-sm bg-slate-900 rounded-2xl max-w-7xl text-gray-50">
        <button onClick={handleInstall} className="btn text-cyan-300 bg-slate-900 rounded-2xl"> <div className="rating">
            <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="1 star" />
            <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="2 star" defaultChecked />
            <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="3 star" />
            <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="4 star" />
            <input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" aria-label="5 star" />
          </div></button>
        <button className="mt-1 btn text-cyan-300 bg-slate-900 rounded-2xl">Uninstall</button>
      </div>


      {showReview && (
        <div className="flex flex-col p-8 mx-auto mt-8 shadow-sm rounded-2xl bg-slate-800 max-w-7xl text-gray-50">
          <h2 className="text-2xl font-semibold text-center">Your opinion matters!</h2>
          <textarea
            rows="3"
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="p-4 mt-4 rounded-md resize-nonetext-cyan-300 bg-slate-900"
          ></textarea>
          <button
            onClick={handleReviewSubmit}
            type="button"
            className="py-3 mt-4 font-semibold rounded-md text-cyan-300 bg-slate-900 rounded-2xl"
          >
            Leave feedback
          </button>
        </div>
      )}

      
      {reviews.length > 0 && (
        <div className="flex flex-col gap-4 p-8 mx-auto mt-8 bg-gray-800 rounded-md shadow-sm max-w-7xl text-gray-50">
          <h2 className="mb-2 text-xl font-bold">User Reviews:</h2>
          {reviews.map((review, index) => (
            <div key={index} className="p-4 bg-gray-700 rounded-md">
              <p className="text-sm italic">"{review.text}"</p>
              <div className="flex justify-between mt-2 text-xs text-gray-400">
                <span>{review.author}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      )}

    
      <Link
        to="/"
        className="flex flex-col p-8 mx-auto mt-6 mt-8btn text-cyan-300 bg-slate-900 rounded-2xl max-w-7xl"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default AppDetailsPage;
