import React from 'react';
import { useContext } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import AuthContext from './store/auth-context';
import Signup from './components/_auth/Forms/SignUp';
import ForgetPass from './components/_auth/Forms/ForgetPass';
// import HomePage from './components/_root/pagess/HomePage';

import RootLayout from './components/_root/RootLayout';
import CameraView from './components/_root/pagess/Camera-view';
import {RealtimeDisplay,RealtimeDisplayOne,RealtimeDisplayTwo,RealtimeDisplayThree} from './components/_root/pagess/Real-time-Display';
import RecordAnalysis from './components/_root/pagess/Record-analysis';
import Account from './components/_root/pagess/Account';
import SignIn from './components/_auth/Forms/SignIn';
import  Abnormality from './components/_root/pagess/Abnormality';


const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    
      <main>
        <Routes>
          {/* public routes */}
            
                <Route index element={<SignIn />} /> 

                <Route path="/Signup" element={<Signup />} />
                <Route path="/Forget" element={<ForgetPass />} />
            {/* private routes */}
            {authCtx.isLoggedIn && (
                    <Route element={<RootLayout />}>
                    <Route path="/camera" element={<CameraView />} />
                    
                    <Route path="/real-time" element={<RealtimeDisplay />} />
                    <Route path="/real-time/camera1" element={<RealtimeDisplayOne />} />
                    <Route path="/real-time/camera2" element={<RealtimeDisplayTwo />} />
                    <Route path="/real-time/camera3" element={<RealtimeDisplayThree />} />
                    <Route path="/record" element={<RecordAnalysis />} />
                    <Route path="/abnormality-table" element={<Abnormality />} />
                    <Route path="/account" element={<Account />} />

            </Route>
            )}
                
            <Route path="/*" element={<Navigate to="/" />} />        

        
        </Routes>
      </main>
    
  );
}

export default App;
