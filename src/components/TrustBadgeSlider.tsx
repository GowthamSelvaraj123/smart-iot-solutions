"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

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

  const handleScriptLoad = () => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
    const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

    if (!apiKey || !placeId || apiKey === "YOUR_API_KEY_HERE" || placeId === "YOUR_PLACE_ID_HERE") {
      setErrorMsg("API for not load error");
      setIsLoading(false);
      return;
    }

    if (!(window as any).google || !(window as any).google.maps) {
      setErrorMsg("API for not load error");
      setIsLoading(false);
      return;
    }

    // PlacesService requires an HTML node to attach to, even if we aren't rendering a map
    const dummyElement = document.createElement('div');
    const service = new (window as any).google.maps.places.PlacesService(dummyElement);

    service.getDetails(
      {
        placeId: placeId,
        fields: ['rating', 'user_ratings_total', 'reviews']
      },
      (place: any, status: any) => {
        if (status === (window as any).google.maps.places.PlacesServiceStatus.OK && place && place.reviews) {
          const fiveStarReviews = place.reviews
            .filter((r: any) => r.rating === 5)
            .map((r: any) => ({
              author_name: r.author_name,
              rating: r.rating,
              text: r.text,
              relative_time_description: r.relative_time_description
            }));
          
          if (fiveStarReviews.length > 0) {
            setReviews(fiveStarReviews);
          } else {
            setErrorMsg("API for not load error");
          }
        } else {
          console.error("Failed to load reviews from Google Maps JS SDK:", status);
          setErrorMsg("API for not load error");
        }
        setIsLoading(false);
      }
    );
  };

  useEffect(() => {
    if (reviews.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // Increased time so users can read the full review
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <>
      <Script 
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}&libraries=places`}
        strategy="lazyOnload"
        onLoad={handleScriptLoad}
      />
      
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
    </>
  );
}
