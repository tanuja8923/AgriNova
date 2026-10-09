# AgriNova — Test Cases

## 1. Purpose

This document defines test cases for checking the AgriNova frontend prototype. Tests should be marked as passed or failed only after they have actually been executed.

## 2. Test Environment

- Project: AgriNova
- Test type: Manual frontend testing
- Browser: Chrome or Microsoft Edge
- Device: Desktop or mobile browser
- Current scope: Existing frontend functionality only

## 3. Test Cases

| Test ID | Test Scenario | Test Steps | Expected Result |
|---|---|---|---|
| TC-01 | Homepage loads | Open the main HTML page | The page loads without a blank screen |
| TC-02 | Navigation | Click each available navigation link | The correct section or page opens |
| TC-03 | Required fields | Submit a form with required fields empty | Validation message appears, if validation is implemented |
| TC-04 | Valid quantity | Enter a positive quantity | The quantity is accepted by the form |
| TC-05 | Invalid quantity | Enter zero, a negative number, or text in the quantity field | Invalid quantity is rejected where validation is implemented |
| TC-06 | Waste type | Select or enter a waste type | The selected value is displayed correctly |
| TC-07 | Form submission | Submit valid sample information | The expected frontend response appears |
| TC-08 | Responsive layout | Open the page at desktop and mobile widths | Content remains readable and usable |
| TC-09 | Missing functionality | Try an option that is not implemented | The interface does not falsely claim a successful backend operation |
| TC-10 | Sample data | Inspect `sample-data/demo-waste-data.json` | The JSON structure is valid and contains demonstration records |

## 4. Execution Results

Record results after running each test.

| Test ID | Actual Result | Status | Notes |
|---|---|---|---|
| TC-01 | To be recorded | Not Run | |
| TC-02 | To be recorded | Not Run | |
| TC-03 | To be recorded | Not Run | |
| TC-04 | To be recorded | Not Run | |
| TC-05 | To be recorded | Not Run | |
| TC-06 | To be recorded | Not Run | |
| TC-07 | To be recorded | Not Run | |
| TC-08 | To be recorded | Not Run | |
| TC-09 | To be recorded | Not Run | |
| TC-10 | To be recorded | Not Run | |

## 5. Limitations

These test cases describe the intended manual testing process. They do not indicate that tests have already passed. Backend APIs, database integration, industry matching, and automated value estimation require separate tests if and when those features are implemented.

## 6. Future Testing

Future versions should include automated tests for:
- API input validation
- Database create, read, update, and delete operations
- User authentication and authorization
- Net value calculation
- Industry matching and ranking
- Error handling and security
