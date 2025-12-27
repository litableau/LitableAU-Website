import { NextRequest, NextResponse } from 'next/server';

// Google Sheets API configuration
// Option 1: Using Google Apps Script Web App (Recommended - Simpler)
const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL || '';

// Option 2: Using Google Sheets API v4 (Requires Service Account or OAuth)
const GOOGLE_SHEETS_ID = process.env.GOOGLE_SHEETS_ID || '';
const GOOGLE_SHEETS_RANGE = process.env.GOOGLE_SHEETS_RANGE || 'Sheet1!A:J';
const GOOGLE_SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY || '';

interface RegistrationData {
  eventId: string;
  eventTitle: string;
  name: string;
  email: string;
  phone: string;
  studentId: string;
  department: string;
  year: string;
  additionalInfo?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: RegistrationData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.studentId || !data.department || !data.year) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Option 1: Use Google Apps Script (Recommended)
    if (GOOGLE_APPS_SCRIPT_URL) {
      try {
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            eventId: data.eventId,
            eventTitle: data.eventTitle,
            sheetName: data.eventTitle, // Pass event title as sheet name
            name: data.name,
            email: data.email,
            phone: data.phone,
            studentId: data.studentId,
            department: data.department,
            year: data.year,
            additionalInfo: data.additionalInfo || ''
          })
        });

        if (!response.ok) {
          throw new Error('Failed to save to Google Sheets');
        }

        const result = await response.json();
        return NextResponse.json(
          { 
            success: true, 
            message: 'Registration submitted successfully' 
          },
          { status: 200 }
        );
      } catch (error) {
        console.error('Google Apps Script error:', error);
        return NextResponse.json(
          { error: 'Failed to save registration. Please try again.' },
          { status: 500 }
        );
      }
    }

    // Option 2: Use Google Sheets API v4 (Requires proper authentication)
    if (GOOGLE_SHEETS_ID && GOOGLE_SHEETS_API_KEY) {
      // Note: This approach requires OAuth 2.0 or Service Account credentials
      // For production, you should use a service account with proper credentials
      const timestamp = new Date().toISOString();
      const rowData = [
        timestamp,
        data.eventId,
        data.eventTitle,
        data.name,
        data.email,
        data.phone,
        data.studentId,
        data.department,
        data.year,
        data.additionalInfo || ''
      ];

      const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEETS_ID}/values/${GOOGLE_SHEETS_RANGE}:append?valueInputOption=RAW&key=${GOOGLE_SHEETS_API_KEY}`;

      const response = await fetch(sheetsUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [rowData]
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Google Sheets API error:', errorData);
        return NextResponse.json(
          { error: 'Failed to save registration to Google Sheets' },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { 
          success: true, 
          message: 'Registration submitted successfully' 
        },
        { status: 200 }
      );
    }

    // No configuration found
    console.error('Google Sheets configuration missing. Please set GOOGLE_APPS_SCRIPT_URL or GOOGLE_SHEETS_ID and GOOGLE_SHEETS_API_KEY environment variables.');
    return NextResponse.json(
      { error: 'Server configuration error. Please contact the administrator.' },
      { status: 500 }
    );

  } catch (error) {
    console.error('Registration API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
