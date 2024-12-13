// Simple auth utilities
export const CREDENTIALS = {
  email: 'admin@example.com',
  password: 'pass123'
};

export function validateCredentials(email: string, password: string): boolean {
  return email === CREDENTIALS.email && password === CREDENTIALS.password;
}