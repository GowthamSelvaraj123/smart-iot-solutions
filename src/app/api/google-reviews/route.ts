import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId || apiKey === "YOUR_API_KEY_HERE" || placeId === "YOUR_PLACE_ID_HERE") {
    return NextResponse.json(
      { error: 'Google Places API configuration is missing in .env.local' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Google API returned status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== "OK") {
      throw new Error(`Google API error: ${data.status}`);
    }

    return NextResponse.json({
      rating: data.result?.rating,
      user_ratings_total: data.result?.user_ratings_total,
      reviews: data.result?.reviews || [],
    });
  } catch (error: any) {
    console.error("Error fetching Google Reviews:", error.message || error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}
