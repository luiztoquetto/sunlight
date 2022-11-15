export interface InversorEntity {
  inversor_sn: string;
  condominiumId: number;
  name: string;
  data: InversorData[];
}

export interface InversorData {
  time: string;
  total_dc_input_power: number;
  ac_output_total_power: number;
  generation_of_last_month: number;
  daily_generation: number;
  total_generation: number;
  power_grid_total_apparent_power: number;
  inverter_temperature: number;
  generation_yesterday: number;
}
