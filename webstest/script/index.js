class PraiseButton{
      constructor(num, element){
          this.num = num;
          this.element =element;
      }

//点击事件
      clickAction(){
          this.element.click(()=>{
              if(this.num<10){
                 this.element.css('-webkit-filter','grayscale(0)');
               //添加一的动画效果
               $('#animation').addClass('num');
               this.num=add(this.num);
               setTimeout(function(){
               		 $('#animation').removeClass('num');
               },1000);
              }else{

	               this.element.css('-webkit-filter','grayscale(1)');
	               this.num=0;
              }
 				console.log(this.num);

          });

      }

}
class Thumb extends  PraiseButton{
  	constructor(num,element){
  		super(num,element)
  	}
}

export default{Thumb}


