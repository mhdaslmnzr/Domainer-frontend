"use client"

import DomainDetailsBox from './components/DomainDetailsBox';
import DomainSearchForm from './components/DomainSearchForm';
import { useState } from 'react';

const Home = () => {
  const [domainDetails, setDomainDetails] = useState(null);
  const [isValidDomain, setIsValidDomain] = useState(true);
  const [apiError, setApiError] = useState(null); // New state variable for API errors

  const handleSubmit = async (event) => {
    event.preventDefault();

    const inputElement = document.getElementById('search');
    const inputValue = inputElement.value.trim();

    // Add domain validation logic using a regular expression
    const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidDomain = domainPattern.test(inputValue);

    if (isValidDomain) {
      try {
        console.log('Making a request to the Flask API...');
        
        const response = await fetch('http://16.170.251.148:8000/process_domain', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ domain: inputValue }),
        });
    
        console.log('Response received:', response);
    
        if (response.ok) {
          const data = await response.json();
          
          console.log('Data received from the API:', data);
    
          // Set domain details
          setDomainDetails(data);
          setIsValidDomain(true);
          setApiError(null); // Clear any previous API errors
        } else {
          console.error('Error fetching data:', response.statusText);
          setApiError('Error fetching data: ' + response.statusText); // Set API error
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setApiError('Error fetching data: ' + error.message); // Set API error
      }
    } else {
      // If the input is not a valid domain, set isValidDomain to false
      setIsValidDomain(false);
    }
    
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-10">
      <link rel="icon" href="miner.png" sizes="any" />
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
          <span className="text-emerald-500">Dominer</span>
        </h1>
      </div>
      <DomainSearchForm onSubmit={handleSubmit} isValidDomain={isValidDomain} />

      {!isValidDomain && (
        <p className="text-red-500">Invalid domain. Please enter a valid domain name.</p>
      )}
      {apiError && (
        <p className="text-red-500">{apiError}</p>
      )}
      {isValidDomain && domainDetails && !apiError && (
        <DomainDetailsBox details={domainDetails} />
      )}
    </main>
  );
};

export default Home;
