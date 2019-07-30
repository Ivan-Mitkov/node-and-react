import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//dummy components
const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SurveyNew} />
          <Route exact path="/" component={Landing} />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
