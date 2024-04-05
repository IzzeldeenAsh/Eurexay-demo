import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-counter-chart',
  templateUrl: './counter-chart.component.html',
  styleUrls: ['./counter-chart.component.scss']
})
export class CounterChartComponent implements OnInit , OnChanges {

  @Input() chartColor: string = '';
  @Input() chartHeight!: string;
  @Input() chartPercentage!: number;

  chartOptions: any = {};
  base:string = "#0778b9"
  constructor() {}


  ngOnInit(): void {
    this.chartOptions = this.getChartOptions(this.chartHeight, this.chartColor, this.chartPercentage);
}

ngOnChanges(changes: SimpleChanges): void {
  if (changes['chartPercentage'] && !changes['chartPercentage'].firstChange) {
      this.chartOptions = this.getChartOptions(this.chartHeight, this.chartColor, this.chartPercentage);
  }
}

  getChartOptions(chartHeight: string, chartColor: string ,chartPercentage: number) {
    const baseColor = chartColor
    const lightColor = chartPercentage <100 ? '#e7edfa' :(chartPercentage == 100? '#daf8ed' : '#fff5f8'); 
    const labelColor = chartPercentage <100 ? '#0778b9' :(chartPercentage == 100? '#4fdf1e' : '#cf0e0e');
    return {
      series: [chartPercentage],
      chart: {
        fontFamily: 'inherit',
        height: chartHeight,
        type: 'radialBar',

      },
      plotOptions: {

        radialBar: {
          hollow: {
            margin: 0,
             size: '65%',

          },
          dataLabels: {
            name: {
              show: false,
              fontWeight: '700',
            },
            value: {
              color: labelColor,
              fontSize: '30px',
              fontWeight: '700',
              offsetY: 12,
              show: true,
              formatter: function (val: number) {
                return val + '%';
              },
            },
          },
          track: {
            background: lightColor,
            strokeWidth: '100%',
          },
        },
      },
      colors: [baseColor],
      stroke: {
        lineCap: 'round',
      },
      labels: ['Progress'],
    };
  }

}

