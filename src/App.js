import React from 'react'
import Routing from './Routing'
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';
import AuthContextProvider from './contexts/AuthContext';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <AuthContextProvider >
      <Routing/>
     </AuthContextProvider>
  )
}
export default withAuthenticator(App)