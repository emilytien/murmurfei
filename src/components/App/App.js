import Header from "../Header";
import AboutFei from "../AboutFei";
import Homepage from "../Homepage";
import ClassFeature from "../ClassFeature";
import OnlineClass from "../OnlineClass";
import Blog from "../Blog";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/AboutFei" element={<AboutFei />} />
        <Route exact path="/ClassFeature" element={<ClassFeature />} />
        <Route exact path="/OnlineClass" element={<OnlineClass />} />
        <Route exact path="/Blog" element={<Blog />} />
        <Route exact path="/ContactMe" element={<ContactMe />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
