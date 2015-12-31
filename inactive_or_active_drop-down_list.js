
var setTypeEnable = function(){
   if(getFieldValue('step_role')['value'] == getFieldValue('group_role')['value']){
   	setEnabled('def_type',true);      
   }else{
   	setEnabled('def_type',false); 
   };	
   
};

addEventHandler ('group_role', 'change', setTypeEnable);

setTypeEnable();
