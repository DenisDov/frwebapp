import React, { Component } from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
import styled from 'styled-components';
import { rem } from 'polished';

import Images from '../Images';

const AppFooter = styled.footer`
  padding-top: 30px;
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 15px;
`;

const Description = styled.p`
  margin: 0 30px 10px 0 !important;
  font-size: ${rem('14px')};
`;

const Link = styled.a`
  display: block;
  line-height: 0;
  margin-right: ${props => props.spacerRight && '10px'};
  will-change: transform;
  transition: opacity 300ms;
  &:hover {
    opacity: 0.6;
  }
`;

class Footer extends Component {
  render() {
    return (
      <AppFooter>
        <AppContainer>
          <Flex wrap="true" alignCenter justifyBetween>
            <FlexItem basis="500px">
              <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem mollitia eos id
                consectetur, ea, dicta sequi corrupti sunt nostrum vitae rerum repellat maxime
                placeat voluptas unde voluptatem dolor? Architecto, distinctio.
              </Description>
            </FlexItem>
            <FlexItem>
              <Flex alignCenter>
                <Link
                  href="https://itunes.apple.com/ua/app/freshbot/id1410735610?l=ru&mt=8"
                  spacerRight
                >
                  <Images.AppleBadge />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.freshbot.freshbot">
                  <Images.GoogleBadge />
                </Link>
              </Flex>
            </FlexItem>
          </Flex>
        </AppContainer>
      </AppFooter>
    );
  }
}

export default Footer;
