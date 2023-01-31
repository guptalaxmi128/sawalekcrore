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

import { useEffect, useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

import { CircleSlider } from "react-circle-slider";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import { useDispatch, useSelector } from "react-redux";
import getDreamHomes from "../../actiions/dreamhomes/dreamHomes";
import "./DreamHome.css";

function DreamHomes() {
  const dispatch = useDispatch();

  const responseData = useSelector((state) => state.dreamHomes.dreamHomes);
  console.log("responseData from dreamhomes", responseData);

  useEffect(() => {
    dispatch(getDreamHomes());
  }, [dispatch]);

  const {
    presentCostDH,
    yearToBuy,
    estimatedInflationRate,
    existingFund,
    extimatedInvestmentReturn,
    CurrentYearlyInvestmentDH,
  } = responseData[0];

  const [presentCost, setPresentCost] = useState(presentCostDH);
  const presentCostHandler = (value) => {
    setPresentCost(value);
  };

  const [year, setYear] = useState(yearToBuy);
  const yearToBuyHandler = (value) => {
    setYear(value);
  };

  const [inflationRate, setInflationRate] = useState(estimatedInflationRate);
  const inflationRateHandler = (value) => {
    setInflationRate(value);
  };
  // console.log(inflationRate);
  // console.log(presentCost);

  const [existFund, setExistFund] = useState(existingFund);
  const existFundHandler = (value) => {
    setExistFund(value);
  };

  const [investmentReturn, setInvestmentRetuen] = useState(extimatedInvestmentReturn);
  const investmentReturnHandler = (value) => {
    setInvestmentRetuen(value);
  };

  const [yearlyInvestment, setYearlyInvestment] = useState(CurrentYearlyInvestmentDH);
  const yearlyInvestmentHandler = (value) => {
    setYearlyInvestment(value);
  };

  const futureVODH = presentCost * (1 + inflationRate / 100) ** year;

  const futureVOExistingFundInvestment = [];
  futureVOExistingFundInvestment.push(existFund * (1 + investmentReturn / 100) ** year);
  futureVOExistingFundInvestment.push(
    (yearlyInvestment * ((1 + investmentReturn / 100) ** year - 1) * 100) / investmentReturn
  );
  futureVOExistingFundInvestment.push(
    futureVOExistingFundInvestment[0] + futureVOExistingFundInvestment[1]
  );
  // console.log(futureVOExistingFundInvestment);
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox pt={6} pb={3} mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Box
              sx={{
                width: "330px",
                height: "120px",
                backgroundColor: "#000000",
                border: "1px solid #FFE500",
                borderRadius: "10px",
              }}
            >
              <Box sx={{ width: "70px", height: "70px", position: "absolute" }}>
                <CircleSlider
                  knobColor="#ffd601"
                  progressColor="#ffd601"
                  circleColor="#ffd601"
                  min={1000000}
                  max={10000000}
                  value={presentCost}
                  onChange={presentCostHandler}
                />
              </Box>
              <Box sx={{ width: "201px", height: "38px" }} ml={11}>
                <Typography
                  sx={{
                    textAlign: "left",
                    mt: "10px",
                    padding: "10px",
                    fontSize: "16px",
                    position: "absolute",
                  }}
                  variant="h6"
                >
                  Present Cost &nbsp;
                  <span style={{ color: "#ffd601" }}>
                    <b>(Dream Home)</b>
                  </span>
                </Typography>
              </Box>
              <Box sx={{ width: "100px", height: "33px" }} mt={5} ml={12}>
                <Typography
                  sx={{
                    color: "yellow",
                    textAlign: "left",
                    backgroundColor: "rgba(255, 214, 1, 0.2)",
                    borderRadius: 3,
                    fontSize: "16px",
                  }}
                  variant="h6"
                >
                  {/* 350000 */}₹ {presentCost}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                width: "330px",
                height: "120px",
                backgroundColor: "#000000",
                border: "1px solid #FFE500",
                borderRadius: "10px",
              }}
            >
              <Box sx={{ width: "70px", height: "70px", position: "absolute" }}>
                <CircleSlider
                  knobColor="#ffd601"
                  progressColor="#ffd601"
                  circleColor="#ffd601"
                  min={0}
                  max={100}
                  value={year}
                  onChange={yearToBuyHandler}
                />
              </Box>
              <Box sx={{ width: "201px", height: "38px" }} ml={11}>
                <Typography
                  sx={{
                    textAlign: "left",
                    mt: "10px",
                    padding: "10px",
                    fontSize: "16px",
                    position: "absolute",
                  }}
                  variant="h6"
                >
                  Year (to buy)
                </Typography>
              </Box>
              <Box sx={{ width: "50px", height: "33px" }} mt={5} ml={12}>
                <Typography
                  sx={{
                    color: "yellow",
                    textAlign: "left",
                    backgroundColor: "rgba(255, 214, 1, 0.2)",
                    borderRadius: 3,
                    fontSize: "16px",
                  }}
                  variant="h6"
                >
                  {/* 10 */}
                  &nbsp; &nbsp; {year}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                width: "330px",
                height: "120px",
                backgroundColor: "#000000",
                border: "1px solid #FFE500",
                borderRadius: "10px",
              }}
            >
              <Box sx={{ width: "70px", height: "70px", position: "absolute" }}>
                <CircleSlider
                  knobColor="#ffd601"
                  progressColor="#ffd601"
                  circleColor="#ffd601"
                  min={1000000}
                  max={10000000}
                  value={existFund}
                  onChange={existFundHandler}
                />
              </Box>
              <Box sx={{ width: "201px", height: "38px" }} ml={11}>
                <Typography
                  sx={{
                    textAlign: "left",
                    mt: "10px",
                    padding: "10px",
                    fontSize: "16px",
                    position: "absolute",
                  }}
                  variant="h6"
                >
                  Existing Fund for this Goal
                </Typography>
              </Box>
              <Box sx={{ width: "100px", height: "33px" }} mt={5} ml={12}>
                <Typography
                  sx={{
                    color: "yellow",
                    textAlign: "left",
                    backgroundColor: "rgba(255, 214, 1, 0.2)",
                    borderRadius: 3,
                    fontSize: "16px",
                  }}
                  variant="h6"
                >
                  {/* 100000 */}₹ {existFund}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={2}>
          <Grid item xs={4}>
            <Box
              sx={{
                width: "330px",
                height: "120px",
                backgroundColor: "#000000",
                border: "1px solid #FFE500",
                borderRadius: "10px",
              }}
            >
              <Box sx={{ width: "70px", height: "70px", position: "absolute" }}>
                <CircleSlider
                  knobColor="#ffd601"
                  progressColor="#ffd601"
                  circleColor="#ffd601"
                  min={0}
                  max={100}
                  value={inflationRate}
                  onChange={inflationRateHandler}
                />
              </Box>
              <Box sx={{ width: "201px", height: "38px" }} ml={11}>
                <Typography
                  sx={{
                    textAlign: "left",
                    mt: "10px",
                    padding: "10px",
                    fontSize: "16px",
                    position: "absolute",
                  }}
                  variant="h6"
                >
                  Estimated Inflation Rate %
                </Typography>
              </Box>
              <Box sx={{ width: "50px", height: "33px" }} mt={5} ml={12}>
                <Typography
                  sx={{
                    color: "yellow",
                    textAlign: "left",
                    backgroundColor: "rgba(255, 214, 1, 0.2)",
                    borderRadius: 3,
                    fontSize: "16px",
                  }}
                  variant="h6"
                >
                  &nbsp; &nbsp; {inflationRate}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                width: "330px",
                height: "120px",
                backgroundColor: "#000000",
                border: "1px solid #FFE500",
                borderRadius: "10px",
              }}
            >
              <Box sx={{ width: "70px", height: "70px", position: "absolute" }}>
                <CircleSlider
                  knobColor="#ffd601"
                  progressColor="#ffd601"
                  circleColor="#ffd601"
                  min={0}
                  max={100}
                  value={investmentReturn}
                  onChange={investmentReturnHandler}
                />
              </Box>
              <Box sx={{ width: "201px", height: "38px" }} ml={11}>
                <Typography
                  sx={{
                    textAlign: "left",
                    mt: "10px",
                    padding: "10px",
                    fontSize: "16px",
                    position: "absolute",
                  }}
                  variant="h6"
                >
                  Estimated Investment Return <br /> %
                </Typography>
              </Box>
              <Box sx={{ width: "50px", height: "33px" }} mt={5} ml={12}>
                <Typography
                  sx={{
                    color: "yellow",
                    textAlign: "left",
                    backgroundColor: "rgba(255, 214, 1, 0.2)",

                    borderRadius: 3,
                    fontSize: "16px",
                  }}
                  variant="h6"
                >
                  &nbsp; &nbsp; {investmentReturn}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                width: "330px",
                height: "120px",
                backgroundColor: "#000000",
                border: "1px solid #FFE500",
                borderRadius: "10px",
              }}
            >
              {" "}
              <Box sx={{ width: "70px", height: "70px", position: "absolute" }}>
                <CircleSlider
                  knobColor="#ffd601"
                  progressColor="#ffd601"
                  circleColor="#ffd601"
                  min={1000000}
                  max={10000000}
                  value={yearlyInvestment}
                  onChange={yearlyInvestmentHandler}
                />
              </Box>
              <Box sx={{ width: "201px", height: "38px" }} ml={11}>
                <Typography
                  sx={{
                    textAlign: "left",
                    mt: "10px",
                    padding: "10px",
                    fontSize: "16px",
                    position: "absolute",
                  }}
                  variant="h6"
                >
                  Current Yearly Investment for{" "}
                  <span style={{ color: "#ffd601" }}>
                    <b>Dream Home</b>
                  </span>
                </Typography>
              </Box>
              <Box sx={{ width: "100px", height: "33px" }} mt={5} ml={12}>
                <Typography
                  sx={{
                    color: "yellow",
                    textAlign: "left",
                    backgroundColor: "rgba(255, 214, 1, 0.2)",
                    borderRadius: 3,
                    fontSize: "16px",
                  }}
                  variant="h6"
                >
                  {/* &nbsp; ₹ 100000 */}₹ {yearlyInvestment}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox pt={4} pb={3}>
        <MDBox display="flex" alignItems="center" lineHeight={1}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                sx={{
                  width: 485,
                  height: 150,
                  backgroundColor: "#000000",
                  border: "2px solid #ffd601",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  sx={{ margin: "auto", textAlign: "center", mt: 3, fontSize: "1.2rem" }}
                  variant="h6"
                >
                  Future Value of your &nbsp;<span style={{ color: "#ffd601" }}>Dream Home</span>
                </Typography>
                <Typography
                  sx={{
                    color: "#ffd601",
                    margin: "auto",
                    textAlign: "center",
                    mt: 2,
                    backgroundColor: "rgba(255, 214, 1, 0.2)",
                    width: "200px",
                    borderRadius: 3,
                  }}
                  variant="h6"
                >
                  {/* 774848948984 */}
                  {futureVODH}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  width: 485,
                  height: 150,
                  backgroundColor: "#000000",
                  border: "2px solid #ffd601",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  sx={{ fontSize: "1.2rem", margin: "auto", textAlign: "center", mt: 3 }}
                  variant="h6"
                >
                  Future Value of Existing Fund Investment
                </Typography>
                <Typography
                  sx={{
                    color: "#ffd601",
                    margin: "auto",
                    textAlign: "center",
                    mt: 2,
                    backgroundColor: "rgba(255, 214, 1, 0.2)",
                    width: "170px",
                    borderRadius: 3,
                  }}
                  variant="h6"
                >
                  {/* 23855955.5885 */}
                  {futureVOExistingFundInvestment[2]}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>

      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default DreamHomes;
