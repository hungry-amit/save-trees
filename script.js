var a=function addTrees()
{
	var img_node=document.createElement("img");
	img_node.src="tree1.jpg";
	document.querySelector(".container").appendChild(img_node);
}

document.querySelector("button").addEventListener("click",a);