<script type ="text/javascript">
var curIndex=0;
var timeInterval=1000;
var arr=new Array();
arr[0]="tupian/1.jpg";
arr[1]="tupian/2.jpg";
arr[2]="tupian/3.jpg";
arr[3]="tupian/4.jpg";
setInterval(changeImg,timeInterval);
function changeImg()
{
    var pic=document.getElementById("tu");
    if (curIndex==arr.length-1) 
    {
        curIndex=0;
    }
    else
    {
        curIndex+=1;
    }
    pic.src=arr[curIndex];
}
</script>