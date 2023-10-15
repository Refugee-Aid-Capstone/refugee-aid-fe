import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Error404.scss";
// import logo from "../../Images/amnisty-international-logo.png";
import RefugeeImage from '../../images/welcome-usa-refugee3.png';

const refugeeInformativeFacts = [
  "Refugees: A refugee is someone who has been forced to flee his or her country because of persecution, war, or violence. They often can't return home or are afraid to do so.",
  "Asylum Seekers: An asylum seeker is someone who is seeking international protection but is yet to be recognized as a refugee. They receive this designation once their claim of persecution is validated.",
  "U.S. Refugee Act of 1980: The Refugee Act established procedures on how to admit refugees to the U.S. and provide for their basic needs, signaling a commitment to humanitarian efforts.",
  "Historic Involvement: The U.S. has a long history of welcoming refugees from around the world. From the Indochinese refugees after the Vietnam War to the more recent Syrian refugee crisis, the U.S. has been a significant player in refugee resettlement.",
  "Resettlement Programs: The U.S. has various programs to help refugees begin anew, offering assistance in housing, job training, and English-language courses.",
  "Asylum in the U.S.: The U.S. provides asylum to people who meet the definition of a refugee but are already in the U.S. or seeking admission at a port of entry.",
  "Challenges Faced: While the U.S. has made significant efforts in aiding refugees and asylees, there have been challenges. Recent years have seen debates over the number of refugees to admit and from which countries.",
  "Community Contribution: Refugees have been known to contribute immensely to their new communities, bringing in diverse cultures, skills, and perspectives."
];

function Error404() {
  const [refFact, setRefFact] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * refugeeInformativeFacts.length);
    setRefFact(refugeeInformativeFacts[randomIndex]);
  }, []);

  return (
    <div className="not-found-page-container">
      <h1 className="not-found-heading">404 - Page Not Found</h1>
      <div className="not-found-handling">
        <h3>
          Sorry! That page doesn't seem to exist. Try going back to the home
          page.
        </h3>
      </div>
      <NavLink to="/" className="error404-navlink">
        <button className="error404-go-home-button">
          Return to Home
        </button>
      </NavLink>

      <div className="ref-fact-container">
        <h2 className="ref-fact-heading">
          Did you know?
        </h2>

        <p className="ref-fact">
          {refFact || "No facts available at the moment."}
        </p>
      </div>
      <div className="image-container">
        <img src={RefugeeImage} alt="Refugee Image" className="refugee-image" />
      </div>
    </div>
  );
}

export default Error404;
