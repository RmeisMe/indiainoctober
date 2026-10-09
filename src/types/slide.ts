export type SlideType =
  | 'claim'
  | 'fact'
  | 'detained'
  | 'section-163'
  | 'peaceful-protests'
  | 'student-orgs'
  | 'question'
  | 'word-of-the-day'
  | 'actual-word'
  | 'thought'
  | 'dhanyawaad';

export interface BaseSlide {
  id: string;
  type: SlideType;
  theme: 'black' | 'red';
}

export interface ClaimSlideData extends BaseSlide {
  type: 'claim';
  theme: 'black';
  badge?: string;
  claim: string;
  subtext?: string;
  stampText?: string; // Default: "MISLEADING"
}

export interface FactSlideData extends BaseSlide {
  type: 'fact';
  theme: 'red';
  badge?: string;
  fact: string;
  source?: string;
  highlightWords?: string[];
  statsBreakdown?: { figure: string; label: string }[];
  subpoints?: string[];
}

export interface DetainedSlideData extends BaseSlide {
  type: 'detained';
  theme: 'red';
  title?: string;
  claimHeading?: string;
  claimText: string;
  factHeading?: string;
  factText: string;
}

export interface Section163SlideData extends BaseSlide {
  type: 'section-163';
  theme: 'black' | 'red';
  title: string;
  intro: string;
  reasons: {
    heading?: string;
    text: string;
  }[];
}

export interface PeacefulProtestsSlideData extends BaseSlide {
  type: 'peaceful-protests';
  theme: 'black' | 'red';
  title?: string;
  items: {
    number: string;
    text: string;
    badge?: string;
  }[];
  isContinuation?: boolean;
}

export interface StudentOrgsSlideData extends BaseSlide {
  type: 'student-orgs';
  theme: 'black' | 'red';
  title: string;
  subtitle: string;
  leadText: string;
  items: {
    number: string;
    title?: string;
    text: string;
  }[];
}

export interface QuestionSlideData extends BaseSlide {
  type: 'question';
  theme: 'red';
  question: string;
  context?: string;
}

export interface WordSlideData extends BaseSlide {
  type: 'word-of-the-day';
  theme: 'black';
  title?: string;
  word: string;
  phonetic?: string;
  partOfSpeech?: string;
  definitions: string[];
}

export interface ActualWordSlideData extends BaseSlide {
  type: 'actual-word';
  theme: 'black' | 'red';
  title: string;
  word: string;
  phonetic?: string;
  partOfSpeech?: string;
  definitions: string[];
}

export interface ThoughtSlideData extends BaseSlide {
  type: 'thought';
  theme: 'black';
  title?: string;
  quote?: string;
  lines?: {
    text: string;
    isBold?: boolean;
    isHighlight?: boolean;
  }[];
  author?: string;
}

export interface DhanyawaadSlideData extends BaseSlide {
  type: 'dhanyawaad';
  theme: 'black' | 'red';
  titleHindi: string;
  phoneticEnglish: string;
  message?: string;
}

export type SlideData =
  | ClaimSlideData
  | FactSlideData
  | DetainedSlideData
  | Section163SlideData
  | PeacefulProtestsSlideData
  | StudentOrgsSlideData
  | QuestionSlideData
  | WordSlideData
  | ActualWordSlideData
  | ThoughtSlideData
  | DhanyawaadSlideData;
