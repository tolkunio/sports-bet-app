export interface IEvent{
    clubTitle:string,
    soccerTitle:string,
    date:string,
    time:string,
    score:Array<IScore>
}
export interface IScore{
    score:number,
    odd?:string

}