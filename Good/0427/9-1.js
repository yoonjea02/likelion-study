$(document).ready(function(){
	//todo
	$('#get-todo-btn').on('click',function(){
		
		var todoId = $('#todo-id').val();
		
		
		$.ajax({
			url:'https://jsonplaceholder.typicode.com/todos/'+todoId,
			type:'get',
			data:{},
			success:function(todo){
				console.log(todo);	
			},
			error:function(err){}	
		})
		
	});
	
	
	
	//todos
	$('#get-all-todos-btn').on('click',function(){
		$.ajax({
			url:'https://jsonplaceholder.typicode.com/todos/',
			type:'get',
			data:{},
			success:function(todos){
				$.each(todos, function(index, item){
					$('#todos').append(`
						<tr>
					      <th scope="row">${item.id}</th>
					      <td>${item.userId}</td>
					      <td>${item.title}</td>
					      <td>${item.completed.toString()}</td>
					    </tr>
					`);
				})
			},
			error:function(err){}	
		})
		
		
		
	});
	
});