def plusMinus(arr):
  negative = 0
  positive = 0
  zero = 0
  length = len(arr)
  for i in range(length):
    if arr[i] < 0:
      negative += 1
    elif arr[i] == 0:
      zero += 1
    else:
      positive += 1
  print(round(positive / length, 6))
  print(round(negative / length, 6))
  print(round(zero / length, 6))