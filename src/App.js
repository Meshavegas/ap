import logo from "./logo.svg";
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primereact/resources/themes/tailwind-light/theme.css";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";
import { Ripple } from "primereact/ripple";
import { Rating } from "primereact/rating";
import { TabView, TabPanel } from "primereact/tabview";

import "./App.css";
import {
  Link,
  Route,
  useParams,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { Cours } from "./Pages/Cours";
import Cour from "./Pages/Cour";
import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignupPage";
import SchoolDetailsHeader from "./Pages/SchoolDetailsHeader";
import Acceuil from "./Pages/Acceuil";
import Etablissements from "./Pages/Etablissements";
import CreateSchool from "./Pages/CreateSchool";
import CreateClass from "./Pages/CreateClass";

const App = () => {
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Acceuil />} />
            <Route path="courses">
              <Route index element={<Cours />} />
              <Route path=":courseId" element={<Cour />} />
            </Route>
            <Route path="/login" element={<SignInPage />} />
            <Route path="/singin" element={<SignUpPage />} />
            <Route path="/schools" element={<SchoolDetailsHeader />} />
            <Route path="/etablisement" element={<Etablissements />} />
            <Route path="/createschool" element={<CreateSchool />} />
            <Route path="/createclass" element={<CreateClass />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// const App =()=> {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
