
def binarySearch(arr, target):
    start = 0
    end = len(arr)-1
    while start < end:
        mid = (start + end) // 2
        if arr[mid] == target:
            return mid
        elif target > arr[mid]:
            start = mid + 1
        else:
            end = mid - 1
    return None

print(binarySearch([1,2,3,5,7,10],0))