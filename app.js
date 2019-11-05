$(document).ready(function(){

    console.log('Jquery on!');
    //$('#task-result').hide();
    taskFetch();
    $('#search').keyup(function(e){
        if ($('#search').val()) {
            let search = $('#search').val();
       /* console.log(search); */
            $.ajax({
                url: 'task-search.php',
                type: 'POST',
                data: { search },
                success: function(response){
                    console.log(response);

                    let tasks = JSON.parse(response);
                    let template = '';

                    tasks.forEach(task =>{
                       console.log(tasks);
                       template += `<li> ${task.name} [ ${task.description} ]</li>`
                    });
                    $('#contain').html(template);
                    //$('#task-result').show();
                }
            });
        }
    })

    $('#task-form').submit(function (e){
        const postData = {
            name: $('#name').val(),
            description: $('#description').val()
        };
        $.post('task-add.php', postData, function (response){
            //console.log(response);
            taskFetch();
            $('#task-form').trigger('reset');
            alert('Task add correct!');
        });

        e.preventDefault();
    });
    
    function taskFetch() {
        $.ajax({
            url: 'task-list.php',
            type: 'GET',
            success: function(response) {
                //console.log(response);
                let tasks = JSON.parse(response);
                let tabla = '';
                tasks.forEach(task => {
                    tabla += `<tr taskId='${task.id}'>
                            <td>${task.id}</td>
                            <td>
                                <a href="#" class="class-item">${task.name}</a>
                            </td>
                            <td>${task.description}</td>
                            <td><button class="task-delete btn btn-danger">X</button></td>
                            <td><button class="task-edit btn btn-info">E</button></td></tr>` 
                });
                $('#task').html(tabla);
            }
        })
    }

    $(document).on('click', '.task-delete', function () {
       if (confirm('Delete task it?')) {
            console.log('cliked');
            let element = $(this)[0].parentElement.parentElement;
            let id = $(element).attr('taskId');
            console.log(id);
            $.post('task-delete.php', {id}, function(response){
                console.log(response);
                taskFetch();
            })
       }    
    });

    $(document).on('click', '.class-item', function(){
        console.log('Editing link.');
    });
    $(document).on('click', '.task-edit', function(){
        console.log('Editing button.');
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr('taskId');
        console.log(id);
        $.post('task-single.php', {id}, function(response){
            console.log(response);
            const task = JSON.parse(response);
            $('#name').val(task.name);
            $('#description').val(task.description);
        })
    });
});