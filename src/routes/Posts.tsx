import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const Wrapper = styled.div`
  width: 100%;
  height: 87vh;
`;
const Row = styled.div`
  display: flex;
`;

const Posts = () => (
  <Wrapper>
    <Row>
      <Button color="success">Test</Button>
    </Row>
  </Wrapper>
);

export default Posts;