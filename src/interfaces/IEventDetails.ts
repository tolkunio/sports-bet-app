export interface IEvent{
    id:string,
    clubTitle:string,
    soccerTitle:string,
    date:string,
    time:string,
    scores:Array<IScore>,
}
export interface IScore{
    score:number,
    odd?:string
}
export interface IOddType{
    value:string
}
export interface IEventDetails{
    id: string,
    soccerTitle: string,
    date: string,
    currentOdds: Array<IOddType>
}