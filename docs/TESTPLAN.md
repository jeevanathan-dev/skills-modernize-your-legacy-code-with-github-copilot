# COBOL Student Account System Test Plan

This test plan covers the business logic of the COBOL student account management system. It includes test cases for viewing balance, crediting accounts, debiting accounts, and exiting the application. The plan is designed to validate functionality and will be used to create unit and integration tests in the Node.js transformation.

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status (Pass/Fail) | Comments |
|--------------|-----------------------|----------------|------------|----------------|----------------|---------------------|----------|
| TC001 | View initial balance | Application is compiled and running; initial balance is 1000.00 | 1. Start the application<br>2. Select option 1 (View Balance) | Displays "Current balance: 1000.00" |  |  |  |
| TC002 | Credit account with positive amount | Application is running; current balance is 1000.00 | 1. Select option 2 (Credit Account)<br>2. Enter amount 500.00<br>3. Select option 1 to view balance | Balance increases to 1500.00 and displays "Amount credited. New balance: 1500.00" followed by "Current balance: 1500.00" |  |  |  |
| TC003 | Debit account with sufficient funds | Application is running; current balance is 1500.00 | 1. Select option 3 (Debit Account)<br>2. Enter amount 200.00<br>3. Select option 1 to view balance | Balance decreases to 1300.00 and displays "Amount debited. New balance: 1300.00" followed by "Current balance: 1300.00" |  |  |  |
| TC004 | Debit account with insufficient funds | Application is running; current balance is 1300.00 | 1. Select option 3 (Debit Account)<br>2. Enter amount 2000.00 | Displays "Insufficient funds for this debit." and balance remains 1300.00 |  |  |  |
| TC005 | Debit account with exact balance | Application is running; current balance is 1300.00 | 1. Select option 3 (Debit Account)<br>2. Enter amount 1300.00<br>3. Select option 1 to view balance | Balance decreases to 0.00 and displays "Amount debited. New balance: 0.00" followed by "Current balance: 0.00" |  |  |  |
| TC006 | Credit account with zero amount | Application is running; current balance is 0.00 | 1. Select option 2 (Credit Account)<br>2. Enter amount 0.00<br>3. Select option 1 to view balance | Balance remains 0.00 and displays "Amount credited. New balance: 0.00" followed by "Current balance: 0.00" |  |  |  |
| TC007 | Debit account with zero amount | Application is running; current balance is 0.00 | 1. Select option 3 (Debit Account)<br>2. Enter amount 0.00<br>3. Select option 1 to view balance | Balance remains 0.00 and displays "Amount debited. New balance: 0.00" followed by "Current balance: 0.00" |  |  |  |
| TC008 | Exit application | Application is running | 1. Select option 4 (Exit) | Displays "Exiting the program. Goodbye!" and terminates |  |  |  |
| TC009 | Invalid menu choice | Application is running | 1. Enter invalid choice (e.g., 5) | Displays "Invalid choice, please select 1-4." and redisplays menu |  |  |  |
| TC010 | Multiple operations sequence | Application is running; initial balance 1000.00 | 1. Credit 100.00<br>2. Debit 50.00<br>3. View balance<br>4. Credit 200.00<br>5. View balance | Balance: 1000 +100 -50 +200 = 1250.00; displays correct balances at each step |  |  |  |

## Notes
- All amounts are in dollars with two decimal places.
- The application uses in-memory storage; balance persists only during the session.
- Test cases assume interactive input; for automated tests, simulate inputs.
- Actual Result and Status columns are to be filled during testing.
- This plan covers core business logic; additional edge cases (e.g., negative inputs, large numbers) may be added based on COBOL constraints.</content>
<parameter name="filePath">/workspaces/skills-modernize-your-legacy-code-with-github-copilot/docs/TESTPLAN.md