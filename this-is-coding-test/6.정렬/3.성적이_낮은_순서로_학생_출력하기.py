data = [
    {"name": '홍길동', "age": 95},
    {"name": '이순신', "age": 77},
]

result = sorted(data, key=lambda value: value["age"])

print(result)

