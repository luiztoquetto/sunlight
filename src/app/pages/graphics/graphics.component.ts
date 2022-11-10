import { CondominiumEntity } from 'src/app/models/entities/condominium.entity';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderEnum } from 'src/app/models/enums/header.enum';
import condominiumsJson from "condominiums.json";
import inversorsJson from "inversores.json";
import { InversorData, InversorEntity } from 'src/app/models/entities/inversor.entity';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('condominiumId');

    if (id) {
      this.condominium = condominiumsJson.condominiums.find(c => c.id === +id);
      this.inversors = inversorsJson.inversores.filter(i => i.condominiumId === +id);
    }
  }

  public condominium?: CondominiumEntity;

  public inversors: InversorEntity[] = [];

  public monthGeneration: string = '0 kWh';

  public yearGeneration: string = '0 kWh';

  public lifetimeGeneration: string = '0 kWh';

  public yesterdayGeneration: string = '0 kWh';

  public recentGeneration: string = '0 kWh';

  public recentGenerationDate: string = '';

  public monthlyData: number[] = [];

  public headerEnum: typeof HeaderEnum = HeaderEnum;

  ngOnInit(): void {
    if (!this.condominium)
      return;

    this.filterMonth();
    this.filterYear();
    this.filterLifetime();
    this.filterYesterday();
    this.filterRecent();
    this.setUpMontlyData();
  }

  filterMonth(): void {
    const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0');
    const currentYear = new Date().getFullYear();
    const getInversorMonth = (time: string) => time.split('-')[1];
    const getInversorYear = (time: string) => time.split('-')[0];

    let value = 0;

    this.inversors.forEach(inverter => {
      const monthData = inverter.data.filter(data => {
        return getInversorMonth(data.time) === currentMonth && getInversorYear(data.time) === currentYear.toString();
      });

      if (monthData.length)
        value += monthData[monthData.length - 1].total_generation - monthData[0].total_generation;
    });

    this.monthGeneration = value.toFixed(2).replace('.', ',') + ' kWh';
  }

  filterYear(): void {
    const currentYear = new Date().getFullYear();
    const getInversorYear = (time: string) => time.split('-')[0];

    let value = 0;

    this.inversors.forEach(inverter => {
      const yearData = inverter.data.filter(data => {
        return getInversorYear(data.time) === currentYear.toString();
      })

      if (yearData.length)
        value += yearData[yearData.length - 1].total_generation - yearData[0].total_generation;
    });

    if (+value < 10_000)
      this.yearGeneration = value.toFixed(2).replace('.', ',') + ' kWh';
    else
      this.yearGeneration = (value / 1000).toFixed(2).replace('.', ',') + ' MWh';
  }

  filterLifetime(): void {
    let value = 0;

    this.inversors.forEach(inverter => {
      if (inverter.data.length)
        value += inverter.data[inverter.data.length - 1].total_generation;
    });

    if (+value < 10_000)
      this.lifetimeGeneration = value.toFixed(2).replace('.', ',') + ' kWh';
    else
      this.lifetimeGeneration = (value / 1000).toFixed(2).replace('.', ',') + ' MWh';
  }

  filterYesterday(): void {
    let value = 0;

    const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0');
    const currentYear = new Date().getFullYear().toString();
    const currentDay = new Date().getDate().toString().padStart(2, '0');

    const getInversorYear = (time: string) => time.split('-')[0];
    const getInversorMonth = (time: string) => time.split('-')[1];
    const getInversorDay = (time: string) => time.split('-')[2].split(' ')[0];

    this.inversors.forEach(inverter => {
      const yesterDayData = inverter.data.filter(data => {
        return getInversorYear(data.time) === currentYear && getInversorMonth(data.time) === currentMonth && getInversorDay(data.time) === currentDay;
      })

      if (yesterDayData.length)
        value += yesterDayData[yesterDayData.length - 1].daily_generation;
    });

    if (+value < 10_000)
      this.yesterdayGeneration = value.toFixed(2).replace('.', ',') + ' kWh';
    else
      this.yesterdayGeneration = (value / 1000).toFixed(2).replace('.', ',') + ' MWh';
  }

  filterRecent(): void {
    let value = 0;

    this.inversors.forEach(inverter => {
      if (inverter.data.length) {
        value += inverter.data[inverter.data.length - 1].daily_generation;
        this.recentGenerationDate = inverter.data[inverter.data.length - 1].time;
      }
    });

    if (+value < 10_000)
      this.recentGeneration = value.toFixed(2).replace('.', ',') + ' kWh';
    else
      this.recentGeneration = (value / 1000).toFixed(2).replace('.', ',') + ' MWh';
  }

  setUpMontlyData(): void {
    const months = [...Array(12).keys()].map(i => i+1);
    const data: number[] = [];

    const getInversorYear = (time: string) => time.split('-')[0];
    const getInversorMonth = (time: string) => time.split('-')[1];

    const currentYear = new Date().getFullYear().toString();

    months.forEach(month => {
      const formattedMonth = month.toString().padStart(2, '0');

      this.inversors.forEach(inverter => {
        const monthData = inverter.data.filter(data => {
          return getInversorMonth(data.time) === formattedMonth && getInversorYear(data.time) === currentYear.toString();
        });


        data[month - 1] = (data[month - 1] ?? 0) + (monthData.length ? monthData[monthData.length - 1].total_generation - monthData[0].total_generation : 0);
      });
    });

    this.monthlyData = data;
  }
}
