import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminReview from './Pages/AdminReview/AdminReview/AdminReview';
import AdminSidebar from './Pages/Dashboard/AdminSidebar/AdminSidebar/AdminSidebar';
import UserSidebar from './Pages/Dashboard/UserSidebar/UserSidebar/UserSidebar';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin/MakeAdmin';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import UserMasseges from './Pages/UserMasseges/UserMasseges/UserMasseges';
import UserReview from './Pages/UserReview/UserReview/UserReview';
import UserServiceList from './Pages/UserServiceList/UserServiceList/UserServiceList';


export const UserContext = createContext()

function App() {

  const [loggedInuserInfo, setLoggedInuserInfo] = useState({})

  return (
    <div>
      <UserContext.Provider value={[loggedInuserInfo, setLoggedInuserInfo]}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/usersidebar/order" element={ <PrivateRoute> <UserSidebar /></PrivateRoute>} />
            <Route path="/dashboard/usersidebar/servicelist" element={<UserServiceList />} />
            <Route path="/dashboard/usersidebar/review" element={<UserReview />} />
            <Route path="/dashboard/adminsidebar/servicelist" element={<AdminSidebar />} />
            <Route path="/dashboard/adminsidebar/addservice" element={<AdminReview />} />
            <Route path="/dashboard/adminsidebar/makeadmin" element={<MakeAdmin />} />
            <Route path="/dashboard/adminsidebar/massegeinfo" element={<UserMasseges />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
