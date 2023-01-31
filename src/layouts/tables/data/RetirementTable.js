import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import getAccountValues from "../../../actiions/account/account";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function RetirementTable() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.accounts.accounts);
  console.log("responseData from retitementTable", responseData);

  useEffect(() => {
    dispatch(getAccountValues());
  }, [dispatch]);

  // const { years, age, yearlyExpenses, netIncomeNeeded, openingBalance, yearlyPassiveIncome } =
  //   responseData;
  // console.log(years);

  // let retirementAge;
  // let timeGap;
  // let currentMonthlyExp;
  // let inflationRate;
  // let currentMlyPassiveIncome;
  // let growthRateOfPassiveIncome;
  // let pensionAtRetirementYearly;

  // for (let i = 0; i < responseData.length; i += 1) {
  //   console.log(responseData[i].retirementAge);
  //   retirementAge = responseData[i].retirementAge;
  //   timeGap = responseData[i].timeGap;
  //   currentMonthlyExp = responseData[i].currentMonthlyExp;
  //   inflationRate = responseData[i].inflationRate;
  //   currentMlyPassiveIncome = responseData[i].currentMlyPassiveIncome;
  //   growthRateOfPassiveIncome = responseData[i].growthRateOfPassiveIncome;
  //   pensionAtRetirementYearly = responseData[i].pensionAtRetirementYearly;
  // }

  // const currentAge = retirementAge - timeGap;
  // console.log(currentAge);

  const years = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  ];
  // const age = [
  //   55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
  //   79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
  // ];

  // const yearlyExpenses = [];
  // const yearlyPassiveIncome = [];
  // for (let i = retirementAge; i < 100; i += 1) {
  //   yearlyExpenses.push(
  //     (currentMonthlyExp * (1 + inflationRate / 100) ** (i - currentAge) * 12).toFixed(2)
  //   );
  //   yearlyPassiveIncome.push(
  //     (
  //       currentMlyPassiveIncome * (1 + growthRateOfPassiveIncome / 100) ** (i - currentAge) * 12 +
  //       pensionAtRetirementYearly
  //     ).toFixed(2)
  //   );
  // }
  // console.log(yearlyExpenses);
  // console.log(yearlyPassiveIncome);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Years</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Yearly Expense</TableCell>
            <TableCell>Yearly Passive Income</TableCell>
            <TableCell>Net Income Needed</TableCell>
            <TableCell>Retirement Corpus Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {years.map((year, index) => (
            <TableRow key={year}>
              <TableCell>{years[index]}</TableCell>
              {/* <TableCell>{age[index]}</TableCell>
              <TableCell>{yearlyExpenses[index]}</TableCell>
              <TableCell>{yearlyPassiveIncome[index]}</TableCell>
              <TableCell>{netIncomeNeeded[index]}</TableCell>
              <TableCell>{openingBalance[index]}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
