import ReactECharts from "echarts-for-react";
import PropTypes from "prop-types";
import { CircularProgress, Skeleton, Stack, Typography } from "@mui/material";
import useQuery from "../../../hooks/useQuery";

function LineChart({ cardInfos, color, style }) {
  const { id } = cardInfos || {};

  // *--- Looker data ---*
  const { isLoaded, data, fields, title } = useQuery({ id }) || {};

  if (!isLoaded) {
    return (
      <Stack gap="35px">
        <Skeleton variant="rounded" width="80%" height="16px" />
        <Stack alignItems="center" justifyContent="center" height="100%" style={style}>
          <CircularProgress color="secondary" />
        </Stack>
      </Stack>
    );
  }

  const { dimensions, measures } = fields;

  const xAxisData = data.map((item) => item[dimensions[0].name]);

  const serieData = data.map((item, index) => {
    return {
      value: item[measures[0].name],
      label: item[measures[0].name],
      ...((index === 0 || index === data.length - 1) && { symbolSize: "8", symbol: "circle" }),
    };
  });

  const hexToRgba = (hex, opacity) => {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const borderColor = hexToRgba(color, 0.4);

  const options = {
    xAxis: {
      type: "category",
      show: false,
      interval: 0,
      boundaryGap: false,
      data: xAxisData,
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        interval: 0,
      },
    },
    tooltip: {
      trigger: "axis",
      backgroundColor: "#FFFFFF",
      borderWidth: 0.5,
      borderRadius: 0,
      borderColor: "#D2D5DD",
      textStyle: {
        color: "#1C233B",
        fontSize: 15,
        fontFamily: "Barlow",
        lineHeight: "20px",
      },
      shadowColor: "transparent",
      padding: [16, 20],
      position: function (point, params, dom, rect, size) {
        let x = point[0];
        let y = point[1];

        y = y - size.contentSize[1] - 8;
        x = x - size.contentSize[0] / 2;

        return [x, y];
      },
      formatter: function (params) {
        const year = params[0].name;
        const metricName = params[0].seriesName;
        const value = params[0]?.data?.label ?? params[0].data.value;

        return `
                <strong>${year}</strong>
                <div style="margin-top: 10px;">
                ${metricName}
                <span style="margin-left: 25px;">${value}</span>
                </div>
            `;
      },
      rich: {
        strong: {
          fontSize: 20,
          fontWeight: "600",
          color: "#1C233B",
          lineHeight: "24px",
        },
      },
      axisPointer: {
        type: "none",
      },
    },
    yAxis: {
      type: "value",
      show: false,

      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
        interval: 0,
      },
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        name: measures[0].label,
        data: serieData,
        type: "line",
        emphasis: {
          symbolSize: 20,
          itemStyle: {
            borderColor: borderColor,
            borderWidth: 5,
            AbortController,
          },
        },
        smooth: true,
        symbol: "circle",
        symbolSize: 2,
        lineStyle: {
          width: 3,
          color,
        },
        itemStyle: {
          color,
        },
        label: {
          show: true,
          interval: 0,
          position: "top",
          formatter: (params) => {
            if (params.dataIndex === 0 || params.dataIndex === xAxisData.length - 1) {
              return xAxisData[params.dataIndex];
            }
            return "";
          },
        },
      },
    ],
    grid: {
      left: "5%",
      right: "5%",
      bottom: "10%",
      top: "20%",
    },
  };

  return (
    <Stack gap="35px">
      <Typography variant="h4" color="primary.main">
        {title}
      </Typography>
      <ReactECharts option={options} style={style} />
    </Stack>
  );
}

LineChart.propTypes = {
  cardInfos: PropTypes.object,
  color: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default LineChart;
