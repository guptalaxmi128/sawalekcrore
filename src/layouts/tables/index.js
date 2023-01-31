/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@material-ui/core/Slider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import RetirementTable from "./data/RetirementTable";
// import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

// function Tables() {
//   const { columns, rows } = authorsTableData();
//   const { columns: pColumns, rows: pRows } = projectsTableData();

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <MDBox pt={6} pb={3}>
//         <Grid container spacing={6}>
//           <Grid item xs={12}>
//             <Card>
//               <MDBox
//                 mx={2}
//                 mt={-3}
//                 py={3}
//                 px={2}
//                 variant="gradient"
//                 bgColor="info"
//                 borderRadius="lg"
//                 coloredShadow="info"
//               >
//                 <MDTypography variant="h6" color="white">
//                   Authors Table
//                 </MDTypography>
//               </MDBox>
//               <MDBox pt={3}>
//                 <DataTable
//                   table={{ columns, rows }}
//                   isSorted={false}
//                   entriesPerPage={false}
//                   showTotalEntries={false}
//                   noEndBorder
//                 />
//               </MDBox>
//             </Card>
//           </Grid>
//           <Grid item xs={12}>
//             <Card>
//               <MDBox
//                 mx={2}
//                 mt={-3}
//                 py={3}
//                 px={2}
//                 variant="gradient"
//                 bgColor="info"
//                 borderRadius="lg"
//                 coloredShadow="info"
//               >
//                 <MDTypography variant="h6" color="white">
//                   Projects Table
//                 </MDTypography>
//               </MDBox>
//               <MDBox pt={3}>
//                 <DataTable
//                   table={{ columns: pColumns, rows: pRows }}
//                   isSorted={false}
//                   entriesPerPage={false}
//                   showTotalEntries={false}
//                   noEndBorder
//                 />
//               </MDBox>
//             </Card>
//           </Grid>
//         </Grid>
//       </MDBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }

// export default Tables;

function RetirementCharts() {
  const [value, setValue] = useState(20);

  const changeValue = () => {
    if (value < 100) {
      setValue(value + 1);
    } else if (value === 100) {
      setValue(value - 1);
    } else {
      setValue(20);
    }
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Box
              sx={{
                width: 240,
                height: 130,
                backgroundColor: "#252527",
                input: { color: "#ffd601" },
                border: "2px solid #ffd601",
                borderRadius: "5px",
              }}
            >
              {" "}
              <Typography
                sx={{ color: "#ffd601", margin: "auto", textAlign: "center", mt: 2 }}
                variant="h6"
              >
                Retirement Age
              </Typography>
              <Slider
                style={{
                  width: 150,
                  justifyContent: "center",
                  alignItem: "center",
                  marginLeft: 30,
                  color: "#ffd601",
                }}
                min={10}
                max={100}
                value={value}
                onChange={changeValue}
              />
              <Typography
                sx={{ color: "#ffd601", margin: "auto", textAlign: "center", mt: 2 }}
                variant="h6"
              >
                {value}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                width: 240,
                height: 130,
                backgroundColor: "#252527",
                input: { color: "#ffd601" },
                border: "2px solid #ffd601",
                borderRadius: "5px",
              }}
            >
              {" "}
              <Typography
                sx={{ color: "#ffd601", margin: "auto", textAlign: "center", mt: 2 }}
                variant="h6"
              >
                Current Monthly Expenses
              </Typography>
              <Slider
                style={{
                  width: 150,
                  justifyContent: "center",
                  alignItem: "center",
                  marginLeft: 30,
                  color: "#ffd601",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                width: 240,
                height: 130,
                backgroundColor: "#252527",
                input: { color: "#ffd601" },
                border: "2px solid #ffd601",
                borderRadius: "5px",
              }}
            >
              {" "}
              <Typography
                sx={{ color: "#ffd601", margin: "auto", textAlign: "center", mt: 2 }}
                variant="h6"
              >
                Estimated Inflation rate
              </Typography>
              <Slider
                style={{
                  width: 150,
                  justifyContent: "center",
                  alignItem: "center",
                  marginLeft: 30,
                  color: "#ffd601",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                width: 240,
                height: 130,
                backgroundColor: "#252527",
                input: { color: "#ffd601" },
                border: "2px solid #ffd601",
                borderRadius: "5px",
              }}
            >
              {" "}
              <Typography
                sx={{ color: "#ffd601", margin: "auto", textAlign: "center", mt: 2 }}
                variant="h6"
              >
                Current Monthly Passive Income
              </Typography>
              <Slider
                style={{
                  width: 150,
                  justifyContent: "center",
                  alignItem: "center",
                  marginLeft: 30,
                  color: "#ffd601",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={4} mt={2}>
          <Grid item xs={3}>
            <Box
              sx={{
                width: 240,
                height: 130,
                backgroundColor: "#252527",
                input: { color: "#ffd601" },
                border: "2px solid #ffd601",
                borderRadius: "5px",
              }}
            >
              <Typography
                sx={{ color: "#ffd601", margin: "auto", textAlign: "center", mt: 2 }}
                variant="h6"
              >
                Income after retirement (i.e. Pension etc)
              </Typography>
              <Slider
                style={{
                  width: 150,
                  justifyContent: "center",
                  alignItem: "center",
                  marginLeft: 30,
                  color: "#ffd601",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                width: 240,
                height: 130,
                backgroundColor: "#252527",
                input: { color: "#ffd601" },
                border: "2px solid #ffd601",
                borderRadius: "5px",
              }}
            >
              {" "}
              <Typography
                sx={{ color: "#ffd601", margin: "auto", textAlign: "center", mt: 2 }}
                variant="h6"
              >
                Expected Growth Rate of Passive Income
              </Typography>
              <Slider
                style={{
                  width: 150,
                  justifyContent: "center",
                  alignItem: "center",
                  marginLeft: 30,
                  color: "#ffd601",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                width: 240,
                height: 130,
                backgroundColor: "#252527",
                input: { color: "#ffd601" },
                border: "2px solid #ffd601",
                borderRadius: "5px",
              }}
            >
              {" "}
              <Typography
                sx={{ color: "#ffd601", margin: "auto", textAlign: "center", mt: 2 }}
                variant="h6"
              >
                Expected investment Rate
              </Typography>
              <Slider
                style={{
                  width: 150,
                  justifyContent: "center",
                  alignItem: "center",
                  marginLeft: 30,
                  color: "#ffd601",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                width: 240,
                height: 130,
                backgroundColor: "#252527",
                input: { color: "#ffd601" },
                border: "2px solid #ffd601",
                borderRadius: "5px",
              }}
            >
              {" "}
              <Typography
                sx={{ color: "#ffd601", margin: "auto", textAlign: "center", mt: 2 }}
                variant="h6"
              >
                Retirement Corpus
              </Typography>
              <Slider
                style={{
                  width: 150,
                  justifyContent: "center",
                  alignItem: "center",
                  marginLeft: 30,
                  color: "#ffd601",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox pt={4} pb={3}>
        <MDBox display="flex" alignItems="center" lineHeight={1}>
          <RetirementTable />
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default RetirementCharts;
