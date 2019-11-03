export class SuggestionScope {
  public readonly from: Date;
  public readonly to: Date;
  constructor(weekShift?: number) {
    this.from = new Date();
    let dayInWeek = (this.from.getDay() + 6) % 7;
    this.from.setDate(this.from.getDate() - dayInWeek);
    this.to = new Date(this.from);
    if (weekShift !== undefined) {
      this.to.setDate(this.to.getDate() + 7 * weekShift);
      this.from.setDate(this.from.getDate() + 7 * weekShift);
    }
    this.to.setDate(this.from.getDate() + 6);
  }

  public toLocalString(): string {
    return (
      this.from.toLocaleDateString() + " - " + this.to.toLocaleDateString()
    );
  }
}
