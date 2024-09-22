import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TimelineList } from "./timeline/TimelineList";
import { TimelineCreate } from "./timeline/TimelineCreate";
import { TimelineEdit } from "./timeline/TimelineEdit";
import { TimelineShow } from "./timeline/TimelineShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"TimelineService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Timeline"
          list={TimelineList}
          edit={TimelineEdit}
          create={TimelineCreate}
          show={TimelineShow}
        />
      </Admin>
    </div>
  );
};

export default App;
