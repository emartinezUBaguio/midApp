export interface User {
  id: number;
  name?: string | undefined;
  position?: string;
  department?: string;
    details?:{
      role: [r_id: number, r_name: string];
  }
}


