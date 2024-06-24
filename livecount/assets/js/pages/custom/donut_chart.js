am5.ready(function() {

// Define data for each year
    var chartData = {
      // "1995": [
      //   { sector: "Agriculture", size: 6.6 },
      //   { sector: "Mining and Quarrying", size: 0.6 },
      //   { sector: "Manufacturing", size: 23.2 },
      //   { sector: "Electricity and Water", size: 2.2 },
      //   { sector: "Construction", size: 4.5 },
      //   { sector: "Trade (Wholesale, Retail, Motor)", size: 14.6 },
      //   { sector: "Transport and Communication", size: 9.3 },
      //   { sector: "Finance, real estate and business services", size: 22.5 } ],
      // "1996": [
      //   { sector: "Agriculture", size: 6.4 },
      //   { sector: "Mining and Quarrying", size: 0.5 },
      //   { sector: "Manufacturing", size: 22.4 },
      //   { sector: "Electricity and Water", size: 2 },
      //   { sector: "Construction", size: 4.2 },
      //   { sector: "Trade (Wholesale, Retail, Motor)", size: 14.8 },
      //   { sector: "Transport and Communication", size: 9.7 },
      //   { sector: "Finance, real estate and business services", size: 22 } ],
      // "1997": [
      //   { sector: "Agriculture", size: 6.1 },
      //   { sector: "Mining and Quarrying", size: 0.2 },
      //   { sector: "Manufacturing", size: 20.9 },
      //   { sector: "Electricity and Water", size: 1.8 },
      //   { sector: "Construction", size: 4.2 },
      //   { sector: "Trade (Wholesale, Retail, Motor)", size: 13.7 },
      //   { sector: "Transport and Communication", size: 9.4 },
      //   { sector: "Finance, real estate and business services", size: 22.1 } ]
    };

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("donut_chart");


    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
        am5themes_Animated.new(root)
    ]);


    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(am5percent.PieChart.new(root, {
        innerRadius: 100,
        layout: root.verticalLayout
    }));


    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var series = chart.series.push(am5percent.PieSeries.new(root, {
        valueField: "size",
        categoryField: "sector"
    }));


    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll([
        { sector: "Paslon 3", size: 40.5 },
        { sector: "Paslon 2", size: 24.5 },
        { sector: "Paslon 1", size: 35 }
    ]);


    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear(1000, 100);

    series.set("fill", am5.color(0xff0000));


    // Add label
    var label = root.tooltipContainer.children.push(am5.Label.new(root, {
        x: am5.p50,
        y: am5.p50,
        centerX: am5.p50,
        centerY: am5.p50,
        fill: am5.color(0x000000),
        fontSize: 25
    }));


    // Animate chart data
    var currentYear = 1995;
    function getCurrentData() {
        var data = chartData[currentYear];
        currentYear++;
        if (currentYear > 2014)
            currentYear = 1995;
        return data;
    }

    function loop() {
        label.set("text", "Live Count");
        var data = getCurrentData();
            for(var i = 0; i < data.length; i++) {
            series.data.setIndex(i, data[i]);
        }
        chart.setTimeout( loop, 4000 );
    }

    loop();

}); // end am5.ready()