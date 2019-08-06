def isPal(string):
    if len(string) <= 1:
        return True
    else:
        return string[0] == string[-1] and isPal(string[1:-1])

print(isPal('rascecar'))