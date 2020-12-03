
export const SetComponentsPerCols = (elements, cols) => {
    let content = [];
    let tmp = [];
    elements.forEach((element, index)=>{
         if (index%cols===0) {
             tmp=[];
             tmp.push(element);
             if(tmp.length>0)
                 content.push(tmp);
         }else{
             tmp.push(element);
         }
    });
    return content;
}