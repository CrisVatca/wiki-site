import React, { useState, useEffect } from 'react';

const tabs = ['Overview', 'Characteristics', 'Birthday Wishes', 'Fun Facts'];

declare global {
  interface Window {
    tenorEmbed?: {
      load: () => void;
    };
  }
}

export default function InfernoPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tenor.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (window.tenorEmbed && typeof window.tenorEmbed.load === 'function') {
        window.tenorEmbed.load();
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <section className="content-section">
            <h2>🔥 The Legend of Inferno</h2>
            <p>
              <strong>Inferno</strong> is a blazing legend born in the hottest corners of imagination. On an ordinary day, Inferno accidentally downloaded Whiteout Survival thanks to some sneaky fake ads.
              At first, he barely logged in—just once a day, mostly to cause a little harmless chaos and troll around.
              But then something clicked. He saw how amazing the community really is, and suddenly trolling turned into caring.
              Now, he’s a full-time guardian of the family, watching over everyone like a legendary hero.
              Beware—Inferno’s got your back... with a mischievous grin and a whole lot of heart!
            </p>
            <p>Happy Birthday, you magnificent sleep-deprived weirdo!
              Another year of running on caffeine, chaos, and questionable life choices.
              May your naps be long, your weirdness stay strong, and your bedtime continue to be ‘just one more episode’ o’clock.
              🎉🦄😴☕️💥
              Haha joke, you’re awesome no matter what
              Stay MAD and cool
            </p>
            {/* Tenor GIF Embed */}
            <div key="13545214328338654386" className="tenor-gif-embed gif-container" data-postid="13545214328338654386" data-share-method="host" data-aspect-ratio="1.16327" data-width="60%">
              <a href="https://tenor.com/view/whiteout-survival-gif-13545214328338654386">Whiteout Survival GIF</a> from <a href="https://tenor.com/search/whiteout+survival-gifs">Whiteout Survival GIFs</a>
            </div>
          </section>
        );
      case 'Characteristics':
        return (
          <section className="content-section">
            <h2>🔥 Fiery Characteristics</h2>
            <ul>
              <li><strong>Temper:</strong> Angry bomb ready to explode at any time</li>
              <li><strong>Favorite pastimes:</strong> Barbecue, admiring feets, trolling, skipping sleep and sparking good vibes.</li>
              <li><strong>Superpower:</strong> Laughs at his own jokes… even before finishing them. Good listener this mf. Cool whale. Sometimes good jokes. Unique personality.</li>
              <li><strong>Achilles’ heel:</strong> Morning uni classes :))). Good advices he never implements. So clingy, even his shadow tries to get away. </li>
            </ul>
       
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>      
    <img
      src="https://tenor.com/view/hellfire-gif-10103277782914351064.gif"
      alt="Puppet in fire"
      style={{ width: '100%', maxWidth: '400px', marginTop: '1rem' }}
    />
    </div>  
          </section>
          
        );
      case 'Birthday Wishes':
        return (
          <section className="content-section">
            <h2>🎉 Send Birthday Wishes to Inferno!</h2>
            <p>Leave your warm wishes below — Inferno loves hearing from you!</p>
            {/* Google Form Embed */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc19e5sV10Wy2W1EnSLIKP4h6x-dCGAVZjeY41gqiAbYdCgFw/viewform?usp=dialog"
              width="100%"
              height="500"
              style={{ border: 'none', borderRadius: '8px', boxShadow: '0 0 15px #e25822a0' }}
              title="Birthday Wishes Form"
            />
            <h3>See wishes left by others:</h3>
            {/* Google Sheets Embed */}
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSo8Y_gzsiqTDXHskvgHqmgnhJ8xjtjhnnZ77tKKViqDJ2mh6MudAIWxuujlEv75pq3GJ5afRS0nqeC/pubhtml"
              width="100%"
              height="400"
              style={{ border: 'none', borderRadius: '8px', boxShadow: '0 0 15px #e25822a0' }}
              title="Birthday Wishes Responses"
            />
          </section>
        );
      case 'Fun Facts':
        return (
          <section className="content-section">
            <h2>🔥 Fun Fire Fact</h2>
            <p>
              Inferno loves Kaufland sausages.
            </p>
            <p>  He has so many personalities, even his playlist can’t keep up—he got songs for all of them!
             </p>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <style>{`
        /* Dark background with fiery gradient */
        body {
          margin: 0;
          background: #1a0000;
          color: #f3d1b0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          -webkit-font-smoothing: antialiased;
          scrollbar-width: thin;
          scrollbar-color: #e25822 #330a00;
        }
        body::-webkit-scrollbar {
          width: 10px;
        }
        body::-webkit-scrollbar-track {
          background: #330a00;
        }
        body::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #e25822, #ff4500);
          border-radius: 10px;
        }
        main {
          max-width: 900px;
          margin: auto;
          padding: 2rem 1.5rem 4rem;
          background: linear-gradient(135deg, #330a00 0%, #660f00 70%, #220400 100%);
          border-radius: 16px;
          box-shadow: 0 0 30px #e25822cc;
        }
        h1 {
          color: #ff4500;
          text-align: center;
          font-size: 3rem;
          text-shadow:
            0 0 6px #ff5c33,
            0 0 15px #ff1a00,
            0 0 25px #e25822;
          animation: flicker 3s infinite alternate;
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        p.italic {
          font-style: italic;
          color: #f3b28c;
          text-align: center;
          margin-top: -1rem;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }
        nav {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
          border-bottom: 3px solid #550000;
        }
        button {
          background: none;
          border: none;
          padding: 0.7rem 1.3rem;
          margin: 0 0.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: #e8b39d;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease;
        }
        button:hover {
          color: #ff651a;
        }
        button:focus {
          outline: none;
          color: #ff651a;
        }
        button.active,
        button[aria-current="true"] {
          color: #ff6522;
          font-weight: 700;
        }
        button.active::after,
        button[aria-current="true"]::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 10%;
          width: 80%;
          height: 4px;
          background: linear-gradient(90deg, #ff6522, #ffab33);
          border-radius: 4px;
          box-shadow: 0 0 8px #ff6522;
          animation: flame-underline 1.5s infinite alternate;
        }
        @keyframes flame-underline {
          0% {
            box-shadow: 0 0 8px #ff6522, 0 0 12px #ff9f33;
            background-position: 0% 50%;
          }
          100% {
            box-shadow: 0 0 14px #ffbb55, 0 0 18px #ffcc77;
            background-position: 100% 50%;
          }
        }
        .content-section {
          line-height: 1.6;
          font-size: 1.15rem;
          background: #330b00cc;
          padding: 1.5rem 2rem;
          border-radius: 14px;
          box-shadow: inset 0 0 10px #ff652233;
          margin-bottom: 3rem;
          color: #ffd8b3;
        }
        .content-section h2 {
          margin-top: 0;
          color: #ff6522;
          text-shadow: 0 0 8px #ff6522;
          text-align: center;
        }
        ul {
          padding-left: 1.3rem;
          margin-bottom: 1.5rem;
          list-style: disc;
          color: #ffb77a;
        }
        ul li {
          margin-bottom: 0.7rem;
        }
        .gif-container {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
          margin-bottom: 1.5rem;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 0 20px #ff652233;
          transition: transform 0.4s ease;
          cursor: pointer;
        }
        .gif-container:hover {
          transform: scale(1.06) rotate(1deg);
          box-shadow: 0 0 30px #ff7a00cc;
        }
        iframe {
          border-radius: 12px;
        }
        footer {
          text-align: center;
          padding: 1.3rem;
          color: #ffbb77cc;
          text-shadow: 0 0 6px #ff7a00aa;
          font-style: italic;
          letter-spacing: 0.05em;
          user-select: none;
          animation: footerGlow 3s ease-in-out infinite alternate;
        }
        @keyframes footerGlow {
          0% { text-shadow: 0 0 6px #ff7a00aa; }
          100% { text-shadow: 0 0 12px #ffbb00cc; }
        }
        @media (max-width: 600px) {
          main {
            padding: 1.3rem 1rem 3rem;
          }
          h1 {
            font-size: 2.2rem;
          }
          button {
            padding: 0.6rem 1rem;
            margin: 0 0.3rem;
            font-size: 1rem;
          }
          .content-section {
            padding: 1rem 1.3rem;
            font-size: 1rem;
          }
        }
      `}</style>

      <main>
        <h1>Inferno's Flame</h1>
        <p className="italic">“Feel the heat, embrace the fire.”</p>
        <nav role="tablist" aria-label="Inferno page tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? 'active' : ''}
              role="tab"
              aria-selected={activeTab === tab}
              aria-current={activeTab === tab}
              tabIndex={activeTab === tab ? 0 : -1}
            >
              {tab}
            </button>
          ))}
        </nav>
        {renderContent()}
      </main>
      <footer>🔥 Made with passion and a spark of madness 🔥</footer>
    </>
  );
}

