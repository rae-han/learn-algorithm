
# def solution(v):
#     answer = [0, 0]
#     queue = list()
#
#     dr = [1, 0, -1, 0]
#     dc = [0, 1, 0, -1]
#
#     for i in range(len(v)):
#         for j in range(len(v[0])):
#             if v[i][j] == 1:
#                 v[i][j] = 0 # 검은색으로 변경
#                 area = 1 # 넓이
#                 answer[0] += 1 # 흰 공간의 개수 1 증가
#                 queue.append([i, j])
#                 while 0 < len(queue):
#                     cur = queue.pop()
#                     for k in range(4):
#                         # 다음 탐색할 공간 계산
#                         nr = cur[0] + dr[k]
#                         nc = cur[1] + dc[k]
#                         # 범위를 벗어나거나 검은색 공간인 경우에는 pass
#                         if nr < 0 or nc < 0 or len(v) <= nr or len(v[0]) <= nc or v[nr][nc] == 0:
#                             continue
#                         v[nr][nc] = 0
#                         area += 1
#                         queue.append([nr, nc])
#                 answer[1] = max(answer[1], area)
#
#     return answer


# def solution(N, relation, dirname):
#     absolute_path_length = [0] * N
#     absolute_path_length[0] = answer = len(dirname[0])
#
#     queue = list()
#     for r in relation:
#         if absolute_path_length[r[0] - 1] == 0:
#             queue.append(r)
#         else:
#             absolute_path_length[r[1] - 1] = absolute_path_length[r[0] - 1] + 1 + len(dirname[r[1] - 1])
#             answer = max(answer, absolute_path_length[r[1] - 1])
#
#     while 0 < len(queue):
#         r = queue.pop()
#         if absolute_path_length[r[0] - 1] == 0:
#             queue.append(r)
#         else:
#             absolute_path_length[r[1] - 1] = absolute_path_length[r[0] - 1] + 1 + len(dirname[r[1] - 1])
#             answer = max(answer, absolute_path_length[r[1] - 1])
#
#     return answer


def solution(play_list, listen_time):
    answer = 0

    # n 번째 곡을 1분만 재생한다고 했을 때 최대 곡
    if 0 < listen_time:
        for i in range(len(play_list)):
            left_time = listen_time - 1  # 남은 시간
            cnt = 1
            for j in range(1, len(play_list)):
                if left_time <= 0:
                    break
                idx = (i + j) % len(play_list)
                cnt += 1
                left_time -= play_list[idx]
            answer = max(answer, cnt)

    return answer