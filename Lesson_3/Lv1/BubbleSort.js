var arr = [5,2,8,9,11,56,11,77,3,1,5,1,8,4,6,10,7];
function BubbleSort (arr) 
{
  for (var j = 0; j < arr.length - 1; j++) 
  {
    for (var i = 0; i < arr.length - 1 - j; i++) 
    {
      if (arr[i] > arr[i + 1]) 
      {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  alert(arr);
}
BubbleSort(arr);