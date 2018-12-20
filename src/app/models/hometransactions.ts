export class Hometransactions {
  public AccountDetails: AccountDetails;
  public Transactions: Transaction[];
}

export class AccountDetails {
  public Id: number;
  public Name: string;
  public DisplayName: string;
  public DisplayOrder: number;
  public OpeningDate: Date;
  public Limit: string;
  public AccountType: AccountType;
}

export class AccountType {
  public Id: number;
  public Type: string;
}

export class Transaction {
  public Id: number;
  public Date: Date;
  public ExpenseGroup: ExpenseGroup;
  public ExpenseSubGroup: ExpenseSubGroup;
  public Item: string;
  public Amount: number;
  public Store: string;
  public TransactedBy: string;
}

export class ExpenseGroup {
  public Id: number;
  public Name: string;
}

export class ExpenseSubGroup {
  public Id: number;
  public SubGroupName: string;
  public GroupId: number;
}
