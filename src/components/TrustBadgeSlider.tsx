"use client";

import { useState, useEffect } from "react";

// Default fallback reviews in case the API is not configured or fails
const defaultReviews = [
  "5.0 Rating based on 64 Google Reviews",
  "Top Home Automation in Coimbatore",
  "Trusted by 1000+ Happy Customers",
  "Smart IoT Solutions for Your Space"
];

export default function TrustBadgeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState<string[]>(defaultReviews);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch live Google Reviews data
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/google-reviews');
        if (response.ok) {
          const data = await response.json();
          if (data.rating && data.user_ratings_total) {
            setReviews([
              `${data.rating.toFixed(1)} Rating based on ${data.user_ratings_total} Google Reviews`,
              "Top Home Automation in Coimbatore",
              "Trusted by 1000+ Happy Customers",
              "Smart IoT Solutions for Your Space"
            ]);
          }
        }
      } catch (error) {
        console.error("Failed to load live reviews", error);
        // Fallback to defaultReviews is already handled since it's the initial state
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-lg mb-8 shadow-xl">
      <div className="flex text-gold text-lg shrink-0">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
      </div>
      <div className="relative h-[20px] overflow-hidden min-w-[250px]">
        {isLoading ? (
          <div className="flex items-center h-full">
            <span className="text-sm font-bold text-gray-400 tracking-wide animate-pulse">Loading reviews...</span>
          </div>
        ) : (
          <div 
            className="flex flex-col transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${currentIndex * 20}px)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="h-[20px] flex items-center">
                <span className="text-sm font-bold text-gray-800 tracking-wide whitespace-nowrap">
                  {review}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
