import React from 'react';
import styled from './styles'; // Import styles
import Decothlon from '../../Assets/Sponsors/Decathlon.png';
import EasyMyTrip from '../../Assets/Sponsors/EasyMyTrip.png';
import JMJEVENTS from '../../Assets/Sponsors/JMJEVENTS.png';
import OlympicTrademark from '../../Assets/Sponsors/OlympicTrademark.png';
import QUARTRDESIGN from '../../Assets/Sponsors/QUARTRDESIGN.png';
import SuryanFM from '../../Assets/Sponsors/SuryanFM.png';
import Ticket9 from '../../Assets/Sponsors/Ticket9.png';
import VPLDECOR from '../../Assets/Sponsors/VPLDECOR.png';

const sponsors = [
  {
    role: 'SPORTS PARTNER',
    logo: Decothlon
  },
  {
    role: 'ASSOCIATE PARTNER',
    logo: EasyMyTrip
  },
  {
    role: 'EVENT PARTNER',
    logo: JMJEVENTS
  },
  {
    role: 'PRINT PARTNER',
    logo: OlympicTrademark
  },
  {
    role: 'DIGITAL PARTNER',
    logo: QUARTRDESIGN
  },
  {
    role: 'RADIO PARTNER',
    logo: SuryanFM
  },
  {
    role: 'TICKETING PARTNER',
    logo: Ticket9
  },
  {
    role: 'CO-SPONSOR',
    logo: VPLDECOR
  }
];

const SponsorGallery = () => {
  return (
    <styled.Container>
      {sponsors.map((sponsor, index) => (
        <styled.SponsorItem key={index}>
          <styled.SponsorRole>{sponsor.role}</styled.SponsorRole>
          <styled.SponsorLogo src={sponsor.logo} alt={`${sponsor.role} logo`} />
        </styled.SponsorItem>
      ))}
    </styled.Container>
  );
};

export default SponsorGallery;
