import React, { useState } from 'react';
import * as Styled from '../components';
import { useAuthDispatch, useAuthState, logout } from '../context';
import * as icons from '../images';
import { c_routes } from '../utils';
export const Entry = (props) => {
  const [inView, setView] = useState(0);
  const { token } = useAuthState();

  return (
    <Styled.Main>
      <Styled.Header>
        <Styled.HeaderCt />
        {token ? <SignOut history={props.history} /> : null}
      </Styled.Header>
      <Styled.BodyCt>
        <Styled.MainCont>
          <props.component inView={inView} history={props.history} />
        </Styled.MainCont>
      </Styled.BodyCt>
    </Styled.Main>
  );
};

const SignOut = (props) => {
  function logOff() {
    logout(dispatch);
    props.history.push(c_routes.home);
  }
  const dispatch = useAuthDispatch();
  return (
    <Styled.LogOut onClick={(e) => logOff()}>
      <Styled.SMIconF>
        <icons.Custom fill={'#1280a5'} size={22} />
      </Styled.SMIconF>
    </Styled.LogOut>
  );
};
