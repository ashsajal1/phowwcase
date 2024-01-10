import React, { createContext, useState } from 'react';

// Define the search context
interface SearchContextType {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    handleSearch: () => void
}

// Create the search context
export const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Create the search provider component
interface SearchProviderProps {
    children: React.ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log(searchTerm)
    }

    const contextValue: SearchContextType = {
        searchTerm,
        setSearchTerm,
        handleSearch
    };

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
}
