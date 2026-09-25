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
      } catch (error: any) {
        // In development, Google API blocks localhost due to referrer restrictions.
        // This is expected and works correctly in production — suppress the noise.
        const isReferrerError =
          typeof error?.message === "string" &&
          (error.message.includes("PERMISSION_DENIED") ||
            error.message.includes("blocked"));
        if (process.env.NODE_ENV !== "development" || !isReferrerError) {
          console.error("Failed to load reviews from Modern Google Maps JS SDK:", error);
        }
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
    <div className="relative overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 px-5 py-4 rounded-xl mb-8 shadow-2xl max-w-sm w-full sm:w-auto transform transition-all duration-300 hover:scale-[1.02] hover:bg-black/50 group z-10 cursor-default">
      
      {/* Decorative subtle glow that appears on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 rounded-2xl pointer-events-none"></div>

      {/* Header Row: Stars & Google Indicator */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex text-gold text-[11px] sm:text-xs gap-[3px] drop-shadow-md mt-0.5">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
        </div>
        <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          <svg viewBox="0 0 48 48" className="w-[14px] h-[14px] opacity-90" xmlns="http://www.w3.org/2000/svg">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            <path fill="none" d="M0 0h48v48H0z"/>
          </svg>
          <span className="text-[9px] text-white/80 font-semibold tracking-widest uppercase">Verified</span>
        </div>
      </div>

      {/* Review Content Slider */}
      <div className="relative h-[65px] w-full min-w-[260px]">
        {isLoading ? (
          <div className="flex items-center h-full">
            <span className="text-xs font-medium text-white/50 tracking-wide animate-pulse">Loading verified reviews...</span>
          </div>
        ) : errorMsg ? (
          // In dev: API is blocked by referrer restriction (expected). Show nothing.
          // In prod: this state should never be reached if the API key & place ID are correct.
          process.env.NODE_ENV === "development" ? null : (
            <div className="flex items-center h-full">
              <span className="text-xs font-medium text-red-400/80 tracking-wide">{errorMsg}</span>
            </div>
          )
        ) : (
          <div className="relative w-full h-full">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 flex flex-col justify-start w-full transition-all duration-1000 ease-in-out ${
                  index === currentIndex 
                    ? "opacity-100 translate-y-0 pointer-events-auto z-10" 
                    : "opacity-0 translate-y-3 pointer-events-none -z-10"
                }`}
              >
                <p className="text-xs sm:text-sm text-white/90 line-clamp-2 leading-snug font-light italic drop-shadow-sm">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="text-[11px] font-semibold text-gold tracking-wide drop-shadow-sm">
                    {review.author_name}
                  </span>
                  <span className="text-[9px] font-normal text-white/40">
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
