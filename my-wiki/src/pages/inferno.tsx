import React, { useState } from 'react';

const tabs = ['Overview', 'Characteristics', 'Birthday Wishes', 'Fun Facts'];

export default function InfernoPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <section>
            <h2>🔥 The Legend of Inferno</h2>
            <p>
              <strong>Inferno</strong> is a blazing legend born in the hottest corners of imagination. Known for turning up the heat wherever they go, Inferno’s fiery personality sparks warmth and wild chaos in equal measure.
            </p>
          </section>
        );
      case 'Characteristics':
        return (
          <section>
            <h2>🔥 Fiery Characteristics</h2>
            <ul>
              <li><strong>Temper:</strong> Hot-headed and passionate.</li>
              <li><strong>Favorite pastimes:</strong> Barbecue, dance-offs, and sparking good vibes.</li>
              <li><strong>Superpower:</strong> Melting hearts and ice cream.</li>
              <li><strong>Achilles’ heel:</strong> Water balloons and rainy days.</li>
            </ul>
          </section>
        );
      case 'Birthday Wishes':
        return (
          <section>
            <h2>🎉 Send Birthday Wishes to Inferno!</h2>
            <p>Leave your warm wishes below — Inferno loves hearing from you!</p>
            {/* Google Form Embed */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc19e5sV10Wy2W1EnSLIKP4h6x-dCGAVZjeY41gqiAbYdCgFw/viewform?usp=dialog"
              width="100%"
              height="500"
              style={{ border: 'none' }}
              title="Birthday Wishes Form"
            />
            <h3>See wishes left by others:</h3>
            {/* Google Sheets Embed */}
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSo8Y_gzsiqTDXHskvgHqmgnhJ8xjtjhnnZ77tKKViqDJ2mh6MudAIWxuujlEv75pq3GJ5afRS0nqeC/pubhtml"
              width="100%"
              height="400"
              style={{ border: 'none' }}
              title="Birthday Wishes Responses"
            />
          </section>
        );
      case 'Fun Facts':
        return (
          <section>
            <h2>🔥 Fun Fire Fact</h2>
            <p>
              Inferno once roasted marshmallows over a computer server — causing a firewall both digital and literal!
            </p>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <main style={{ maxWidth: 900, margin: 'auto', padding: '2rem', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h1 style={{ color: '#e25822' }}>🔥 Inferno Wiki 🔥</h1>
      <p style={{ fontStyle: 'italic', color: '#555' }}>Your ultimate blaze of knowledge on fire, fun, and fantastic fiery facts!</p>

      {/* Tabs Navigation */}
      <nav style={{ marginBottom: '1.5rem' }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              marginRight: '1rem',
              padding: '0.5rem 1rem',
              border: 'none',
              borderBottom: activeTab === tab ? '3px solid #e25822' : '3px solid transparent',
              background: 'none',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              cursor: 'pointer',
              color: activeTab === tab ? '#e25822' : '#333',
            }}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Render active tab content */}
      {renderContent()}

      <footer style={{ marginTop: '4rem', textAlign: 'center', fontSize: '0.9rem', color: '#999' }}>
        <p>© {new Date().getFullYear()} Inferno Wiki — Keep your flames bright and your spirit brighter!</p>
      </footer>
    </main>
  );
}
