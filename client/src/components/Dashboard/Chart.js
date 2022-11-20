import React from "react";
import ReactApexChart from "react-apexcharts";

function Chart({ paymentHistory }) {
  let paymentDates = [], paymentReceived = [], ind=0;

  for (let i = 0; i < paymentHistory.length; i++) {
    const newDate = new Date(paymentHistory[i].datePaid);
    let localDate = newDate.toLocaleDateString();

    ind = paymentDates.findIndex((date) => date === localDate);
    if((ind >= 0)) {
      paymentReceived[ind] += Number(paymentHistory[i].amountPaid);
    }
    else{
      paymentDates.push(localDate);
      paymentReceived.push(paymentHistory[i].amountPaid);
    }
  }

  const series = [
    {
      name: "Payment Recieved",
      data: paymentReceived,
    },
  ];

  console.log(series);

  const options = {
    chart: {
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: paymentDates,
    },
    tooltip: {
      x: {
        format: "dd/mm/yy",
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
        width: "90%",
        margin: "10px auto",
        padding: "10px",
      }}
    >
      <br />
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={300}
      />
    </div>
  );
}

export default Chart;
