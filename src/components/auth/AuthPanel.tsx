import React, { useContext } from 'react';

import { IoLogoGoogle } from 'react-icons/io5';

import Auth3rdPartyButton from './Auth3rdPartyButton';
import AuthEmailForm from './AuthEmailForm';
import { AuthContext, signInWithGoogle } from '@/lib/context/AuthContext';

type IAuthPanelProps = {
  tab: 'LOGIN' | 'SIGNUP';
};

export default function AuthPanel({ tab }: IAuthPanelProps) {
  const authContext = useContext(AuthContext);

  return (
    <div className="w-full h-full flex justify-center items-center absolute top-0 bottom-0">
      <div>
        <h3 className="text-2xl font-medium text-day-700 dark:text-night-700">
          Login to Scorecard
        </h3>

        <div className="flex flex-col gap-2">
          <Auth3rdPartyButton
            onClick={() => {
              signInWithGoogle().then((user) => {
                authContext.setAuth({
                  ...authContext.auth,
                  currentUser: user.user,
                });
              });
            }}
            label="Continue with Google"
            backgroundColor="#e86f5e"
            dark="#e65b43"
          >
            <IoLogoGoogle />
          </Auth3rdPartyButton>

          {/* <Auth3rdPartyButton
            label="Continue with SSO"
            backgroundColor="#5ba5d4"
            dark="#5b9ac2"
          >
            <IoKey />
  </Auth3rdPartyButton> */}

          <AuthEmailForm newUser={tab === 'SIGNUP'} />
        </div>
      </div>
    </div>
  );
}
