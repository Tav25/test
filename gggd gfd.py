from datetime import datetime
def timeit(func):
    def wrap():
        start = datetime.now()
        result = func()
        print(datetime.now() - start)
        return result
    return wrap



@timeit
def one():
    l = []
    for x in  range(10 ** 4):
        if x % 2 == 0:
            l.append(x)

    #return l
@timeit
def tho():
    l = [x for x in range(10 ** 4) if x % 2 == 0]





timeit(one())
