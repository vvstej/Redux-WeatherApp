import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

export default function(props){
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color= {props.color} />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
      </div>
  )
}

function average(data){
  return (_.round(_.sum(data)/data.length));
}
