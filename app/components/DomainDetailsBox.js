import React from 'react';

function calculateDaysLeft(expiryDate) {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const timeDifference = expiry - today;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysLeft;
}

const DomainDetailsBox = ({ details }) => {
    return (
      <div>
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <h2 className="text-xl font-semibold mb-2">Details related to {details.domain}</h2>
          <p>Name: {details.domain}</p>
          <p>IP: <span className='bg-emerald-500 font-semibold p rounded'>{details.ip}</span></p>
          <p>City: {details.city}</p>
          <p>Country: {details.country}</p>
          <p>Organization: {details.organization}</p>
          <p>Location: {details.location}</p>
          <p>Postal Code: {details.postal_code}</p>
          <p>Region: {details.region}</p>
          <p>Timezone: {details.timezone}</p>
        </div>
  
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <h2 className="text-xl font-semibold mb-2">Domain Expiry</h2>
          <p>Domain Expiry: {details.domain_expiry}</p>
          <p>Days Left: {calculateDaysLeft(details.domain_expiry)}</p>
        </div>
  
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <h2 className="text-xl font-semibold mb-2">DMARC SPF Configuration</h2>
          <p>DMARC SPF Configured: {details.dmarc_spf.dmarc_spf_configured ? 'Configured' : 'Not Configured Properly'}</p>
        </div>
  
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <h2 className="text-xl font-semibold mb-2">Open Ports</h2>
          <div className="flex flex-wrap gap-4">
            {details.open_ports.map((port, index) => (
              <div key={index} className="bg-gray-200 p-2 rounded-md">
                {port}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default DomainDetailsBox;
