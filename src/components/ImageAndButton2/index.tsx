import React, { forwardRef } from 'react';
import Renderer from '@mybricks/renderer-pc';
import { toJSON, config } from './config';
import SingleImage from '@mybricks/comlib-pc-normal/es/SingleImage';
import Text from '@mybricks/comlib-pc-normal/es/Text';
import CustomButton from '@mybricks/comlib-pc-normal/es/CustomButton';
import Table from '@mybricks/comlib-pc-normal/es/Table';

import 'antd/dist/antd.css';

interface IProps {
  imageSrc?: string;
  textLabel?: string;
  buttonLabel?: string;
}

export interface IImageAndButtonRef {
  u_xY_io: (value: string) => void;
}

const ImageAndButton = forwardRef(
  (props: IProps, ref: React.ForwardedRef<IImageAndButtonRef>) => {
    return (
      <Renderer
        ref={ref}
        json={toJSON}
        comDefs={{
          'mybricks.normal-pc.single-image': { runtime: SingleImage },
          'mybricks.normal-pc.text': { runtime: Text },
          'mybricks.normal-pc.custom-button': { runtime: CustomButton },
          'mybricks.normal-pc.table': { runtime: Table },
        }}
        config={config}
        props={props}
      />
    );
  },
);

export default ImageAndButton;
