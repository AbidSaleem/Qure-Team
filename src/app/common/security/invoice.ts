class Invoice {

    public invoiceNumber: string;
    public invoiceDate: Date;
    public paymentDate: Date;
    public status;

    constructor() {
        this.invoiceDate = new Date();
        this.paymentDate = new Date();
    }


}