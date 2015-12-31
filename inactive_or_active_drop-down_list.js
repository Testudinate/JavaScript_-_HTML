
var setTypeEnable = function(){
   if(getFieldValueByName('step_role')['value'] == getFieldValueByName('group_role')['value']){
   	setEnabledByName('def_type',true);      
   }else{
   	setEnabledByName('def_type',false); 
   };	
   
};

addEventHandler ('group_role', 'change', setTypeEnable);

setTypeEnable();
