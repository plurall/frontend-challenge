import React from 'react';

import {
  loading_container as loadingContainer
} from './Loading.module.css'

const Loading = () => {
  return (
    <div className={loadingContainer}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;
