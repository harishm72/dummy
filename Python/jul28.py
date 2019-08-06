# def f(y):
#     x = x + 1
#     return x
# x = 5
# print(f(x))
# print(x)

def g(x):
    x = x + 1
    def h(y):
        return x + y
    return h(6)
x = 12
print(g(x))