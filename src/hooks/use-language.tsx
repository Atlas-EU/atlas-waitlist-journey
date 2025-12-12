import { useState, useEffect } from 'react';

export type Language = 'en' | 'es';

/**
 * Custom hook for language detection and management
 * Detects browser language and stores user preference in localStorage
 */
export const useLanguage = (): [Language, (lang: Language) => void] => {
	// Initialize with browser language on first load
	const getInitialLanguage = (): Language => {
		// Try to get saved preference from localStorage
		if (typeof window !== 'undefined') {
			const savedLanguage = localStorage.getItem('preferredLanguage') as Language | null;
			if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
				return savedLanguage;
			}
			
			// Detect browser language
			const browserLanguage = navigator.language.split('-')[0].toLowerCase();
			return browserLanguage === 'es' ? 'es' : 'en';
		}
		return 'en';
	};

	const [language, setLanguageState] = useState<Language>(getInitialLanguage);

	useEffect(() => {
		// Save preference to localStorage when it changes
		localStorage.setItem('preferredLanguage', language);
	}, [language]);

	const setLanguage = (lang: Language) => {
		setLanguageState(lang);
	};

	return [language, setLanguage];
};
