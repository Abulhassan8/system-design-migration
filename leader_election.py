from time import sleep
from random import randint

# for num in range(1,10, 2):
#   print(num)
#   sleep(1)
# else:
#   print("finished")

array = [randint(800,1400) for i in range(10)]
for num in array:
  print(num, "\n")
