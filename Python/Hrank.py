
# # if __name__ == '__main__':
# #     n = int(input())
# #     student_marks = {}
# #     for _ in range(n):
# #         name, *line = input().split()
# #         print(line)
# #         scores = list(map(float, line))
# #         student_marks[name] = scores
# #     query_name = input()

# # total_marks = 0


# # for mark in student_marks[query_name]:
# #     total_marks += mark

# # avg = round(total_marks/len(student_marks[query_name]), 2)
# # print("{0:.2f}".format(avg))


# # def count_substring(string, sub_string):
# #     count = 0
# #     start = 0
# #     end = len(sub_string)
# #     for _ in string:
# #         print(string[start: end])
# #         if(string[start: end] == sub_string):
# #             count += 1
# #         start += 1
# #         end += 1
# #     return count

# # print(count_substring("ABCDCDC", "CDC"))

# if __name__ == '__main__':
#     s = "Aq1"
    
#     print(any(_.isalnum() for _ in s))
#     print(any(_.isalpha() for _ in s))
#     print(any(_.isdigit() for _ in s))
#     print(any(_.islower() for _ in s))
#     print(any(_.isupper() for _ in s))


import sys
print(sys.platform)