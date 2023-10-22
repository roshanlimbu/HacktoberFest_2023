a = input("Enter a number: ")

def recursion(a):
    if a == 0:
        return 1
    else:
        return a * recursion(a-1)
    
print(recursion(int(a)))