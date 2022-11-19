import { HeaderNavigationEnum } from './../../models/enums/header.enum';
import { ChartType } from './../../components/graphic/graphic.component';
import { CondominiumEntity } from 'src/app/models/entities/condominium.entity';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderEnum } from 'src/app/models/enums/header.enum';
import condominiumsJson from "condominiums.json";
import inversorsJson from "inversores.json";
import { InversorEntity } from 'src/app/models/entities/inversor.entity';

@Component({
  selector: 'app-graphics-inverter',
  templateUrl: './graphics-inverter.component.html',
  styleUrls: ['./graphics-inverter.component.scss']
})
export class GraphicsInverterComponent implements OnInit {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {
    const condominiumId = this.activatedRoute.snapshot.paramMap.get('condominiumId');
    const inverterSn = this.activatedRoute.snapshot.paramMap.get('inverterSn');

    if (condominiumId && inverterSn) {
      this.condominium = condominiumsJson.condominiums.find(c => c.id === +condominiumId);
      this.inverter = inversorsJson.inversores.find(i => i.inverter_sn === inverterSn);
    }
  }

  public condominium?: CondominiumEntity;

  public inverter?: InversorEntity;

  public monthGeneration: string = '0 kWh';

  public yearGeneration: string = '0 kWh';

  public lifetimeGeneration: string = '0 kWh';

  public yesterdayGeneration: string = '0 kWh';

  public recentGeneration: string = '0 kWh';

  public recentGenerationDate: string = '';

  public monthlyData: number[] = [];

  public yearlyData: { year: string, value: number }[] = [];

  public dailyData: { [day: string]: number } = {};

  public type: ChartType = 'monthly';

  public headerEnum: typeof HeaderEnum = HeaderEnum;

  public headerNavigationEnum: typeof HeaderNavigationEnum = HeaderNavigationEnum;

  ngOnInit(): void {
    if (!this.condominium)
      return;

    this.filterMonth();
    this.filterYear();
    this.filterLifetime();
    this.filterYesterday();
    this.filterRecent();
    this.setUpMontlyData();
    this.setUpYearlyData();
    this.setUpDailyData();
  }

  filterMonth(): void {
    const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0');
    const currentYear = new Date().getFullYear();
    const getInversorMonth = (time: string) => time.split('-')[1];
    const getInversorYear = (time: string) => time.split('-')[0];

    let value = 0;

    const monthData = this.inverter?.data.filter(data => {
      return getInversorMonth(data.time) === currentMonth && getInversorYear(data.time) === currentYear.toString();
    }) || [];

    if (monthData.length)
      value += monthData[monthData.length - 1].total_generation - monthData[0].total_generation;

    this.monthGeneration = value.toFixed(2).replace('.', ',') + ' kWh';
  }

  filterYear(): void {
    const currentYear = new Date().getFullYear();
    const getInversorYear = (time: string) => time.split('-')[0];

    let value = 0;

    const yearData = this.inverter?.data.filter(data => {
      return getInversorYear(data.time) === currentYear.toString();
    }) || [];

    if (yearData.length)
      value += yearData[yearData.length - 1].total_generation - yearData[0].total_generation;

    if (+value < 10_000)
      this.yearGeneration = value.toFixed(2).replace('.', ',') + ' kWh';
    else
      this.yearGeneration = (value / 1000).toFixed(2).replace('.', ',') + ' MWh';
  }

  filterLifetime(): void {
    let value = 0;

    if (this.inverter?.data.length)
      value += this.inverter.data[this.inverter.data.length - 1].total_generation;

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

    const yesterDayData = this.inverter?.data.filter(data => {
      return getInversorYear(data.time) === currentYear && getInversorMonth(data.time) === currentMonth && getInversorDay(data.time) === currentDay;
    }) || [];

    if (yesterDayData.length)
      value += yesterDayData[yesterDayData.length - 1].daily_generation;

    if (+value < 10_000)
      this.yesterdayGeneration = value.toFixed(2).replace('.', ',') + ' kWh';
    else
      this.yesterdayGeneration = (value / 1000).toFixed(2).replace('.', ',') + ' MWh';
  }

  filterRecent(): void {
    let value = 0;
    let date: string = '';

    const getInversorYear = (time: string) => time.split('-')[0];
    const getInversorMonth = (time: string) => time.split('-')[1];
    const getInversorDay = (time: string) => time.split('-')[2].split(' ')[0];

    if (this.inverter?.data.length) {
      if (!date) {
        const item = this.inverter.data[this.inverter.data.length - 1];

        value = item.daily_generation;
        this.recentGenerationDate = item.time;

        date = `${getInversorDay(item.time)}/${getInversorMonth(item.time)}/${getInversorYear(item.time)}`;
      } else {
        const filteredByDate = this.inverter.data.filter(i => `${getInversorDay(i.time)}/${getInversorMonth(i.time)}/${getInversorYear(i.time)}` === date);
        const item = filteredByDate[filteredByDate.length - 1];

        if (item)
          value += item.daily_generation;
      }
    }

    if (+value < 10_000)
      this.recentGeneration = value.toFixed(2).replace('.', ',') + ' kWh';
    else
      this.recentGeneration = (value / 1000).toFixed(2).replace('.', ',') + ' MWh';
  }

  setUpMontlyData(): void {
    const months = [...Array(12).keys()].map(i => i + 1);
    const data: number[] = [];

    const getInversorYear = (time: string) => time.split('-')[0];
    const getInversorMonth = (time: string) => time.split('-')[1];

    const currentYear = new Date().getFullYear().toString();

    months.forEach(month => {
      const formattedMonth = month.toString().padStart(2, '0');

      const monthData = this.inverter?.data.filter(data => {
        return getInversorMonth(data.time) === formattedMonth && getInversorYear(data.time) === currentYear.toString();
      }) || [];

      data[month - 1] = (data[month - 1] ?? 0) + (monthData.length ? monthData[monthData.length - 1].total_generation - monthData[0].total_generation : 0);
    });

    this.monthlyData = data;
  }

  setUpYearlyData(): void {
    const data: { year: string, value: number }[] = [];

    const getInversorYear = (time: string) => time.split('-')[0];

    const years: string[] = [];

    this.inverter?.data.forEach(data => {
      const year = getInversorYear(data.time);

      if (!years.includes(year))
        years.push(year);
    });

    years.forEach(year => {
      const yearData = this.inverter?.data.filter(data => {
        return getInversorYear(data.time) === year;
      }) || [];

      if (yearData.length) {
        const indexOfYear = data.findIndex(d => d.year === year);
        const value = yearData[yearData.length - 1].total_generation - yearData[0].total_generation;

        if (indexOfYear >= 0)
          data[indexOfYear].value += value;
        else
          data.push({
            year,
            value,
          });
      }
    });

    this.yearlyData = data;
  }

  setUpDailyData(): void {
    const daysData: { [day: string]: number }[] = [];

    const getInversorYear = (time: string) => time.split('-')[0];
    const getInversorMonth = (time: string) => time.split('-')[1];
    const getInversorDay = (time: string) => time.split('-')[2].split(' ')[0];

    const dayData: { [day: string]: number } = {};

    this.inverter?.data.forEach(data => {
      const time = `${getInversorDay(data.time)}/${getInversorMonth(data.time)}/${getInversorYear(data.time)}`;

      const value = data.daily_generation;

      dayData[time] = value;
    });

    daysData.push(dayData);

    const result = daysData.reduce((final, data) => {
      Object.entries(data).forEach(([day, value]) => {
        final[day] = (final[day] || 0) + value;
      })

      return final;
    }, {});

    this.dailyData = result;
  }
}
