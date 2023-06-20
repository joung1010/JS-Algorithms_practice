// 두 팀으로 나누어서 진행하며, 상대 팀 진영을 먼저 파괴하면 이기는 게임
// 각 팀은 상대 팀 진영에 최대한 빨리 도착

// 다음은 5 x 5 크기의 맵에, 당신의 캐릭터가 (행: 1, 열: 1) 위치에 있고, 상대 팀 진영은 (행: 5, 열: 5) 위치에 있는 경우
// 흰색 부분은 갈 수 있는 길
// . 캐릭터가 움직일 때는 동, 서, 남, 북 방향으로 한 칸씩 이동
// 게임 맵을 벗어난 길은 갈 수 없음
// 게임 맵의 상태 maps가 매개변수로 주어질 때
// 캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최솟값을 return

// maps는 n x m 크기, 2차원 배열로, n과 m은 각각 1 이상 100 이하의 자연수입니다.
// n과 m은 서로 같을 수도, 다를 수도 있지만, n과 m이 모두 1인 경우는 입력으로 주어지지 않습니다.
// 0은 벽이 있는 자리, 1은 벽이 없는 자리
// 캐릭터는 게임 맵의 좌측 상단인 (1, 1) 위치
// 상대방 진영은 게임 맵의 우측 하단인 (n, m) 위치
function solution(maps) {
    // 시작 위치
    const str = [0,0]
    // 상대 진영은 nxm
    const res = [maps.length - 1, maps[0].length - 1]; 
    
    var answer = 0;
    return answer;
}

console.log(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]));