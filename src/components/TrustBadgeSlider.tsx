"use client";

import { useState, useEffect } from "react";

type Review = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
};

export default function TrustBadgeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    // Fetch live Google Reviews data
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/google-reviews');
        const data = await response.json();
        
        if (response.ok && data.reviews && data.reviews.length > 0) {
          const fiveStarReviews = data.reviews.filter((r: Review) => r.rating === 5);
          if (fiveStarReviews.length > 0) {
            setReviews(fiveStarReviews);
          } else {
            setErrorMsg("API for not load error");
          }
        } else {
          setErrorMsg("API for not load error");
        }
      } catch (error) {
        console.error("Failed to load live reviews", error);
        setErrorMsg("API for not load error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    if (reviews.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // Increased time so users can read the full review
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="inline-flex items-start gap-4 bg-white px-5 py-4 rounded-lg mb-8 shadow-xl max-w-xl w-full sm:w-auto">
      <div className="flex text-gold text-lg shrink-0 mt-1">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
      </div>
      <div className="relative h-[80px] overflow-hidden w-full min-w-[250px]">
        {isLoading ? (
          <div className="flex items-center h-full">
            <span className="text-sm font-bold text-gray-400 tracking-wide animate-pulse">Loading reviews...</span>
          </div>
        ) : errorMsg ? (
          <div className="flex items-center h-full">
            <span className="text-sm font-bold text-red-500 tracking-wide">{errorMsg}</span>
          </div>
        ) : (
          <div 
            className="flex flex-col transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateY(-${currentIndex * 80}px)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="h-[80px] flex flex-col justify-center w-full">
                <span className="text-sm font-bold text-gray-800 mb-1 flex justify-between items-center pr-2">
                  {review.author_name}
                  <span className="text-[10px] font-normal text-gray-400">{review.relative_time_description}</span>
                </span>
                <span className="text-xs text-gray-600 line-clamp-2 italic pr-2">
                  "{review.text}"
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
