(function(){
	"use strict";

	var ele = function(element)
	{
		if (element.charAt(0)==="#")
		{
			return document.queryselector(element);
		}
		return document.queryselectorAll(element);
	};

	//variables
	var viewer=ele("#viewer"),
	equals=ele("#equals"),
	nums=ele(".num"),
	ops=ele(".ops"),
	newnum="",
	oldnum="",
	resultnum,
	operator;

	//when number is clicked.
	var setnum=function()
	{
		if (resultnum) {
			newnum=this.getAttribute("data-num");
			resultnum="";
		}
		else
		{
			newnum=newnum+this.getAttribute("data-num");
		}
		viewer.innerHtml=newnum;	
	};

	//when operator is clicked
	var movenum=function()
	{
		oldnum=newnum;
		newnum="";
		operator=this.getAttribute("data-ops");

		equals.setAttribute("data-result","");
	};

	//calculate result when equals is clicked
	var displaynum=function()
	{

		oldnum=parseFloat(oldnum);
		newnum=parseFloat(newnum);

		switch(operator)
		{
			case 'plus':
			resultnum=oldnum+newnum;
			break;

			case 'minus':
			resultnum=oldnum-newnum;
			break;

			case 'multiply':
			resultnum=oldnum*newnum;
			break;

			case 'divide':
			resultnum=oldnum/newnum;
			break;

			default
			resultnum=newnum;
		}
		if(!isFinite(resultnum))
		{
			if (isNaN(resultnum)) {

				resultnum="NOT A NUMBER";
			}
			else
			{
				resultnum="INVALID OUTPUT-READ THE WARNING"
			}	
		}

		//Display result
		viewer.innerHtml=resultnum;
		equals.setAttribute("data-result",resultnum);

		oldnum=0;
		newnum=resultnum;

		//clear all
		var clearall=function(){
			oldnum="";
			newnum="";
			viewer,innerHtml=0;
			equals.setAttribute("data-result",resultnum);
		};

	//ADD CLICK EVENTS

	//for numbers
	for(i=0,l=nums.length();i<l;i++)
		nums[i].onclick = setnum;
    

    //for operators
    for(i=0,l=ops.length();i<l;i++)
		ops[i].onclick = movenum;
    
    //for equals sign
    equals.onclick=displaynum;

    //for clear
    ele("#clear").onclick=clearall;
}
}());
