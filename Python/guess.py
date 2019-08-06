print("Think of a number between 0 t0 100!")

start = 0
end = 100
secret_number = 0
while True:
    guess = (start+end)//2
    
    print("Is your secret number %s ?" %guess)
    print("Enter 'h' to indicate the guess is too high. Enter 'l' to indicate the guess is too low. Enter 'c' to indicate I guessed correctly.")
    feedback = input()
    if (feedback == 'c'):
        secret_number = guess
        break
    elif (feedback == 'h'):
        end = guess
    elif feedback == 'l':
        start = guess
    else: 
        break
print("Game over. Your secret number was: %s", secret_number)
