$(document).ready(function(){

    //일별 박스 오피스 조회
    $('#get-movie-btn').on('click',function(){
        
        var date = $('#movie-date').val();

        date = date.replace('-','');

        getMoviesFromAPT(date);

});

    
    //todo 조회
    $('#get-todo-btn').on('click',function(){

        var todoId = $('#todo-id').val();

       
        $.ajax({
            url:'http://jsonplaceholder.typicode.com/todos/'+todoId,
            type:'get',
            data:{},
            success:function(json){   
    
                 $('#todo-list').empty();

                $('#todo-list').append(`
                    <tr>
                      <th scope="row">${json.userId}</th>
                      <td>${json.id}</td>
                      <td>${json.title}</td>
                      <td>${json.completed ? '완료' : '미완료'}</td>
                    </tr>
                
               `);
    
    	
            },
            error:function(error){
                $('#todo-list').empty();
                $('#todo-list').append(`
                    <tr>
                      <th scope="row">없음</th>
                      <td>없음</td>
                      <td>없음</td>
                      <td>없음</td>
                    </tr>
                
               `);
            }

    }); 

   
  }); 
});




function getMoviesFromAPT(date){
    $.ajax({
        url:'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
        type:'get',
        data:{
            key:'',
            targetDt:date,
        },
        success:function(json){
            var movies = json.boxOfficeResult.dailyBoxOfficeList; 
            
            
            console.log(movies.rank);
            

            $('#movie-list').empty();
            
            $.each(movies, function(index, movie){
                $('#movie-list').append(`
                    <tr>
                      <th scope="row">${movie.rank}</th>
                      <td>${movie.movieNm}</td>
                      <td>${movie.openDt}</td>
                      <td>${movie.audiAcc}</td>
                    </tr>
                
               `);
            });
        },
        error:function(error){}
    });
}