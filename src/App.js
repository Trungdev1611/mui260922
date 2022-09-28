import Navbar from "./Component/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom'
import Authentication from './pages/Authentication'
import Database from './pages/Authentication'
import Functions from './pages/Function'
import Hosting from './pages/Hosting'
import Storage from './pages/Storage'
import MachineLearning from './pages/MachineLearning'
import { Grid } from '@mui/material'

function App() {
  return (
    <Grid container>
      <Navbar />
      <Routes>
        <Route path="authentication" element={<Authentication />} />
        <Route path="database" element={<Database />} />
        <Route path="functions" element={<Functions />} />
        <Route path="hosting" element={<Hosting />} />
        <Route path="machine-learning" element={<MachineLearning />} />
        <Route path="storage" element={<Storage />} />

      </Routes>
    </Grid>
  );
}

export default App;
