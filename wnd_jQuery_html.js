test:

var setEnable2 = function(){
   if(getFieldValueByName('type2')['value'] == getFieldValueByName('group_role')['value']){
		$wnd.jQuery('[name="type2"]').html('Сотовый телефон:<span style="color:red;">*</span>')	
   }else{
		$wnd.jQuery('[name="type2"]').html('Контактный телефон:<span style="color:red;">*</span>')
   };	
};
addEventHandler ('group_role', 'change', setEnable2);
