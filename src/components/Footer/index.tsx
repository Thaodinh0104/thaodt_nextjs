import { device } from '@styles/device';
import { Grid } from 'components';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const FooterComponent = styled.footer`
  background: var(--black);
  color: var(--white);
  width: 100%;
  font-size: var(--text-xs);
  font-weight: 500;
  padding: var(--spacing-64) 0 var(--spacing-40);
  @media ${device.laptop} {
    padding: var(--spacing-144) 0 var(--spacing-112);
  }
`;
const FooterTop = styled.div`
  display: grid;
  border-bottom: 1px solid var(--white);
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: var(--spacing-24);
  grid-column-start: 1;
  grid-column-end: -1;
  margin-bottom: var(--spacing-32);
  padding: 0 var(--spacing-32) var(--spacing-48) var(--spacing-32);
  @media ${device.laptop} {
    grid-template-columns: calc(var(--cellSize) * 8) repeat(
        4,
        calc(var(--cellSize) * 5)
      );
    column-gap: normal;
    grid-column-start: 7;
    grid-column-end: -7;
    padding: 0 0 var(--spacing-96) 0;
    margin-bottom: var(--spacing-40);
  }
`;
const EcforceLogo = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
  margin-bottom: var(--spacing-64);
  width: 32px;
  @media ${device.tablet} {
    width: 42px;
  }
  @media ${device.laptop} {
    grid-column-start: auto;
    grid-column-end: auto;
  }
`;
const FooterWidget = styled.div`
  letter-spacing: 2px;
  margin-bottom: var(--spacing-80);
  &:nth-child(n + 4) {
    margin-bottom: var(--spacing-0);
  }
  @media ${device.laptop} {
    margin-bottom: var(--spacing-0);
  }
`;
const FooterWidgetTitle = styled.h4`
  margin-bottom: var(--spacing-24);
  font-weight: 700;
  font-size: var(--text-xs);
  @media ${device.tablet} {
    font-size: var(--text-base);
  }
  @media ${device.laptop} {
    margin-bottom: var(--spacing-32);
  }
`;
const FooterWidgetLi = styled.li`
  padding-bottom: var(--spacing-20);
  @media ${device.tablet} {
    padding-bottom: var(--spacing-24);
    &:last-child {
      padding-bottom: var(--spacing-0);
    }
  }
`;
const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-column-start: 1;
  grid-column-end: -1;
  padding: 0 var(--spacing-24);
  @media ${device.laptop} {
    grid-column-start: 7;
    grid-column-end: -7;
    padding: 0 var(--spacing-0);
  }
`;
const FooterBootomUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: var(--spacing-32);
  @media ${device.tablet} {
    margin-bottom: var(--spacing-8);
  }
`;
const FooterBootomLi = styled.li`
  padding-right: var(--spacing-32);
  padding-bottom: var(--spacing-0);
  font-size: var(--text-xxs);
  @media ${device.tablet} {
    padding-right: var(--spacing-40);
    padding-bottom: var(--spacing-16);
    font-size: var(--text-xs);
  }
`;
const Copyright = styled.p`
  font-size: var(--text-xxs);
  letter-spacing: 2px;
`;
const IsmsLogoSp = styled.div`
  display: block;
  margin-bottom: var(--spacing-32);
  @media ${device.laptop} {
    display: none;
  }
`;
const IsmsLogoPc = styled.div`
  display: none;
  @media ${device.laptop} {
    display: flex;
    justify-content: flex-end;
  }
`;
const IsmsLogoSpText = styled.p`
  font-size: var(--text-xxs);
  font-weight: 700;
  display: block;
  @media ${device.laptop} {
    display: none;
  }
`;
const IsmsLogoPcText = styled.p`
  display: none;
  @media ${device.laptop} {
    display: block;
    font-size: var(--text-xxs);
    font-weight: 700;
    text-align: center;
  }
`;
const LogoText = styled.span`
  &::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background-size: contain;
    background-repeat: no-repeat;
    vertical-align: middle;
    margin-right: var(--spacing-16);
  }
`;
const LineLogo = styled(LogoText)`
  &::before {
    background-image: url(/assets/images/icon-line.svg);
  }
`;
const NoteLogo = styled(LogoText)`
  &::before {
    background-image: url(/assets/images/icon-note.svg);
  }
