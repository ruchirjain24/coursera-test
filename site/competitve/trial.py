# def func(a, b):
#     s1=str(a)+str(b)
#     s2=str(b)+str(a)
#     if int(s1)>int(s2):
#         return True
#     else:
#         return False

A = [3,30,34,5,9]
# print(A)
# print(A[0])
# s=""
# for i in range(len(A)):
#     min_idx = i
#     for j in range(i+1, len(A)):
#         if func(A[min_idx] , A[j])==False:
#             min_idx = j      
#     A[i], A[min_idx] = A[min_idx], A[i]
# print(A)
# for i in range(len(A)):
#     s=s+str(A[i])
# print(s)



def func(a, b):
    s1=str(a)+str(b)
    s2=str(b)+str(a)
    if int(s1)>int(s2):
        return True
    else:
        return False

def largestNumber(, A):
    s=""
    for i in range(len(A)):
        min_idx = i
        for j in range(i+1, len(A)):
            if func(A[min_idx] , A[j])==False:
                min_idx = j      
        A[i], A[min_idx] = A[min_idx], A[i]
    print(A)
    for i in range(len(A)):
        s=s+str(A[i])
    return s
