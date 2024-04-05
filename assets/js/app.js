   const cl = console.log;
   
   
//Traversing =>selection of html element in js on the basis of there relationship

 // let imp = document.getElementById("imp");
   // cl(imp);
//child to parent...
	 
	// skillUl = imp.parentElement;  //parentElement is docum object property
	 // cl(skillUl);
	  
   //skillUl.style.border = `3px solid red`;	  
   
  
 // let skillUl = imp.parentNode;  
 // skillUl.style.border = `3px solid red`;	
  
 // const info = imp.parentElement.parentElement;  //li => ul=> div id 
   // cl(info);
	
//	info.style.border = `3px solid orange` 

   
  // const info = imp.closest("#info");
   //   cl(info)
   
   
   
// parent to child ............... 

     const skills1 = document.getElementById("skills1");

//children
//children returns html collection
//html collection is a arry like object ,not a array
         
//	let allLis = [...skills1.children];
  //     cl(allLis);    //5 [li,list-gr-item..........]
	   
//node => it also considers empty space as nodetext
//html element(li) is consider as elemnt node 

	   
	// const allLisNodes = skills1.childNodes;
      //      cl(allLisNodes);       //11 [text,li.list-gr-itm, text,li.......]	 
			
	 cl(skills1.childElementCount);	//5	

     let allLis = [...skills1.children];
       cl(allLis); 
	   
	   
	   allLis.forEach(li =>{
		   cl(li);
		  let oldContent = li.innerHTML;
          li.innerHTML =`I love ${oldContent}`		  
	   })
    

    const firstchildOfUl = skills1.firstChild;
       cl(firstchildOfUl)

     const firstElementchildOfUl = skills1.firstElementChild;
	   cl(firstElementchildOfUl)

     const lastchildOfUl = skills1.lastChild;
       cl(lastchildOfUl)

     const lastElementchildOfUl = skills1.lastElementChild;
	   cl(lastElementchildOfUl)


















