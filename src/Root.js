import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Dashboard = lazy(() => import("./compositions/dashboard"));
const Authentication = lazy(() => import("./compositions/authentication"));
const DecadevModal = lazy(() =>
  import("./components/decadevModal/DecadevModal")
);
const Profile = lazy(() => import("./components/profile/"));
const ScheduleInterview = lazy(() =>
  import("./components/dashboard/ScheduleInterview")
);

const App = () => (
  <BrowserRouter>
    <Suspense fallback="loading..">
      <Switch>
        <Route exact path="/viewprofile" component={DecadevModal} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/schedule-interview" component={ScheduleInterview} />
        <Route path="/" component={Authentication} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default App;
