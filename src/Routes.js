import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from './screen/Home';
import Products from './screen/Products';
import AddProducts from './screen/AddProducts';
import Login from './screen/Login';
import SidebarWithHeader from './component/SidebarWithHeader';
import api from './utils/api';

export default function RoutesPages() {
  const auth = api.getAccessToken();

  if (auth === null) {
    return (
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    );
  }

  return (
    <SidebarWithHeader>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path="add" element={<AddProducts />} />
        </Route>
      </Routes>
    </SidebarWithHeader>
  );
}