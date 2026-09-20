"use client";

import { useState, useEffect } from "react";
import { importLibrary, setOptions } from "@googlemaps/js-api-loader";

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
    const fetchReviews = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
      const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

      if (!apiKey || !placeId || apiKey === "YOUR_API_KEY_HERE" || placeId === "YOUR_PLACE_ID_HERE") {
        setErrorMsg("API for not load error");
        setIsLoading(false);
        return;
      }

      try {
        const CACHE_KEY = "smart_iot_reviews_data";
        const CACHE_TIME_KEY = "smart_iot_reviews_timestamp";
        
        // Check if we have cached reviews less than 5 days old
        const cachedData = localStorage.getItem(CACHE_KEY);
        const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
        
        if (cachedData && cachedTime) {
          const ageInDays = (Date.now() - parseInt(cachedTime, 10)) / (1000 * 60 * 60 * 24);
          if (ageInDays < 5) {
            setReviews(JSON.parse(cachedData));
            setIsLoading(false);
            return; // Exit early, completely skipping the API call!
          }
        }

        // Cache expired or missing, fetch from API
        setOptions({
          key: apiKey,
          v: "weekly"
        });

        const { Place } = await importLibrary("places") as any;

        const place = new Place({
          id: placeId,
        });

        await place.fetchFields({
          fields: ['reviews', 'rating', 'userRatingCount'],
        });

        if (place.reviews && place.reviews.length > 0) {
          const fiveStarReviews = place.reviews
            .filter((r: any) => r.rating === 5)
            .map((r: any) => ({
              author_name: r.authorAttribution?.displayName || "Google User",
              rating: r.rating,
              text: r.text || "",
              relative_time_description: r.relativePublishTimeDescription || ""
            }));
          
          if (fiveStarReviews.length > 0) {
            // Save to localStorage for the next 5 days
            localStorage.setItem(CACHE_KEY, JSON.stringify(fiveStarReviews));
            localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
            
            setReviews(fiveStarReviews);
          } else {
            setErrorMsg("API for not load error");
          }
        } else {
          console.error("No reviews found for this place.");
          setErrorMsg("API for not load error");
        }
      } catch (error) {
        console.error("Failed to load reviews from Modern Google Maps JS SDK:", error);
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
    <div className="relative overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 px-6 py-5 rounded-2xl mb-8 shadow-2xl max-w-lg w-full sm:w-auto transform transition-all duration-300 hover:scale-[1.02] hover:bg-black/50 group z-10 cursor-default">
      
      {/* Decorative subtle glow that appears on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 rounded-3xl pointer-events-none"></div>

      {/* Header Row: Stars & Google Indicator */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex text-gold text-sm sm:text-base gap-1 drop-shadow-md">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
        </div>
        <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-4 h-4 opacity-90" />
          <span className="text-[10px] text-white/80 font-semibold tracking-widest uppercase">Verified</span>
        </div>
      </div>

      {/* Review Content Slider */}
      <div className="relative h-[85px] overflow-hidden w-full min-w-[280px]">
        {isLoading ? (
          <div className="flex items-center h-full">
            <span className="text-sm font-medium text-white/50 tracking-wide animate-pulse">Loading verified reviews...</span>
          </div>
        ) : errorMsg ? (
          <div className="flex items-center h-full">
            <span className="text-sm font-medium text-red-400/80 tracking-wide">{errorMsg}</span>
          </div>
        ) : (
          <div 
            className="flex flex-col transition-transform duration-700 ease-in-out w-full"
            style={{ transform: `translateY(-${currentIndex * 85}px)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="h-[85px] flex flex-col justify-start w-full">
                <p className="text-sm sm:text-base text-white/90 line-clamp-2 leading-relaxed font-light italic drop-shadow-sm">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-semibold text-gold tracking-wide drop-shadow-sm">
                    {review.author_name}
                  </span>
                  <span className="text-[10px] font-normal text-white/40">
                    • {review.relative_time_description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
