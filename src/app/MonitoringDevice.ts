export class MonitoringDevice
{
	public id: number;
    public name: string;
    public screensize: number;
	public touch: string;
	public constructor(id: number, name: string, screensize: number, touch: string ) {
        this.id=id;
        this.name=name;
        this.screensize=screensize;
        this.touch=touch;
	}
}