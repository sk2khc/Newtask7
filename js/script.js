$('.button').on("click", function(){
    var Name = $('#name').val();
    if(!Name){
        alert("Please dont click without entering username");
        return;
    }
    
    var pw = $('#password').val();
    if(!pw){
        alert("Please dont click without entering your password");
        return;
    }

    if(isNaN(pw))
    {
        //alert('Is not a number');
        var type = typeof pw;// what type is this variable
        $('#resultofpassword').html('The password you entered is '+ type +' and you entered:');
        //alert('what you enter is a ' + type);
    }
        else
        {
            $('#resultofpassword').html('The password you entered is numbers and you entered:' );
        }

    if(isNaN(Name))
    {
        //alert('Is not a number');
        var type = typeof Name;// what type is this variable
        $('#resultofname').html('The username your entered is '+ type +' and you entered:');
        //alert('what you enter is a ' + type);
    }
        else
        {
            $('#resultofname').html('The username your entered is numbers and you entered: ' );
        }

        $('#resultofname').append(Name);
        $('#resultofpassword').append(pw);
        return;
}); 