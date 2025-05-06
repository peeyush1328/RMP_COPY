import { Route, Routes } from "react-router-dom";
import RecruiterLayout from "./components/recruiter-view/layout.jsx";
import ProfileSetup from "./pages/recruiter-view/Profile-setup.jsx";
import SignUp from "./pages/recruiter-view/sign-up.jsx";
import JobOpenings from "./pages/recruiter-view/job-openings.jsx";
import Dashboard from "./pages/recruiter-view/dashboard.jsx";
import Candidates from "./pages/recruiter-view/candidates.jsx";
import CandidateCreate from "./pages/recruiter-view/candidate-create.jsx";
import MatchesAndSubmission from "./pages/recruiter-view/matches-and-submission.jsx";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/recruiter/profile-setup" element={<ProfileSetup />} />
        <Route path="/recruiter/sign-up" element={<SignUp />} />
        <Route path="/recruiter" element={<RecruiterLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="candidates" element={<Candidates />} />
          <Route
            path="candidates/candidate-create"
            element={<CandidateCreate />}
          />
          <Route path="job-openings" element={<JobOpenings />} />
          {/* <Route path="job-openings" element={<JobOpenings />} /> */}
          <Route
            path="matches-and-submissions"
            element={<MatchesAndSubmission />}
          />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
