import React from 'react';
import { css } from '@emotion/react';
import PuffLoader from 'react-spinners/PuffLoader';

const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

function Loading() {
  return (
    <div>
      <PuffLoader color='#36D7B7' size={100} css={override} />
    </div>
  );
}

export default Loading;
