export class Question
{
	public questionId: number;
	public questionString: string;
    public options: Map<string,string>;
	public constructor(questionId: number, questionString: string, options: Map<string,string>) {
		this.questionId=questionId;
		this.questionString=questionString;
        this.options=options;
	}
}