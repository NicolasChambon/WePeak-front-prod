// Import necessary librairies
import React, { useState, useEffect } from 'react';

// Import stylesheet
import './About.scss';

// Import images
import tomPicture from '../../../assets/images/tom.avif';
import victorPicture from '../../../assets/images/victor.avif';
import nicolasPicture from '../../../assets/images/nicolas.avif';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="About">
      <div className="About-welcome">
        <h2 className="About-welcome-title">Bienvenue sur WePeak !</h2>
        <p className="About-welcome-text">
          WePeak est bien plus qu&apos;une simple plateforme de mise en relation
          pour les passionnés de sports outdoor. Nous sommes une communauté
          dynamique et diversifiée, unissant les amateurs d&apos;outdoor autour
          de leur passion commune pour l&apos;aventure à travers un désir de
          partage.
          <br />
          <br />
          Notre mission est de faciliter les rencontres entre les sportifs de
          tous niveaux et de toutes disciplines, afin qu&apos;ils puissent
          partager des moments inoubliables et repousser leurs limites ensemble.
          Que vous soyez un randonneur passionné, un skieur fougueux, un surfeur
          intrépide ou tout simplement à la recherche de nouvelles expériences
          en plein air, WePeak est l&apos;endroit idéal pour vous.
          <br />
          <br />
          Rejoignez-nous dès aujourd&apos;hui et découvrez une nouvelle façon de
          pratiquer vos sports préférés, de rencontrer de nouvelles personnes et
          de vivre des aventures inoubliables. WePeak est votre plateforme
          d&apos;échange et de partage pour tous les sports outdoor. À bientôt
          sur les sommets !
        </p>
      </div>
      <div className="About-team">
        <h3 className="About-team-title">Notre équipe</h3>
        <div className="About-team-members">
          <div className="About-team-members-member">
            <p className="About-team-members-member-name">Tom</p>
            <div className="About-team-members-member-imgContainer">
              <img src={tomPicture} alt="" />
            </div>
            <p className="About-team-members-member-role">
              Développeur extrémité arrière
            </p>
            <p className="About-team-members-member-sport">VTTiste et skieur</p>
          </div>
          <div className="About-team-members-member">
            <p className="About-team-members-member-name">Melvin</p>
            <div className="About-team-members-member-imgContainer">
              <img
                src="https://ca.slack-edge.com/T060RPZMDH6-U06160CTFNZ-5a4cda8a8782-512"
                alt=""
              />
            </div>
            <p className="About-team-members-member-role">
              Développeur extrémité arrière
            </p>
            <p className="About-team-members-member-sport">
              VTTiste et skateur
            </p>
          </div>
          <div className="About-team-members-member">
            <p className="About-team-members-member-name">Victor</p>
            <div className="About-team-members-member-imgContainer">
              <img src={victorPicture} alt="" />
            </div>
            <p className="About-team-members-member-role">
              Développeur extrémité avant
            </p>
            <p className="About-team-members-member-sport">
              Skieur et randonneur
            </p>
          </div>
          <div className="About-team-members-member">
            <p className="About-team-members-member-name">Nicolas</p>
            <div className="About-team-members-member-imgContainer">
              <img src={nicolasPicture} alt="" />
            </div>
            <p className="About-team-members-member-role">
              Développeur extrémité avant
            </p>
            <p className="About-team-members-member-sport">
              Traileur et cycliste
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
