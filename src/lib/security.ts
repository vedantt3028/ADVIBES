/**
 * Security Utilities
 * 
 * Provides input validation, sanitization, and security helpers
 * following OWASP best practices
 */

// Maximum input lengths to prevent DoS attacks
export const MAX_INPUT_LENGTHS = {
  name: 100,
  email: 254, // RFC 5321
  phone: 20,
  company: 200,
  message: 5000,
  service: 100,
} as const;

// Allowed characters patterns for validation
export const VALIDATION_PATTERNS = {
  // Name: letters, spaces, hyphens, apostrophes only
  name: /^[a-zA-Z\s\-'\.]+$/,
  // Email: standard email format
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  // Phone: digits, spaces, hyphens, parentheses, plus sign
  phone: /^[\d\s\-\(\)\+]+$/,
  // Company: alphanumeric, spaces, common punctuation
  company: /^[a-zA-Z0-9\s\-'\.&,]+$/,
  // Service: alphanumeric and hyphens (for URL-safe values)
  service: /^[a-zA-Z0-9\-]+$/,
} as const;

/**
 * Sanitizes string input to prevent XSS attacks
 * Removes HTML tags and escapes special characters
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') {
    return '';
  }

  // Remove null bytes and control characters
  let sanitized = input.replace(/[\x00-\x1F\x7F]/g, '');
  
  // Escape HTML special characters
  sanitized = sanitized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');

  // Trim whitespace
  sanitized = sanitized.trim();

  return sanitized;
}

/**
 * Validates and sanitizes name input
 */
export function validateName(name: string): { valid: boolean; sanitized: string; error?: string } {
  if (!name || typeof name !== 'string') {
    return { valid: false, sanitized: '', error: 'Name is required' };
  }

  const trimmed = name.trim();
  
  if (trimmed.length === 0) {
    return { valid: false, sanitized: '', error: 'Name cannot be empty' };
  }

  if (trimmed.length > MAX_INPUT_LENGTHS.name) {
    return { valid: false, sanitized: '', error: `Name must be less than ${MAX_INPUT_LENGTHS.name} characters` };
  }

  if (!VALIDATION_PATTERNS.name.test(trimmed)) {
    return { valid: false, sanitized: '', error: 'Name contains invalid characters' };
  }

  return { valid: true, sanitized: sanitizeInput(trimmed) };
}

/**
 * Validates and sanitizes email input
 */
export function validateEmail(email: string): { valid: boolean; sanitized: string; error?: string } {
  if (!email || typeof email !== 'string') {
    return { valid: false, sanitized: '', error: 'Email is required' };
  }

  const trimmed = email.trim().toLowerCase();
  
  if (trimmed.length === 0) {
    return { valid: false, sanitized: '', error: 'Email cannot be empty' };
  }

  if (trimmed.length > MAX_INPUT_LENGTHS.email) {
    return { valid: false, sanitized: '', error: `Email must be less than ${MAX_INPUT_LENGTHS.email} characters` };
  }

  if (!VALIDATION_PATTERNS.email.test(trimmed)) {
    return { valid: false, sanitized: '', error: 'Invalid email format' };
  }

  return { valid: true, sanitized: sanitizeInput(trimmed) };
}

/**
 * Validates and sanitizes phone input
 */
export function validatePhone(phone: string): { valid: boolean; sanitized: string; error?: string } {
  if (!phone || typeof phone !== 'string') {
    return { valid: false, sanitized: '', error: 'Phone is required' };
  }

  const trimmed = phone.trim();
  
  if (trimmed.length === 0) {
    return { valid: false, sanitized: '', error: 'Phone cannot be empty' };
  }

  if (trimmed.length > MAX_INPUT_LENGTHS.phone) {
    return { valid: false, sanitized: '', error: `Phone must be less than ${MAX_INPUT_LENGTHS.phone} characters` };
  }

  if (!VALIDATION_PATTERNS.phone.test(trimmed)) {
    return { valid: false, sanitized: '', error: 'Phone contains invalid characters' };
  }

  return { valid: true, sanitized: sanitizeInput(trimmed) };
}

/**
 * Validates and sanitizes company name input
 */
export function validateCompany(company: string): { valid: boolean; sanitized: string; error?: string } {
  if (!company || typeof company !== 'string') {
    return { valid: false, sanitized: '', error: 'Company is required' };
  }

  const trimmed = company.trim();
  
  if (trimmed.length === 0) {
    return { valid: false, sanitized: '', error: 'Company cannot be empty' };
  }

  if (trimmed.length > MAX_INPUT_LENGTHS.company) {
    return { valid: false, sanitized: '', error: `Company must be less than ${MAX_INPUT_LENGTHS.company} characters` };
  }

  if (!VALIDATION_PATTERNS.company.test(trimmed)) {
    return { valid: false, sanitized: '', error: 'Company contains invalid characters' };
  }

  return { valid: true, sanitized: sanitizeInput(trimmed) };
}

/**
 * Validates and sanitizes message/textarea input
 */
export function validateMessage(message: string): { valid: boolean; sanitized: string; error?: string } {
  if (!message || typeof message !== 'string') {
    return { valid: false, sanitized: '', error: 'Message is required' };
  }

  const trimmed = message.trim();
  
  if (trimmed.length === 0) {
    return { valid: false, sanitized: '', error: 'Message cannot be empty' };
  }

  if (trimmed.length > MAX_INPUT_LENGTHS.message) {
    return { valid: false, sanitized: '', error: `Message must be less than ${MAX_INPUT_LENGTHS.message} characters` };
  }

  // Allow more characters in messages (newlines, basic punctuation)
  // But still sanitize to prevent XSS
  return { valid: true, sanitized: sanitizeInput(trimmed) };
}

/**
 * Validates service selection
 */
export function validateService(service: string): { valid: boolean; sanitized: string; error?: string } {
  if (!service || typeof service !== 'string') {
    return { valid: false, sanitized: '', error: 'Service selection is required' };
  }

  const trimmed = service.trim();
  
  if (trimmed.length === 0) {
    return { valid: false, sanitized: '', error: 'Please select a service' };
  }

  if (trimmed.length > MAX_INPUT_LENGTHS.service) {
    return { valid: false, sanitized: '', error: 'Invalid service selection' };
  }

  if (!VALIDATION_PATTERNS.service.test(trimmed)) {
    return { valid: false, sanitized: '', error: 'Invalid service selection' };
  }

  return { valid: true, sanitized: sanitizeInput(trimmed) };
}

/**
 * Rate limiting helper (client-side)
 * Uses localStorage to track submission attempts
 */
export function checkRateLimit(key: string, maxAttempts: number = 5, windowMs: number = 120000): boolean {
  try {
    const now = Date.now();
    const storageKey = `rate_limit_${key}`;
    const stored = localStorage.getItem(storageKey);
    
    if (!stored) {
      localStorage.setItem(storageKey, JSON.stringify({ count: 1, resetAt: now + windowMs }));
      return true;
    }

    const data = JSON.parse(stored);
    
    // Check if window has expired
    if (now > data.resetAt) {
      // Reset window
      localStorage.setItem(storageKey, JSON.stringify({ count: 1, resetAt: now + windowMs }));
      return true;
    }

    // Check if limit exceeded
    if (data.count >= maxAttempts) {
      const remainingTime = Math.ceil((data.resetAt - now) / 1000); // seconds
      console.warn(`Rate limit exceeded. Try again in ${remainingTime} seconds.`);
      return false; // Rate limit exceeded
    }

    // Increment count
    data.count++;
    localStorage.setItem(storageKey, JSON.stringify(data));
    return true;
  } catch (error) {
    // If localStorage fails, allow the request (fail open for UX)
    // This prevents blocking users if localStorage is disabled or full
    console.error('Rate limit check failed:', error);
    return true;
  }
}

/**
 * Clear rate limit for a specific key
 * Useful after successful submissions
 */
export function clearRateLimit(key: string): void {
  try {
    const storageKey = `rate_limit_${key}`;
    localStorage.removeItem(storageKey);
  } catch (error) {
    console.error('Failed to clear rate limit:', error);
  }
}

/**
 * Validates URL to prevent open redirect attacks
 */
export function validateUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    // Only allow http and https protocols
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Safely opens external URLs with security attributes
 */
export function safeOpenUrl(url: string, target: string = '_blank'): void {
  if (!validateUrl(url)) {
    console.error('Invalid URL:', url);
    return;
  }

  const link = document.createElement('a');
  link.href = url;
  link.target = target;
  link.rel = 'noopener noreferrer'; // Prevent tabnabbing
  link.click();
}
