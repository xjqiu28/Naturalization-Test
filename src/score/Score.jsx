import { useState } from 'react';

function Score(props) {
    const {score} = props;
  return (
    <>
      <p>This is your Score: {score}/10</p>
    </>
  );
}
export default Score;
