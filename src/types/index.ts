export interface PracticeArea {
  id: string;
  title: string;
  icon: string;
  description: string;
  highlights: string[];
  leadAttorney: string;
}

export interface Attorney {
  id: string;
  name: string;
  role: string;
  education: string;
  experience: string;
  specialties: string[];
  image: string;
  bio: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'error' | 'info';
}

export interface BookingForm {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  practiceArea: string;
  priority: string;
  prefDate: string;
  summaryText: string;
}

export interface PortalMessage {
  sender: string;
  text: string;
  time: string;
}

export interface QuizAnswers {
  category: string;
  timeframe: string;
  evidence: string;
  lossValue: string;
}

export interface QuizResult {
  score: number;
  title: string;
  recommendation: string;
  badgeColor: string;
}
