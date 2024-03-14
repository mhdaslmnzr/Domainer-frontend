import React, { useState } from 'react';

const DomainSearchForm = ({ onSubmit, isValidDomain }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event) => {
    setIsLoading(true);
    await onSubmit(event);
    setIsLoading(false);
  };

  return (
    <form className="w-full max-w-md" onSubmit={handleFormSubmit}>
      <div className="relative flex items-center">
        <input
          type="search"
          id="search"
          className="block w-full p-4 ps-2 text-sm text-gray-900 border outline-0	 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Domain"
          required
          title="Please enter a valid domain name"
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : isValidDomain ? 'Search' : 'Search'}
        </button>
      </div>
    </form>
  );
};

export default DomainSearchForm;
