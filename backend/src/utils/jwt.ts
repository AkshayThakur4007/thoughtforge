import jwt from 'jsonwebtoken';

/**
 * Generates a JSON Web Token for a given user ID.
 * The token is signed using the JWT_SECRET environment variable.
 */
export const generateToken = (userId: string): string => {
  // We should ideally throw an error if JWT_SECRET is missing,
  // but for development we fallback to a hardcoded string.
  // In production, ALWAYS ensure JWT_SECRET is set.
  const secret = process.env.JWT_SECRET || 'super_secret_development_key_do_not_use_in_prod';
  
  // Sign the token with the userId payload. 
  // Expires in 7 days for a good balance of security and UX.
  return jwt.sign({ userId }, secret, {
    expiresIn: '7d',
  });
};
