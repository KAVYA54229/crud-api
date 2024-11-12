import React from 'react';
import { AuthProvider } from './Context/AuthContext';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Component/Auth/SignIn';
import SignUp from './Component/Auth/SignUp';
import ProtectedRoute from './Component/ProtectedRoute';
import ProtectedComponent from './Component/ProtectedComponent';


function ProjectMain(props) {
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<SignIn/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route
              path="/protected"
              element={
                  <ProtectedRoute>
                      <ProtectedComponent />
                  </ProtectedRoute>
              }
            />
                </Routes>
            </AuthProvider>
        </>
    );
}

export default ProjectMain;