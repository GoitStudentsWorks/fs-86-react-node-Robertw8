import { ImgWelcomePageWrapper, StatisticsWrapper } from './Welcome.styled';
import imgForWelcomePage from '..//../assets/images/ImgForWelcomePage/imgForWelcomePage.jpg';
import ImgForWelcomePageMob from '..//..//assets/images/ImgForWelcomePage/ImgForWelcomePageMob.png';
import imgForWelcomePageTablet from '..//../assets/images/ImgForWelcomePage/imgWelcomePageTablet.png';
import imgAuthPageMob from '..//../assets/images/ImgForWelcomePage/imgAuthPageMob.png';
import { ImgSignUp } from '..//SignUp/SignUp.styled';

import { Statistics } from '../Statistics';

export const WelcomeImg: React.FC = () => {
  return (
    <ImgWelcomePageWrapper>
      <picture>
        <source media="(max-width: 768px)" srcSet={ImgForWelcomePageMob} />
        <source
          media="((min-width: 769px) and (max-width: 1440px))"
          srcSet={imgForWelcomePageTablet}
        />
        <source media="(min-width: 1441px)" srcSet={imgForWelcomePage} />
        <img alt="Example of a lunge forward on the leg" />
      </picture>
      <StatisticsWrapper>
        <Statistics />
      </StatisticsWrapper>
    </ImgWelcomePageWrapper>
  );
};

export const AuthImg: React.FC = () => {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={imgAuthPageMob} />
      <source
        media="((min-width: 769px) and (max-width: 1440px))"
        srcSet={imgForWelcomePageTablet}
      />
      <source media="(min-width: 1441px)" srcSet={imgForWelcomePage} />

      <ImgSignUp alt="Example of a lunge forward on the leg" />
    </picture>
  );
};
