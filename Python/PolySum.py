import math


def polySum(n, s):
    
    """
    @params n - number of sides of polygon
    @params s - length of side of polygon

    returns sum of area and square of perimeter, rounded to 4 digits.
    """
    area = (0.25*n*s**2)/math.tan(math.pi/n)

    perimeter = n*s

    return round(area + perimeter**2, 4)

print(polySum(66, 89))