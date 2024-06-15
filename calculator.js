let result='';
function calculate(input)
{   result=result+input;
    document.getElementById("result").value=result;
}
function resulting()
{   try{
    result=eval(result);
}
    catch(err)
    {   window.alert("invalid entry");
        result='';
        document.getElementById("result").value=result;
    }
    
    document.getElementById("result").value=result;
}
function clearing()
{   result='';
    document.getElementById("result").value=result;
}
function deletething()
{   result=result.slice(0,-1);
    document.getElementById("result").value=result;
}
function dothings()
{   document.getElementById("result").value='clear';

}
function donthings()
{   document.getElementById("result").value=result;
}