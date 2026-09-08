import React from 'react';
import './design.css';

function StatsSection() {
  const statsData = [
    {
      id: 1,
      number: '12,000',
      label: 'Total Two-Wheelers'
    },
    {
      id: 2,
      number: '1,500,000+',
      label: 'App Downloads'
    },
    {
      id: 3,
      number: '350,000+',
      label: 'Rides Completed'
    },
    {
      id: 4,
      number: '25+',
      label: 'Total Locations'
    }
  ];

  return (
    <section className="stats-section">
      {/* LEFT DIV: Stats Content Grid */}
      <div className="stats-left">
        <div className="stats-grid">
          {statsData.map((stat) => (
            <div className="stat-card" key={stat.id}>
              <h2 className="stat-number">{stat.number}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT DIV: Image Banner */}
      <div className="stats-right">
        <div className="stats-img-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1000&auto=format&fit=crop" 
            alt="Biker Riding Harley" 
          />
        </div>
      </div>
    </section>
  );
}

export {StatsSection}