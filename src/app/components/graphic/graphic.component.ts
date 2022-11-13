import { Component, Input, ViewChild, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

export type ChartType = 'monthly' | 'yearly' | 'daily';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements OnInit {

  @ViewChild("chart")
  chart?: ChartComponent;

  @Input()
  public set type(type: ChartType) {
    this.chartType = type;

    this.setUpChart();
  };

  @Input()
  public monthlyData: number[] = [];

  @Input()
  public yearlyData: { year: string, value: number }[] = [];

  public chartOptions!: ChartOptions;

  public chartType: ChartType = 'monthly';

  public ngOnInit(): void {
    this.setUpChart();
  }

  private setUpChart(): void {
    if (this.chartType === 'monthly')
      this.setUpMonthChart();

    if (this.chartType === 'yearly')
      this.setUpYearlyChart();
  }

  private setUpMonthChart(): void {
    this.chartOptions = {
      series: [
        {
          name: "Geração energética (kWh)",
          data: this.monthlyData,
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: false,
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez"
        ],
        position: "top",
        labels: {
          offsetY: -18,
          style: {
            colors: '#fff'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "color",
        colors: ['#1e81f7']
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
        }
      },
      title: {
        text: "Geração energética (kWh)",
        offsetY: 320,
        align: "center",
        style: {
          color: "#fff"
        }
      }
    };
  }

  private setUpYearlyChart(): void {
    this.chartOptions = {
      series: [
        {
          name: "Geração energética (kWh)",
          data: this.yearlyData.map(y => y.value),
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: false,
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },
      xaxis: {
        categories: this.yearlyData.map(y => y.year),
        position: "top",
        labels: {
          offsetY: -18,
          style: {
            colors: '#fff'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "color",
        colors: ['#1e81f7']
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
        }
      },
      title: {
        text: "Geração energética (kWh)",
        offsetY: 320,
        align: "center",
        style: {
          color: "#fff"
        }
      }
    };
  }
 }




