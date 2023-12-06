import PropTypes from "prop-types";
import ReactECharts from "echarts-for-react";
import { CircularProgress, Skeleton, Stack, Typography } from "@mui/material";
import numeral from "numeral";

import useQuery from "../../../hooks/useQuery";
function PieChart({ id, style }) {
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
  const colors = ["#6A6158", "#B08C55", "#D9B683", "#2D428F", "#566AB6", "#6798B4", "#50B2B2"];
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'right'
    },
    textStyle: {
        color: "white",
        fontFamily: "Barlow",
        fontSize: "10px",
        fontWeight: 500,
        formatter: (param) => {
            console.log(param);
            return param.toUpperCase()
        },
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '80%',
        data: [
            { value: serieData[0], name: labels[0].label },
            { value: serieData[1], name: labels[1].label },
            { value: serieData[2], name: labels[2].label },
            { value: serieData[3], name: labels[3].label },
            { value: serieData[4], name: labels[4].label },
            { value: serieData[5], name: labels[5].label },
            { value: serieData[6], name: labels[6].label },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            color: (param) => {
                return colors[param.dataIndex]
              }
          }
        }
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

PieChart.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
};

export default PieChart;
