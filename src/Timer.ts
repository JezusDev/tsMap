export class ITimer {
  private time: number;
  private timerId: number;
  private clock: HTMLElement | null;

  constructor(div: string) {
    this.time = 0;
    this.timerId = 0;
    this.clock = document.querySelector(div);
  }

  timerHandler(): void {
    this.time++;
    console.log(this.time);
    if (this.clock) {
      this.clock.textContent = `${this.time}`;
    }
  }

  start(): void {
    this.timerId = window.setInterval(() => {
      this.timerHandler();
    }, 1000);
    console.log(this.timerId);
  }

  stop(): void {
    clearTimeout(this.timerId);
  }
}
