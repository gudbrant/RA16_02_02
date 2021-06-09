import IconSwitch from './IconSwitch';
import React, { useState } from 'react';
import CardsView from './CardsView';
import ListView from './ListView';


function Store({products}){

  const [viewIcon, setViewIcon] = useState("view_module");
  let view;
  if (viewIcon === 'view_list') { 
    view = <CardsView cards={products}/>; 
  } else { 
    view = <ListView items={products}/> 
  }

  return(
    <>
      <IconSwitch icon={viewIcon} onSwitch={setViewIcon}/>
      {view}
    </>
  )
}

export default Store;