import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { fetchEnrollmentcourseBarchartRequest } from "../../actions/Admin/AdminDashboardAction";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/Admin/AdminDashboard.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import BarChartIcon from '@mui/icons-material/BarChart';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.03)",
  },
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
}));

ChartJS.register(CategoryScale, LinearScale, BarController, BarElement);

const CourseEnrollmentChart = ({
  fetchEnrollmentcourseBarchartRequest,
  enrollmentcoursebarchart,
}) => {
  let today = new Date();
  today.setDate(today.getDate());
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let day = String(today.getDate()).padStart(2, "0");
  const [selectedOption, setSelectedOption] = useState(today.getFullYear());
  useEffect(() => {
    fetchEnrollmentcourseBarchartRequest(selectedOption);
    // sample();
  }, [selectedOption]);

  //year
  const dashboard = useSelector((state) => state.fetchdashboard.data);

  console.log("ssssd", dashboard);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const checking = selectedOption;
  console.log("check", checking);
  var barColors = [
    "#003f5c",
    "#2f4b7c",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "#ffa600]",
  ];
  const barData = {
    datasets: [
      {
        label: "Courses enrolled Per Month",
        data: enrollmentcoursebarchart.enrollmentcoursebarchart,
        backgroundColor: barColors,
      },
    ],
  };
  const barOptions = {
    parsing: {
      xAxisKey: "enrollMonth",
      yAxisKey: "enrollCount",
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "World Wine Production 2018",
      },
    },
  };
  return (
    
    <Grid item xs={12} md={6}>
      <Item style={{ borderRadius: "15px" }}>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedOption}
              label="Age"
              onChange={handleSelectChange}
              style={{ width: "90px", height: "30px" }}
            >
              {Array.isArray(dashboard.enrollmentYears) &&
                dashboard.enrollmentYears.map((opt, index) => (
                  <MenuItem key={index} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
            </Select>
            <Typography
              sx={{ fontSize: 18, fontWeight: "bold", color: "#524F7D" }}
              color="text.secondary"
              gutterBottom
            >
              Learners Enrollment Report &nbsp;
              <BarChartIcon />
            </Typography>
          </FormControl>
        </Box>
        <Card variant="">
          <CardContent sx={{ height: "300px", marginLeft: "30px" }}>
            <Bar data={barData} options={barOptions} />
          </CardContent>
        </Card>
      </Item>
    </Grid>
   
  );
};

const mapStoreToProps = (state) => ({
  enrollmentcoursebarchart: state.enrollmentcoursebarchart,
});


const mapDispatchToProps = (dispatch) => ({
  fetchEnrollmentcourseBarchartRequest: (checking) =>
    dispatch(fetchEnrollmentcourseBarchartRequest(checking)),
});

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(CourseEnrollmentChart);
