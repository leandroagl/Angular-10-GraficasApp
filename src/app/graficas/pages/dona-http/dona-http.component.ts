import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    // labels: this.doughnutChartLabels,
    datasets: [
      // { data: [350, 450, 100] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';


  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe( data => {
    //     console.log(data);
    //     const labels = Object.keys(data);
    //     const values = Object.values( data );

    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.datasets.push(values)
    //   })

    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({labels, values}) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.datasets.push(values)

      })
  }

}
