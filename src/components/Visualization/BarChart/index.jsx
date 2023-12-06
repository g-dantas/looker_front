import PropTypes from "prop-types";
import ReactECharts from "echarts-for-react";
import { CircularProgress, Skeleton, Stack, Typography } from "@mui/material";
import numeral from "numeral";

import useQuery from "../../../hooks/useQuery";
function BarChart({ id, style }) {
  const {data, fields, config, isLoaded, title} = useQuery({id});

  if (!isLoaded) {
    return (
      <Stack>
        <Skeleton width="60%" height="24px" variant="lightText"/>
        <Stack style={style} alignItems="center" justifyContent="center">
          <CircularProgress />
        </Stack>
      </Stack>
    )
  }

  const labels = fields.measures.map((measure) => ({label: measure.label}));
  const serieData = Object.values(data[0]);
  //*--- Static Content ---*
  // const title = "World share of energy consumption, 2021";
  // const labels = [{ label: "Oil" }, { label: "Coal" }, { label: "Gas" }, { label: "Hydropower" }, { label: "Nuclear" }, { label: "Wind" }, { label: "Solar" }];
  // const serieData = [68954, 48212, 41032, 12755, 5000, 3050, 918];
  //*--- end of Static Content ---*

  const colors = ["#6A6158", "#B08C55", "#D9B683", "#2D428F", "#566AB6", "#6798B4", "#50B2B2"];
  const option = {
    grid: {
      top: 0,
      bottom: 0,
      left: 0,
      right: "3%",
      containLabel: true
    },
    yAxis: {
      inverse: true,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel:{
        fontSize: "10px",
        color: "white",
        fontFamily: "Barlow",
        fontWeight: 500,
        formatter: (param) => {
          return param.toUpperCase()
        } 
      },
      type: 'category',
      data: labels.map((item) => item.label),
    },
    xAxis: {
      type: 'value',
      show: false,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      }
    },
    series: [
      {
        data: serieData,
        type: 'bar',
        barMinHeight: "24px",
        barCategoryGap: "4px",
        label: {
          show: true,
          position: "outside",
          fontSize: "10px",
          color: "white",
          fontFamily: "Barlow",
          fontWeight: 500,
          formatter: (param) => {
            return param.data.toLocaleString()
          }
        },
        itemStyle: {
          color: (param) => {
            return colors[param.dataIndex]
          }
        },
      }
    ]
  };

  return (
    <Stack gap="16px">
      <Typography variant="h4" color="white">
        {title}
      </Typography>
      <ReactECharts option={option} style={style} lazyUpdate />
    </Stack>
  );
}

BarChart.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
};

export default BarChart;
