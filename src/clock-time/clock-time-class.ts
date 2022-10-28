export class ClockTime {

  private hours : number;
  private minutes: number;
  private seconds: number;
  private changeEvent : Event;

  constructor(initialTime : Date) {
    this.hours = initialTime.getHours();
    this.minutes = initialTime.getMinutes();
    this.seconds= initialTime.getSeconds();
    this.changeEvent = new Event("change", {'bubbles':true});
    document.dispatchEvent(this.changeEvent);

    const secondsRemaining = 60 - initialTime.getSeconds();
    setTimeout(()=>{this.addMinute();
                    setInterval(()=>this.addMinute(),60000)}, 
                    secondsRemaining * 1000);
  }

  getHours(): string {
    const hoursString = this.hours.toString();
    return hoursString.length>1? hoursString : "0"+hoursString;
  }

  getMinutes(): string {
    const minutesString = this.minutes.toString();
    return minutesString.length>1? minutesString : "0"+ minutesString;
  }

  addHour(): void {
    this.hours++;
    if(this.hours >= 24){
      this.hours = this.hours % 24;
    }
    document.dispatchEvent(this.changeEvent);
  }

  addMinute(): void {
    this.minutes++;
    if(this.minutes >= 60){
      this.minutes = this.minutes % 60;
      this.addHour();
    }
    document.dispatchEvent(this.changeEvent);
  }
}
