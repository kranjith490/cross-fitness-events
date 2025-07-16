import styledComponents from 'styled-components';

const Container = styledComponents.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px;
  background-color: #fff;
`;

const TitleSponsor = styledComponents.div`
  text-align: center;
`;

const TitleRole = styledComponents.div`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
  color: #000;
`;

const TitleLogo = styledComponents.img`
  max-width: 250px;
  height: auto;
  object-fit: contain;
`;

const SponsorsGrid = styledComponents.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const SponsorItem = styledComponents.div`
  flex: 0 1 150px;
  text-align: center;
`;

const SponsorRole = styledComponents.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 10px;
  color: #000;
  height: 32px;
`;

const SponsorLogo = styledComponents.img`
  max-width: 100%;
  height: 80px;
  object-fit: contain;
`;

export default {
  Container,
  TitleSponsor,
  TitleRole,
  TitleLogo,
  SponsorsGrid,
  SponsorItem,
  SponsorRole,
  SponsorLogo
};
