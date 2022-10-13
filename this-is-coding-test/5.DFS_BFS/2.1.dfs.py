graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7],
]
visited = [False] * 9
route = []


def dfs(graph, v, visited, route):
    visited[v] = True

    route.append(v)

    for i in graph[v]:
        if not visited[i]:
            route = dfs(graph, i, visited, route)

    return route


route = dfs(graph, 1, visited, route)
print(route)


