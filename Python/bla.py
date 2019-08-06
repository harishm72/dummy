class BankAccount(object):
    
    def __init__(self, amount=0):
        self.amount = amount
    
    def is_nagative_balance(self):
        print(self.amount < 0)
        return self.amount < 0

my_account = BankAccount(100)

if my_account.is_nagative_balance():
    print('oh no i owe %s' %my_account.amount)
else:
    print('i am good!')