`;
const TextLink = styled.a`
  text-decoration: none;
  color: var(--white);
`;

const menu = [
  {
    id: 0,
    title: 'PRODUCT',
    links: [
      { id: 0, name: 'ecforce', url: 'https://ec-force.com/product/ecforce' },
      {
        id: 1,
        name: 'success board',
        url: 'https://ec-force.com/product/success_board'
      },
      {
        id: 2,
        name: 'smart dialog',
        url: 'https://ec-force.com/product/smart_dialog'
      },
      { id: 3, name: '1d color', url: 'https://ec-force.com/product/1d_color' },
      { id: 4, name: 'apollo d2c', url: '#' }
    ]
  },
  {
    id: 1,
    title: 'SUPPORT',
    links: [
      { id: 0, name: 'faq', url: 'https://support.ec-force.com/hc/ja' },
      { id: 1, name: 'お問い合わせ', url: 'https://ec-force.com/contact/new' },
      { id: 2, name: 'セキュリティ', url: 'https://ec-force.com/security' },
      { id: 3, name: 'セミナー', url: 'https://ec-force.com/event' },
      { id: 4, name: '料金プラン', url: 'https://ec-force.com/product_plan' },
      //{ id: 5, name: 'd2c診断', url: '#' }
    ]
  },
  {
    id: 1,
    title: 'ABOUT COMPANY',
    links: [
      { id: 0, name: '運営会社について', url: 'https://super-studio.jp/' },
      { id: 1, name: '採用情報', url: 'https://careers.super-studio.jp/' },
      { id: 2, name: 'ニュース', url: 'https://ec-force.com/information' }
    ]
  }
];

export function Footer() {
  return (
    <FooterComponent>
      <Grid>
        <FooterTop>
          <EcforceLogo>
            <Image
              src="/assets/images/logo_pink.svg"
              layout={'responsive'}
              width={42}
              height={42}
              alt="ecforce"
            />
          </EcforceLogo>
          {menu.map(({ id, title, links }) => (
            <FooterWidget key={id}>
              <FooterWidgetTitle>{title}</FooterWidgetTitle>
              <ul>
                {links.map(({ id, name, url }) => (
                  <FooterWidgetLi key={id}>
                    <Link href={url} passHref>
                      <TextLink>{name}</TextLink>
                    </Link>
                  </FooterWidgetLi>
                ))}
              </ul>
            </FooterWidget>
          ))}
          <FooterWidget>
            <FooterWidgetTitle>FOLLOW US</FooterWidgetTitle>
            <ul>
              <FooterWidgetLi>
                <LineLogo>
                  <Link href="#" passHref>
                    <TextLink>LINE</TextLink>
                  </Link>
                </LineLogo>
              </FooterWidgetLi>
              <FooterWidgetLi>
                <NoteLogo>
                  <Link href="#" passHref>
                    <TextLink>note</TextLink>
                  </Link>
                </NoteLogo>
              </FooterWidgetLi>
            </ul>
          </FooterWidget>
        </FooterTop>
        <FooterBottom>
          <div>
            <FooterBootomUl>
              <FooterBootomLi>
                <Link href="https://ec-force.com/info/customer_term" passHref>
                    <TextLink>利用規約</TextLink>
                </Link>
              </FooterBootomLi>
              <FooterBootomLi>
                <Link href="https://super-studio.jp/privacy" passHref>
                  <TextLink>プライバシーポリシー</TextLink>
                </Link>
              </FooterBootomLi>
            </FooterBootomUl>
            <IsmsLogoSp>
              <Image
                src="/assets/images/logo_isms.png"
                layout="fixed"
                width="160px"
                height="60px"
                alt="ISMS logo"
              />
              <IsmsLogoSpText>IS 731145 / ISO 27001</IsmsLogoSpText>
            </IsmsLogoSp>
            <Copyright>© 2020 SuperStudio.inc</Copyright>
          </div>
          <IsmsLogoPc>
            <div>
              <Image
                src="/assets/images/logo_isms.png"
                layout="fixed"
                width="200px"
                height="75px"
                alt="ISMS logo"
              />
              <IsmsLogoPcText>IS 731145 / ISO 27001</IsmsLogoPcText>
            </div>
          </IsmsLogoPc>
        </FooterBottom>
      </Grid>
    </FooterComponent>
  );
}
