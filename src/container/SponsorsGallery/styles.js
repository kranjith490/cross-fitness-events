import styledComponents from 'styled-components';

const Container = styledComponents.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  background-color: #fff;
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
  height: 32px; /* optional for consistent spacing */
`;

const SponsorLogo = styledComponents.img`
  max-width: 100%;
  height: 80px; /* Fixed height for consistency */
  object-fit: contain;
`;

export default {
  Container,
  SponsorItem,
  SponsorRole,
  SponsorLogo
};
