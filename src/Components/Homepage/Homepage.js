import React, { useState } from 'react';
import refugeesImage from '../../images/refugees.png';
import NavBar from "../NavBar/NavBar";
import '../Homepage/Homepage.scss'

function Homepage() {
  const [showVideo, setShowVideo] = useState(false);

  console.log('Homepage component is rendering');
  console.log('Value of showVideo is:', showVideo);

  return (
    <header className="home-header">
  <div className="navbar-container">
    <NavBar />
  </div>
      <main>
        <section className="content-section">
          <div className="media-side">
            {showVideo ? (
              <iframe
    title="Refuge Video"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/RBQ-IoHfimQ"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
></iframe>
            ) : (
              <div className="refugee-image-container">
    <img src={refugeesImage} alt="Refugees" className="refugees-img" />
</div>

            )}
          </div>
          <div className="text-side">
            <div className="title-container">
              <h2>Our Mission</h2>
            </div>
         <p>
Our mission at Refuge is to ensure that migrants, wherever they may be, have access to trusted services and accurate information right at their fingertips.

Article 14 of the UN Declaration of Human Rights promises that all individuals have "the right to seek and enjoy asylum from persecution in other countries." At Refuge, we are dedicated to helping people realize and exercise this right, no matter where they are in their journey.

We do everything within our power and capabilities to transform the fear in the hearts of those in need into hope.
</p>
            {!showVideo ? (
              <button className="play-video" onClick={() => setShowVideo(true)}>
                Play Video
              </button>
            ) : (
              <button className="hide-video" onClick={() => setShowVideo(false)}>
                Hide Video
              </button>
            )}
          </div>
        </section>
      </main>
    </header>
  );
}

export default Homepage;