/**
 * Environment variable configuration with validation
 * 
 * This module provides a way to define environment variables with validation
 * and default values, ensuring that all required environment variables are
 * properly configured.
 */

/**
 * Wrapper for process.env that includes validation
 * @param key The environment variable name
 * @param defaultValue Optional default value
 * @param required Whether the environment variable is required (default: false)
 * @returns The environment variable value or default
 */
export function env<T extends string | number | boolean>(
  key: string,
  defaultValue?: T,
  required = false
): T {
  const value = process.env[key] as T | undefined;

  if (value === undefined) {
    if (required && defaultValue === undefined) {
      throw new Error(`Required environment variable ${key} is not set`);
    }
    return defaultValue as T;
  }

  // Handle boolean values
  if (typeof defaultValue === 'boolean') {
    return (value === 'true' ? true : value === 'false' ? false : value) as T;
  }
  
  // Handle number values
  if (typeof defaultValue === 'number') {
    const parsedValue = Number(value);
    if (Number.isNaN(parsedValue)) {
      throw new Error(`Environment variable ${key} is not a valid number`);
    }
    return parsedValue as T;
  }

  return value as T;
}

// App configuration
export const APP_CONFIG = {
  nodeEnv: env('NODE_ENV', 'development'),
  isProduction: env('NODE_ENV') === 'production',
  isDevelopment: env('NODE_ENV') === 'development',
  isTest: env('NODE_ENV') === 'test',
  
  // Server
  port: env('PORT', 3000, false),
  appUrl: env('NEXT_PUBLIC_APP_URL', 'http://localhost:3000'),
};

// Authentication configuration (for future use)
export const AUTH_CONFIG = {
  // Add auth config when setting up authentication
};

// Database configuration (for future use)
export const DB_CONFIG = {
  // Add database config when setting up database connection
};

// Analytics & Services (for future use)
export const SERVICES_CONFIG = {
  // Add services config when integrating with external services
};

// Export a type for the overall app configuration
export type AppConfig = typeof APP_CONFIG; 