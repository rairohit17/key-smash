export const firebaseErrorMessages: Record<string, string> = {
  'auth/email-already-in-use':
    'This email is already registered. Please use a different email or log in.',
  'auth/invalid-email': 'Please enter a valid email address.',
  'auth/weak-password':
    'Your password is too weak. Please use at least 6 characters.',
  'auth/missing-email': 'Please enter your email address.',
  'auth/missing-password': 'Please enter a password.',
  'auth/operation-not-allowed':
    'Email/password authentication is not enabled. Please contact support.',
  'auth/too-many-requests': 'Too many attempts. Please try again later.',
  'auth/user-disabled':
    'Your account has been disabled. Please contact support.',
  'auth/network-request-failed':
    'A network error occurred. Please check your internet connection and try again.',
  'auth/user-not-found': 'No account found with this email. Please sign up.',
  'auth/wrong-password':
    'Incorrect password. Please try again or reset your password.',
  'auth/invalid-credential':
    'Invalid credentials. Please check your email and password.',
  default: 'An unexpected error occurred. Please try again.',
};

export const signInErrorMessages: Record<string, string> = {
  // Common login errors
  'auth/invalid-email':
    'The email address is not valid. Please check and try again.',
  'auth/user-disabled':
    'This account has been disabled. Please contact support.',
  'auth/user-not-found': 'No account found with this email. Please sign up.',
  'auth/wrong-password':
    'Incorrect password. Please try again or reset your password.',
  'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
  'auth/network-request-failed':
    'A network error occurred. Please check your internet connection and try again.',
  'auth/internal-error': 'An internal error occurred. Please try again.',

  // Additional errors for login
  'auth/missing-email': 'Please enter your email address.',
  'auth/missing-password': 'Please enter your password.',
  'auth/invalid-credential':
    'Invalid email or password. Please check your credentials.',
  'auth/operation-not-allowed':
    'Email/password login is not enabled. Please contact support.',
  'auth/invalid-verification-code':
    'The verification code is invalid. Please try again.',
  'auth/invalid-verification-id':
    'The verification ID is invalid. Please try again.',
  'auth/captcha-check-failed': 'Captcha verification failed. Please try again.',
  'auth/email-already-in-use':
    'This email is already registered. Please log in instead.',
  'auth/requires-recent-login':
    'This action requires recent login. Please log in again.',
  'auth/expired-action-code':
    'The action code has expired. Please request a new one.',
  'auth/invalid-action-code':
    'The action code is invalid. Please check and try again.',
  default: 'An unexpected error occurred. Please try again.',
};
