const { runApp } = require('./index');

describe('COBOL Student Account System Tests', () => {
  test('TC001: View initial balance', () => {
    const inputs = ['1'];
    const outputs = runApp(inputs);
    expect(outputs).toContain('Current balance: 1000.00');
  });

  test('TC002: Credit account with positive amount', () => {
    const inputs = ['2', '500.00', '1'];
    const outputs = runApp(inputs);
    expect(outputs).toContain('Amount credited. New balance: 1500.00');
    expect(outputs).toContain('Current balance: 1500.00');
  });

  test('TC003: Debit account with sufficient funds', () => {
    const inputs = ['2', '500.00', '3', '200.00', '1'];
    const outputs = runApp(inputs);
    expect(outputs).toContain('Amount debited. New balance: 1300.00');
    expect(outputs).toContain('Current balance: 1300.00');
  });

  test('TC004: Debit account with insufficient funds', () => {
    const inputs = ['2', '500.00', '3', '200.00', '3', '2000.00'];
    const outputs = runApp(inputs);
    expect(outputs).toContain('Insufficient funds for this debit.');
    // Balance should remain 1300.00, but since we don't debit, check not debited
    expect(outputs).not.toContain('Amount debited. New balance:');
  });

  test('TC005: Debit account with exact balance', () => {
    const inputs = ['2', '500.00', '3', '200.00', '3', '1300.00', '1'];
    const outputs = runApp(inputs);
    expect(outputs).toContain('Amount debited. New balance: 0.00');
    expect(outputs).toContain('Current balance: 0.00');
  });

  test('TC006: Credit account with zero amount', () => {
    const inputs = ['2', '500.00', '3', '200.00', '3', '1300.00', '2', '0.00', '1'];
    const outputs = runApp(inputs);
    expect(outputs).toContain('Amount credited. New balance: 0.00');
    expect(outputs).toContain('Current balance: 0.00');
  });

  test('TC007: Debit account with zero amount', () => {
    const inputs = ['2', '500.00', '3', '200.00', '3', '1300.00', '3', '0.00', '1'];
    const outputs = runApp(inputs);
    expect(outputs).toContain('Amount debited. New balance: 0.00');
    expect(outputs).toContain('Current balance: 0.00');
  });

  test('TC008: Exit application', () => {
    const inputs = ['4'];
    const outputs = runApp(inputs);
    expect(outputs).toContain('Exiting the program. Goodbye!');
  });

  test('TC009: Invalid menu choice', () => {
    const inputs = ['5', '4'];
    const outputs = runApp(inputs);
    expect(outputs).toContain('Invalid choice, please select 1-4.');
    expect(outputs).toContain('Exiting the program. Goodbye!');
  });

  test('TC010: Multiple operations sequence', () => {
    const inputs = ['2', '100.00', '3', '50.00', '1', '2', '200.00', '1'];
    const outputs = runApp(inputs);
    expect(outputs).toContain('Amount credited. New balance: 1100.00');
    expect(outputs).toContain('Amount debited. New balance: 1050.00');
    expect(outputs).toContain('Current balance: 1050.00');
    expect(outputs).toContain('Amount credited. New balance: 1250.00');
    expect(outputs).toContain('Current balance: 1250.00');
  });
});