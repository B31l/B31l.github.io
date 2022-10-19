---
title: "Database|SQL: 검색"
categories: [Database]
mathjax: true
---

* content
{:toc}
# SELECT 문

SELECT 문의 기본 문법은 다음과 같다.

```sql
SELECT [ALL|DISTINCT] 속성명(들)
FROM      테이블명(들)
[WHERE    검색조건(들)]
[GROUP BY 속성이름]
[HAVING   검색조건(들)]
[ORDER BY 속성명 [ASC|DESC]]
```

## SELECT/FROM

```sql
SELECT [ALL|DISTINCT] 속성명(들)
                 FROM 테이블명(들)
```



## WHERE

```sql
[WHERE 검색조건(들)]
```

| 술어     | 연산자                         | 예                                                |
| -------- | ------------------------------ | ------------------------------------------------- |
| 비교     | `=`,`<>`, `<`, `<=`, `>`, `>=` | price < 20000                                     |
| 범위     | `BETWEEN`                      | price BETWEEN 10000 AND 20000                     |
| 집합     | `IN`, `NOT IN`                 | price IN (10000, 20000, 30000)                    |
| 패턴     | `LIKE`                         | bookname LIKE '축구의 역사'                       |
| NULL     | `IS NULL`, `IS NOT NULL`       | price IS NULL                                     |
| 복합조건 | `AND`, `OR`, `NOT`             | (price < 20000) AND (bookname LIKE '축구의 역사') |



## ORDER BY

```sql
[ORDER BY 속성명 [ASC|DESC]]
```



## GROUP BY

```sql
[GROUP BY 속성이름]
```



## HAVING

```sql
[HAVING   검색조건(들)]
```

