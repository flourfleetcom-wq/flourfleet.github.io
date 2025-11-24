export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  serviceType: 'personal' | 'business' | 'international' | 'unsure';
  message: string;
}

export interface ContactSubmission extends ContactFormData {
  id?: string;
  createdAt?: string;
  status?: 'pending' | 'processed';
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
}
