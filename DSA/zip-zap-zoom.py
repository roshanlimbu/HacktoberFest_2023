

def main():
    zzz(7)
    zzz(6)
    zzz(5)
    zzz(30)
 
 
def zzz(number):
    if number % 3 == 0 and number % 5 == 0:
        print("Zoom")
    elif number % 3 == 0:
        print("Zip")
    elif number % 5 == 0:
        print("Zap")
    else:
        print("Invalid number!")
 
 
main()