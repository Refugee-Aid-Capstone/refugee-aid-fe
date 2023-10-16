import React, { useState } from 'react';
import refugeesImage from '../../images/refugees.png';
import NavBar from "../NavBar/NavBar";
import '../Homepage/Homepage.scss'

// function Homepage() {
//   const [showVideo, setShowVideo] = useState(false);

//   console.log('Homepage component is rendering');  // Step 1
//   console.log('Value of showVideo is:', showVideo);  // Step 2

//   return (
//     <>
//       <header className="home-header">
//         <NavBar />

//         {showVideo ? (
//           <>
//           <iframe
//   width="560"
//   height="315"
//   src="https://www.youtube.com/embed/RBQ-IoHfimQ"
//   frameBorder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowFullScreen
// ></iframe>

//             <button className="hide-video" onClick={() => setShowVideo(false)}>Hide Video</button>
//           </>
//         ) : (
//           <>
//             <main>
//               <section className="content-section">
//                 <div className="text-side">
//                   <div className="media-side">
//                     <img src={refugeesImage} alt="Refugees" className="refugees-img" />
//                   </div>
//                   <div className="text-side">
//   <div className="title-container">
//     <h2>Our Mission</h2>
//   </div>
//   <p>
//     Our mission at Refuge is to ensure that migrants, wherever they may be, have access to trusted services and accurate information right at their fingertips.

//     Article 14 of the UN Declaration of Human Rights promises that all individuals have "the right to seek and enjoy asylum from persecution in other countries." At Refuge, we are dedicated to helping people realize and exercise this right, no matter where they are in their journey.

//     We do everything within our power and capabilities to transform the fear in the hearts of those in need into hope.
//   </p>
// </div>

//                 </div>
//               </section>
//             </main>
//             <button 
//   className="play-video"
//   onClick={() => setShowVideo(true)}
//   style={{
//     backgroundColor: 'red',
//     color: '#FFFFFF',
//     border: 'none',
//     padding: '12px 24px',
//     fontSize: '1.2rem',
//     fontWeight: 'bold',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease'
//   }}
//   onMouseOver={(e) => {
//     e.target.style.backgroundColor = '#cc0000';
//   }}
//   onMouseOut={(e) => {
//     e.target.style.backgroundColor = 'red';
//   }}
// >
//   Play Video
// </button>
            
//             {/* <button className="play-video" onClick={() => setShowVideo(true)}>
//               Play Video
//             </button> */}
//           </>
//         )}
//       </header>
//     </>
//   );
// }


// export default Homepage;


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