/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <Logo img_src={`${baseUrl}img/logo.svg`} />
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('getting-started.html')}>
              Getting Started
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const features = [
      {
        content:
          'Compose styles based on utility and reusing from consistencss, set your theme, and enjoy !',
        image: `${baseUrl}img/undraw_researching.svg`,
        title: 'Style your components easily',
      },
      {
        content:
          'Set your base size and have a consistencess UI trough your all applications.',
        image: `${baseUrl}img/undraw_circles.svg`,
        title: 'Focus on pixel perfect !',
      },
      {
        content:
          'Consistencss gives you agility, with pre-built styles and cross-platform styles.',
        image: `${baseUrl}img/undraw_product.svg`,
        title: 'Build reutilizable componentes in minutes',
      },
    ];

    const Showcase = () => {
      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <section>
          <div className="features">
            <div className="row">
              {features.map(({ image, title, content }, idx) => (
                <div key={idx} className="feature">
                  {image && (
                    <div className="text--center margin-bottom--lg">
                      <img alt={title} src={image} />
                    </div>
                  )}
                  <h3>{title}</h3>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Showcase />
      </div>
    );
  }
}

module.exports = Index;
