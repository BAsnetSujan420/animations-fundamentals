import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  background-color: hsl(240deg 80% 90%);
  min-height: 100vh;
  padding: 16px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 8px;
`;

const CardLink = styled.a`
  text-decoration: none;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background: white;
  border-radius: 8px;
  border: 2px solid hsl(240deg 100% 75%);
`;

const CardImg = styled.img`
  width: 64px;
  height: 64px;
`;

export default function TranslatedCards() {
  const browsers = [
    {
      name: 'Chrome',
      src: 'https://courses.joshwcomeau.com/images/logos/chrome.svg',
    },
    {
      name: 'Firefox',
      src: 'https://courses.joshwcomeau.com/images/logos/firefox.svg',
    },
    {
      name: 'Safari',
      src: 'https://courses.joshwcomeau.com/images/logos/safari.png',
    },
    {
      name: 'Edge',
      src: 'https://courses.joshwcomeau.com/images/logos/edge.svg',
    },
    {
      name: 'Opera',
      src: 'https://courses.joshwcomeau.com/images/logos/opera.svg',
    },
  ];

  return (
    <Page>
      <Wrapper>
        {browsers.map((browser) => (
          <CardLink key={browser.name} href="/">
            <Card>
              <CardImg alt={`Download ${browser.name}`} src={browser.src} />
            </Card>
          </CardLink>
        ))}
      </Wrapper>
    </Page>
  );
}
