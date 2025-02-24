/*
 * @Author: Jeffrey Zhu 1624410543@qq.com
 * @Date: 2025-02-24 14:00:33
 * @LastEditors: Jeffrey Zhu 1624410543@qq.com
 * @LastEditTime: 2025-02-24 17:44:46
 * @FilePath: \onlineStore\admin-dashboard\src\App.tsx
 * @Description: File Description Here...
 * 
 * Copyright (c) 2025 by JeffreyZhu, All Rights Reserved. 
 */
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
  //  Link
} from 'react-router-dom';
import links from "./common/Links"

import { Suspense } from 'react';
import Loading from './common/Loading';

function App() {
  return (
    <Router>
      <Routes >
        {
          links.map((item,index) => {
            return <Route key={index} path={item.path} element={
              <Suspense fallback={<Loading></Loading>}>{item.page}</Suspense>}
            >
            </Route>
          })
        }
      </Routes>

    </Router>
  );
}

export default App;
