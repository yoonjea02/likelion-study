const movieData = [
    {rank: 1, title: '파묘', audience: '7,009,993명', release: '2024-02-22'},
    {rank: 2, title: '듄: 파트2', audience: '1,049,185명', release: '2024-02-28'},
    {rank: 3, title: '귀여운 것들', audience: '36,414명', release: '2024-03-06'},
    {rank: 4, title: '웡카', audience: '3,335,611명', release: '2024-01-31'},
    {rank: 5, title: '패스트 라이브즈', audience: '30,274명', release: '2024-03-06'},
    {rank: 6, title: '건국전쟁', audience: '1,125,245명', release: '2024-02-01'},
    {rank: 7, title: '귀멸의 칼날: 인연의 기적…', audience: '470,350명', release: '2024-02-14'},
    {rank: 8, title: '소풍', audience: '330,069명', release: '2024-02-07'},
    {rank: 9, title: '브레드와밸슨', audience: '110,827명', release: '2024-03-01'},
    {rank: 10, title: '나의 작은 시인에게', audience: '40,014명', release: '2024-02-21'}
  ];
  
  function populateTable() {
    const tbody = document.getElementById("movieTable");
    tbody.innerHTML = "";
    movieData.forEach(movie => {
      const row = `<tr>
        <td>${movie.rank}</td>
        <td>${movie.title}</td>
        <td>${movie.audience}</td>
        <td>${movie.release}</td>
      </tr>`;
      tbody.innerHTML += row;
    });
  }
  
  function filterTable() {
    alert("데이터 필터링 기능은 현재 구현되어 있지 않습니다. 전체 목록을 보여드립니다.");
  }
  
  window.onload = populateTable;
  