// User related types
export interface User {
  id: string;
  name?: string;
  email?: string;
  image?: string;
  role?: 'user' | 'admin';
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

// API related types
export type ApiResponse<T = any> = {
  data?: T;
  error?: string;
  message?: string;
  success: boolean;
};

// UI related types
export type Theme = 'light' | 'dark' | 'system';

export interface PaginationParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
} 