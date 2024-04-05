import { Injectable } from '@angular/core'
@Injectable({
  providedIn: 'root'
})
export class ToDateService {

  transform(inputDate: Date | string, format: string): string  {
    if (typeof inputDate === 'string') {
      inputDate = new Date(inputDate);
    }

    // Ensure inputDate is a valid Date object
   

    // Format the local date as "YYYY-MM-DD"
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0');
    const day = String(inputDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }
}
