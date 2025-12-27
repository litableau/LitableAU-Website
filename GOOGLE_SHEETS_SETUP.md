# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets as a database for event registrations.

## Option 1: Using Google Apps Script (Recommended - Easier)

This is the simplest method and doesn't require complex authentication.

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Event Registrations" (or any name you prefer)
4. **No need to add headers manually** - the script will create tabs automatically for each event

### Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any existing code and paste this script:

```javascript
function doPost(e) {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const data = JSON.parse(e.postData.contents);
    
    // Sanitize sheet name (Google Sheets has restrictions on sheet names)
    // Max 100 characters, no special characters like / \ ? * [ ]
    let sheetName = data.sheetName || data.eventTitle || 'Event ' + data.eventId;
    sheetName = sheetName.replace(/[\/\\\?\*\[\]]/g, '_') // Replace invalid chars
                         .substring(0, 100); // Max 100 characters
    
    // Get or create the sheet for this event
    let sheet = spreadsheet.getSheetByName(sheetName);
    
    if (!sheet) {
      // Create a new sheet for this event
      sheet = spreadsheet.insertSheet(sheetName);
      
      // Add headers to the new sheet
      sheet.appendRow([
        'Timestamp',
        'Event ID',
        'Event Title',
        'Name',
        'Email',
        'Phone',
        'Student ID',
        'Department',
        'Year',
        'Additional Info'
      ]);
      
      // Format header row (bold, background color)
      const headerRange = sheet.getRange(1, 1, 1, 10);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#8B7355');
      headerRange.setFontColor('#FFFFFF');
      
      // Freeze header row
      sheet.setFrozenRows(1);
    }
    
    // Append the registration data as a new row
    sheet.appendRow([
      data.timestamp,
      data.eventId,
      data.eventTitle,
      data.name,
      data.email,
      data.phone,
      data.studentId,
      data.department,
      data.year,
      data.additionalInfo || ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, sheetName: sheetName }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (💾 icon) and give your project a name
4. Click **Deploy** → **New deployment**
5. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
6. Set the following:
   - **Description**: Event Registration API
   - **Execute as**: Me
   - **Who has access**: Anyone
7. Click **Deploy**
8. Copy the **Web App URL** (it will look like: `https://script.google.com/macros/s/.../exec`)

### Step 3: Configure Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the following:

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual URL from Step 2.

3. Restart your Next.js development server

## Option 2: Using Google Sheets API v4 (Advanced)

This method requires API keys and proper authentication setup.

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Event Registrations" (or any name you prefer)
4. **No need to add headers manually** - tabs will be created automatically for each event

### Step 2: Enable Google Sheets API

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Enable the **Google Sheets API**:
   - Go to **APIs & Services** → **Library**
   - Search for "Google Sheets API"
   - Click **Enable**

### Step 3: Create API Credentials

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **API Key**
3. Copy the API key
4. (Optional) Restrict the API key to Google Sheets API only for security

### Step 4: Get Your Sheet ID

1. Open your Google Sheet
2. Look at the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`
3. Copy the `SHEET_ID` part

### Step 5: Configure Environment Variables

Add to your `.env.local` file:

```env
GOOGLE_SHEETS_ID=your_sheet_id_here
GOOGLE_SHEETS_RANGE=Sheet1!A:J
GOOGLE_SHEETS_API_KEY=your_api_key_here
```

**Note**: 
- For write operations, you'll need OAuth 2.0 or Service Account credentials. The API key alone may not work for writing. 
- Option 2 (Google Sheets API v4) will write to a single sheet. For separate tabs per event, you'll need to modify the API calls to create sheets dynamically, which is more complex.
- **We strongly recommend using Option 1 (Google Apps Script)** as it automatically handles tab creation and is much simpler to set up.

## How It Works

- **Each event gets its own tab**: When someone registers for an event, the script automatically creates a new tab (sheet) named after the event title
- **Automatic organization**: All registrations for "QUIZ" go to the "QUIZ" tab, "IPL AUCTION" registrations go to the "IPL AUCTION" tab, etc.
- **Headers are added automatically**: The first time a tab is created, column headers are automatically added
- **Clean structure**: Each tab only contains registrations for that specific event

## Testing

1. Start your development server: `npm run dev`
2. Navigate to an event page
3. Click "Register Now"
4. Fill out the form and submit
5. Check your Google Sheet - you should see:
   - A new tab created with the event name (if it's the first registration for that event)
   - A new row added to the appropriate event tab

## Downloading as CSV

To download registrations for a specific event as CSV:

1. Open your Google Sheet
2. Click on the tab for the event you want to download (e.g., "QUIZ", "IPL AUCTION")
3. Go to **File** → **Download** → **Comma-separated values (.csv)**
4. The CSV file will contain only registrations for that specific event

**Note**: You can also download the entire spreadsheet, but individual tabs allow you to export each event's registrations separately.

## Troubleshooting

### "Server configuration error"
- Make sure you've set the environment variables correctly
- Restart your Next.js server after adding environment variables
- Check that `.env.local` is in your project root

### "Failed to save registration"
- Verify your Google Apps Script URL is correct
- Make sure the Apps Script deployment is set to "Anyone" access
- Check the Apps Script execution logs for errors

### CORS Errors
- If using Google Apps Script, make sure the deployment allows "Anyone" access
- The script should handle CORS automatically

### Sheet Name Issues
- Google Sheets has restrictions on sheet names (max 100 characters, no special characters like / \ ? * [ ])
- The script automatically sanitizes event titles to valid sheet names
- If two events have very similar names, they might end up in the same tab (e.g., "QUIZ" and "QUIZ " would be treated as the same)
- Special characters in event names are replaced with underscores

## Security Notes

- Never commit `.env.local` to version control
- Keep your API keys and script URLs secure
- Consider adding rate limiting to prevent abuse
- Validate and sanitize all form inputs (already done in the API route)

