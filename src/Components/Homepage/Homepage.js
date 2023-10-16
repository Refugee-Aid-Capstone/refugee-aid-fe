import React, { useState } from 'react';
import refugeesImage from '../../images/refugees.png';
import NavBar from "../NavBar/NavBar";
import '../Homepage/Homepage.scss'

function Homepage() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <header className="home-header">
        <NavBar />

        {showVideo ? (
          <>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/RBQ-IoHfimQ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <button onClick={() => setShowVideo(false)}>Hide Video</button>
          </>
        ) : (
          <>
            <main>
              <section className="content-section">
                <div className="text-side">
                  <div className="media-side">
                    <img src={refugeesImage} alt="Refugees" className="refugees-img" />
                  </div>
                  <h2>Our Mission</h2>
                  <p>
                    Our mission at Refuge is to ensure that migrants, wherever they may be, have access to trusted services and accurate information right at their fingertips.

                    Article 14 of the UN Declaration of Human Rights promises that all individuals have "the right to seek and enjoy asylum from persecution in other countries." At Refuge, we are dedicated to helping people realize and exercise this right, no matter where they are in their journey.

                    We do everything within our power and capabilities to transform the fear in the hearts of those in need into hope.
                  </p>
                </div>
              </section>
            </main>
            <button className="play-video" onClick={() => setShowVideo(true)}>
              Play Video
            </button>
          </>
        )}
      </header>
    </>
  );
}


export default Homepage;