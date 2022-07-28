ZeroCho 강의 중 설명한 것들 기록
1. Thunk vs 사가
    개인적으로는 Thunk
    비동기 제어함에 부족함이 있으면 사가로...
    - Thunk
        엄청 간단함
        간단한 프로젝트라면 더 편함
    - Saga
        쓰로틍링..?
        이전 비동기 요청 취소, 이전 액션 취소등이 가능함..
2. 글로벌 한것이라면 Redux, 컴포넌트 내부에서 쓸거면 그냥 State를 쓰는게 편함(기준을 정하기 나름임)
    모두다 통일하려면 Redux(틀이 정해져 있음)를 할려면 귀찮아짐..
    전부다 통일해도 되는거면 MobX(설정이 어려움, 자유분방), MobX를 쓰면 State를 사용하지 않아도 됨
3. Redux Store에 담는 거랑 Local State에 담는거랑 리소스 먹는 차이가 있나?
    깊은 복사가 아니라 얕은 복사여서 이전 것을 참조이기 때문에 생각보다 메모리를 먹지 않음(nextState끼리 서로 연결된 경우)
    메모리가 부족하다면 불변셩을 유지하기 위해 깊은 복사를 했을 수도 있음
4. initialState의 안에 있는 속성들이 action을 분류하는 기준이 될 수도 있음
    ex)
        const initialState = {
            user : null, //action
            posts : [], //action
            comment : [], //action
            favorites : [], //action
            history : [], //action
            likes: [], //action
            follwers:[] //action
        }
5. 전체 페이지에 대한 게시글(데이터)를 State에 가져와야하는건지  한 페이지에 대한 게시글(데이터)를 State에 가져와야 하는건 지
    한 페이지에 대해서 가져오는게 좋음(한 눈에 보이는 정도만), 서비스 마다 다름