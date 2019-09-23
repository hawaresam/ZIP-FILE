export class UserInfoDTO
{
	public userName: string;
	public contactno: BigInteger;
	public email: string;
    public city: string;
	public constructor(customerName: string, customerContactno: BigInteger, customerEmail: string, customerCity: string) {
		this.userName=customerName;
		this.contactno=customerContactno;
		this.email=customerEmail;
        this.city=customerCity;
	}
}