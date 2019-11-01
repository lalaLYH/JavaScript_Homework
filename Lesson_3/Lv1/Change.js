let str = "hello world";
function Change(str)
{
    let arr = str.toLowerCase().split(" ");
    let newArr = [];
    for(let i = 0; i < arr.length; i++)
    {
        newArr.push(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
    console.log(newArr);
    alert(newArr);
}
Change(str)