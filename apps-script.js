/**
 * Private Pilates — Google Apps Script
 *
 * Setup:
 * 1. Open your Google Sheet
 * 2. Extensions → Apps Script
 * 3. Paste this entire file, replacing the default content
 * 4. Click "Deploy" → "New deployment"
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web app URL
 * 6. Set VITE_GOOGLE_SCRIPT_URL=<that URL> in Vercel project settings
 *
 * Sheet columns: Timestamp | Name | Email | Age Range | Biggest Hurdle | Improve in 6 Weeks
 */

function doPost(e) {
  var sanitize = function (val, maxLen) {
    return String(val || '').substring(0, maxLen || 500).trim();
  };

  try {
    var data = JSON.parse(e.postData.contents);

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Add header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Email',
        'Age Range',
        'Biggest Hurdle',
        'Improve in 6 Weeks',
      ]);
    }

    sheet.appendRow([
      new Date(),
      sanitize(data.name),
      sanitize(data.email),
      sanitize(data.ageRange),
      sanitize(data.biggestHurdle),
      sanitize(data.improveIn6Weeks),
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: 'Internal error' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: test via GET in Apps Script editor
function doGet() {
  return ContentService.createTextOutput('Private Pilates — endpoint is live.');
}
