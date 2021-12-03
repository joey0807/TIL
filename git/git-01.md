# 2021.12.02 배운 것들

md(마크다운) 문서 정리 하는 법

1. 제목 크기
2. 목록 - 순서의 유무
3. 텍스트 스타일링
4. 코드 블록
5. 표

## 제목 크기

- 제목 크기는 \#의 개수가 많을수록 작아짐
- 1개가 가장 큰 크기, 6개가 가장 작은 크기
- 개수만큼 개요의 위치도 결정됨

## 목록 - 순서의 유무

### 순서가 없는 목록

- \-로 점 찍기 가능
  - 'tab'키로 여러 갈래로 나눌 수 있음

### 순서가 있는 목록

- \1.치고 작성하면 숫자가 부여됨

- 자동으로 숫자 카운트

## 텍스트 스타일링

### *이렐릭*

- 원하는 문장 양옆에 \* 붙이면 됨

### **볼드**

- 원하는 문장 양옆에 \**붙이면 됨

### `인라인 코드`

- 원하는 문장 양옆에 \` 붙이면 됨

## 코드 블록

- \``` 로 생성

- 코드 블록이 생성되면 그 블록 안에 코드를 입력하면 됨

  ```python
  def CLL()
  	print('요로코롬 쌉가능')
      print('파이썬 말고도 다양한 언어로 설정 가능')
  ```

  

## 표

- 마우스 우클릭-표 삽입
- 또는 \| 로 표 그리기 가능

| 이렇게 | 표를 만들 수 | 있습니다 |
| ------ | ------------ | -------- |
| 어때요 | 참           | 쉽죠?    |

## Git 코드

NEVER
~ 에서 $ git init 진행
리포 안에 리포 만들기
$ git init 입력 전 확인할 점
~ 인지
(master) 떠 있는지
프로젝트 초기화 진행
# pjt 폴더 생성
$ mkdir new_project

# 폴더로 이동
$ cd new_project

# README 파일 & .gitignore 생성
$ touch README.md .gitignore
# gitignore.io 에 접속하여 필요한 내용 복-붙

# 폴더를 리포로 초기화
$ git init

# README & .gitignore 파일 add(tracking)
$ git add .

# commit
$ git commit -m 'first commit'

# 원격 저장소 생성 @ github.com
# 생성한 원격 저장소 등록
$ git remote add origin <URL>

# 등록된 저장소 확인
$ git remote -v

# 지금까지의 commit push
$ git push origin master
계정 세팅
# (계정당 1회) 서명이 등록되지 않았다면, 계정용 서명 등록
$ git config --global user.name '내이름'
$ git config --global user.email 'github에서@쓸메일주소'
# 서명이 정상적으로 등록되었는지 확인
$ cat ~/.gitconfig  
명령어 정리
초기화 시점에 1회 입력
$ git init 
작업중
$ git add <filename>
$ git commit -m 'MESSAGE'
모니터링 명령어
$ git status  # 현재 상황
$ git log     # commit 로그 
github 에 원격 저장소 생성하기
원격 저장소(remote repo) 추가하기
$ git remote add origin <URL>
원격 저장소 확인하기
$ git remote -v
원격 저장소에 지금까지의 commit 들 PUSH 하기
$ git push origin master
새로운 컴퓨터에서 기존 원격 저장소 복제하기
$ git clone <URL>
원격 저장소의 내용 받아오기
$ git pull origin master