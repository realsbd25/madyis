import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

interface ExchangeRateResponse {
  data: {
    [key: string]: {
      code: string;
      value: number;
    };
  };
}

export async function GET() {
  try {
    // Using FreeCurrencyAPI - requires API key from https://freecurrencyapi.com
    // For demo purposes, using a public endpoint that doesn't require auth
    // In production, you should get your own API key

    // Alternative: Using exchangerate-api.com free tier (no auth required)
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates');
    }

    const data = await response.json();

    // Extract only the currencies we need
    const rates = {
      USD: 1,
      EUR: data.rates.EUR || 0.9,
      CHF: data.rates.CHF || 0.92,
    };

    return NextResponse.json({
      success: true,
      rates,
      lastUpdate: data.time_last_updated || new Date().toISOString()
    });

  } catch (error) {
    console.error('Error fetching exchange rates:', error);

    // Fallback to approximate rates if API fails
    return NextResponse.json({
      success: false,
      rates: {
        USD: 1,
        EUR: 0.9,
        CHF: 0.92,
      },
      lastUpdate: new Date().toISOString(),
      error: 'Using fallback rates'
    });
  }
}
