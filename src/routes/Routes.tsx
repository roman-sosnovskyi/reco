import { Routes as AppRoutes, Route } from "react-router-dom";

const Routes = () => {
  return (
    <AppRoutes>
      {/* Public routes */}

      {/* 404 route */}
      <Route path="*" element={<div>Not found page</div>} />
    </AppRoutes>
  );
};

export default Routes;
