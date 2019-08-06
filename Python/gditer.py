def gcdIter(a, b):
    '''
    a, b: positive integers
    
    returns: a positive integer, the greatest common divisor of a & b.
    '''
    # Your code here
    for i in range(a, 0, -1):
        print(i)
        if(a%i == 0 and b%i == 0):
            return i
    return 1

def gcd_recur(a,b):
    if b == 0:
        return a
    else:
        return gcd_recur(b, a%b)
print(gcdIter(6,12))
            
            
