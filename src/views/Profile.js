import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Highlight from '../components/Highlight';
import Loading from '../components/Loading';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

export const ProfileComponent = () => {
  const { user } = useAuth0();

  return (
    <Container className='mb-5'>
      <Row className='align-items-center profile-header mb-5 text-center text-md-left'>
        <Col md={2}>
          <img
            src={user.picture}
            alt='Profile'
            className='rounded-circle img-fluid profile-picture mb-3 mb-md-0'
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className='lead text-muted'>{user.email}</p>
        </Col>
      </Row>
      <Row>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>
    </Container>
  );
};

var request = require('request');

var options = {
  method: 'GET',
  url: 'https://test-mang.us.auth0.com/api/v2/',
  headers: {
    'content-type': 'application/json',
    authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5ESTFNa05DTVRGQlJrVTRORVF6UXpFMk1qZEVNVVEzT1VORk5ESTVSVU5GUXpnM1FrRTFNdyJ9.eyJpc3MiOiJodHRwczovL2RlbW8tYWNjb3VudC5hdXRoMC5jb20vIiwic3ViIjoib9O7eVBnMmd4VGdMNjkxTnNXY2RUOEJ1SmMwS2NZSEVAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGVtby1hY2NvdW50LmF1dGgwLmNvbS9hcGkvdjIvIiwiZXhwIjoxNDg3MDg2Mjg5LCJpYXQiOjE5ODY5OTk4ODksInNjb3BlIjoicmVhZDpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMifQ.oKTT_cEA_U6hVzNYPCl_4-SnEXXvFSOMJbZyFydQDPml2KqBxVw_UPAXhjgtW8Kifc_b2HQ4jFh7nH0KC_j1XjfEJPvwFZgqfI_ILzO3DPfpEIK_n_aX-Tz4okbZe6nj2aT_qLpHimLxK50jOGaMuzp4a1djHJTj5q-NbIiPW8AJowS2-gveP4T3dyyegUsZkmTNwrreqppPApmpWWE-wVsxnVsI_FZFrHnq0rn7lmY_Iz6vyiZjaKrd2C3hFm0zFGTn8FslBfHUldTcDNzOKOpCq7HFMeU0urXBXDetrzkW1afxIqED3G2C51JEV-4nTRYUinnWgXJfLJ87G3ge_A',
  },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
