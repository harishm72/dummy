def isIn(char, aStr):
    '''
    char: a single character
    aStr: an alphabetized string
    
    returns: True if char is in aStr; False otherwise
    '''
    # Your code 
    
    mid = len(aStr)//2
    print(mid)

    if(len(aStr) == 0):
        return False
    elif (len(aStr) == 1):
        return char == aStr    
    elif (char == aStr[mid]):
        return True
    elif (char < aStr[mid]):
        print(len(aStr)//2)
        return isIn(char, aStr[0: len(aStr)//2])
    elif (char > aStr[mid]):
        print(len(aStr)//2 , len(aStr))
        return isIn(char , aStr[len(aStr)//2 : len(aStr)])
    elif char < mid or char > mid and len(aStr)//2 == 1:
        return False
    else:
        return False
        

print(" => ",isIn('a', '')) # False 
print(" => ",isIn('z', 'cghhijjkkmprrsu')) # False
print(" => ",isIn('m', 'abdejkmmnqrrwyz')) # True
print(" => ",isIn('j', 'addefhiijnrstuv')) # True
print(" => ",isIn('l', 'aaabbbcefgjlqtuxz')) # True
print(" => ",isIn('p', 'bglnnoopq')) # True
print(" => ",isIn('m', 'nrwz')) # False
print(" => ",isIn('n', 'cfnnrwwy')) # True
print(" => ",isIn('r', 'fgkkknooopqrv')) # True
print(" => ",isIn('i', 'fqsx')) # False
print(" => ",isIn('g', 'gggjjkmpqrstuwz')) # True