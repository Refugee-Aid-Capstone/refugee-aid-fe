import React, { useState } from 'react';
import refugeesImage from '../../images/refugees.png';
import NavBar from "../NavBar/NavBar";
import '../Homepage/Homepage.scss'

function Homepage() {
  const [showVideo, setShowVideo] = useState(false);

  console.log('Homepage component is rendering'); //dont forget to delet
  console.log('Value of showVideo is:', showVideo); //dont forget to delete

  return (
    <header className="home-header">
      <div className="navbar-container">
        <NavBar />
      </div>
      <main>
        <section className="content-section">
          <div className="media-side">
            <div className="media-content">
              {showVideo ? (
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Jzg842IC5e0?si=kj0WxGYPqjOZRywf"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                  </iframe>
                </div>
              ) : (
                <div className="refugee-image-container">
                  <img src={refugeesImage} alt="Refugees" className="refugees-img" />
                </div>
              )}
            </div>
            {showVideo && (
              <div className="video-controls">
                <button className="hide-video" onClick={() => setShowVideo(false)}>
                  Hide Video
                </button>
              </div>
            )}
          </div>
          <div className="text-side">
            <div className="title-container">
              <h2>Our Mission</h2>
            </div>
            <p>Our mission at Refuge is to ensure that refugees, asylum seekers, and migrants, wherever they may be, have access to trusted services and accurate information right at their fingertips.</p>
            <p>Article 14 of the UN Declaration of Human Rights promises that all individuals have "the right to seek and enjoy asylum from persecution in other countries."</p>
            <p>At Refuge, we are dedicated to helping people realize and exercise this right, no matter where they are in their journey.</p>
            <p>We do everything within our power and capabilities to transform the fear in the hearts of those in need into hope.</p>
            {!showVideo && (
              <div className="video-controls">
                <button className="play-video" onClick={() => setShowVideo(true)}>
                  Play Video
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </header>
  );
}

export default Homepage;
