import React from 'react';

const MapTestComFun = () => {
    const fruits = ['🥝','🥥','🍇','🍈','🍉','🍋','🍌',
                    '🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓',
                    '🍅','🍆','🌽','🌶','🍄','🥑','🥒','🥬',
                    '🥦','🥔']
    const fruitsLi = 
      fruits.map(
        (fruits,index)=>{
            return( <li key={index}>{fruits}</li>);
        });
        return (<>
        <ul>
          {fruitsLi}
          </ul>
          </>
          );
    };

export default MapTestComFun;