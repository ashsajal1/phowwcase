import { useContext } from 'react';
import { SearchContext } from "../context/searchContext"

// Create a custom hook to access the search context
export function useSearchContext() {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearchContext must be used within a SearchProvider');
    }
    return context;
}