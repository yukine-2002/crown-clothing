import React from 'react';

import { SpinnerContainer,SpinnerOverlay } from '../with-spinner/with-spinner.styles';

const Spinner = WrappedComponent => 

        (<SpinnerOverlay >
            <SpinnerContainer />
        </SpinnerOverlay>) 
   
export default Spinner;